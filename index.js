require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const supabase = require('./db');
const COURSES = require('./courses-data');

// Stripe setup
const Stripe = require('stripe');
const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? Stripe(stripeSecret) : null;

const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY || 'pk_live_51TbF9x5VOkg87t6qcZpdQsrJs8RM9PyBMGt8IRkTGGlDY4ImlUD0tIRkmoNrbB0mN3oiS04Jm4eWQFlnt7s4Qhpl004EIcBgJ7';

// Hardcoded Stripe Price IDs
const PRICE_SUBSCRIPTION = 'price_1TfITG5VOkg87t6q46XskxjI'; // $5/month
const PRICE_TIER1 = 'price_1Tbcwl5VOkg87t6qNs4t53do'; // $19
const PRICE_TIER2 = 'price_1Tbcy25VOkg87t6qj5eVWZz9'; // $49

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'jobmagnet-secret-key-2024';

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ─── Admin Seed ──────────────────────────────────────────────────────────────
const ADMIN_EMAIL = 'admin@jobmagnet.com';
const ADMIN_PASSWORD = 'admin123';

async function seedAdmin() {
  try {
    const { data: existing } = await supabase.from('users').select('id').eq('email', ADMIN_EMAIL).maybeSingle();
    if (!existing) {
      const password_hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
      await supabase.from('users').insert({
        email: ADMIN_EMAIL, password_hash, role: 'seeker',
        first_name: 'Admin', last_name: 'User',
        subscription_status: 'active'
      }).select().single().then(async ({ data: admin }) => {
        if (admin) {
          await supabase.from('seeker_profiles').insert({ user_id: admin.id, title: 'Platform Administrator', bio: 'Admin test account with full access' });
          await supabase.from('resumes').insert({ user_id: admin.id, data: { skills: [] } });
          // Also create as employer
          const empHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
          await supabase.from('users').insert({
            email: 'admin-employer@jobmagnet.com', password_hash: empHash, role: 'employer',
            first_name: 'Admin', last_name: 'Employer',
            company_name: 'JobMagnet Admin Corp',
            subscription_status: 'active'
          }).select().single().then(async ({ data: empAdmin }) => {
            if (empAdmin) {
              await supabase.from('employer_profiles').insert({ user_id: empAdmin.id, company_name: 'JobMagnet Admin Corp' });
            }
          });
        }
      });
      console.log('Admin accounts seeded');
    }
  } catch (err) {
    console.log('Admin seed check:', err.message);
  }
}
seedAdmin();

