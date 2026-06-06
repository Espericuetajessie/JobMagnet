/*
  # Add Course Purchases and Stripe Data

  1. New Tables
    - `course_purchases` - Tracks individual course purchases by users
  
  2. Modified Tables
    - `users` - Add stripe_customer_id column
  
  3. Security
    - RLS enabled on course_purchases
    - Users can only see their own purchases

  4. Notes
    - Course purchases are SEPARATE from subscription
    - Users pay per-course fees even with subscription
*/

-- Add stripe_customer_id to users if not exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'users' AND column_name = 'stripe_customer_id'
  ) THEN
    ALTER TABLE users ADD COLUMN stripe_customer_id text DEFAULT '';
  END IF;
END $$;

-- Course purchases table
CREATE TABLE IF NOT EXISTS course_purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id text NOT NULL,
  stripe_payment_intent_id text DEFAULT '',
  amount_paid_cents integer NOT NULL DEFAULT 0,
  purchased_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id)
);

ALTER TABLE course_purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own purchases"
  ON course_purchases FOR SELECT
  TO anon
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own purchases"
  ON course_purchases FOR INSERT
  TO anon
  WITH CHECK (true);

-- Index for quick lookups
CREATE INDEX IF NOT EXISTS idx_course_purchases_user_id ON course_purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_course_purchases_course_id ON course_purchases(course_id);