// ─── Auth Middleware ──────────────────────────────────────────────────────────
function requireAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    req.user = jwt.verify(auth.slice(7), JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

function requireSubscription(req, res, next) {
  if (req.user.is_admin) return next();
  if (req.user.subscription_status !== 'active') {
    return res.status(403).json({ error: 'Subscription required', paywall: true });
  }
  next();
}

// ─── AUTH ROUTES ─────────────────────────────────────────────────────────────
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password, role, first_name, last_name, company_name } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Email, password, and role are required' });
    }

    const { data: existing } = await supabase.from('users').select('id').eq('email', email).maybeSingle();
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const password_hash = await bcrypt.hash(password, 10);
    const { data: user, error } = await supabase.from('users').insert({
      email, password_hash, role,
      first_name: first_name || '',
      last_name: last_name || '',
      company_name: company_name || '',
      subscription_status: 'free'
    }).select().single();

    if (error) return res.status(500).json({ error: error.message });

    if (role === 'seeker') {
      await supabase.from('seeker_profiles').insert({ user_id: user.id });
      await supabase.from('resumes').insert({ user_id: user.id, data: { skills: [] } });
    } else {
      await supabase.from('employer_profiles').insert({ user_id: user.id, company_name: company_name || '' });
    }

    const is_admin = email === ADMIN_EMAIL || email === 'admin-employer@jobmagnet.com';
    const token = jwt.sign({
      userId: user.id, email: user.email, role: user.role,
      first_name: user.first_name, last_name: user.last_name,
      company_name: user.company_name, subscription_status: user.subscription_status,
      is_admin
    }, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user: { id: user.id, email, role, first_name, last_name, company_name, subscription_status: 'free', is_admin } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data: user } = await supabase.from('users').select('*').eq('email', email).maybeSingle();
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) return res.status(401).json({ error: 'Invalid credentials' });

    const is_admin = user.email === ADMIN_EMAIL || user.email === 'admin-employer@jobmagnet.com';
    const token = jwt.sign({
      userId: user.id, email: user.email, role: user.role,
      first_name: user.first_name, last_name: user.last_name,
      company_name: user.company_name, subscription_status: user.subscription_status,
      is_admin
    }, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user: { id: user.id, email: user.email, role: user.role, first_name: user.first_name, last_name: user.last_name, company_name: user.company_name, subscription_status: user.subscription_status, is_admin } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/subscribe', requireAuth, async (req, res) => {
  try {
    await supabase.from('users').update({ subscription_status: 'active' }).eq('id', req.user.userId);
    const newPayload = { userId: req.user.userId, email: req.user.email, role: req.user.role, first_name: req.user.first_name, last_name: req.user.last_name, company_name: req.user.company_name, subscription_status: 'active', is_admin: req.user.is_admin || false };
    const token = jwt.sign(newPayload, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, subscription_status: 'active' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/auth/me', requireAuth, async (req, res) => {
  const { data: user } = await supabase.from('users').select('id,email,role,first_name,last_name,company_name,subscription_status').eq('id', req.user.userId).maybeSingle();
  res.json(user);
});

// ─── PROFILE ROUTES ───────────────────────────────────────────────────────────
app.get('/api/profile', requireAuth, async (req, res) => {
  const { data } = await supabase.from('seeker_profiles').select('*').eq('user_id', req.user.userId).maybeSingle();
  res.json(data || {});
});

app.post('/api/profile', requireAuth, async (req, res) => {
  try {
    const { bio, photo_url, title, location } = req.body;
    const { data: existing } = await supabase.from('seeker_profiles').select('id').eq('user_id', req.user.userId).maybeSingle();
    if (existing) {
      await supabase.from('seeker_profiles').update({ bio, photo_url, title, location, updated_at: new Date().toISOString() }).eq('user_id', req.user.userId);
    } else {
      await supabase.from('seeker_profiles').insert({ user_id: req.user.userId, bio, photo_url, title, location });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── RESUME ROUTES ────────────────────────────────────────────────────────────
app.get('/api/resume', requireAuth, requireSubscription, async (req, res) => {
  const { data } = await supabase.from('resumes').select('*').eq('user_id', req.user.userId).maybeSingle();
  res.json(data?.data || {});
});

app.post('/api/resume', requireAuth, requireSubscription, async (req, res) => {
  try {
    const resumeData = req.body;
    const { data: existing } = await supabase.from('resumes').select('id').eq('user_id', req.user.userId).maybeSingle();
    if (existing) {
      await supabase.from('resumes').update({ data: resumeData, updated_at: new Date().toISOString() }).eq('user_id', req.user.userId);
    } else {
      await supabase.from('resumes').insert({ user_id: req.user.userId, data: resumeData });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── COURSES ROUTES ───────────────────────────────────────────────────────────
app.get('/api/courses', requireAuth, (req, res) => {
  const summary = COURSES.map(c => ({
    id: c.id, category: c.category, title: c.title,
    tier: c.tier, duration: c.duration, description: c.description,
    lessonCount: c.lessons.length, questionCount: c.test.length
  }));
  res.json(summary);
});

// Check course purchase (skip for admins)
async function requireCoursePurchase(req, res, next) {
  if (req.user.is_admin) return next();

  const courseId = req.params.id;
  const { data: purchase } = await supabase.from('course_purchases')
    .select('id')
    .eq('user_id', req.user.userId)
    .eq('course_id', courseId)
    .maybeSingle();

  if (!purchase) {
    return res.status(403).json({ error: 'Course not purchased', needsPurchase: true });
  }
  next();
}

app.get('/api/courses/:id', requireAuth, requireSubscription, async (req, res) => {
  const course = COURSES.find(c => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: 'Course not found' });

  // Check if course is purchased (except for admins)
  if (!req.user.is_admin) {
    const { data: purchase } = await supabase.from('course_purchases')
      .select('id')
      .eq('user_id', req.user.userId)
      .eq('course_id', req.params.id)
      .maybeSingle();
    if (!purchase) {
      return res.status(403).json({ error: 'Course not purchased', needsPurchase: true });
    }
  }

  res.json(course);
});

app.post('/api/courses/:id/complete', requireAuth, requireSubscription, async (req, res) => {
  try {
    const { answers } = req.body;
    const course = COURSES.find(c => c.id === req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    // Check purchase (skip for admins)
    if (!req.user.is_admin) {
      const { data: purchase } = await supabase.from('course_purchases')
        .select('id')
        .eq('user_id', req.user.userId)
        .eq('course_id', req.params.id)
        .maybeSingle();
      if (!purchase) {
        return res.status(403).json({ error: 'Course not purchased', needsPurchase: true });
      }
    }

    let correct = 0;
    course.test.forEach((q, i) => {
      if (answers[i] === q.correct) correct++;
    });
    const score = Math.round((correct / course.test.length) * 100);
    const passed = score >= 80;

    const { data: existing } = await supabase.from('course_completions').select('id').eq('user_id', req.user.userId).eq('course_id', req.params.id).maybeSingle();
    if (existing) {
      await supabase.from('course_completions').update({ score, passed, completed_at: new Date().toISOString() }).eq('user_id', req.user.userId).eq('course_id', req.params.id);
    } else {
      await supabase.from('course_completions').insert({ user_id: req.user.userId, course_id: req.params.id, score, passed });
    }

    if (passed) {
      const { data: cert } = await supabase.from('certificates').select('id').eq('user_id', req.user.userId).eq('course_id', req.params.id).maybeSingle();
      if (!cert) {
        await supabase.from('certificates').insert({ user_id: req.user.userId, course_id: course.id, course_title: course.title, category: course.category });
      }

      const { data: resumeRow } = await supabase.from('resumes').select('data').eq('user_id', req.user.userId).maybeSingle();
      const resumeData = resumeRow?.data || {};
      const skills = resumeData.skills || [];
      if (!skills.includes(course.title)) {
        skills.push(course.title);
        if (resumeRow) {
          await supabase.from('resumes').update({ data: { ...resumeData, skills } }).eq('user_id', req.user.userId);
        } else {
          await supabase.from('resumes').insert({ user_id: req.user.userId, data: { skills } });
        }
      }
    }

    res.json({ score, passed, correct, total: course.test.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/completions', requireAuth, async (req, res) => {
  const { data } = await supabase.from('course_completions').select('*').eq('user_id', req.user.userId);
  res.json(data || []);
});

// ─── CERTIFICATES ROUTES ──────────────────────────────────────────────────────
app.get('/api/certificates', requireAuth, async (req, res) => {
  const { data } = await supabase.from('certificates').select('*').eq('user_id', req.user.userId).order('issued_at', { ascending: false });
  res.json(data || []);
});

// ─── EMPLOYER ROUTES ──────────────────────────────────────────────────────────
app.get('/api/employer/talent', requireAuth, async (req, res) => {
  try {
    const { skill, category } = req.query;

    let query = supabase.from('certificates').select(`
      user_id, course_title, category, issued_at,
      users!inner(id, first_name, last_name, email),
      seeker_profiles(title, location, bio, photo_url)
    `);

    if (category) query = query.eq('category', category);
    if (skill) query = query.ilike('course_title', `%${skill}%`);

    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });

    const candidates = {};
    (data || []).forEach(row => {
      const uid = row.user_id;
      if (!candidates[uid]) {
        candidates[uid] = {
          id: uid,
          first_name: row.users?.first_name || '',
          last_name: row.users?.last_name || '',
          email: row.users?.email || '',
          title: row.seeker_profiles?.title || '',
          location: row.seeker_profiles?.location || '',
          bio: row.seeker_profiles?.bio || '',
          photo_url: row.seeker_profiles?.photo_url || '',
          skills: []
        };
      }
      candidates[uid].skills.push({ title: row.course_title, category: row.category, issued_at: row.issued_at });
    });

    res.json(Object.values(candidates));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/employer/categories', requireAuth, (req, res) => {
  const cats = [...new Set(COURSES.map(c => c.category))];
  res.json(cats);
});

// ─── MESSAGES ROUTES ──────────────────────────────────────────────────────────
app.get('/api/messages', requireAuth, async (req, res) => {
  const { data } = await supabase.from('messages').select(`
    *, sender:sender_id(first_name, last_name, email, role, company_name)
  `).eq('recipient_id', req.user.userId).order('created_at', { ascending: false });
  res.json(data || []);
});

app.get('/api/messages/sent', requireAuth, async (req, res) => {
  const { data } = await supabase.from('messages').select(`
    *, recipient:recipient_id(first_name, last_name, email)
  `).eq('sender_id', req.user.userId).order('created_at', { ascending: false });
  res.json(data || []);
});

app.post('/api/messages', requireAuth, async (req, res) => {
  try {
    const { recipient_id, subject, content } = req.body;
    if (!recipient_id || !content) return res.status(400).json({ error: 'recipient_id and content required' });
    const { error } = await supabase.from('messages').insert({ sender_id: req.user.userId, recipient_id, subject: subject || '', content });
    if (error) return res.status(500).json({ error: error.message });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/messages/:id/read', requireAuth, async (req, res) => {
  await supabase.from('messages').update({ read: true }).eq('id', req.params.id).eq('recipient_id', req.user.userId);
  res.json({ success: true });
});

app.get('/api/messages/unread-count', requireAuth, async (req, res) => {
  const { data } = await supabase.from('messages').select('id').eq('recipient_id', req.user.userId).eq('read', false);
  res.json({ count: data?.length || 0 });
});

// ─── STRIPE ROUTES ────────────────────────────────────────────────────────────

// Get Stripe config for frontend
app.get('/api/stripe/config', requireAuth, (req, res) => {
  res.json({
    publishableKey: STRIPE_PUBLISHABLE_KEY,
    priceSubscription: PRICE_SUBSCRIPTION,
    priceTier1: PRICE_TIER1,
    priceTier2: PRICE_TIER2,
    stripeEnabled: !!stripe
  });
});

// Create subscription checkout session
app.post('/api/stripe/create-subscription-checkout', requireAuth, async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'Stripe not configured. Please add STRIPE_SECRET_KEY to environment.' });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{
        price: PRICE_SUBSCRIPTION,
        quantity: 1
      }],
      success_url: `${req.headers.origin || 'http://localhost:3000'}/seeker/dashboard.html?subscribed=true`,
      cancel_url: `${req.headers.origin || 'http://localhost:3000'}/choose-path.html?cancelled=true`,
      metadata: { userId: req.user.userId }
    });
    res.json({ sessionId: session.id, url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create course purchase checkout session
app.post('/api/stripe/create-course-checkout', requireAuth, async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'Stripe not configured. Please add STRIPE_SECRET_KEY to environment.' });
  }
  try {
    const { courseId } = req.body;
    const course = COURSES.find(c => c.id === courseId);
    if (!course) return res.status(404).json({ error: 'Course not found' });

    const priceId = course.tier === 2 ? PRICE_TIER2 : PRICE_TIER1;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price: priceId,
        quantity: 1
      }],
      success_url: `${req.headers.origin || 'http://localhost:3000'}/seeker/courses.html?purchase=success&course=${courseId}`,
      cancel_url: `${req.headers.origin || 'http://localhost:3000'}/seeker/courses.html?purchase=cancelled`,
      metadata: { userId: req.user.userId, courseId: course.id }
    });
    res.json({ sessionId: session.id, url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Stripe webhook handler
app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    if (process.env.STRIPE_WEBHOOK_SECRET && process.env.STRIPE_WEBHOOK_SECRET !== 'whsec_YOUR_WEBHOOK_SECRET_HERE') {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } else {
      event = JSON.parse(req.body);
    }
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { userId, courseId } = session.metadata || {};

    if (session.mode === 'subscription' && userId) {
      // Activate subscription
      await supabase.from('users').update({ subscription_status: 'active' }).eq('id', userId);
    } else if (session.mode === 'payment' && userId && courseId) {
      // Record course purchase
      const amount = session.amount_total || 0;
      await supabase.from('course_purchases').upsert({
        user_id: userId,
        course_id: courseId,
        stripe_payment_intent_id: session.payment_intent || '',
        amount_paid_cents: amount
      }, { onConflict: 'user_id,course_id' });
    }
  }

  res.json({ received: true });
});

// Check if user has purchased a course
app.get('/api/course-purchases', requireAuth, async (req, res) => {
  const { data } = await supabase.from('course_purchases').select('*').eq('user_id', req.user.userId);
  res.json(data || []);
});

// ─── FALLBACK ─────────────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.listen(PORT, () => {
  console.log(`JobMagnet running at http://localhost:${PORT}`);
});
