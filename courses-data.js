const COURSES = [
  {
    id: 'construction-safety-101',
    category: 'Construction & Trades',
    title: 'Construction Site Safety 101',
    tier: 1,
    duration: '45 min',
    description: 'Master essential safety protocols, PPE requirements, and hazard identification for construction environments.',
    lessons: [
      {
        title: 'Personal Protective Equipment (PPE)',
        content: `Personal Protective Equipment is your first line of defense on any construction site. PPE includes hard hats, safety glasses, high-visibility vests, steel-toed boots, gloves, and hearing protection.

**Hard Hats** must meet ANSI/ISEA Z89.1 standards. Class E hard hats protect against electrical hazards up to 20,000 volts. Always inspect your hard hat before use — look for cracks, dents, or fraying suspension straps.

**Eye Protection** is required when operating power tools, working with chemicals, or in any area where debris may fly. Safety glasses must meet ANSI Z87.1 standards. Side shields are required in high-impact areas.

**Fall Protection** is required when working at heights of 6 feet or more. This includes personal fall arrest systems (PFAS), guardrails, and safety nets. Harnesses must be inspected before each use and replaced if any damage is found.

**Foot Protection**: Steel-toed boots protect against falling objects and puncture hazards. Look for ASTM F2413 certification marks on all footwear.`
      },
      {
        title: 'Hazard Identification & OSHA Standards',
        content: `OSHA (Occupational Safety and Health Administration) sets the federal standards for construction site safety. Understanding the "Fatal Four" — the four most common causes of construction fatalities — is essential.

**The Fatal Four:**
1. **Falls** — Account for ~36% of all construction deaths. Always use guardrails, safety nets, or PFAS at heights of 6 feet or more.
2. **Struck By Objects** — Falling tools, swinging equipment, or moving vehicles. Always wear a hard hat and stay out of crane swing zones.
3. **Electrocution** — Keep at least 10 feet from power lines. Use GFCIs (Ground Fault Circuit Interrupters) near water.
4. **Caught-In/Between** — Never reach into moving machinery. Trenches deeper than 5 feet must be shored, sloped, or shielded.

**Hazard Communication (HazCom)**: All chemical containers must be labeled. Safety Data Sheets (SDS) must be accessible for every chemical on site. Workers must be trained on the chemicals they use.

**Toolbox Talks**: Brief daily safety meetings covering specific hazards for that day's work are best practice on all sites.`
      },
      {
        title: 'Emergency Procedures & Incident Reporting',
        content: `Every worker must know the emergency procedures for their specific site before work begins.

**Emergency Action Plans (EAP)** must include: emergency escape routes, procedures for workers who stay behind to operate critical operations, procedures to account for all employees after evacuation, rescue and medical duties for any workers designated to perform them, and how to report emergencies.

**First Aid**: Know the location of all first aid kits. At least one person per shift should hold a current first aid/CPR certification. For serious injuries, call 911 immediately.

**Incident Reporting**: All injuries, illnesses, and near-misses must be reported to a supervisor immediately. OSHA requires employers with 10+ employees to keep injury logs (OSHA 300 log). Never falsify or omit incident records.

**Fire Prevention**: Keep fire extinguishers accessible. Know the PASS technique: Pull the pin, Aim at the base, Squeeze the handle, Sweep side to side. Combustible materials must be stored away from ignition sources.`
      }
    ],
    test: [
      {
        question: 'At what height is fall protection required on construction sites per OSHA standards?',
        options: ['4 feet', '6 feet', '8 feet', '10 feet'],
        correct: 1
      },
      {
        question: 'What does PPE stand for?',
        options: ['Professional Protection Equipment', 'Personal Protective Equipment', 'Primary Prevention Equipment', 'Plant and Process Equipment'],
        correct: 1
      },
      {
        question: 'Which of the following is NOT one of the OSHA "Fatal Four"?',
        options: ['Falls', 'Struck by objects', 'Chemical exposure', 'Electrocution'],
        correct: 2
      },
      {
        question: 'The PASS technique is used for:',
        options: ['Operating a forklift', 'Using a fire extinguisher', 'Inspecting a hard hat', 'Setting up scaffolding'],
        correct: 1
      },
      {
        question: 'How many feet of clearance must you maintain from power lines?',
        options: ['5 feet', '8 feet', '10 feet', '15 feet'],
        correct: 2
      },
      {
        question: 'Which ANSI standard governs hard hat performance on construction sites?',
        options: ['ANSI Z87.1', 'ANSI/ISEA Z89.1', 'ASTM F2413', 'OSHA 1926.100'],
        correct: 1
      },
      {
        question: 'What does the acronym SDS stand for in the context of hazard communication?',
        options: ['Site Development Sheet', 'Safety Data Sheet', 'Standard Design Specification', 'Structural Drawing Set'],
        correct: 1
      },
      {
        question: 'Which of the Fatal Four accounts for approximately 36% of all construction fatalities?',
        options: ['Electrocution', 'Caught-in/between', 'Struck by objects', 'Falls'],
        correct: 3
      },
      {
        question: 'Trenches deeper than how many feet must be shored, sloped, or shielded?',
        options: ['3 feet', '4 feet', '5 feet', '6 feet'],
        correct: 2
      },
      {
        question: 'A Ground Fault Circuit Interrupter (GFCI) is required near water to protect against which Fatal Four hazard?',
        options: ['Falls', 'Electrocution', 'Struck by objects', 'Caught-in/between'],
        correct: 1
      }
    ]
  },
  {
    id: 'auto-maintenance-101',
    category: 'Automotive & Mechanics',
    title: 'Auto Maintenance Fundamentals',
    tier: 1,
    duration: '50 min',
    description: 'Learn the essentials of vehicle maintenance, inspection procedures, and basic diagnostic techniques.',
    lessons: [
      {
        title: 'Vehicle Inspection & Fluid Checks',
        content: `A thorough vehicle inspection is the foundation of good automotive maintenance. Professional technicians perform systematic inspections to catch problems early.

**The 7 Essential Fluids:**
1. **Engine Oil** — Check with the dipstick when the engine is cold. Oil should be between MIN and MAX marks, and should be honey-colored to dark brown (never milky or gritty).
2. **Coolant/Antifreeze** — Check the overflow reservoir when the engine is COLD. Never open a hot radiator cap — steam can cause severe burns.
3. **Brake Fluid** — Located in the master cylinder reservoir. Should be clear to slightly yellow. Dark or murky fluid needs immediate replacement.
4. **Power Steering Fluid** — Check with the dipstick on the reservoir. Low fluid causes hard steering.
5. **Transmission Fluid** — Check with engine running and in Park. Should be bright red and smell slightly sweet.
6. **Windshield Washer Fluid** — Should be at or near the full line. Never use plain water in freezing climates.
7. **Battery Electrolyte** — On non-sealed batteries, electrolyte should cover lead plates.

**Tire Inspection**: Check pressure monthly (in PSI per door jamb sticker), tread depth (use the penny test — if you see all of Lincoln's head, replace the tire), and look for sidewall cracks, bulges, or embedded objects.`
      },
      {
        title: 'Oil Changes & Basic Service',
        content: `An oil change is the most frequent and critical maintenance task for any vehicle. Most modern vehicles require oil changes every 5,000–7,500 miles (conventional) or 7,500–10,000 miles (full synthetic).

**Oil Change Steps:**
1. Warm up the engine for 2–3 minutes to thin the oil, then turn off
2. Lift vehicle safely using a floor jack and jack stands — NEVER use just a floor jack
3. Locate and remove the drain plug (typically 14mm–17mm socket)
4. Allow old oil to drain completely (5–10 minutes)
5. Remove old oil filter — use an oil filter wrench if needed
6. Apply fresh oil to the new filter's gasket before installing
7. Install new filter hand-tight + ¼ turn
8. Replace drain plug with a new washer — torque to spec (typically 25–30 ft-lbs)
9. Fill with correct oil type and quantity per owner's manual
10. Start engine, check for leaks, check oil level

**Oil Types**: 5W-30, 5W-20, and 0W-20 are the most common. Always use the viscosity specified in your owner's manual. Never mix conventional and full synthetic oils.

**Air Filter Replacement**: Replace every 15,000–30,000 miles. A dirty air filter reduces fuel economy and power. Replacement takes 2–5 minutes on most vehicles.`
      },
      {
        title: 'Brake Systems & Safety Checks',
        content: `Brakes are the most critical safety system on any vehicle. Understanding how they work helps you identify issues before they become dangerous.

**Disc Brake Components:**
- **Brake Pads** — Friction material that clamps against the rotor. Replace when thickness falls below 3mm (1/8 inch). Squealing sounds indicate wear indicators are contacting the rotor.
- **Rotors** — Cast iron discs. Must be replaced if warped (causing pedal pulsation) or below minimum thickness spec.
- **Calipers** — Hydraulic pistons that squeeze pads against rotors. Seized calipers cause uneven wear and pulling.

**Warning Signs of Brake Problems:**
- Squealing or grinding noises
- Pulling to one side when braking
- Spongy or low brake pedal
- Vehicle taking longer to stop
- Dashboard brake warning light

**Brake Inspection Checklist:**
1. Measure pad thickness (through wheel spokes or remove wheel)
2. Inspect rotor for deep grooves, cracks, or hot spots
3. Check brake fluid level and condition
4. Inspect brake lines for cracks, rust, or leaks
5. Test emergency/parking brake function

**IMPORTANT**: Never drive a vehicle with compromised brakes. If you suspect brake failure, pump the pedal to build pressure, downshift, and use the emergency brake gradually.`
      }
    ],
    test: [
      {
        question: 'When should you check your coolant/antifreeze level?',
        options: ['When the engine is hot', 'When the engine is cold', 'Only at a service center', 'After driving 10 miles'],
        correct: 1
      },
      {
        question: 'How often should most vehicles using full synthetic oil get an oil change?',
        options: ['Every 3,000 miles', 'Every 5,000 miles', 'Every 7,500–10,000 miles', 'Every 15,000 miles'],
        correct: 2
      },
      {
        question: 'A squealing noise from brakes usually indicates:',
        options: ['The parking brake is on', 'Wear indicators contacting the rotor', 'Normal brake function', 'Low transmission fluid'],
        correct: 1
      },
      {
        question: 'When performing an oil change, what should you apply to a new oil filter\'s gasket before installing?',
        options: ['Water', 'Gasket sealer', 'Fresh oil', 'Nothing'],
        correct: 2
      },
      {
        question: 'At what brake pad thickness should pads be replaced?',
        options: ['Below 8mm', 'Below 6mm', 'Below 3mm', 'Below 1mm'],
        correct: 2
      },
      {
        question: 'Why should you NEVER open a hot radiator cap?',
        options: ['It voids the warranty', 'Pressurized steam can cause severe burns', 'It drains all the coolant permanently', 'It triggers the check engine light'],
        correct: 1
      },
      {
        question: 'When performing an oil change, why is the vehicle lifted on jack stands rather than just a floor jack?',
        options: ['Jack stands are easier to use', 'Floor jacks can shift or fail, causing the vehicle to fall', 'Jack stands provide more height', 'OSHA regulations require it'],
        correct: 1
      },
      {
        question: 'What does a spongy or low brake pedal most likely indicate?',
        options: ['Worn brake pads', 'Air or moisture in the brake fluid lines', 'A seized caliper', 'Overheated rotors'],
        correct: 1
      },
      {
        question: 'The penny test for tire tread checks whether:',
        options: ['The tire is properly inflated', 'All of Lincoln\'s head is visible above the tread (replace needed)', 'The sidewall has cracks', 'The tire is balanced correctly'],
        correct: 1
      },
      {
        question: 'Transmission fluid on a properly functioning automatic transmission should appear:',
        options: ['Dark brown and slightly gritty', 'Milky white', 'Bright red with a slightly sweet smell', 'Clear like water'],
        correct: 2
      }
    ]
  },
  {
    id: 'hvac-fundamentals-101',
    category: 'HVAC & Plumbing',
    title: 'HVAC System Fundamentals',
    tier: 1,
    duration: '55 min',
    description: 'Understand heating, ventilation, and air conditioning systems — how they work, basic troubleshooting, and safety.',
    lessons: [
      {
        title: 'How HVAC Systems Work',
        content: `HVAC stands for Heating, Ventilation, and Air Conditioning. These systems control indoor climate, air quality, and comfort in residential and commercial buildings.

**The Refrigeration Cycle** (for cooling):
All air conditioners work on the same basic principle — transferring heat from inside to outside using a refrigerant.

1. **Evaporator Coil** (indoor): Refrigerant absorbs heat from indoor air, evaporating into a gas. Indoor air is cooled.
2. **Compressor** (outdoor): Compresses the refrigerant gas, raising its temperature and pressure.
3. **Condenser Coil** (outdoor): Hot compressed refrigerant releases heat to the outside air, condensing back to liquid.
4. **Expansion Valve**: Reduces refrigerant pressure, lowering its temperature before returning to the evaporator.

**Common HVAC System Types:**
- **Split Systems**: Most common. Separate indoor and outdoor units connected by refrigerant lines.
- **Heat Pumps**: Work in both heating and cooling modes. More efficient than gas in mild climates.
- **Package Units**: All components in a single outdoor unit. Common in commercial buildings.
- **Mini-Splits**: Ductless systems. Multiple indoor air handlers serve one outdoor unit. Great for additions and older homes.

**SEER Rating**: Seasonal Energy Efficiency Ratio measures cooling efficiency. Higher SEER = more efficient. Modern systems must be at least SEER 14. High-efficiency units are SEER 20+.`
      },
      {
        title: 'Maintenance & Filter Care',
        content: `Regular HVAC maintenance is critical for efficiency, air quality, and equipment lifespan. Neglected systems consume more energy and fail sooner.

**Air Filter Maintenance** — the single most important task:
- Replace 1-inch filters every 1–3 months
- Replace 4-inch media filters every 6–12 months
- MERV (Minimum Efficiency Reporting Value) rating: MERV 8–13 is ideal for most homes
- Never run the system without a filter — you'll clog the evaporator coil

**Coil Cleaning:**
- **Evaporator Coil** (indoor): Should be cleaned annually. Dirty coils reduce cooling capacity and can cause the coil to freeze.
- **Condenser Coil** (outdoor): Rinse from inside-out with a garden hose each spring. Remove debris, leaves, and grass clippings.

**Ductwork Inspection:**
- Check for disconnected or leaking duct sections
- Ducts should be sealed with mastic sealant (not duct tape — it fails)
- Leaky ducts can waste 20–30% of conditioned air

**Preventive Maintenance Schedule:**
- Monthly: Check/replace filters, clear debris from outdoor unit
- Twice yearly: Check refrigerant levels, inspect electrical connections, clean coils, test thermostat
- Annually: Professional tune-up including safety checks and efficiency testing`
      },
      {
        title: 'Basic Plumbing & HVAC Safety',
        content: `Working safely with HVAC and plumbing systems requires understanding the hazards involved.

**Refrigerant Safety:**
- EPA Section 608 certification is required to purchase and handle refrigerants
- R-410A (common in modern systems) is at 600 PSI — extremely dangerous if released
- Never vent refrigerants — it's illegal and harmful to the environment
- Symptoms of refrigerant leak: ice forming on refrigerant lines, poor cooling, hissing sounds

**Electrical Safety for HVAC:**
- Always disconnect power at the breaker AND the disconnect box before working
- Capacitors store electrical charge even when power is off — discharge them with a resistor
- Line voltage (240V) in HVAC units can kill instantly

**Carbon Monoxide (CO) Hazards:**
- Gas furnaces produce CO — a colorless, odorless, deadly gas
- Install CO detectors within 10 feet of every sleeping area
- Never run gas appliances in enclosed spaces
- Cracked heat exchangers in furnaces can leak CO into living spaces

**Basic Plumbing Concepts:**
- Water supply lines are under pressure (40–80 PSI) — always shut off the main before repairs
- Drain lines work by gravity — slope should be ¼ inch per foot
- P-traps hold water to prevent sewer gas from entering the building
- Use Teflon tape on all threaded fittings to prevent leaks`
      }
    ],
    test: [
      {
        question: 'What does SEER stand for in HVAC?',
        options: ['System Energy Efficiency Rating', 'Seasonal Energy Efficiency Ratio', 'Standard Equipment Efficiency Report', 'Seasonal Equipment Energy Review'],
        correct: 1
      },
      {
        question: 'How often should a standard 1-inch HVAC filter be replaced?',
        options: ['Every week', 'Every 1-3 months', 'Every 6 months', 'Once a year'],
        correct: 1
      },
      {
        question: 'What certification is required to purchase and handle HVAC refrigerants?',
        options: ['OSHA 30', 'EPA Section 608', 'NATE Certification', 'EPA Section 404'],
        correct: 1
      },
      {
        question: 'Carbon monoxide is described as:',
        options: ['Yellow and smells like rotten eggs', 'Colorless and odorless', 'Blue and smells sweet', 'White and smells like bleach'],
        correct: 1
      },
      {
        question: 'What is the proper drain line slope for plumbing?',
        options: ['½ inch per foot', '¼ inch per foot', '1 inch per foot', 'Perfectly level'],
        correct: 1
      },
      {
        question: 'What is the minimum SEER rating required for modern HVAC systems?',
        options: ['SEER 8', 'SEER 10', 'SEER 14', 'SEER 20'],
        correct: 2
      },
      {
        question: 'What is the purpose of a P-trap in a plumbing drain line?',
        options: ['To increase water pressure', 'To hold water and prevent sewer gas from entering the building', 'To filter debris from the drain', 'To control drain flow speed'],
        correct: 1
      },
      {
        question: 'What should be used to seal ductwork joints instead of standard duct tape?',
        options: ['Silicone caulk', 'Mastic sealant', 'Foam weatherstripping', 'Aluminum foil tape only'],
        correct: 1
      },
      {
        question: 'A MERV rating on an air filter refers to:',
        options: ['Maximum Equipment Run Value', 'Minimum Efficiency Reporting Value', 'Mechanical Energy Reduction Variable', 'Monthly Equipment Replacement Verification'],
        correct: 1
      },
      {
        question: 'What symptom suggests a refrigerant leak in an HVAC system?',
        options: ['The outdoor unit runs continuously', 'Ice forming on refrigerant lines and poor cooling', 'The thermostat reads higher than set', 'The air filter clogs faster than normal'],
        correct: 1
      }
    ]
  },
  {
    id: 'welding-intro-101',
    category: 'Welding & Fabrication',
    title: 'Introduction to Welding',
    tier: 1,
    duration: '60 min',
    description: 'Learn welding safety, basic processes (MIG, TIG, Stick), and fundamental techniques used in the trade.',
    lessons: [
      {
        title: 'Welding Safety & PPE',
        content: `Welding is one of the most hazardous trades when proper safety protocols are not followed. Arc welding produces ultraviolet and infrared radiation, extreme heat, toxic fumes, and electrical hazards.

**Essential Welding PPE:**
- **Welding Helmet**: Auto-darkening or fixed shade. Shade 10–13 for MIG/TIG/Stick. Protects eyes from arc flash (UV/IR radiation). Arc flash without protection can cause "arc eye" — a painful cornea burn.
- **Welding Gloves**: Heavy leather for Stick welding; lighter TIG gloves for precision work.
- **Leather Jacket or Sleeves**: Protects from spatter and UV radiation. No synthetic materials near welding — they can melt.
- **Steel-Toed Leather Boots**: No synthetic materials on feet.
- **Respiratory Protection**: N95 minimum for basic work; powered air-purifying respirator (PAPR) for stainless steel, aluminum, or galvanized metal (which releases toxic zinc fumes).

**Ventilation Requirements:**
- Weld in well-ventilated areas or use local exhaust ventilation
- Never weld on galvanized, painted, or coated metal without proper respiratory protection
- Keep your head out of the fume plume — position work so fumes rise away from your face

**Fire Prevention:**
- Remove all flammables within 35 feet of welding
- Have a fire extinguisher accessible
- Post a fire watch for 30 minutes after welding`
      },
      {
        title: 'MIG Welding Basics',
        content: `MIG (Metal Inert Gas) welding, also called GMAW (Gas Metal Arc Welding), is the most common welding process in industry and fabrication shops due to its speed and relative ease of learning.

**How MIG Works:**
A continuous wire electrode feeds through a welding gun. An electric arc melts both the wire and the base metal, forming a weld pool. Shielding gas (typically 75% Argon / 25% CO2 for carbon steel) protects the molten weld from atmospheric contamination.

**Equipment Setup:**
1. Connect gas cylinder and set flow rate (15–25 CFH for most applications)
2. Load wire spool and thread through drive rollers and gun liner
3. Set polarity to DCEP (Direct Current Electrode Positive)
4. Set voltage and wire feed speed (amperage) per material thickness guide

**Key Variables:**
- **Wire Diameter**: .030" for thin metal (<3/16"); .035" for general use; .045" for heavy plate
- **Voltage**: Controls arc length and bead width. Too high = wide, flat bead with spatter. Too low = cold, narrow bead with poor fusion.
- **Wire Speed (WFS)**: Controls amperage. Too fast = wire stubs into puddle. Too slow = wire burns back to tip.
- **Travel Speed**: Too fast = narrow, convex bead. Too slow = wide, flat bead with burn-through risk.

**Weld Positions**: 1G (flat), 2G (horizontal), 3G (vertical), 4G (overhead). Most beginner training starts in the flat position.`
      },
      {
        title: 'Reading Weld Symbols & Quality',
        content: `Welders must be able to read welding symbols on engineering drawings and understand weld quality requirements.

**AWS Welding Symbol Basics:**
Welding symbols consist of a reference line with an arrow pointing to the joint, and various symbols indicating weld type, size, and location.
- Symbol **below** the reference line = weld on arrow side
- Symbol **above** the reference line = weld on other side
- Common weld types: fillet (triangle), groove (V, J, U, bevel), plug, spot

**Common Weld Types:**
- **Fillet Weld**: Triangle-shaped weld at the junction of two perpendicular pieces. Size is measured as the leg length.
- **Groove Weld**: Joint is prepared (beveled, V-grooved) and filled with weld material. Used for full penetration.
- **Plug Weld**: Weld through a hole in one piece to join it to another.

**Weld Quality — Visual Inspection:**
Good welds show consistent bead width, slight convexity, smooth ripples, proper tie-in at edges, and no visible defects.

**Common Defects:**
- **Porosity**: Gas bubbles trapped in weld — caused by contamination, wrong shielding gas flow, or moisture
- **Undercut**: Groove melted in base metal at weld toe — caused by too much heat or angle
- **Overlap**: Weld metal flows over base without fusing — caused by too little heat or too fast travel
- **Incomplete Fusion**: Weld does not fuse to base metal — caused by incorrect technique or settings
- **Spatter**: Droplets of molten metal expelled from the arc — reduce with proper settings and anti-spatter spray`
      }
    ],
    test: [
      {
        question: 'What shade lens is typically required for MIG, TIG, or Stick welding?',
        options: ['Shade 3-5', 'Shade 7-9', 'Shade 10-13', 'Shade 14-16'],
        correct: 2
      },
      {
        question: 'What shielding gas mixture is most common for MIG welding carbon steel?',
        options: ['100% Argon', '100% CO2', '75% Argon / 25% CO2', '50% Argon / 50% Helium'],
        correct: 2
      },
      {
        question: 'Porosity in a weld is caused by:',
        options: ['Too fast travel speed', 'Gas bubbles trapped during solidification', 'Too slow wire feed speed', 'Incorrect polarity'],
        correct: 1
      },
      {
        question: 'How long should a fire watch be maintained after welding?',
        options: ['5 minutes', '15 minutes', '30 minutes', '1 hour'],
        correct: 2
      },
      {
        question: 'In MIG welding, what does increasing wire feed speed primarily control?',
        options: ['Shielding gas flow', 'Arc length', 'Amperage/heat input', 'Travel speed'],
        correct: 2
      },
      {
        question: 'Welding on galvanized metal without proper respiratory protection is dangerous primarily because it releases:',
        options: ['Carbon monoxide', 'Argon gas', 'Toxic zinc fumes', 'Hydrogen cyanide'],
        correct: 2
      },
      {
        question: 'What type of weld is represented by a triangle symbol on a welding drawing?',
        options: ['Groove weld', 'Plug weld', 'Fillet weld', 'Spot weld'],
        correct: 2
      },
      {
        question: 'What is the MIG welding polarity setting called that is standard for most applications?',
        options: ['DCEN (Direct Current Electrode Negative)', 'DCEP (Direct Current Electrode Positive)', 'AC (Alternating Current)', 'DCSP (Direct Current Straight Polarity)'],
        correct: 1
      },
      {
        question: 'How far from welding must all flammable materials be cleared?',
        options: ['10 feet', '20 feet', '35 feet', '50 feet'],
        correct: 2
      },
      {
        question: 'A weld defect where a groove is melted into the base metal at the weld edge and not filled is called:',
        options: ['Porosity', 'Overlap', 'Undercut', 'Incomplete fusion'],
        correct: 2
      }
    ]
  },
  {
    id: 'electrical-safety-101',
    category: 'Electrical',
    title: 'Electrical Safety & Basics',
    tier: 1,
    duration: '50 min',
    description: 'Learn electrical fundamentals, NFPA 70E safety standards, lockout/tagout procedures, and basic wiring concepts.',
    lessons: [
      {
        title: 'Electrical Fundamentals',
        content: `Understanding basic electrical concepts is essential for anyone working in or near electrical systems.

**Ohm's Law** — the fundamental relationship in electricity:
- **V = I × R** (Voltage = Current × Resistance)
- Voltage (V) — electrical pressure, measured in Volts
- Current (I) — flow of electrons, measured in Amperes (Amps)
- Resistance (R) — opposition to current flow, measured in Ohms (Ω)

**Power Calculation:**
- **P = V × I** (Watts = Volts × Amps)
- A 120V circuit drawing 15A produces 1,800 watts of power

**AC vs. DC:**
- **DC (Direct Current)**: Flows in one direction. Used in batteries, electronics, solar systems.
- **AC (Alternating Current)**: Reverses direction 60 times per second (60 Hz in USA). Used in homes and most commercial facilities. More efficient for long-distance transmission.

**US Electrical System:**
- Standard residential: 120V for lighting/outlets, 240V for appliances (dryers, ranges, HVAC)
- Commercial: 208V (three-phase), 480V, 277V (common for lighting)

**Conductor Types:**
- **Hot wire**: Black (120V circuits), red or black (240V)
- **Neutral wire**: White — completes the circuit at 0V
- **Ground wire**: Green or bare copper — safety path to earth
- **AWG (American Wire Gauge)**: Smaller number = larger wire. #14 AWG for 15A, #12 AWG for 20A, #10 AWG for 30A circuits`
      },
      {
        title: 'NFPA 70E & Arc Flash Safety',
        content: `NFPA 70E is the Standard for Electrical Safety in the Workplace. It establishes safety requirements to protect workers from electrical hazards including shock, electrocution, arc flash, and arc blast.

**Arc Flash** is a sudden release of electrical energy through the air. Temperatures can reach 35,000°F (4× the surface temperature of the sun). Arc flash causes severe burns, hearing damage, blindness, and death.

**Hierarchy of Risk Controls:**
1. **Elimination** — De-energize the equipment (safest)
2. **Substitution** — Replace hazardous equipment
3. **Engineering Controls** — Arc flash relays, current-limiting fuses
4. **Administrative Controls** — Procedures, training
5. **PPE** — Last line of defense

**Arc Flash PPE Categories (NFPA 70E):**
- **Category 1**: 4 cal/cm² — Arc-rated shirt and pants, face shield
- **Category 2**: 8 cal/cm² — Arc-rated shirt, pants, and flash suit hood
- **Category 3**: 25 cal/cm² — Arc-rated jacket, pants, flash suit
- **Category 4**: 40 cal/cm² — Arc flash suit with full body protection

**Approach Boundaries:**
- **Restricted Boundary**: Only qualified workers with proper PPE
- **Limited Boundary**: Unqualified workers must be escorted
- **Arc Flash Boundary**: Must wear PPE rated for the arc flash incident energy

**Key Rule**: Always treat electrical equipment as energized until proven otherwise with a meter.`
      },
      {
        title: 'Lockout/Tagout (LOTO) Procedures',
        content: `OSHA 29 CFR 1910.147 (the Control of Hazardous Energy standard) requires Lockout/Tagout procedures any time a worker must perform maintenance or servicing on equipment that could unexpectedly start or release energy.

**LOTO Applies To:**
- Electrical energy (most common)
- Hydraulic and pneumatic energy
- Mechanical/stored energy (springs, gravity)
- Thermal energy (steam, heat)
- Chemical energy

**The 6-Step LOTO Procedure:**
1. **Notify** affected employees that equipment will be shut down
2. **Identify** all energy sources (may have multiple — electrical, hydraulic, pneumatic)
3. **Shut down** equipment using normal stopping procedure
4. **Isolate** energy — open disconnect, close valve, etc.
5. **Apply lockout device** — Place YOUR lock on every energy isolation point. Each worker applies their own lock.
6. **Verify** zero energy state — Test with a meter. Try the start button. Release stored energy (bleed lines, block loads).

**TAGOUT vs. LOCKOUT:**
- Lockout is preferred — a physical lock is much more secure
- Tagout alone is used only when equipment cannot be locked out (must follow additional steps per OSHA)

**Group Lockout**: When multiple workers service equipment simultaneously, each worker places their own personal lock on a hasp. Equipment cannot be energized until ALL workers remove their locks.

Never remove another worker's lock — this is a serious safety violation and can result in immediate termination.`
      }
    ],
    test: [
      {
        question: 'According to Ohm\'s Law, if voltage is 120V and resistance is 12 ohms, what is the current?',
        options: ['5 amps', '10 amps', '15 amps', '20 amps'],
        correct: 1
      },
      {
        question: 'What color is the neutral wire in US residential wiring?',
        options: ['Black', 'Green', 'White', 'Red'],
        correct: 2
      },
      {
        question: 'Arc flash temperatures can reach approximately:',
        options: ['1,000°F', '5,000°F', '35,000°F', '100,000°F'],
        correct: 2
      },
      {
        question: 'In a group LOTO situation, when can equipment be re-energized?',
        options: ['When the supervisor removes their lock', 'When the first worker removes their lock', 'When ALL workers have removed their personal locks', 'After a 30-minute waiting period'],
        correct: 2
      },
      {
        question: 'What wire gauge is used for a standard 20-amp circuit?',
        options: ['#10 AWG', '#12 AWG', '#14 AWG', '#16 AWG'],
        correct: 1
      },
      {
        question: 'In US residential wiring, what color is the hot wire on a standard 120V circuit?',
        options: ['White', 'Green', 'Black', 'Red'],
        correct: 2
      },
      {
        question: 'What is the power consumption of a device drawing 10 amps on a 120V circuit?',
        options: ['12 watts', '120 watts', '1,200 watts', '12,000 watts'],
        correct: 2
      },
      {
        question: 'Capacitors in HVAC equipment are dangerous even when power is off because:',
        options: ['They continue to generate voltage', 'They store electrical charge that can still shock', 'They release toxic gases when discharged', 'They may restart the equipment spontaneously'],
        correct: 1
      },
      {
        question: 'Which OSHA standard governs Lockout/Tagout (LOTO) procedures?',
        options: ['OSHA 29 CFR 1910.147', 'OSHA 1926.503', 'NFPA 70E Article 130', 'ANSI Z244.1'],
        correct: 0
      },
      {
        question: 'In a LOTO group lockout, what happens if one worker finishes early and removes their lock while others are still working?',
        options: ['It is acceptable if they notify a supervisor', 'Equipment can be safely re-energized for that portion', 'This is a serious safety violation — all workers\' locks must remain until each is done', 'The remaining locks provide sufficient protection'],
        correct: 2
      }
    ]
  },
  {
    id: 'healthcare-support-101',
    category: 'Healthcare Support',
    title: 'Healthcare Support Essentials',
    tier: 1,
    duration: '55 min',
    description: 'Learn infection control, patient communication, medical terminology basics, and healthcare workplace standards.',
    lessons: [
      {
        title: 'Infection Control & Universal Precautions',
        content: `Infection control is the cornerstone of healthcare safety. Universal Precautions (also called Standard Precautions) treat all patients as potentially infectious and protect both patients and healthcare workers.

**Standard Precautions Include:**
- **Hand Hygiene** — The single most effective infection control measure. Wash with soap and water for 20 seconds or use alcohol-based hand sanitizer before and after every patient contact.
- **Gloves** — Wear when touching blood, body fluids, secretions, or non-intact skin
- **Masks and Eye Protection** — Required when splashing of body fluids is possible
- **Gown** — Wear when clothing may be contaminated

**Hand Hygiene Moments (WHO's 5 Moments):**
1. Before touching a patient
2. Before a clean/aseptic procedure
3. After body fluid exposure risk
4. After touching a patient
5. After touching patient surroundings

**Transmission-Based Precautions:**
- **Contact Precautions** (MRSA, C-diff): Gown and gloves for all patient contact
- **Droplet Precautions** (flu, COVID): Surgical mask within 6 feet of patient
- **Airborne Precautions** (TB, measles): N95 respirator in a negative pressure room

**Sharps Safety:**
- Never recap needles — use a one-hand scoop technique if necessary
- Dispose of sharps immediately in a puncture-resistant sharps container
- Report all needlestick injuries immediately — post-exposure prophylaxis (PEP) may be needed`
      },
      {
        title: 'Patient Communication & HIPAA',
        content: `Effective communication and patient privacy are foundational to quality healthcare support.

**HIPAA (Health Insurance Portability and Accountability Act):**
HIPAA's Privacy Rule protects patients' Protected Health Information (PHI). PHI includes any information that can identify a patient and relates to their health condition, treatment, or payment.

**What PHI Includes:**
- Name, address, date of birth, Social Security number
- Medical record numbers, health plan numbers
- Dates of treatment, admission, discharge
- Photographs, biometric identifiers
- Any other unique identifying information

**HIPAA Rules for Healthcare Support Workers:**
- Discuss patient information only on a need-to-know basis
- Never share PHI in public areas (hallways, elevators, cafeterias)
- Log off computers when stepping away
- Don't leave patient charts visible to unauthorized persons
- Never post patient information on social media — even without names

**Patient Communication Principles:**
- **AIDET Framework**: Acknowledge, Introduce, Duration, Explanation, Thank You
- Always address patients by their preferred name
- Speak clearly and avoid jargon with patients; use plain language
- Active listening: maintain eye contact, nod, don't interrupt
- For non-English speakers, use professional interpreter services — not family members for medical decisions`
      },
      {
        title: 'Medical Terminology & Workplace Safety',
        content: `A basic understanding of medical terminology helps healthcare support workers communicate accurately with clinical staff.

**Medical Term Structure:**
Medical terms are built from root words, prefixes, and suffixes of Greek and Latin origin.
- **Prefix**: Modifier at the beginning (brady- = slow, tachy- = fast, hyper- = above normal, hypo- = below normal)
- **Root**: Core meaning (card = heart, pulmon = lung, neur = nerve, hepat = liver)
- **Suffix**: Word ending (-itis = inflammation, -ectomy = surgical removal, -ology = study of, -algia = pain)

**Examples:**
- Bradycardia = slow heart rate
- Tachycardia = fast heart rate
- Cardiology = study of the heart
- Hepatitis = inflammation of the liver
- Neuralgia = nerve pain

**Common Abbreviations:**
- BP = Blood Pressure, HR = Heart Rate, RR = Respiratory Rate, O2 Sat = Oxygen Saturation
- NPO = Nothing by mouth (nil per os), PRN = As needed, BID = Twice daily, TID = Three times daily
- Pt = Patient, Dx = Diagnosis, Tx = Treatment, Hx = History

**Workplace Safety in Healthcare:**
- **Patient Lifting**: Use mechanical lifts or lift teams — back injuries are the #1 injury in healthcare
- **Workplace Violence**: Healthcare workers face 4× higher rates of violence. Know your facility's de-escalation protocols.
- **Needlestick Prevention**: Use safety-engineered devices. Report all exposures within 2 hours.
- **Chemical Safety**: Know the SDS for all chemicals. Disinfectants like bleach require proper PPE.`
      }
    ],
    test: [
      {
        question: 'The most effective single infection control measure in healthcare is:',
        options: ['Wearing gloves', 'Hand hygiene', 'Wearing a mask', 'Using a gown'],
        correct: 1
      },
      {
        question: 'HIPAA stands for:',
        options: ['Health Insurance Portability and Accountability Act', 'Healthcare Information Privacy and Access Act', 'Hospital Infection Prevention and Accountability Act', 'Health Information Protection and Administration Act'],
        correct: 0
      },
      {
        question: 'What type of precaution requires an N95 respirator in a negative pressure room?',
        options: ['Contact Precautions', 'Droplet Precautions', 'Airborne Precautions', 'Standard Precautions'],
        correct: 2
      },
      {
        question: 'The medical suffix "-itis" means:',
        options: ['Surgical removal', 'Study of', 'Inflammation', 'Pain'],
        correct: 2
      },
      {
        question: 'What does NPO mean in medical terminology?',
        options: ['No patient orders', 'Nothing by mouth', 'Normal physical output', 'Non-priority observation'],
        correct: 1
      },
      {
        question: 'Contact Precautions (e.g., for MRSA or C-diff) require which PPE for ALL patient contact?',
        options: ['N95 respirator and face shield', 'Gown and gloves', 'Surgical mask and gloves only', 'Standard hand hygiene only'],
        correct: 1
      },
      {
        question: 'What does the medical prefix "tachy-" mean?',
        options: ['Slow', 'Fast', 'Below normal', 'Above normal'],
        correct: 1
      },
      {
        question: 'According to HIPAA, which of the following is considered Protected Health Information (PHI)?',
        options: ['A patient\'s first name only', 'A medical record number linked to a patient', 'General statistics about hospital admissions', 'A doctor\'s name and specialty'],
        correct: 1
      },
      {
        question: 'The number one occupational injury in healthcare is:',
        options: ['Needlestick injuries', 'Slip and fall injuries', 'Back injuries from patient handling', 'Workplace violence injuries'],
        correct: 2
      },
      {
        question: 'After a needlestick injury, what is the recommended maximum time to report for post-exposure evaluation?',
        options: ['24 hours', '8 hours', '2 hours', '72 hours'],
        correct: 2
      }
    ]
  },
  {
    id: 'warehouse-ops-101',
    category: 'Logistics & Warehousing',
    title: 'Warehouse Operations 101',
    tier: 1,
    duration: '45 min',
    description: 'Learn warehouse safety, forklift awareness, inventory management basics, and shipping/receiving procedures.',
    lessons: [
      {
        title: 'Warehouse Safety & Forklift Awareness',
        content: `Warehouses are dynamic, high-risk environments. Forklifts, moving equipment, racking systems, and heavy loads create significant hazards that require constant awareness.

**Forklift Safety (Non-Operators):**
- Forklifts can weigh up to 9,000 lbs — a pedestrian struck by a forklift rarely survives
- Respect designated pedestrian lanes — always walk in them
- Make eye contact with the operator before crossing any travel path
- Never walk under raised forks — even with load
- Stay clear of forklift blind spots (directly behind, sides of mast when loaded)
- Forklifts have a very different turning radius than vehicles — the rear swings wide

**Racking System Safety:**
- Never climb racking to retrieve products — use proper equipment
- Report damaged uprights or beams immediately — a racking collapse can be catastrophic
- Know your racking's capacity rating — never overload
- Secure unstable loads with stretch wrap before placing in racking

**Walking/Working Surfaces:**
- Keep aisles clear — OSHA requires at least 4 feet of clearance
- Clean up spills immediately
- Wear steel-toed footwear at all times
- Be aware of dock plates and dock levelers at loading docks

**Ergonomics & Lifting:**
- For loads under 50 lbs: lift with your legs, keep load close to your body, avoid twisting
- For loads over 50 lbs: use material handling equipment or get a team lift
- Use anti-fatigue mats in standing work areas`
      },
      {
        title: 'Inventory Management & WMS Basics',
        content: `Accurate inventory management is the backbone of warehouse operations. Errors in inventory lead to lost sales, excess stock, and shipping mistakes.

**Inventory Control Methods:**
- **FIFO (First In, First Out)**: Oldest stock is picked first. Essential for perishables and date-sensitive products.
- **LIFO (Last In, First Out)**: Newest stock is picked first. Used in some non-perishable industries.
- **FEFO (First Expired, First Out)**: Similar to FIFO but based on expiration dates. Used in food, pharma, and medical.

**Cycle Counting:**
Rather than shutting down for annual inventory, cycle counting checks small sections of inventory on a rotating schedule. Benefits: continuous accuracy, early error detection, no operational shutdown.

**Warehouse Management System (WMS):**
A WMS is software that manages and optimizes all warehouse operations. Key functions:
- Receiving: Creates purchase order receipts, assigns storage locations
- Put-away: Directs workers to optimal storage locations
- Picking: Generates optimized pick lists (zone picking, batch picking, wave picking)
- Shipping: Generates packing slips, labels, and manifests
- Inventory: Tracks all movements and maintains real-time stock levels

**Barcode & RFID:**
- Barcodes require line-of-sight scanning — must physically present each item
- RFID (Radio Frequency Identification) can scan multiple items simultaneously without line of sight — faster but higher cost
- Scan verification: Always verify scanned quantities match physical count`
      },
      {
        title: 'Shipping, Receiving & Documentation',
        content: `Accurate documentation in shipping and receiving prevents costly errors, delays, and disputes.

**Receiving Process:**
1. **Advance Shipping Notice (ASN)**: Pre-notification of incoming shipment from vendor. Used to prepare dock and staffing.
2. **Count and Inspect**: Count all cartons/pallets. Inspect for damage before signing.
3. **Compare to Purchase Order (PO)**: Verify SKUs, quantities, and descriptions match the PO.
4. **Document Discrepancies**: Note shortages, overages, or damage on the delivery receipt BEFORE the driver leaves.
5. **Put-away**: Move to designated storage location, scan into WMS.

**Shipping Process:**
1. **Pick**: Retrieve items per pick list. Verify SKU and quantity at pick.
2. **Pack**: Choose appropriate box/packaging. Include packing slip. Protect fragile items.
3. **Weigh and Label**: Accurate weight is critical for freight billing. Print and apply shipping label.
4. **Manifest**: Create a manifest of all outbound shipments for that day.
5. **Load**: Load trailers by delivery route (last stop loaded first). Secure all freight.

**Key Documents:**
- **Bill of Lading (BOL)**: Legal contract between shipper and carrier. Must accompany every freight shipment.
- **Packing Slip**: List of items inside a package. Stays with the shipment.
- **Purchase Order (PO)**: Buyer's authorization to purchase from vendor.
- **Proof of Delivery (POD)**: Signed confirmation that recipient received the shipment.`
      }
    ],
    test: [
      {
        question: 'OSHA requires at least how many feet of aisle clearance in warehouses?',
        options: ['2 feet', '3 feet', '4 feet', '6 feet'],
        correct: 2
      },
      {
        question: 'FIFO stands for:',
        options: ['First In, First Out', 'Fast Inventory, Fast Output', 'First Item, Final Order', 'Freight In, Freight Out'],
        correct: 0
      },
      {
        question: 'A Bill of Lading (BOL) is:',
        options: ['An inventory count sheet', 'A legal contract between shipper and carrier', 'A packing list inside a box', 'A purchase authorization form'],
        correct: 1
      },
      {
        question: 'What should you do if you notice a damaged racking upright in a warehouse?',
        options: ['Continue using it carefully', 'Report it immediately to a supervisor', 'Try to straighten it yourself', 'Place extra items around it for support'],
        correct: 1
      },
      {
        question: 'RFID differs from barcodes because RFID:',
        options: ['Requires line-of-sight scanning', 'Can only track one item at a time', 'Can scan multiple items without line of sight', 'Only works on metal surfaces'],
        correct: 2
      },
      {
        question: 'FEFO inventory management stands for:',
        options: ['First Entered, First Out', 'First Expired, First Out', 'Fastest Exit, Fastest Order', 'Full Export, Full Order'],
        correct: 1
      },
      {
        question: 'What is the purpose of an Advance Shipping Notice (ASN)?',
        options: ['To authorize a purchase from a vendor', 'To pre-notify the receiver of an incoming shipment before it arrives', 'To document damage found after delivery', 'To confirm a customer has received their order'],
        correct: 1
      },
      {
        question: 'Why must discrepancies or damage be noted on the delivery receipt BEFORE the driver leaves?',
        options: ['It is a legal requirement under OSHA', 'It establishes the carrier\'s liability for the damage or shortage', 'Drivers can fix problems on the spot', 'The WMS requires it for receiving'],
        correct: 1
      },
      {
        question: 'A forklift weighing up to 9,000 lbs poses what risk to pedestrians who are struck?',
        options: ['Minor bruising and discomfort', 'Serious injury that is rarely fatal', 'Typically fatal — pedestrians rarely survive a direct strike', 'No serious risk if the forklift is moving slowly'],
        correct: 2
      },
      {
        question: 'What is Proof of Delivery (POD)?',
        options: ['A purchase authorization from the buyer', 'A signed confirmation that the recipient received the shipment', 'A list of items packed inside a box', 'A legal contract between shipper and carrier'],
        correct: 1
      }
    ]
  },
  {
    id: 'manufacturing-101',
    category: 'Manufacturing',
    title: 'Manufacturing Process Fundamentals',
    tier: 1,
    duration: '50 min',
    description: 'Understand manufacturing processes, quality control, Lean principles, and machine safety in production environments.',
    lessons: [
      {
        title: 'Manufacturing Processes Overview',
        content: `Manufacturing converts raw materials into finished products through a series of controlled processes. Understanding the major categories helps workers understand where their role fits in the larger production system.

**Major Manufacturing Process Categories:**

**Forming Processes** — Shaping material without removing material:
- Casting: Pouring molten metal into a mold (die casting, sand casting)
- Forging: Applying compressive force to shape metal (hammer or press forging)
- Stamping: Using dies and presses to cut or form sheet metal
- Injection Molding: Injecting molten plastic into a mold — most common plastic manufacturing process

**Machining Processes** — Removing material to achieve shape:
- Turning (lathe): Rotating workpiece cut by stationary tool
- Milling: Rotating cutting tool shapes stationary or moving workpiece
- Drilling: Creating holes with rotating drill bits
- Grinding: Abrasive wheel removes material for high-precision finishes

**Assembly Processes** — Joining components:
- Fastening: Bolts, screws, rivets
- Welding: Permanent fusion of metals
- Adhesive Bonding: Structural adhesives for metals, composites, plastics
- Press Fit: Components joined by interference fit

**Mass Production vs. Job Shop:**
- Mass production (high volume, low variety): Assembly lines, automotive manufacturing
- Job shop (low volume, high variety): Custom fabrication, prototype shops`
      },
      {
        title: 'Quality Control & Lean Manufacturing',
        content: `Quality and efficiency are the two pillars of modern manufacturing. Workers who understand these principles are more valuable across all manufacturing environments.

**Quality Control Fundamentals:**
- **Inspection**: Checking parts against specifications (dimensional, visual, functional)
- **Statistical Process Control (SPC)**: Using statistical methods to monitor and control process variation. Control charts track whether a process is "in control."
- **Six Sigma**: Methodology targeting fewer than 3.4 defects per million opportunities. Uses DMAIC cycle: Define, Measure, Analyze, Improve, Control.
- **GD&T (Geometric Dimensioning and Tolerancing)**: Standard for defining acceptable variation in part geometry on engineering drawings.

**Lean Manufacturing — Eliminating Waste:**
Lean (derived from Toyota Production System) focuses on eliminating "muda" (waste).

**The 8 Wastes (TIMWOODS):**
- **T**ransportation — unnecessary movement of materials
- **I**nventory — excess raw material, WIP, or finished goods
- **M**otion — unnecessary worker movement
- **W**aiting — idle time waiting for materials, machines, or decisions
- **O**verproduction — making more than needed
- **O**verprocessing — doing more work than required
- **D**efects — rework, scrap, warranty
- **S**kills underutilization — not using workers' full capabilities

**5S Workplace Organization:**
Sort (remove unneeded), Set in Order (everything has a place), Shine (clean and inspect), Standardize (create standards), Sustain (maintain discipline).`
      },
      {
        title: 'Machine Safety & Lockout/Tagout',
        content: `Manufacturing equipment presents serious hazards including caught-in/between, struck-by, cuts, and crush injuries. Machine guarding and LOTO are the primary defenses.

**Machine Guarding Requirements (OSHA 1910.212):**
Any machine with moving parts that could cause injury must be guarded. Guards must:
- Prevent hands or body parts from reaching into the point of operation
- Be constructed of metal or other substantial material
- Not create additional hazards (no sharp edges, splinters)
- Not impede normal machine operation

**Types of Machine Guards:**
- **Fixed Guards**: Permanently attached. Most preferred when they allow normal operation.
- **Interlocked Guards**: Machine stops when guard is opened or removed.
- **Adjustable Guards**: Accommodate different operations; may require adjustment.
- **Self-Adjusting Guards**: Move based on size of workpiece (common on table saw blade guards).

**LOTO in Manufacturing:**
Manufacturing equipment often has multiple energy sources:
- Electrical: Disconnect and lock at the main disconnect switch
- Pneumatic: Close air supply valve, vent residual pressure
- Hydraulic: Close valves, release stored pressure
- Mechanical: Block/crib gravity-loaded components (presses, lifts)

**Never** bypass or defeat machine guards. This is a serious safety violation. Report missing or damaged guards to your supervisor immediately.

**Personal Protective Equipment for Manufacturing:**
- Safety glasses or goggles (always)
- Hearing protection (if noise exceeds 85 dB for 8 hours)
- Steel-toed footwear
- Cut-resistant gloves for sharp parts handling
- Machine-specific PPE per job hazard analysis`
      }
    ],
    test: [
      {
        question: 'Which manufacturing process shapes material by applying compressive force without removing material?',
        options: ['Machining', 'Grinding', 'Forging', 'Milling'],
        correct: 2
      },
      {
        question: 'What does the "I" in the TIMWOODS waste acronym stand for?',
        options: ['Injury', 'Inventory', 'Inspection', 'Inefficiency'],
        correct: 1
      },
      {
        question: '5S stands for Sort, Set in Order, Shine, Standardize, and:',
        options: ['Safety', 'Sustain', 'Supervise', 'Streamline'],
        correct: 1
      },
      {
        question: 'Which type of machine guard stops the machine when the guard is opened?',
        options: ['Fixed Guard', 'Self-Adjusting Guard', 'Interlocked Guard', 'Adjustable Guard'],
        correct: 2
      },
      {
        question: 'Hearing protection is required when noise levels exceed what threshold for 8 hours?',
        options: ['75 dB', '80 dB', '85 dB', '90 dB'],
        correct: 2
      },
      {
        question: 'Injection molding is primarily used to manufacture products made of:',
        options: ['Cast iron', 'Plastic', 'Aluminum sheet', 'Carbon fiber'],
        correct: 1
      },
      {
        question: 'In the Six Sigma DMAIC cycle, what does the "A" stand for?',
        options: ['Assess', 'Analyze', 'Audit', 'Apply'],
        correct: 1
      },
      {
        question: 'Which type of machine guard is the MOST preferred because it provides permanent protection?',
        options: ['Adjustable Guard', 'Self-Adjusting Guard', 'Interlocked Guard', 'Fixed Guard'],
        correct: 3
      },
      {
        question: 'The Toyota Production System is the origin of which manufacturing philosophy?',
        options: ['Six Sigma', 'Total Quality Management (TQM)', 'Lean Manufacturing', 'ISO 9001'],
        correct: 2
      },
      {
        question: 'In the 5S system, "Shine" refers to:',
        options: ['Making the product look appealing to customers', 'Cleaning the workspace and inspecting equipment regularly', 'Standardizing labeling across all work areas', 'Recognizing high-performing employees'],
        correct: 1
      }
    ]
  },
  {
    id: 'it-helpdesk-101',
    category: 'IT & Tech Support',
    title: 'IT Help Desk Fundamentals',
    tier: 1,
    duration: '55 min',
    description: 'Learn essential IT support skills: troubleshooting methodology, networking basics, cybersecurity fundamentals, and ticketing systems.',
    lessons: [
      {
        title: 'Troubleshooting Methodology',
        content: `Systematic troubleshooting is the most important skill for IT support professionals. A disciplined approach resolves issues faster and prevents recurring problems.

**The CompTIA 6-Step Troubleshooting Process:**
1. **Identify the problem**: Gather information from the user. Ask: What were you doing when it happened? When did it start? Has anything changed recently? What error messages do you see?
2. **Establish a theory of probable cause**: Based on the symptoms, form hypotheses. Start with the most common/simple causes.
3. **Test the theory**: Test your hypothesis. If confirmed, proceed. If not, form a new theory.
4. **Establish a plan of action**: Once you know the cause, plan the fix and consider any impact on other systems.
5. **Implement the solution**: Execute the fix. Document each step.
6. **Verify and document**: Confirm the issue is resolved. Document the problem, cause, and solution in the ticketing system.

**Common First Steps (try before escalating):**
- Restart the device — solves ~30% of issues
- Check cables and connections
- Verify the user's credentials are correct
- Check if others are experiencing the same issue (systemic vs. isolated)
- Check event logs for error codes

**Effective Communication During Troubleshooting:**
- Avoid jargon with non-technical users
- Set realistic expectations for resolution time
- Provide regular updates if resolution takes time
- Confirm the user is satisfied before closing the ticket`
      },
      {
        title: 'Networking Basics',
        content: `A foundational understanding of networking is essential for IT support roles. Most user issues involve network connectivity in some way.

**The OSI Model (7 Layers):**
1. Physical — cables, hubs
2. Data Link — switches, MAC addresses
3. Network — routers, IP addresses
4. Transport — TCP/UDP, port numbers
5. Session — establishing connections
6. Presentation — encryption, encoding
7. Application — HTTP, email, DNS

**Key Networking Concepts:**

**IP Addressing:**
- IPv4: 32-bit address (e.g., 192.168.1.100)
- Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
- Subnet mask determines network vs. host portion
- Default gateway: IP address of the router that connects local network to internet
- DNS (Domain Name System): Translates domain names to IP addresses

**DHCP (Dynamic Host Configuration Protocol):**
Automatically assigns IP addresses to devices. If a device gets a 169.254.x.x address, it failed to get a DHCP lease.

**Common Network Troubleshooting Commands:**
- \`ipconfig /all\` — View network configuration (Windows)
- \`ping 8.8.8.8\` — Test internet connectivity
- \`tracert\` — Trace route to destination, identify where connection fails
- \`nslookup\` — Test DNS resolution
- \`netstat\` — View active network connections
- \`ipconfig /release\` then \`/renew\` — Force new DHCP lease

**Wi-Fi Troubleshooting:**
- Check signal strength (interference from microwaves, walls, other networks)
- 2.4 GHz = better range, more interference; 5 GHz = faster, shorter range
- Forget and rejoin network often fixes authentication issues`
      },
      {
        title: 'Cybersecurity Fundamentals & Help Desk',
        content: `IT support workers are often the first line of defense against cyber threats. Understanding common attacks and how to respond is essential.

**Common Cyber Threats:**

**Phishing:**
Fraudulent emails, texts, or calls designed to steal credentials or install malware. Red flags: urgency, spelling errors, suspicious sender address, requests for credentials or payment. Never click suspicious links — verify via official website directly.

**Malware Types:**
- **Virus**: Attaches to legitimate files, spreads when shared
- **Ransomware**: Encrypts files, demands payment for decryption key
- **Spyware**: Secretly monitors user activity and steals data
- **Trojan Horse**: Malicious software disguised as legitimate software

**Social Engineering:**
Manipulating people rather than exploiting technology. Attackers call pretending to be IT, executives, or vendors to get credentials or access. **NEVER** give out passwords over phone or email, even to someone claiming to be IT.

**Password Best Practices:**
- Minimum 12 characters, mix of uppercase, lowercase, numbers, symbols
- Never reuse passwords across accounts
- Use a password manager
- Enable Multi-Factor Authentication (MFA) everywhere possible

**Help Desk Security Responsibilities:**
- Verify user identity before resetting passwords (use security questions, manager confirmation, or ticket submission from known email)
- Follow the principle of least privilege — only give users the minimum access they need
- Never create shared accounts or share login credentials
- Report suspicious activity to the security team immediately
- All password resets should be documented in the ticketing system`
      }
    ],
    test: [
      {
        question: 'What is the first step in the CompTIA troubleshooting methodology?',
        options: ['Test the theory', 'Establish a plan of action', 'Identify the problem', 'Implement the solution'],
        correct: 2
      },
      {
        question: 'A device that receives a 169.254.x.x IP address has:',
        options: ['Connected to a VPN', 'Failed to get a DHCP lease', 'A static IP configured', 'Exceeded its IP lease time'],
        correct: 1
      },
      {
        question: 'What type of malware encrypts files and demands payment for decryption?',
        options: ['Spyware', 'Virus', 'Trojan Horse', 'Ransomware'],
        correct: 3
      },
      {
        question: 'The OSI model layer responsible for IP addresses and routing is:',
        options: ['Layer 1 (Physical)', 'Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)'],
        correct: 2
      },
      {
        question: 'Before resetting a user\'s password, a help desk technician should first:',
        options: ['Ask the user for their current password', 'Verify the user\'s identity', 'Check if the account is locked', 'Disable MFA temporarily'],
        correct: 1
      },
      {
        question: 'When a Windows device shows a 169.254.x.x IP address, the recommended fix is to:',
        options: ['Assign a static IP address manually', 'Run ipconfig /release then ipconfig /renew to force a new DHCP lease', 'Replace the network adapter', 'Restart the DNS server'],
        correct: 1
      },
      {
        question: 'Which OSI layer is responsible for MAC addresses and switching?',
        options: ['Layer 1 (Physical)', 'Layer 2 (Data Link)', 'Layer 3 (Network)', 'Layer 4 (Transport)'],
        correct: 1
      },
      {
        question: 'A Trojan Horse differs from a virus because a Trojan:',
        options: ['Encrypts the user\'s files', 'Spreads automatically to other computers', 'Disguises itself as legitimate software to trick users into installing it', 'Only attacks government systems'],
        correct: 2
      },
      {
        question: 'The principle of least privilege means:',
        options: ['Give all users administrator rights for efficiency', 'Only grant users the minimum access required to do their job', 'Senior employees get more system access than junior employees', 'Administrators should never access production systems'],
        correct: 1
      },
      {
        question: 'Which troubleshooting step resolves approximately 30% of common IT issues?',
        options: ['Reinstalling the operating system', 'Restarting the device', 'Running a virus scan', 'Replacing the network cable'],
        correct: 1
      }
    ]
  },
  {
    id: 'office-admin-101',
    category: 'Administrative & Office Skills',
    title: 'Office Administration Basics',
    tier: 1,
    duration: '45 min',
    description: 'Master essential office skills: professional communication, document management, scheduling, and workplace organization.',
    lessons: [
      {
        title: 'Professional Communication',
        content: `Professional communication is the most important skill for any administrative role. It affects every interaction — with colleagues, management, clients, and vendors.

**Business Email Etiquette:**
- **Subject Line**: Clear and specific. "Meeting Request: Budget Review — Thursday 2pm" not "Meeting"
- **Salutation**: "Dear Mr./Ms. [Last Name]" for formal; "Hi [First Name]," for internal colleagues
- **Body**: State your purpose in the first sentence. Use short paragraphs (3–4 lines max). Be direct but polite.
- **Tone**: Professional but human. Avoid sarcasm, ALL CAPS (signals shouting), or excessive exclamation marks.
- **Sign-Off**: "Best regards," "Sincerely," or "Thank you," — choose based on formality level
- **Proofreading**: Always proofread before sending. Use spell check but don't rely on it alone.
- **Reply Time**: Acknowledge emails within 24 hours, even if just to say you're working on it.

**Phone & Video Call Etiquette:**
- Answer with your name and company: "Good morning, Acme Corp, this is Sarah"
- Smile — it actually changes your tone of voice
- For video calls: good lighting, neutral background, mute when not speaking, look at camera not the screen
- Take notes during calls. Follow up with a written summary for important conversations.

**Active Listening:**
- Let the speaker finish before responding
- Ask clarifying questions: "Just to confirm, you're saying..."
- Paraphrase to confirm understanding
- Don't multitask during important conversations`
      },
      {
        title: 'Document Management & Office Software',
        content: `Administrative professionals manage enormous volumes of documents and information. Organized, consistent document management is critical.

**File Naming Conventions:**
Consistent naming makes files findable by everyone, not just the person who created them.
- Format: YYYY-MM-DD_Description_Version.ext
- Example: 2024-03-15_Budget-Proposal_v2.xlsx
- Avoid spaces (use hyphens or underscores); avoid special characters; be descriptive but concise.

**Folder Structure Principles:**
- Organize by function, then date or project
- Never save files to the Desktop (it's not backed up or shared)
- Use network drives or cloud storage (OneDrive, SharePoint, Google Drive) for all work files
- Archive completed project folders — don't delete them

**Microsoft Office Productivity Tips:**
**Excel:**
- Use tables (Ctrl+T) for data — they auto-expand formulas
- Key formulas: SUM, AVERAGE, VLOOKUP/XLOOKUP, IF, COUNTIF
- Pivot tables for summarizing large data sets

**Word:**
- Use Styles (Heading 1, Heading 2) for navigation and consistency
- Track Changes for document collaboration
- Mail Merge for bulk letters, labels, or emails

**Outlook:**
- Use folders and rules to organize email automatically
- Use the Calendar for all meetings — include agenda in the invite
- Use tasks/To-Do for follow-up items

**Cloud Collaboration:**
- Real-time co-authoring in Microsoft 365 and Google Workspace
- Version history allows recovery of previous document versions
- Always check document permissions before sharing externally`
      },
      {
        title: 'Scheduling, Meeting Management & Office Organization',
        content: `Administrative professionals often manage the schedules of executives and teams. Efficiency in this role directly impacts the productivity of the entire organization.

**Calendar Management:**
- Block preparation time before important meetings
- Schedule buffer time between meetings (15 minutes minimum)
- Confirm external meetings 24–48 hours in advance
- Include: agenda, location/dial-in info, pre-reading materials, expected duration, required vs. optional attendees
- Time zones: Always confirm and display multiple time zones for meetings with remote participants

**Meeting Facilitation:**
- Send agendas at least 24 hours before
- Assign a note-taker (can rotate)
- Start on time — waiting for late arrivals is disrespectful to punctual attendees
- Assign action items with owner and due date before closing
- Send meeting minutes within 24 hours

**Office Organization (5S Principles):**
1. **Sort** — Remove unnecessary items from the workspace
2. **Set in Order** — Organize supplies; label everything; everything has a designated place
3. **Shine** — Keep workspace clean; clean as you go
4. **Standardize** — Create consistent processes for routine tasks (SOPs — Standard Operating Procedures)
5. **Sustain** — Build habits; audit regularly

**Time Management for Administrative Roles:**
- **Time Blocking**: Schedule specific tasks in the calendar
- **Prioritization**: Use Eisenhower Matrix (Urgent/Important grid)
- **Batching**: Group similar tasks (process all mail at 9am, handle email at specific times)
- **Interruptions**: Establish availability signals with colleagues (open door = available, headphones = focus time)
- **EOD Review**: Spend 10 minutes at end of each day reviewing tomorrow's schedule and priorities`
      }
    ],
    test: [
      {
        question: 'What is the recommended format for professional business file naming?',
        options: ['Name_Description.ext', 'YYYY-MM-DD_Description_Version.ext', 'Project-Name-FINAL.ext', 'Description (1).ext'],
        correct: 1
      },
      {
        question: 'When should meeting minutes be sent after a meeting?',
        options: ['Within 1 hour', 'Within 24 hours', 'Within 1 week', 'Only if someone requests them'],
        correct: 1
      },
      {
        question: 'In the 5S office organization method, "Set in Order" means:',
        options: ['Put files in alphabetical order', 'Organize supplies so everything has a designated place', 'Prioritize tasks by importance', 'Sort documents by date'],
        correct: 1
      },
      {
        question: 'What is the best practice for replying to business emails?',
        options: ['Reply immediately to all emails', 'Acknowledge within 24 hours, even if still working on it', 'Reply only when you have a complete answer', 'Reply only to emails from your manager'],
        correct: 1
      },
      {
        question: 'When scheduling a meeting, buffer time between meetings should be at least:',
        options: ['5 minutes', '10 minutes', '15 minutes', '30 minutes'],
        correct: 2
      },
      {
        question: 'In Microsoft Excel, which function would you use to look up a value in a table based on a matching ID?',
        options: ['SUMIF', 'COUNTIF', 'VLOOKUP/XLOOKUP', 'AVERAGE'],
        correct: 2
      },
      {
        question: 'When saving work files, which storage location is BEST practice?',
        options: ['The Desktop for easy access', 'A network drive or cloud storage like OneDrive or SharePoint', 'A local folder on the C: drive', 'A USB flash drive'],
        correct: 1
      },
      {
        question: 'The Eisenhower Matrix helps with time management by categorizing tasks based on:',
        options: ['Alphabetical order and deadline date', 'Urgency and importance', 'Estimated time and resource cost', 'Team member assignment and priority number'],
        correct: 1
      },
      {
        question: 'What does "Track Changes" in Microsoft Word allow collaborators to do?',
        options: ['Automatically save the document every 30 seconds', 'See edits made by each reviewer and accept or reject them', 'Lock the document so only one person can edit at a time', 'Convert the document to a PDF'],
        correct: 1
      },
      {
        question: 'Active listening in a professional setting includes:',
        options: ['Multitasking to show efficiency', 'Finishing the speaker\'s sentences to show engagement', 'Paraphrasing to confirm understanding and asking clarifying questions', 'Taking notes instead of making eye contact'],
        correct: 2
      }
    ]
  }
  ,
  // ─── TIER 2 COURSES ────────────────────────────────────────────────────────
  {
    id: 'construction-blueprint-201',
    category: 'Construction & Trades',
    title: 'Blueprint Reading & Site Planning 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Build on construction safety fundamentals by learning how to read and interpret construction blueprints, understand site plans, and coordinate work from engineered drawings. This course covers drawing conventions, scale, symbols, and practical site planning workflows used by trades professionals every day.',
    lessons: [
      {
        title: 'Understanding Blueprint Conventions & Drawing Sets',
        content: `Construction blueprints are the universal language of the building industry. Every trade professional—from carpenters and electricians to plumbers and ironworkers—must be able to read and interpret drawings to perform their work correctly and avoid costly errors.

**Types of Drawings in a Full Drawing Set:**

A complete set of construction documents for a commercial or residential project typically includes several drawing categories, each identified by a letter prefix:

- **A (Architectural)**: Floor plans, elevations, sections, details, and schedules. These are the most commonly referenced sheets on a job site.
- **S (Structural)**: Foundation plans, framing plans, beam and column schedules, connection details. Prepared by a licensed structural engineer.
- **M (Mechanical)**: HVAC ductwork layouts, equipment schedules, and riser diagrams.
- **P (Plumbing)**: Pipe routing, fixture schedules, isometric diagrams.
- **E (Electrical)**: Power and lighting panel schedules, circuit routing, single-line diagrams.
- **C (Civil)**: Site grading, drainage, utility routing, paving, and erosion control.
- **L (Landscape)**: Planting plans, irrigation, hardscape.

**Title Block Information:**

Every drawing sheet contains a **title block**, typically located in the lower right corner. The title block must be read before interpreting any drawing. It contains:

- **Project name and address**
- **Drawing title** (e.g., "First Floor Plan")
- **Sheet number** (e.g., A-101 = Architectural sheet 101)
- **Scale** (e.g., 1/8" = 1'-0")
- **Revision history** — Tracks changes made after original issue. Always confirm you are working from the most current revision.
- **Architect/engineer seal and signature**
- **Issue date and project number**

**Drawing Scale:**

Scale is the ratio of the drawn size to the actual size. On a drawing at **1/4" = 1'-0" scale**, every 1/4 inch on paper represents 1 foot in the field.

Common architectural scales:
- 1/8" = 1'-0" — Site plans, overall floor plans
- 1/4" = 1'-0" — Detailed floor plans, elevations
- 1/2" = 1'-0" — Large-scale details
- 3" = 1'-0" — Connection details, trim profiles

**Always use a proper architectural scale ruler**. Never use a standard ruler on a scaled drawing. If drawings are printed at non-standard sizes (common with digital printing), the stated scale is unreliable—use the printed graphic scale bar instead, or request correctly scaled prints.

**Revision Clouds:**

When a drawing is revised after initial issue, the changed area is circled with a **revision cloud**—a series of arcs forming a cloud-like border. A delta (triangle) with a revision number points to the cloud. Always check revision notes first when picking up a set of drawings you haven't reviewed recently.`
      },
      {
        title: 'Reading Floor Plans, Elevations & Sections',
        content: `Floor plans, elevations, and sections are the three primary drawing types a trades professional will encounter daily. Understanding how they relate to each other is fundamental to visualizing a three-dimensional building from flat paper.

**Floor Plans:**

A **floor plan** is a horizontal slice through the building approximately 4 feet above the floor level, looking down. It shows:

- **Wall thickness and type**: Walls are drawn with two parallel lines. The gap represents wall thickness. Symbols distinguish exterior walls (thicker, often with insulation hatching) from interior partitions.
- **Door swings**: Doors are shown as a thin arc indicating the direction and clearance of the swing. The arc quarter-circle shows the door path—critical for clearance and layout.
- **Window symbols**: Windows are shown as three parallel lines (two frame lines, one glass line) within the wall.
- **Room labels and dimensions**: Rooms are identified by name and often include overall dimensions. Dimensions are shown as dimension strings with tick marks or arrows at each end.
- **Section cut indicators**: Heavy arrows with a letter/number reference indicate where a section cut is taken. Follow the arrows to find the referenced section drawing.
- **North arrow**: Always locate the north arrow before reading a floor plan. Directions (north wall, south elevation) are referenced from true north, not the orientation of the drawing on paper.

**Reading Dimensions:**

Dimensions on architectural drawings are typically given in feet and inches (e.g., 12'-6"). Dimensions strings should be read in sequence—never add up individual dimensions to find an overall; always use the stated overall dimension.

**Structural Dimensions** are often given to the face of the structural system (concrete, steel, CMU), while **Architectural Dimensions** are often to finish face. Know which system the drawing uses—mixing them up causes framing errors.

**Elevations:**

An **elevation** is an orthographic view of a building exterior or interior wall—like a flat photo from directly in front with no perspective distortion. Elevations show:

- **Finish materials** (brick, siding, stone) indicated by hatching or material symbols
- **Window and door heights** above finished floor (**AFF**)
- **Building height** from grade to top of parapet or ridge
- **Grade line** — the finished exterior grade at the building perimeter

Elevation drawings are labeled by compass direction (North Elevation, South Elevation) or by sheet reference number.

**Sections:**

A **section** is a vertical slice through the building, showing the interior construction from foundation to roof. Sections reveal:

- **Floor-to-floor heights** and **floor-to-ceiling heights**
- **Structural members** (beams, joists, slabs)
- **Insulation location** (batt, rigid, spray foam)
- **Waterproofing and flashing details**
- **Foundation depth and type**

**Detail Drawings:**

When a portion of a plan, elevation, or section requires additional clarity, a **detail bubble** references a separate, larger-scale drawing. Details show exact construction of connections, joints, and assemblies. Always review referenced details—the plan view alone rarely contains enough information to build correctly.`
      },
      {
        title: 'Site Plans, Schedules & Field Coordination',
        content: `Beyond architectural plans, trades workers must understand site plans and drawing schedules, and know how to use drawings to coordinate their work with other trades in the field.

**Site Plans (Civil Drawings):**

The **site plan** (also called the plot plan or survey drawing) shows the entire property from above, including:

- **Property lines and setbacks**: Legal boundaries and required minimum distances from structures to property lines. Violating setbacks can require demolition and rebuild.
- **Building footprint location**: The outline of the structure on the property, with dimensions to property lines.
- **Finished floor elevation (FFE)**: The elevation of the first floor above sea level, referenced to a **benchmark** (a known fixed elevation point). Critical for ensuring proper drainage away from the building.
- **Existing and finished grade contour lines**: Lines connecting points of equal elevation. Closely spaced contour lines = steep slope; widely spaced = gentle slope.
- **Utility locations**: Water, sewer, gas, electric, storm drain routing on the property.
- **Grading and drainage**: Swales, catch basins, detention ponds designed to manage stormwater.

**Reading Contour Lines:**

The **contour interval** (shown in the drawing legend) defines the elevation difference between adjacent lines—typically 1, 2, or 5 feet. To determine if water will flow toward or away from the building, trace the contours. Water flows perpendicular to contour lines, from higher to lower elevations.

**Drawing Schedules:**

Schedules are tables embedded in the drawing set that organize repetitive data:

- **Door Schedule**: Lists every door by number (matching the floor plan symbol), with size (width × height × thickness), material, hardware set, fire rating, and notes.
- **Window Schedule**: Similar to door schedule, organized by window mark.
- **Finish Schedule**: Room-by-room breakdown of floor, base, wall, and ceiling finishes.
- **Structural Member Schedule**: Lists beam sizes, column sizes, and specifications by mark number.

**Always cross-reference** between the floor plan and the schedule. The plan tells you where; the schedule tells you what.

**Field Coordination with Drawings:**

In the field, drawings must be used actively, not just referenced once and set aside:

- **Request for Information (RFI)**: When drawings are unclear, conflicting, or missing information, the contractor submits an RFI to the architect. Never guess on critical dimensions—always submit an RFI.
- **Submittals**: Contractors submit shop drawings, product data, and samples to the architect for approval before ordering or installing materials.
- **As-Built Drawings**: During construction, mark up a set of drawings with all changes from the original design. These become the **as-built** or **record drawings**—essential for future maintenance and renovation.
- **Coordination Drawings**: On large projects, trades use BIM (Building Information Modeling) software like Revit to create 3D coordination models that detect clashes between mechanical, electrical, plumbing, and structural systems before work begins in the field.`
      }
    ],
    test: [
      {
        question: 'On a drawing at 1/4" = 1\'-0" scale, what does 1 inch on the drawing represent in the field?',
        options: ['1 foot', '2 feet', '4 feet', '8 feet'],
        correct: 2
      },
      {
        question: 'What is the purpose of a revision cloud on a construction drawing?',
        options: ['To indicate a weather-related design element', 'To mark areas that have been changed since the original issue', 'To show where section cuts are taken', 'To identify structural members'],
        correct: 1
      },
      {
        question: 'A floor plan is best described as:',
        options: ['A vertical slice showing the building from foundation to roof', 'A horizontal slice approximately 4 feet above the floor, looking down', 'An orthographic view of the exterior wall', 'A diagram showing utility routing'],
        correct: 1
      },
      {
        question: 'When drawings are unclear or conflicting in the field, the correct process is to:',
        options: ['Make the best judgment call and proceed', 'Submit a Request for Information (RFI) to the architect', 'Use the structural drawings as the final authority', 'Check with the nearest subcontractor'],
        correct: 1
      },
      {
        question: 'In a door schedule, what information is NOT typically included?',
        options: ['Door size (width, height, thickness)', 'Hardware set', 'Subcontractor responsible for installation', 'Fire rating'],
        correct: 2
      },
      {
        question: 'The letter prefix "S" on a set of construction drawings indicates:',
        options: ['Site plan drawings', 'Structural drawings', 'Section drawings', 'Specification sheets'],
        correct: 1
      },
      {
        question: 'On a floor plan, a thin arc adjacent to a door opening represents:',
        options: ['The wall thickness at that location', 'The direction and clearance path of the door swing', 'An adjacent window location', 'A plumbing fixture symbol'],
        correct: 1
      },
      {
        question: 'Where is the title block located on most construction drawings?',
        options: ['Upper left corner', 'Center of the sheet', 'Lower right corner', 'Upper right corner'],
        correct: 2
      },
      {
        question: 'An elevation drawing shows:',
        options: ['A horizontal slice through the building looking down', 'An orthographic flat view of an exterior or interior wall', 'A vertical slice from foundation to roof', 'A diagram of utility routing under the slab'],
        correct: 1
      },
      {
        question: 'What do closely spaced contour lines on a site plan indicate?',
        options: ['A flat, gently sloping area', 'A steep slope', 'Underground utilities', 'A paved surface'],
        correct: 1
      },
      {
        question: 'What is the purpose of as-built drawings?',
        options: ['They are submitted before construction begins for permit approval', 'They record all changes from the original design made during construction', 'They show the original architect\'s design intent only', 'They are used only by the structural engineer'],
        correct: 1
      },
      {
        question: 'A section drawing is best described as:',
        options: ['A horizontal slice at 4 feet above the floor looking down', 'A flat orthographic view of the building exterior', 'A vertical slice through the building showing construction from foundation to roof', 'A detail drawing at large scale'],
        correct: 2
      },
      {
        question: 'A "submittal" in construction refers to:',
        options: ['A permit application to the city', 'Shop drawings, product data, or samples submitted to the architect for approval before ordering or installing', 'A daily report from the superintendent', 'An invoice submitted to the owner for payment'],
        correct: 1
      },
      {
        question: 'When using an architectural scale ruler on a drawing printed at a non-standard size, you should:',
        options: ['Use the stated scale on the title block', 'Use a standard ruler and convert', 'Use the printed graphic scale bar on the drawing', 'Ask the architect to confirm all dimensions by phone'],
        correct: 2
      },
      {
        question: 'In a drawing set, which sheet type (prefix) contains HVAC ductwork layouts?',
        options: ['A (Architectural)', 'P (Plumbing)', 'M (Mechanical)', 'E (Electrical)'],
        correct: 2
      },
      {
        question: 'Architectural dimensions are often measured to the:',
        options: ['Centerline of the structural steel', 'Face of the finish surface', 'Face of the structural system (concrete, CMU, steel)', 'Outside face of the foundation wall'],
        correct: 1
      },
      {
        question: 'What does a "detail bubble" on a floor plan reference?',
        options: ['A window schedule entry', 'A separate, larger-scale drawing showing exact construction of a connection or assembly', 'A revision cloud indicating a changed area', 'The location of a mechanical chase'],
        correct: 1
      },
      {
        question: 'BIM (Building Information Modeling) is primarily used in construction for:',
        options: ['Creating 2D permit drawings faster', 'Detecting clashes between mechanical, electrical, plumbing, and structural systems in 3D before field installation', 'Tracking subcontractor payments digitally', 'Generating material cost estimates automatically'],
        correct: 1
      },
      {
        question: 'Property setbacks on a site plan define:',
        options: ['The elevation of the finished floor above sea level', 'The required minimum distances between structures and property lines', 'The grading plan for stormwater management', 'Easements for public utility access'],
        correct: 1
      },
      {
        question: 'In a construction drawing set, what does "FFE" stand for and why is it important on a site plan?',
        options: ['Final Finish Elevation — used for interior design specifications', 'Finished Floor Elevation — the elevation of the first floor above sea level, critical for ensuring proper drainage away from the building', 'Foundation Frame Elevation — the height of the foundation above grade', 'Fixed Feature Element — a non-removable architectural component'],
        correct: 1
      }
    ]
  },
  {
    id: 'auto-diagnostics-201',
    category: 'Automotive & Mechanics',
    title: 'Engine Diagnostics & Repair 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Advance beyond basic maintenance into systematic engine diagnostics, OBD-II scan tool operation, and fundamental repair procedures. This course covers how modern engines manage performance, how to interpret diagnostic trouble codes, and how to perform structured diagnostic tests to identify mechanical and electronic faults accurately.',
    lessons: [
      {
        title: 'Engine Management Systems & OBD-II',
        content: `Modern vehicles are controlled by sophisticated electronic systems. Understanding how the engine management system operates is the foundation of accurate diagnosis—without it, technicians replace parts based on guesswork rather than evidence.

**The Engine Control Module (ECM):**

The **Engine Control Module** (also called ECU or PCM—Powertrain Control Module) is the central computer managing engine operation. The ECM continuously receives data from dozens of sensors and adjusts outputs (fuel injectors, ignition timing, idle speed, variable valve timing) to optimize performance, emissions, and fuel economy.

**Key Input Sensors:**

- **Mass Air Flow (MAF) Sensor**: Measures the mass of air entering the engine in grams per second. The ECM uses this data to calculate fuel delivery. A contaminated MAF sensor is a common cause of rough running and poor fuel economy.
- **Manifold Absolute Pressure (MAP) Sensor**: Measures intake manifold vacuum/pressure to calculate engine load. Used on many vehicles instead of or alongside the MAF.
- **Oxygen Sensors (O2 / Lambda)**: Located in the exhaust, these sensors measure oxygen content to determine if the air-fuel mixture is rich (too much fuel) or lean (too little fuel). **Upstream** sensors (before catalytic converter) provide feedback for fuel control; **downstream** sensors monitor catalytic converter efficiency.
- **Throttle Position Sensor (TPS)**: Measures throttle plate angle. Used to detect acceleration and deceleration events for fuel delivery adjustments.
- **Crankshaft Position Sensor (CKP)**: Generates a pulsed signal as the crankshaft rotates, allowing the ECM to calculate engine RPM and piston position for ignition timing.
- **Camshaft Position Sensor (CMP)**: Used to identify which cylinder is on the power stroke—essential for sequential fuel injection and variable valve timing systems.
- **Engine Coolant Temperature (ECT) Sensor**: Tells the ECM the engine temperature. Cold engine = richer mixture and higher idle; warm engine = normal closed-loop operation.

**OBD-II (On-Board Diagnostics, Generation 2):**

Since 1996, all US-market vehicles are required to have a standardized **OBD-II** diagnostic interface. The 16-pin **Data Link Connector (DLC)** is typically located under the dashboard on the driver's side. Any compliant scan tool can connect to any vehicle through this port.

**Closed Loop vs. Open Loop:**

- **Open Loop**: Engine is cold or under heavy load; ECM ignores O2 sensor feedback and uses pre-programmed fuel maps.
- **Closed Loop**: Engine is at operating temperature; ECM actively adjusts fuel delivery based on O2 sensor readings. Most efficient and lowest emission state.

**Fuel Trim:**

**Fuel trim** is the ECM's real-time adjustment to the base fuel map in response to O2 sensor feedback. It is one of the most diagnostically useful data PIDs available on a scan tool.

- **Short Term Fuel Trim (STFT)**: Immediate, rapid corrections—changes second to second based on the O2 sensor signal. Normal range: ±10%.
- **Long Term Fuel Trim (LTFT)**: Learned correction stored in memory to account for persistent changes (aging injectors, fuel pressure drift, air leaks). Normal range: ±10%.
- **High positive fuel trim** (e.g., +20%): ECM is adding fuel; the engine is running lean. Possible causes: vacuum leak, weak fuel pump, clogged injectors, dirty MAF sensor.
- **High negative fuel trim** (e.g., -20%): ECM is reducing fuel; the engine is running rich. Possible causes: leaking injector, high fuel pressure, faulty coolant temp sensor reading cold.

Fuel trim is a foundational diagnostic tool. Always check STFT and LTFT when diagnosing driveability complaints or lean/rich DTCs before replacing parts.`
      },
      {
        title: 'Diagnostic Trouble Codes & Scan Tool Operation',
        content: `The ability to accurately read, interpret, and act on **Diagnostic Trouble Codes (DTCs)** separates systematic technicians from parts-changers. A code is a clue, not a diagnosis—it tells you which circuit or system is out of range, not which part has failed.

**DTC Structure:**

OBD-II codes follow a standardized 5-character format:

- **First character** (letter): System
  - P = Powertrain (engine, transmission)
  - B = Body
  - C = Chassis
  - U = Network/Communication
- **Second character** (digit): 0 = SAE generic (all manufacturers); 1, 2, 3 = Manufacturer-specific
- **Third character** (digit): Sub-system (1 = fuel/air metering, 2 = injector circuit, 3 = ignition, 4 = emissions, 5 = speed/idle, 6 = PCM, 7–9 = transmission)
- **Fourth and fifth characters**: Specific fault number

**Examples:**
- P0300 — Random/Multiple Cylinder Misfire Detected
- P0171 — System Too Lean (Bank 1)
- P0420 — Catalyst System Efficiency Below Threshold (Bank 1)
- P0128 — Coolant Temperature Below Thermostat Regulating Temperature

**Scan Tool Operation:**

A professional scan tool does far more than read codes. Essential functions include:

- **Read/Clear DTCs**: Read stored (hard) codes, pending codes (not yet matured to stored), and permanent codes (cannot be cleared until monitor passes).
- **Live Data / PID Monitoring**: View real-time sensor values. Compare actual vs. expected values. For example, a MAF reading of 2 g/s at 2,000 RPM when 8–12 g/s is expected indicates a MAF fault or intake air leak.
- **Freeze Frame Data**: A snapshot of sensor values at the moment a DTC was set. Reveals engine conditions when the fault occurred—invaluable for intermittent problems.
- **Readiness Monitors**: Shows which OBD-II self-tests (monitors) have completed. Required for emissions testing. Eight standard monitors include catalyst, O2 sensor, EVAP, EGR, and misfire.
- **Bi-Directional Controls**: On advanced scan tools, allows commands to actuators—turn on fuel pump, activate EGR valve, command injectors—to test component function without disassembly.

**Diagnostic Strategy:**

Follow this sequence rather than replacing the sensor associated with the code:
1. Record all DTCs and freeze frame data
2. Research the DTC—understand what the code means and what conditions set it
3. Inspect visually (wiring, connectors, obvious damage)
4. Test the circuit with a multimeter (voltage, resistance, continuity)
5. Compare live data to specifications
6. Confirm the diagnosis before ordering parts

**OBD-II Readiness Monitors:**

The OBD-II system runs a series of self-diagnostic tests called **readiness monitors** to evaluate the performance of emissions-related systems. Eight standard monitors include:
- **Misfire monitor**: Detects cylinder misfires by monitoring crankshaft deceleration
- **Fuel system monitor**: Evaluates fuel trim performance
- **Comprehensive component monitor**: Checks sensors and actuators
- **Catalyst monitor**: Tests catalytic converter efficiency by comparing upstream and downstream O2 sensor activity
- **Evaporative (EVAP) system monitor**: Checks the fuel vapor recovery system for leaks
- **O2 sensor monitor**: Tests O2 sensor response times
- **O2 sensor heater monitor**: Verifies O2 sensor heaters warm the sensors quickly
- **EGR system monitor**: Tests exhaust gas recirculation performance

Readiness monitors are critical for **emissions testing (smog checks)**—a vehicle cannot pass emissions inspection if too many monitors are incomplete ("not ready"). Monitors reset when a DTC is cleared; they complete as the vehicle is driven through specific drive cycles. The OBD-II **drive cycle** is a specific pattern of acceleration, cruise, deceleration, and idle that satisfies conditions for each monitor to run and complete.`
      },
      {
        title: 'Engine Mechanical Diagnostics & Common Repairs',
        content: `Electronic diagnosis is only part of the picture. Engine mechanical condition determines whether electronic systems can perform correctly. A technician must be able to evaluate engine mechanical health and perform fundamental repair procedures.

**Compression Testing:**

A **compression test** measures the pressure built inside each cylinder during the compression stroke, revealing the condition of piston rings, valves, and head gaskets.

**Procedure:**
1. Warm the engine to operating temperature
2. Remove all spark plugs
3. Disable fuel injection (remove fuel pump fuse or fuel injector fuse)
4. Thread the compression gauge adapter into each spark plug hole
5. Crank the engine for 4–6 revolutions per cylinder
6. Record reading for each cylinder

**Interpreting Results:**
- Most engines: minimum 100 PSI, typically 150–200 PSI
- Variation between cylinders should not exceed 15–20%
- **Low compression on adjacent cylinders**: Often indicates a blown head gasket between those cylinders
- **Low compression on one cylinder**: Perform a **wet test**—add 1 tablespoon of engine oil through the spark plug hole and retest. If compression rises significantly, rings are worn. If no change, valves are the likely cause.

**Vacuum Testing:**

Engine vacuum (measured with a vacuum gauge at the intake manifold) provides a snapshot of engine mechanical condition:
- Normal idle vacuum: 17–21 in. Hg (inches of mercury)
- Low steady vacuum: Late ignition timing or throttle body restriction
- Fluctuating vacuum (rhythmic): Valve leak (burnt valve)
- Gradually dropping vacuum: Restricted exhaust (clogged catalytic converter)
- Low vacuum that rises with RPM: Worn piston rings

**Cooling System Diagnostics:**

Overheating is one of the most common and damaging engine problems. Common causes:
- **Low coolant level**: Check for external leaks first (hoses, water pump, radiator, heater core)
- **Thermostat stuck closed**: Engine overheats quickly; rapid warm-up, then overheating
- **Radiator or heater core restriction**: Verify coolant flow; perform a flush if needed
- **Water pump failure**: Check for bearing noise, shaft play, or impeller damage
- **Head gasket failure**: Look for white exhaust smoke (coolant burning), bubbles in coolant reservoir, milky oil, or overheating with no visible leak. Confirm with a **block leak tester** (chemical test kit for combustion gases in the cooling system).

**Timing Belt/Chain Inspection:**

Interference engines (most modern engines) require timing belt or chain replacement at specified intervals—typically 60,000–100,000 miles for belts. A snapped timing belt on an interference engine causes **catastrophic valve and piston damage**. Always check the manufacturer's maintenance schedule and inspect belt condition (cracking, fraying, glazing) during any major service.`
      }
    ],
    test: [
      {
        question: 'The upstream oxygen sensor\'s primary function is to:',
        options: ['Monitor catalytic converter efficiency', 'Provide fuel control feedback to the ECM', 'Measure intake air temperature', 'Detect exhaust backpressure'],
        correct: 1
      },
      {
        question: 'In an OBD-II trouble code, the second character "0" indicates:',
        options: ['The code is critical and must be repaired immediately', 'The code is SAE generic (applies to all manufacturers)', 'The system is operating in open loop', 'The code is related to the transmission'],
        correct: 1
      },
      {
        question: 'During a compression wet test, if compression rises significantly after adding oil to the cylinder, this indicates:',
        options: ['A blown head gasket', 'Worn or damaged piston rings', 'A faulty valve', 'Incorrect ignition timing'],
        correct: 1
      },
      {
        question: 'A vacuum reading that gradually drops at idle and rises with engine RPM typically indicates:',
        options: ['A burnt exhaust valve', 'Worn piston rings', 'A restricted exhaust system', 'Low ignition timing'],
        correct: 1
      },
      {
        question: 'What does freeze frame data captured by a scan tool show?',
        options: ['The current live sensor values at time of scanning', 'Sensor values at the moment a DTC was set', 'The history of all repairs performed on the vehicle', 'Manufacturer service bulletin recommendations'],
        correct: 1
      },
      {
        question: 'A Mass Air Flow (MAF) sensor measures:',
        options: ['The oxygen content in the exhaust stream', 'The mass of air entering the engine in grams per second', 'Intake manifold vacuum at idle', 'Coolant temperature at the intake manifold'],
        correct: 1
      },
      {
        question: 'When an engine is operating in "closed loop," this means:',
        options: ['The throttle plate is fully closed at idle', 'The ECM actively adjusts fuel delivery based on oxygen sensor feedback', 'All emissions monitors have completed their self-tests', 'The transmission is in a locked torque converter mode'],
        correct: 1
      },
      {
        question: 'A Long Term Fuel Trim (LTFT) reading of +22% most likely indicates the engine is running:',
        options: ['Rich — too much fuel being delivered', 'Lean — the ECM is adding fuel to compensate for insufficient fuel delivery', 'At peak efficiency', 'With a faulty crankshaft position sensor'],
        correct: 1
      },
      {
        question: 'What is the Data Link Connector (DLC) used for?',
        options: ['Connecting the battery to the starter motor', 'Connecting an OBD-II scan tool to communicate with the vehicle\'s control modules', 'Linking the ECM to the transmission control module', 'Powering the instrument cluster'],
        correct: 1
      },
      {
        question: 'A P0300 diagnostic trouble code means:',
        options: ['Oxygen sensor circuit malfunction (Bank 1)', 'Random/Multiple Cylinder Misfire Detected', 'Catalytic converter efficiency below threshold', 'Coolant temperature below thermostat regulating temperature'],
        correct: 1
      },
      {
        question: 'During a compression test, low compression on two adjacent cylinders most often indicates:',
        options: ['Worn piston rings on both cylinders', 'A blown head gasket between those cylinders', 'Incorrect ignition timing', 'A faulty crankshaft position sensor'],
        correct: 1
      },
      {
        question: 'Normal engine idle vacuum on a healthy engine typically reads:',
        options: ['5–10 in. Hg', '10–15 in. Hg', '17–21 in. Hg', '25–30 in. Hg'],
        correct: 2
      },
      {
        question: 'What symptom is most consistent with a thermostat stuck in the closed position?',
        options: ['Engine takes very long to warm up; runs cooler than normal', 'Engine overheats quickly after warm-up begins', 'Engine idle is rough but temperature is normal', 'Engine starts hard in cold weather'],
        correct: 1
      },
      {
        question: 'The Camshaft Position Sensor (CMP) is critical for:',
        options: ['Calculating engine RPM from crankshaft rotation', 'Identifying which cylinder is on the power stroke for sequential injection and variable valve timing', 'Measuring intake air temperature', 'Monitoring exhaust gas recirculation flow'],
        correct: 1
      },
      {
        question: 'A "pending code" on an OBD-II scan tool means:',
        options: ['The code has been stored long enough to illuminate the check engine light', 'A fault has been detected but has not yet matured into a stored code', 'The code cannot be cleared until a monitor passes', 'The vehicle has passed all readiness monitors'],
        correct: 1
      },
      {
        question: 'On an interference engine, a snapped timing belt causes:',
        options: ['Only the engine to stall — no mechanical damage', 'The engine to run rough until restarted', 'Catastrophic valve and piston damage', 'Loss of power steering and alternator function'],
        correct: 2
      },
      {
        question: 'Bi-directional controls on an advanced scan tool allow a technician to:',
        options: ['Read codes from two vehicles simultaneously', 'Command actuators (fuel pump, EGR valve, injectors) to test their function without disassembly', 'Update the ECM software over a wireless connection', 'Reset the transmission adaptive memory remotely'],
        correct: 1
      },
      {
        question: 'White exhaust smoke on a warmed-up engine most likely indicates:',
        options: ['Rich fuel mixture from a faulty injector', 'Coolant entering the combustion chamber (head gasket failure)', 'Oil burning from worn valve stem seals', 'Normal condensation on a cold morning'],
        correct: 1
      },
      {
        question: 'What does the "wet test" step in a compression test reveal when compression rises after adding oil?',
        options: ['The head gasket is blown between cylinders', 'The valves are burnt or not sealing', 'The piston rings are worn and not sealing', 'The intake manifold gasket is leaking'],
        correct: 2
      },
      {
        question: 'The OBD-II drive cycle is important after clearing diagnostic codes because:',
        options: ['It resets the ECM to factory settings', 'It allows readiness monitors to run and complete so the vehicle can pass an emissions inspection', 'It recalibrates the oxygen sensors to eliminate fuel trim errors', 'It is required by law within 30 days of any repair'],
        correct: 1
      }
    ]
  },
  {
    id: 'hvac-troubleshooting-201',
    category: 'HVAC & Plumbing',
    title: 'Advanced HVAC Troubleshooting 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Move beyond HVAC fundamentals into systematic fault diagnosis for heating and cooling systems. This course covers refrigeration cycle troubleshooting, electrical diagnosis of HVAC components, and advanced diagnostic techniques using manifold gauges, clamp meters, and system pressure-temperature charts to identify and resolve real-world HVAC failures.',
    lessons: [
      {
        title: 'Refrigeration Cycle Analysis & Pressure Diagnostics',
        content: `Accurate HVAC troubleshooting requires a deep understanding of the refrigeration cycle and the ability to interpret **manifold gauge** readings in the context of system operating conditions. Pressure readings alone mean nothing without understanding expected values and the relationship between pressure and temperature.

**Refrigeration Cycle Review:**

The vapor-compression refrigeration cycle consists of four processes:

1. **Compression**: Low-pressure refrigerant vapor is compressed by the compressor into high-pressure, high-temperature vapor. The compressor is the "heart" of the system.
2. **Condensation**: High-pressure vapor enters the **condenser coil** (outdoor unit), releases heat to outdoor air, and condenses into high-pressure liquid. The condenser fan moves air across the coil.
3. **Expansion**: High-pressure liquid passes through the **metering device** (TXV—Thermostatic Expansion Valve, or fixed orifice). Pressure drops dramatically, causing the refrigerant to flash partially to vapor and drop in temperature.
4. **Evaporation**: Low-pressure, cold refrigerant mixture enters the **evaporator coil** (indoor unit), absorbs heat from indoor air, and evaporates into vapor. This is what cools the indoor air.

**Manifold Gauge Set:**

A **manifold gauge set** connects to the system via service ports:
- **Low-side gauge (blue)**: Measures suction pressure (low side). Connected to the suction line service port.
- **High-side gauge (red)**: Measures discharge pressure (high side). Connected to the discharge line service port.
- **Center port**: Used for adding or recovering refrigerant.

**Pressure-Temperature (P-T) Charts:**

Each refrigerant has a unique relationship between pressure and temperature at saturation. Technicians use **P-T charts** (or app-based calculators) to convert gauge pressure to saturation temperature. The difference between actual and expected values reveals system faults.

**Common Gauge Reading Scenarios for R-410A:**

- **Normal cooling operation**: Low side ~115–130 PSI (approximately 42–48°F evaporating), High side ~375–425 PSI (approximately 115–125°F condensing)
- **Low refrigerant charge**: Low side low, high side low, large superheat at suction line
- **Overcharged**: Low side high, high side high, low superheat, possible slugging
- **Restricted metering device (TXV stuck closed)**: Low side very low (or in a vacuum), high side normal or high, large superheat
- **Failed compressor (not pumping)**: Low side rises, high side drops—pressures equalize

**Superheat and Subcooling:**

- **Superheat**: Temperature of vapor above saturation temperature at a given pressure. Measured at the suction line. Target superheat varies by system (typically 10–20°F for fixed orifice, 8–12°F for TXV). High superheat = undercharge or restricted metering device. Low superheat = overcharge.
- **Subcooling**: Temperature drop of liquid below saturation temperature at the condensing pressure. Measured at liquid line. Target typically 10–15°F. High subcooling = overcharge or restriction. Low subcooling = undercharge.`
      },
      {
        title: 'Electrical Diagnosis of HVAC Components',
        content: `Most HVAC service calls involve electrical faults. A technician who can efficiently diagnose capacitors, contactors, motor windings, control boards, and thermostats will resolve calls faster and more accurately than one who relies on parts substitution.

**Capacitors:**

Capacitors are among the most commonly replaced HVAC components. There are two types:

- **Run Capacitors**: Provide a continuous phase shift to single-phase motors (compressor, condenser fan, indoor blower). Without a functioning run capacitor, motors run hot, draw excessive amperage, and fail prematurely.
- **Start Capacitors**: Provide extra torque during startup only, then are switched out of the circuit by a relay. Found on hard-start kit installations.

**Dual-Run Capacitors** contain two capacitors in one can—one for the compressor (typically 35–55 µF) and one for the condenser fan motor (typically 5–7.5 µF). Terminals are labeled **C** (common), **HERM** (hermetic/compressor), and **FAN**.

**Testing Capacitors:**

Use a digital multimeter with capacitance (µF) testing function:
1. Discharge the capacitor first—use a 20,000-ohm resistor across the terminals or use the insulated handle of a screwdriver momentarily (brief arc is normal).
2. Measure µF. A reading more than ±6% from the rated value indicates a failing capacitor.
3. Visually inspect for bulging top, oil leakage, or burn marks.

**Contactors:**

The **contactor** is an electromechanical switch that connects line voltage (240V) to the compressor and condenser fan motor when energized by the 24V control circuit from the thermostat.

**Inspecting Contactors:**
- Check contact points for pitting, burning, or welding (stuck closed). Pitted contacts cause voltage drop and motor damage.
- Measure voltage drop across closed contacts—should be less than 0.5V. Higher drop indicates worn contacts.
- Check coil resistance (typically 20–60 ohms for 24V coils). Open coil = contactor won't pull in.

**Motor Winding Tests:**

Using a multimeter on the resistance (Ω) setting:
- **Continuity between all winding terminals**: Open reading (OL) on any winding = failed motor winding.
- **Continuity between any terminal and ground (motor frame)**: Any reading other than OL = grounded winding—motor must be replaced.
- **Start, Run, Common terminals**: On PSC motors, resistance from Start to Common is highest, Common to Run is lowest, Start to Run equals the sum of S-C and R-C readings.

**Control Boards and Thermostats:**

Modern air handlers and heat pumps use electronic control boards. Diagnostic strategy:
1. Check for LED fault codes on the board (code chart usually on inside of access panel).
2. Verify 24V control voltage is present at the transformer secondary (R terminal).
3. Verify correct 24V signals are arriving at the board from the thermostat (Y for cooling, W for heat, G for fan).
4. Use a multimeter to check output voltages to downstream loads (contactor coil, reversing valve, etc.).`
      },
      {
        title: 'System Airflow, Duct Diagnostics & Heat Pump Operation',
        content: `Refrigerant and electrical issues often get attention, but **airflow problems** are among the most common causes of HVAC inefficiency and comfort complaints. Heat pump systems also require specific diagnostic knowledge beyond standard air conditioning.

**Airflow Fundamentals:**

Proper airflow is measured in **CFM (cubic feet per minute)**. Residential systems are designed for approximately **400 CFM per ton of cooling capacity**. A 3-ton system requires approximately 1,200 CFM.

Insufficient airflow causes:
- **Evaporator coil freeze-up**: Low airflow reduces heat transfer; the coil gets too cold and ice forms. Ice further blocks airflow, creating a progressive failure.
- **High head pressure**: Inadequate condenser airflow prevents heat rejection, causing high discharge pressure and tripping high-pressure safeties.
- **Comfort complaints**: Uneven temperatures, humidity problems.

**Diagnosing Airflow Problems:**

- **Dirty air filter**: The most common cause. Change every 1–3 months for standard filters; monthly during heavy use.
- **Dirty evaporator coil**: Bypassed filters allow dust to coat the coil, insulating it. Clean with coil cleaner per manufacturer instructions.
- **Blocked return or supply registers**: Furniture, closed dampers, or debris restricting airflow.
- **Duct leakage**: The DOE estimates that 20–30% of conditioned air is lost to duct leaks in typical homes. Pressurize the duct system with a blower door or duct blaster to measure total leakage.
- **Duct undersizing**: Use Manual D calculations to verify duct sizing is adequate for system capacity.

**Static Pressure Testing:**

**External Static Pressure (ESP)** measures the total resistance the blower must overcome. Use a **magnehelic gauge** or **digital manometer**:
- Measure static pressure in the return plenum (negative) and supply plenum (positive)
- Total ESP = |return reading| + supply reading
- Most residential systems are designed for 0.5 in. w.c. (inches of water column) ESP
- ESP above 0.8 in. w.c. indicates a restrictive duct system or dirty filter/coil

**Heat Pump Operation:**

Heat pumps move heat rather than generating it, making them 200–400% efficient (expressed as **COP—Coefficient of Performance**).

- **Cooling mode**: Functions identically to a standard air conditioner. Reversing valve directs refrigerant flow so indoor coil = evaporator.
- **Heating mode**: **Reversing valve** (energized or de-energized depending on manufacturer) reverses refrigerant flow. Outdoor coil becomes the evaporator (extracts heat from outdoor air); indoor coil becomes condenser (releases heat indoors).

**Heat Pump Defrost:**

In heating mode, the outdoor coil can frost over when outdoor temperatures are below approximately 40°F with high humidity. The **defrost control board** initiates defrost cycles based on time, temperature, or pressure sensing:
- System briefly reverses to cooling mode to send hot refrigerant through outdoor coil
- Outdoor fan shuts off
- Auxiliary/emergency heat may energize to prevent cold air from blowing indoors
- Defrost terminates when coil temperature sensor reaches approximately 57–60°F`
      }
    ],
    test: [
      {
        question: 'In the refrigeration cycle, the component responsible for dropping refrigerant pressure from high to low side is the:',
        options: ['Compressor', 'Condenser', 'Metering device (TXV or orifice)', 'Evaporator'],
        correct: 2
      },
      {
        question: 'High superheat combined with low suction pressure most likely indicates:',
        options: ['An overcharged system', 'A low refrigerant charge or restricted metering device', 'A failed condenser fan motor', 'A grounded compressor winding'],
        correct: 1
      },
      {
        question: 'When testing a dual-run capacitor, which terminals are labeled on the capacitor?',
        options: ['L1, L2, and Ground', 'C, HERM, and FAN', 'Start, Run, and Common', 'R, Y, and G'],
        correct: 1
      },
      {
        question: 'External Static Pressure above 0.8 in. w.c. in a residential system most likely indicates:',
        options: ['An overcharged refrigerant system', 'A restrictive duct system, dirty filter, or dirty coil', 'A failed compressor capacitor', 'Incorrect thermostat wiring'],
        correct: 1
      },
      {
        question: 'During heat pump defrost mode, the outdoor fan:',
        options: ['Runs at high speed to melt frost faster', 'Reverses direction to blow warm air upward', 'Shuts off while the refrigerant cycle reverses to heat the outdoor coil', 'Continues running normally'],
        correct: 2
      },
      {
        question: 'In the refrigeration cycle, the evaporator coil is located:',
        options: ['In the outdoor unit, releasing heat to the outside air', 'In the outdoor unit, compressing the refrigerant', 'In the indoor unit, absorbing heat from the indoor air', 'At the metering device, controlling refrigerant flow'],
        correct: 2
      },
      {
        question: 'Normal R-410A suction (low-side) pressure during cooling operation is approximately:',
        options: ['30–50 PSI', '75–100 PSI', '115–130 PSI', '200–250 PSI'],
        correct: 2
      },
      {
        question: 'A failed compressor that is "not pumping" would show manifold gauge readings where:',
        options: ['Both high and low side pressures rise above normal', 'Low side rises and high side drops until pressures equalize', 'High side becomes very high and low side becomes very low', 'Both pressures remain at normal operating ranges'],
        correct: 1
      },
      {
        question: 'A dual-run capacitor\'s HERM terminal connects to:',
        options: ['The condenser fan motor', 'The compressor (hermetic motor)', 'The control board common terminal', 'The contactor coil'],
        correct: 1
      },
      {
        question: 'When testing a run capacitor with a multimeter, a failing capacitor is indicated when the measured µF is:',
        options: ['Exactly at the rated value', 'More than ±6% from the rated value', 'Any reading below 10 µF', 'Any reading above 50 µF'],
        correct: 1
      },
      {
        question: 'A residential HVAC system is designed to deliver approximately how many CFM per ton of cooling capacity?',
        options: ['200 CFM per ton', '300 CFM per ton', '400 CFM per ton', '500 CFM per ton'],
        correct: 2
      },
      {
        question: 'Evaporator coil freeze-up is most commonly caused by:',
        options: ['Overcharged refrigerant system', 'Insufficient airflow across the evaporator coil', 'A faulty reversing valve in heat pump mode', 'High outdoor ambient temperature'],
        correct: 1
      },
      {
        question: 'What does high subcooling combined with high suction pressure indicate?',
        options: ['Low refrigerant charge', 'Restricted metering device (TXV stuck closed)', 'Overcharged refrigerant system', 'Failed outdoor fan motor'],
        correct: 2
      },
      {
        question: 'External Static Pressure (ESP) is measured using a:',
        options: ['Clamp meter around the supply duct', 'Magnehelic gauge or digital manometer at the return and supply plenums', 'Manifold gauge set connected to the service ports', 'Infrared thermometer at the supply register'],
        correct: 1
      },
      {
        question: 'Line voltage (240V) is present in HVAC equipment at the contactor. Before working on it, you should:',
        options: ['Discharge the capacitor only', 'Disconnect power at the breaker AND at the disconnect box', 'Turn off the thermostat to de-energize the unit', 'Wear rubber-soled shoes as sufficient protection'],
        correct: 1
      },
      {
        question: 'A contactor\'s contact points that are pitted or burnt indicate:',
        options: ['The coil has failed and needs replacement', 'Normal wear that does not affect performance', 'Worn contacts that cause voltage drop and motor damage', 'The contactor is stuck in the open position'],
        correct: 2
      },
      {
        question: 'What does a heat pump\'s reversing valve do in heating mode?',
        options: ['Increases the speed of the compressor for higher output', 'Reverses refrigerant flow so the outdoor coil becomes the evaporator and absorbs heat from outdoor air', 'Bypasses the metering device to increase refrigerant flow', 'Activates the auxiliary electric heating strips automatically'],
        correct: 1
      },
      {
        question: 'A continuity reading between a motor winding terminal and the motor frame (ground) indicates:',
        options: ['Normal motor winding resistance', 'A grounded winding — the motor must be replaced', 'The motor needs a new capacitor', 'The motor is drawing too much current'],
        correct: 1
      },
      {
        question: 'To verify a 24V control signal is present at a contactor coil, you would use:',
        options: ['A clamp-on ammeter around the coil lead', 'A multimeter set to AC voltage across the coil terminals', 'A manifold gauge on the suction line', 'A temperature gun aimed at the contactor'],
        correct: 1
      },
      {
        question: 'In HVAC, COP (Coefficient of Performance) for a heat pump indicates that:',
        options: ['The system is 100% efficient at all outdoor temperatures', 'The system delivers 2–4 times more heat energy than the electrical energy it consumes', 'A COP below 1.0 is acceptable in heating mode', 'COP only applies to cooling mode — not heating mode'],
        correct: 1
      }
    ]
  },
  {
    id: 'welding-advanced-201',
    category: 'Welding & Fabrication',
    title: 'Advanced Welding Techniques 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Advance from introductory welding concepts to mastery of MIG, TIG, and structural welding techniques. This course covers weld joint design, welding procedure specifications, distortion control, and weld quality inspection methods used in professional fabrication and structural welding applications.',
    lessons: [
      {
        title: 'MIG Welding Process Mastery & Parameter Selection',
        content: `**MIG welding (GMAW—Gas Metal Arc Welding)** is the most widely used welding process in manufacturing and fabrication due to its speed, versatility, and relatively easy learning curve. However, producing consistently high-quality MIG welds requires precise parameter control and a thorough understanding of the process variables.

**The GMAW Process:**

In MIG welding, a continuously fed solid wire electrode is melted by an electric arc in a shielding gas envelope. The wire serves as both the electrode and the filler metal. The shielding gas protects the molten weld pool from atmospheric contamination (oxygen and nitrogen cause porosity and embrittlement).

**Key Process Variables:**

**Wire Feed Speed (WFS)**: Controls amperage in MIG welding (unlike SMAW/stick, where amperage is set directly). Higher WFS = more amperage = more heat input. WFS is measured in inches per minute (IPM). For ER70S-6 wire on mild steel: 3/16" material typically requires 250–350 IPM.

**Voltage**: Controls arc length. Higher voltage = longer arc = flatter, wider bead. Lower voltage = shorter arc = higher, narrower bead. Voltage and WFS must be balanced. A rough starting point: set WFS first, then adjust voltage until the arc sounds like consistent bacon frying—a steady crackling with no popping or stuttering.

**Wire Diameter**:
- 0.023"–0.024": Thin sheet metal (22–24 gauge), auto body
- 0.030": Light to medium fabrication (18 gauge–1/4")
- 0.035": Most common for general fabrication (3/16"–3/8")
- 0.045"–0.052": Heavy plate fabrication, multipass welds

**Travel Speed**: Affects bead width, penetration, and heat input. Slow travel = wide, convex bead, potential burn-through on thin material. Fast travel = narrow, undercut prone bead with low penetration.

**Transfer Modes:**

- **Short Circuit Transfer (Low WFS/Voltage)**: Wire actually touches and shorts in the puddle repeatedly (~100–200 times/second). Low heat input, suitable for thin material and out-of-position welding. Spatter is common.
- **Globular Transfer (Intermediate)**: Large, irregular drops transfer across the arc. High spatter, not preferred.
- **Spray Transfer (High WFS/Voltage + Argon-rich gas)**: Fine droplets spray from wire tip—smooth, high-quality welds with minimal spatter. Only achievable in flat/horizontal position with at least 80% Argon shielding gas.
- **Pulse Transfer (Synergic MIG)**: Computer-controlled alternation between high peak current (spray) and low background current. Achieves spray quality in all positions with reduced heat input.

**Shielding Gas Selection:**
- **C25 (75% Argon / 25% CO₂)**: Most common for mild steel. Good balance of penetration, bead appearance, and spatter.
- **100% CO₂**: Deeper penetration, more spatter, lower cost. Used in structural work.
- **C10 (90/10)**: Reduced spatter, better for thinner material than C25.
- **100% Argon**: Used for aluminum only (with ER4043 or ER5356 wire).`
      },
      {
        title: 'TIG Welding Technique & Joint Preparation',
        content: `**TIG welding (GTAW—Gas Tungsten Arc Welding)** produces the highest quality, most precise welds of any arc welding process. It is the process of choice for critical applications in aerospace, nuclear, pharmaceutical equipment, and food-grade fabrication where weld quality, appearance, and metallurgical integrity are paramount.

**The GTAW Process:**

In TIG welding, a non-consumable **tungsten electrode** strikes an arc with the base material. The tungsten is not consumed—it serves only as the arc source. A **separate filler rod** is fed manually by the welder's non-torch hand. Shielding is provided by 100% Argon gas (or Argon/Helium mixtures for higher heat).

**Tungsten Electrode Selection:**

Electrode composition significantly affects arc stability and electrode life:
- **EWTh-2 (2% Thoriated, red band)**: Traditional choice for DC welding steel, stainless. Excellent arc starts, long life. Radioactive—some shops have moved away.
- **EWLa-1.5 (1.5% Lanthanated, gold band)**: Non-radioactive, performs well on both AC and DC. Good arc starts, long life. Increasingly preferred replacement for thoriated.
- **EWZr-1 (1% Zirconiated, white band)**: Preferred for AC welding of aluminum. Maintains a balled tip under AC current.
- **EWP (Pure, green band)**: Used for AC aluminum welding, lower arc starts quality than zirconiated.

**Electrode Preparation:**

- **DC welding (steel, stainless, titanium)**: Grind tungsten to a sharp point. Grind marks should run lengthwise along the electrode, not circumferentially (circumferential grind marks cause arc wander).
- **AC welding (aluminum)**: Allow tungsten to ball naturally from the AC current before welding. Do not grind to a point.

**Amperage and Polarity:**

- **DCEN (Direct Current Electrode Negative)**: Used for steel, stainless steel, titanium, copper. Deep penetration, narrow bead.
- **AC (Alternating Current)**: Required for aluminum. The DCEP half-cycle provides **cathodic cleaning**—breaks up the refractory aluminum oxide layer that forms on aluminum surfaces and would prevent fusion.

**Joint Preparation for TIG:**

TIG requires the cleanest joint preparation of any welding process:
1. **Remove all mill scale, rust, paint, and coatings** from both the joint and surrounding area (at least 1" from the joint on each side).
2. **Degrease thoroughly** with acetone or an approved solvent. Wipe with clean lint-free cloths in one direction—not back and forth, which redistributes contamination.
3. **Aluminum specific**: After degreasing, use a dedicated stainless steel wire brush (never used on carbon steel) to remove the oxide layer immediately before welding.
4. **Fit-up**: TIG requires tighter fit-up than MIG. Gaps and misalignment that MIG can bridge often cannot be overcome with TIG.

**Filler Metal Selection:**
- **ER70S-2 or ER70S-6**: Mild steel
- **ER308L, ER316L**: 304/316 stainless steel
- **ER4043**: Aluminum (best for general use, crack-resistant)
- **ER5356**: Aluminum requiring higher strength or anodizing afterward`
      },
      {
        title: 'Weld Quality, Inspection & Distortion Control',
        content: `Producing a weld is only half the job—verifying its quality and preventing distortion that compromises fit and function are equally important professional skills. Structural and code-quality welding requires systematic inspection and documented quality control.

**Weld Defects and Their Causes:**

**Porosity**: Gas pockets trapped in the weld metal. Appears as round holes in the weld face or cross-section.
- Causes: Contaminated base metal (oil, moisture, rust), contaminated filler, insufficient shielding gas coverage, drafts disturbing gas shield, gas regulator/hose problems.
- Prevention: Clean base metal and filler, check gas flow (15–25 CFH typical), shield from drafts.

**Undercutting**: A groove melted into the base metal at the weld toe that is not filled by weld metal.
- Causes: Excessive amperage, incorrect electrode angle, too-fast travel speed.
- Prevention: Reduce amperage, adjust travel angle, slow travel speed. Undercut is a stress concentration and is rejectable by most codes above 1/32".

**Incomplete Fusion**: Weld metal that does not fuse completely to the base metal or to a previous weld pass.
- Causes: Insufficient heat, incorrect technique (arc not directed at joint root), excessive travel speed.
- Prevention: Ensure arc is directed at the leading edge of the puddle, increase heat input.

**Cracks**: The most serious weld defect. Cracks can propagate under service loads and cause catastrophic failure.
- **Hot cracks**: Form at elevated temperature during solidification. Often caused by high-sulfur base metal, too convex a bead (high width-to-depth ratio), or high restraint.
- **Cold cracks (hydrogen-induced)**: Form after cooling, often delayed by hours or days. Common in high-strength steels. Prevention: preheat, low-hydrogen electrodes (E7018 stored in rod oven), PWHT.

**Weld Inspection Methods:**

- **Visual Inspection (VT)**: First line of inspection. Check for surface defects, profile, size, length, and location. Many codes (AWS D1.1 Structural Welding Code) specify minimum visual inspection requirements.
- **Liquid Penetrant Testing (PT)**: Applied to weld surface; penetrates surface-open cracks and voids. Developer draws penetrant to surface for visual detection. Used on non-magnetic materials.
- **Magnetic Particle Testing (MT)**: Magnetic field applied to ferromagnetic materials; magnetic particles collect at flux leakage points indicating cracks and voids. Detects surface and near-surface defects.
- **Ultrasonic Testing (UT)**: High-frequency sound waves transmitted through the weld; reflections from internal flaws are detected. Can find internal defects not accessible by surface methods.
- **Radiographic Testing (RT)**: X-ray or gamma-ray examination produces an image showing internal weld structure. Most definitive for volumetric defects.

**Distortion Control:**

Weld distortion occurs because heat causes expansion during welding and contraction during cooling. Shrinkage is greater in the weld area than surrounding metal, causing bending and warping.

Control strategies:
- **Presetting**: Tack weld components in an offset position so distortion pulls them into final alignment.
- **Backstep welding**: Weld in short segments in the direction opposite to overall progression.
- **Balanced welding**: For symmetrical joints, alternate weld passes on opposite sides of a neutral axis.
- **Minimum heat input**: Use the smallest electrode or wire, and the lowest amperage that achieves complete fusion.
- **Clamping and fixturing**: Fixtures restrain distortion during welding and cooling—but note that high restraint increases cracking risk.`
      }
    ],
    test: [
      {
        question: 'In MIG welding, wire feed speed primarily controls:',
        options: ['Arc length', 'Amperage / heat input', 'Travel speed', 'Shielding gas flow rate'],
        correct: 1
      },
      {
        question: 'Which shielding gas mixture is required to achieve spray transfer mode in MIG welding?',
        options: ['100% CO₂', '75% Argon / 25% CO₂ (C25)', 'At least 80% Argon', '50% Argon / 50% CO₂'],
        correct: 2
      },
      {
        question: 'AC polarity is required for TIG welding aluminum because the DCEP half-cycle provides:',
        options: ['Deeper penetration into thick material', 'Cathodic cleaning that breaks up the aluminum oxide layer', 'A more stable arc at lower amperages', 'Better fusion to stainless steel backing'],
        correct: 1
      },
      {
        question: 'Undercutting in a weld is a problem because it:',
        options: ['Adds extra filler metal that must be ground flush', 'Creates a stress concentration at the weld toe', 'Increases the weld size beyond specification', 'Causes porosity in the weld metal'],
        correct: 1
      },
      {
        question: 'Which non-destructive testing method uses high-frequency sound waves to detect internal weld defects?',
        options: ['Magnetic Particle Testing (MT)', 'Liquid Penetrant Testing (PT)', 'Ultrasonic Testing (UT)', 'Visual Testing (VT)'],
        correct: 2
      },
      {
        question: 'In MIG welding, the "bacon frying" sound indicates:',
        options: ['Excessive spatter from too high a voltage', 'A properly balanced arc with correct voltage and wire feed speed', 'A contaminated gas line reducing shielding', 'A wire sticking to the contact tip'],
        correct: 1
      },
      {
        question: 'Spray transfer mode in MIG welding requires at least what percentage of Argon in the shielding gas?',
        options: ['50%', '60%', '75%', '80%'],
        correct: 3
      },
      {
        question: 'For TIG welding on DC (steel, stainless), tungsten electrodes should be prepared with:',
        options: ['A balled tip from AC current heating', 'A sharp point ground lengthwise along the electrode', 'A flat blunt end', 'No preparation — use as received from the package'],
        correct: 1
      },
      {
        question: 'Which TIG filler metal is used for welding 304 stainless steel?',
        options: ['ER70S-6', 'ER4043', 'ER308L', 'ER5356'],
        correct: 2
      },
      {
        question: 'Cold cracks (hydrogen-induced cracking) in high-strength steel welds are prevented by:',
        options: ['Welding faster to reduce heat input', 'Using preheating, low-hydrogen electrodes, and post-weld heat treatment', 'Increasing voltage to improve penetration', 'Using 100% CO₂ shielding gas for deeper penetration'],
        correct: 1
      },
      {
        question: 'Hot cracks in welds during solidification are often caused by:',
        options: ['Insufficient preheat of the base metal', 'Too convex a weld bead with a high width-to-depth ratio, or high-sulfur base metal', 'Moisture contamination of the shielding gas', 'Too fast a travel speed reducing heat input'],
        correct: 1
      },
      {
        question: 'Pulse MIG (synergic MIG) transfer mode is beneficial because it:',
        options: ['Requires no shielding gas', 'Achieves spray-quality welds in all positions with reduced heat input', 'Eliminates the need for wire feed speed adjustment', 'Only works on aluminum and not on steel'],
        correct: 1
      },
      {
        question: 'Liquid Penetrant Testing (PT) is preferred over Magnetic Particle Testing (MT) for:',
        options: ['Finding deep internal defects', 'Non-magnetic materials like austenitic stainless steel and aluminum', 'Ferromagnetic steel in structural applications', 'Checking weld bead profile and size'],
        correct: 1
      },
      {
        question: 'In a weld symbol on a drawing, a symbol placed BELOW the reference line indicates the weld should be placed:',
        options: ['On the other side (away from the arrow)', 'On the arrow side of the joint', 'All around the joint (field weld)', 'On both sides of the joint'],
        correct: 1
      },
      {
        question: 'Backstep welding is a distortion control technique where:',
        options: ['The welder steps backward while laying the bead', 'Short weld segments are deposited in the direction opposite to overall progression', 'Weld passes are alternated on opposite sides of the joint', 'The weld is presettled before tacking'],
        correct: 1
      },
      {
        question: 'The AWS D1.1 code is the standard governing:',
        options: ['Structural Steel Welding', 'Aluminum welding in aerospace applications', 'Pipeline girth weld qualification', 'Resistance spot welding in automotive manufacturing'],
        correct: 0
      },
      {
        question: 'Using 0.023" wire diameter in MIG welding is most appropriate for:',
        options: ['Heavy plate fabrication over 1/2 inch thick', 'General fabrication on 3/16" to 3/8" material', 'Thin sheet metal and auto body work (22–24 gauge)', 'Structural multipass welds'],
        correct: 2
      },
      {
        question: 'Incomplete fusion in a weld is primarily caused by:',
        options: ['Excessive heat input and too-slow travel speed', 'Insufficient heat or the arc not being directed at the joint root/leading edge of the puddle', 'Contaminated shielding gas causing porosity', 'Too-high wire feed speed in MIG welding'],
        correct: 1
      },
      {
        question: 'When TIG welding aluminum, the AC DCEP half-cycle provides cathodic cleaning. This is important because:',
        options: ['It prevents the tungsten from overheating', 'It breaks up the refractory aluminum oxide layer that would otherwise prevent fusion', 'It provides deeper penetration than DCEN', 'It allows the use of a pointed tungsten tip'],
        correct: 1
      },
      {
        question: 'In a welding procedure specification (WPS), what is a Procedure Qualification Record (PQR)?',
        options: ['A written welding procedure approved by the engineer', 'Test data from welding a test coupon that supports and validates the WPS', 'A welder\'s personal certification record maintained by the employer', 'An AWS D1.1 pre-qualified joint detail that requires no testing'],
        correct: 1
      }
    ]
  },
  {
    id: 'electrical-wiring-201',
    category: 'Electrical',
    title: 'Residential Wiring & NEC Code 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Build on electrical safety fundamentals to understand residential wiring systems, NEC (National Electrical Code) requirements, and hands-on wiring procedures. This course covers service entrance components, branch circuit wiring, outlet and switch installation, GFCI/AFCI protection requirements, and how to read and apply NEC code articles relevant to residential work.',
    lessons: [
      {
        title: 'Residential Service Entrance & Panel Fundamentals',
        content: `The **electrical service entrance** is where utility power enters the building and is distributed to branch circuits. Understanding the service entrance is fundamental to any residential electrical work and is required knowledge for safely working around panel equipment.

**Service Entrance Components:**

**Service Drop**: The utility company's conductors running from the utility pole to the building. These are utility-owned and always energized—never work near service drop conductors without utility involvement.

**Service Entrance Conductors**: Run from the service drop attachment point (weather head/service mast) down to the **electric meter**. The meter socket is utility-owned. Everything on the load side of the meter is the customer's (and electrician's) responsibility.

**Main Disconnect**: Required by NEC 230.70 to be installed at a readily accessible location. In residential settings, this is almost always the **main breaker** in the load center (panel). The main breaker interrupts both ungrounded (hot) conductors simultaneously.

**Load Center (Breaker Panel):**

The load center receives the service entrance conductors and distributes power to branch circuits. Key components:

- **Busbars**: Two hot busbars (each 120V to neutral, 240V between them) run vertically through the center of the panel. Circuit breakers clip onto these bars.
- **Neutral bar (grounded conductor bar)**: White/gray neutral wires terminate here. At the main panel, neutral bar is bonded to the ground bar and to the service entrance neutral conductor.
- **Ground bar (grounding conductor bar)**: Equipment grounding conductors (bare copper, green) terminate here.
- **Main bonding jumper**: Connects the neutral bar to the panel enclosure and equipment ground system. This bond only exists at the main panel—NOT at sub-panels (NEC 250.24).

**Service Sizing (NEC Article 220):**

Most modern homes have 200-amp, 240/120V single-phase service. Service size is determined by load calculations:
- General lighting load: 3 VA per square foot of living area
- Small appliance circuits: 1,500 VA per required circuit (minimum 2 circuits for kitchen)
- Laundry circuit: 1,500 VA
- Specific appliances: nameplate ratings

**Understanding 240V Circuits:**

240V circuits (for ranges, dryers, HVAC, water heaters) use **both hot legs** of the panel. A double-pole breaker connects to both busbars, providing 240V across the two hot conductors. The circuit may or may not include a neutral depending on the load.

**NEC Wire Sizing (Table 310.12):**

- 15A circuit: 14 AWG copper minimum
- 20A circuit: 12 AWG copper minimum
- 30A circuit: 10 AWG copper minimum
- 40A circuit: 8 AWG copper minimum
- 50A circuit: 6 AWG copper minimum

**Always verify local jurisdiction amendments**—the NEC is a model code. Many jurisdictions (especially California with Title 24, and others) adopt the NEC with local amendments.`
      },
      {
        title: 'Branch Circuit Wiring Methods & Device Installation',
        content: `Branch circuits are the individual circuits that run from the panel to outlets, switches, and fixtures throughout the home. Correct wiring methods, proper connections, and compliance with NEC requirements are critical for safe, code-compliant installations.

**Cable Types:**

**NM-B (Non-Metallic Sheathed Cable / "Romex")**: Most common residential wiring method. Approved for indoor, dry locations in wood-framed construction. The "-B" designation indicates 90°C rated conductors (required by NEC since 2000 edition). NM cable must be protected from physical damage—required to be stapled within 12" of boxes and every 4.5 feet along runs. Not permitted in areas subject to physical damage, wet or damp locations, or in commercial occupancies (in most jurisdictions).

**MC Cable (Metal Clad)**: Flexible metal armor surrounds the conductors. More physical protection than NM. Required in some commercial applications and jurisdictions that don't permit NM.

**EMT (Electrical Metallic Tubing)**: Rigid conduit used where physical protection is required or in exposed applications. Conductors are pulled through after installation. Provides excellent physical protection and the metal conduit serves as the equipment ground path (when properly connected).

**Wiring Methods for Specific Locations:**
- Garage: NM permitted in walls, not in exposed locations. Must have GFCI protection (NEC 210.8).
- Attic/Basement: NM permitted. Guard strips or running boards required when within 6 feet of attic hatch.
- Outdoor/Wet: Requires wet-rated cable (UF-B—Underground Feeder) or conductors in weatherproof conduit.
- Underground: Minimum burial depth 24" for UF-B direct burial, 12" in conduit (NEC Table 300.5).

**Box Fill Calculations (NEC 314.16):**

Every electrical box has a maximum fill capacity in cubic inches. Overfilled boxes can damage wires and connections. Count all conductors:
- Each current-carrying conductor: 2.0 cu in (14 AWG) or 2.25 cu in (12 AWG)
- Equipment grounding conductors: count as one conductor total
- Devices (switches, receptacles): count as 2 conductors each
- Cable clamps: count as one conductor

**Receptacle (Outlet) Installation:**

- Use the screw terminals, NOT the quick-wire "push-in" (backstab) holes. Backstab connections fail more frequently and create fire hazards.
- **Hot** (black) to brass-colored screw; **Neutral** (white) to silver screw; **Ground** (bare/green) to green screw.
- Verify polarity with a plug-in outlet tester before covering.
- Receptacle height: typically 12–18" AFF (above finished floor) per local practice; NEC specifies coverage, not height.

**Switch Installation:**

Switches control the hot conductor only—never the neutral. A single-pole switch breaks the hot leg. **3-way switches** (used when a light is controlled from two locations) require a 3-conductor cable (with ground) between the two switch locations. The common terminal (black screw) connects to the hot from the panel or to the fixture; the traveler terminals (brass screws) connect to the traveler wires running between the two switches.`
      },
      {
        title: 'GFCI, AFCI, and NEC Protection Requirements',
        content: `Two of the most significant advances in residential electrical safety in the past 50 years are **Ground Fault Circuit Interrupter (GFCI)** protection and **Arc Fault Circuit Interrupter (AFCI)** protection. Understanding where each is required, how they work, and how to install them correctly is essential knowledge for any residential electrician.

**Ground Fault Circuit Interrupters (GFCI):**

A **ground fault** occurs when current finds an unintended path to ground—including through a human body. As little as 5–10 milliamps (mA) through the heart can cause ventricular fibrillation. Standard circuit breakers do not trip fast enough or at low enough current to prevent electrocution.

**How GFCI Works:**

A GFCI continuously monitors the difference between current on the hot and neutral conductors. In a properly functioning circuit, these are equal. If current leaks to ground (even a few milliamps), the GFCI detects the imbalance and trips within 1/40th of a second—fast enough to prevent electrocution.

**GFCI Protection Requirements (NEC 210.8):**

GFCI protection is required at:
- **Bathrooms**: All receptacles
- **Garages**: All receptacles, including ceiling outlets (except dedicated outlets for garage door openers in the ceiling and certain receptacles not readily accessible)
- **Crawl spaces**: All receptacles
- **Unfinished basements**: All receptacles (with exceptions for dedicated appliance receptacles)
- **Kitchens**: All receptacles serving countertop surfaces within 6 feet of a sink
- **Outdoors**: All receptacles
- **Boathouses**: All receptacles
- **Swimming pools, hot tubs, spas**: Specific requirements in NEC Article 680
- **Rooftops**: All receptacles
- **Laundry and utility sinks**: All receptacles within 6 feet

**GFCI Wiring:**

GFCI receptacles have two sets of terminals: **LINE** (from panel) and **LOAD** (to protect downstream receptacles). Wiring the load side extends GFCI protection to additional outlets on the same circuit—they will display "GFCI Protected" labels when installed this way. This is a code-compliant and cost-effective method.

**Arc Fault Circuit Interrupters (AFCI):**

**Arc faults** are a leading cause of residential electrical fires. Unlike the sudden dead short that trips a standard breaker, arcing creates intense heat (~10,000°F) at the arc point that can ignite surrounding materials over time—without ever drawing enough current to trip a conventional breaker.

Arcing commonly occurs in:
- Damaged or deteriorated wire insulation
- Loose connections at devices or in junction boxes
- Damaged cords pinched by furniture

**How AFCI Works:**

AFCI circuit breakers use sophisticated electronics to detect the distinctive current waveform signature of arcing and trip the circuit before fire can start.

**AFCI Requirements (NEC 210.12):**

Since the 2014 NEC, AFCI protection is required for all 120V, 15A and 20A branch circuits supplying:
- Bedrooms (required since 1999 NEC)
- All other areas of the dwelling unit (2014+ NEC): living rooms, dining rooms, kitchens, laundry areas, hallways—essentially the entire house

**Combination AFCI (CAFCI)** breakers protect against both series and parallel arcing and are now required in most applications.

**Dual-Function GFCI/AFCI Breakers:**

For circuits requiring both GFCI and AFCI protection (e.g., a kitchen circuit in a newer NEC jurisdiction), **combination breakers** provide both functions in a single device—simplifying compliance and installation.

**Testing Requirements:**

- All GFCI devices must be tested monthly using the TEST button
- Document that test button trips the circuit and RESET restores it
- If a GFCI fails to trip when tested, replace immediately
- AFCI breakers have a test button; press monthly to confirm operation`
      }
    ],
    test: [
      {
        question: 'Per NEC, what is the minimum wire gauge for a 20-amp branch circuit using copper conductors?',
        options: ['14 AWG', '12 AWG', '10 AWG', '8 AWG'],
        correct: 1
      },
      {
        question: 'The main bonding jumper (connecting neutral to ground) is permitted ONLY at the:',
        options: ['Sub-panel closest to the load', 'Main disconnect / main panel', 'First outlet on each circuit', 'Electric meter enclosure'],
        correct: 1
      },
      {
        question: 'GFCI protection detects current imbalance as low as how many milliamps to prevent electrocution?',
        options: ['50 mA', '25 mA', '10 mA', '4–6 mA'],
        correct: 3
      },
      {
        question: 'When wiring a receptacle, the black (hot) wire connects to:',
        options: ['The silver-colored screw', 'The brass-colored screw', 'The green screw', 'Either screw—polarity does not matter'],
        correct: 1
      },
      {
        question: 'Arc Fault Circuit Interrupters (AFCIs) primarily protect against:',
        options: ['Ground faults through the human body', 'Overloaded circuits drawing excessive amperage', 'Arcing that can cause fires without tripping standard breakers', 'Voltage surges from lightning or utility events'],
        correct: 2
      },
      {
        question: 'The NEC requires a minimum burial depth of how many inches for UF-B cable in direct burial applications?',
        options: ['6 inches', '12 inches', '18 inches', '24 inches'],
        correct: 3
      },
      {
        question: 'NM-B cable (Romex) must be stapled within how many inches of an electrical box?',
        options: ['6 inches', '8 inches', '12 inches', '18 inches'],
        correct: 2
      },
      {
        question: 'When wiring a standard receptacle, the neutral (white) wire connects to:',
        options: ['The brass-colored screw', 'The green screw', 'The silver-colored screw', 'Either screw — polarity does not matter for outlets'],
        correct: 2
      },
      {
        question: 'The "main bonding jumper" in a residential electrical panel connects:',
        options: ['The two hot busbars together for 240V circuits', 'The neutral bar to the panel enclosure and equipment ground system', 'The main breaker to the meter socket', 'The sub-panel neutral to the sub-panel ground bar'],
        correct: 1
      },
      {
        question: 'A 240V circuit for an electric dryer uses:',
        options: ['A single-pole breaker with one hot conductor', 'Two hot busbars via a double-pole breaker', 'Three separate 120V circuits combined', 'A GFCI breaker as required for all appliances'],
        correct: 1
      },
      {
        question: 'GFCI protection is required in which of these locations per NEC 210.8?',
        options: ['Bedroom receptacles only', 'Unfinished basement receptacles', 'Interior hallway receptacles only', 'Dedicated appliance circuits in the kitchen'],
        correct: 1
      },
      {
        question: 'A GFCI receptacle\'s LOAD terminals are used to:',
        options: ['Connect the feed from the circuit panel', 'Extend GFCI protection to additional downstream outlets on the same circuit', 'Connect equipment grounding conductors only', 'Test the GFCI function electronically'],
        correct: 1
      },
      {
        question: 'Box fill calculations under NEC 314.16 count each device (switch or receptacle) as how many conductors?',
        options: ['Zero — devices are not counted', 'One conductor', 'Two conductors', 'Four conductors'],
        correct: 2
      },
      {
        question: 'A 3-way switch circuit uses what type of cable between the two switch locations?',
        options: ['14-2 NM (two conductors plus ground)', '14-3 NM (three conductors plus ground)', '12-2 NM with a separate ground wire', 'MC cable only — NM is not permitted for 3-way switches'],
        correct: 1
      },
      {
        question: 'Why are "backstab" (push-in) connections on receptacles considered poor practice?',
        options: ['They are not listed by UL and are illegal under NEC', 'They fail more frequently than screw terminal connections and create fire hazards', 'They can only be used on 15-amp outlets, not 20-amp', 'They require a special tool to install correctly'],
        correct: 1
      },
      {
        question: 'NM-B cable is NOT permitted in which of these locations?',
        options: ['Interior walls of a wood-framed home', 'Attic spaces', 'Wet or damp locations and areas subject to physical damage', 'Unfinished basement ceiling joists'],
        correct: 2
      },
      {
        question: 'The minimum copper wire gauge for a 15-amp residential branch circuit per NEC is:',
        options: ['#10 AWG', '#12 AWG', '#14 AWG', '#16 AWG'],
        correct: 2
      },
      {
        question: 'A ground fault occurs when current finds an unintended path to ground. As little as how many milliamps can cause ventricular fibrillation?',
        options: ['50–100 mA', '25–30 mA', '5–10 mA', '1–2 mA'],
        correct: 2
      },
      {
        question: 'The NEC article governing AFCI protection requirements for dwelling unit branch circuits is:',
        options: ['NEC 210.8', 'NEC 210.12', 'NEC 230.70', 'NEC 250.24'],
        correct: 1
      },
      {
        question: 'EMT (Electrical Metallic Tubing) provides an advantage over NM-B cable in that:',
        options: ['EMT is cheaper and faster to install in all residential applications', 'EMT provides superior physical protection and is required in exposed locations where NM-B is not permitted', 'EMT does not require a separate equipment grounding conductor', 'EMT can be installed in wet locations without any additional weatherproofing'],
        correct: 1
      }
    ]
  },
  {
    id: 'healthcare-patient-care-201',
    category: 'Healthcare Support',
    title: 'Patient Care & Vital Signs 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Advance beyond healthcare support fundamentals to develop practical skills in patient care assistance, accurate vital sign measurement, and recognition of abnormal findings. This course covers the measurement and interpretation of blood pressure, pulse, respiration, temperature, and oxygen saturation, as well as patient positioning, mobility assistance, and communication of clinical findings to nursing staff.',
    lessons: [
      {
        title: 'Vital Signs Measurement: Temperature, Pulse & Respiration',
        content: `**Vital signs** are objective measurements of the body's most basic functions. They are called vital because they are essential to life—deviations from normal ranges can signal developing medical emergencies. Accurate measurement and timely reporting of abnormal values are among the most critical skills for any healthcare support worker.

**Body Temperature:**

Temperature reflects the balance between heat production (metabolism, infection) and heat loss (sweating, radiation). Normal adult body temperature varies by site and individual, but a widely accepted range is **97.8°F–99.1°F (36.6°C–37.3°C) oral**.

**Routes of Measurement:**
- **Oral**: Most common in conscious, cooperative adults. Patient must not have eaten, drunk, or smoked in the past 15 minutes (affects reading). Hold thermometer under tongue in the posterior sublingual pocket.
- **Axillary (underarm)**: Least accurate, approximately 1°F lower than oral. Used when oral is contraindicated (confused patients, recent oral surgery).
- **Tympanic (ear)**: Fast and convenient. Requires correct technique—pull pinna up and back for adults, down and back for children under 3 to straighten the ear canal.
- **Rectal**: Most accurate core temperature; approximately 1°F higher than oral. Used in infants and when accuracy is critical.
- **Temporal artery**: Non-contact or slight contact on forehead. Fast and easy, accuracy varies by device and technique.

**Temperature Abnormalities:**
- **Fever (Pyrexia)**: Oral temperature above 100.4°F (38°C). Report immediately if above 103°F (39.4°C) in adults or any fever in immunocompromised patients or infants under 3 months.
- **Hypothermia**: Below 95°F (35°C). Medical emergency—call for nursing immediately.

**Pulse:**

The **pulse** reflects the heart rate—the number of times the heart contracts per minute—and can also reveal rhythm and strength (amplitude).

**Pulse Assessment:**
- Apply 2–3 fingers (never the thumb—it has its own pulse) over an artery and count beats
- **Radial pulse** (wrist, thumb side): Most common site for routine assessment
- **Apical pulse** (over heart, with stethoscope at 5th intercostal space, mid-clavicular line): Used when radial is weak, irregular, or for pediatric patients
- **Count for 60 seconds** if rhythm is irregular; 30 seconds × 2 if regular
- Note: rate, rhythm (regular vs. irregular), and strength (strong, weak, thready, bounding)

**Normal Ranges:**
- Newborn: 120–160 bpm
- Infant: 80–140 bpm
- Child: 70–120 bpm
- Adult: 60–100 bpm
- Well-conditioned athletes: 40–60 bpm (normal for them)

**Respirations:**

Count respiratory rate while the patient believes you are still taking their pulse—patients who know they are being observed tend to alter their breathing pattern.
- Count each rise of the chest as one breath for **60 seconds** (or 30 seconds × 2 if regular)
- Normal adult: **12–20 breaths per minute**
- Also note: depth (shallow vs. deep), rhythm, and any abnormal sounds (wheezing, stridor, gurgling)
- **Tachypnea**: >20 breaths/min (fever, pain, respiratory distress)
- **Bradypnea**: <12 breaths/min (narcotics, CNS depression)
- **Apnea**: Cessation of breathing—call for help immediately`
      },
      {
        title: 'Blood Pressure & Oxygen Saturation Measurement',
        content: `**Blood pressure** and **oxygen saturation** are among the most clinically significant vital signs. Errors in measurement technique lead to incorrect clinical decisions—patients may receive unnecessary medications or, more dangerously, a life-threatening condition may be missed.

**Blood Pressure (BP):**

Blood pressure is the force of blood against the walls of the arteries. It is reported as two numbers: **systolic** (pressure during heart contraction) over **diastolic** (pressure during heart relaxation), measured in **mmHg (millimeters of mercury)**.

**Normal BP**: Less than 120/80 mmHg
- Elevated: 120–129 / less than 80
- Stage 1 Hypertension: 130–139 / 80–89
- Stage 2 Hypertension: ≥140 / ≥90
- Hypertensive Crisis: >180 / >120 — report immediately
- Hypotension: Systolic below 90 mmHg — report immediately

**Manual Blood Pressure Technique (Auscultation Method):**

1. Patient should be seated and at rest for 5 minutes. Avoid measuring after exercise, caffeine, smoking, or emotional stress.
2. Position the arm at heart level (if arm is below heart, reading is falsely high; above heart, falsely low).
3. Select the correct cuff size: **Cuff bladder should encircle 80% of the arm circumference**. Too small = falsely high reading; too large = falsely low reading.
4. Apply the cuff with the bladder centered over the brachial artery, approximately 1 inch (2.5 cm) above the antecubital fossa.
5. Palpate the radial pulse while inflating—inflate to 30 mmHg above the point where the radial pulse disappears (estimated systolic).
6. Place stethoscope over the brachial artery in the antecubital fossa (not under the cuff).
7. Deflate at 2–3 mmHg per second.
8. **First Korotkoff sound** (tapping sound): Record as **systolic pressure**.
9. **Last Korotkoff sound** (when sounds disappear): Record as **diastolic pressure**.
10. Document: pressure, which arm, patient position, cuff size if non-standard.

**Common BP Measurement Errors:**
- Not waiting 5 minutes before measurement
- Arm not at heart level
- Incorrect cuff size
- Inflating too slowly (venous congestion causes falsely high reading)
- Not placing stethoscope directly on artery
- "White coat hypertension"—BP elevated due to anxiety in clinical settings

**Oxygen Saturation (SpO₂):**

**Pulse oximetry** measures the percentage of hemoglobin molecules in the arterial blood that are saturated with oxygen. A small sensor clips to the fingertip (or earlobe, toe) and uses light absorption at two wavelengths to distinguish oxygenated from deoxygenated hemoglobin.

**Normal SpO₂**: 95–100%
- 91–94%: Low normal—notify nursing staff
- ≤90%: Hypoxemia—urgent notification required
- <88%: Severe hypoxemia—immediate escalation

**Factors Affecting Accuracy:**
- **Nail polish** (especially dark colors): Remove or use earlobe probe
- **Cold extremities / vasoconstriction**: Poor perfusion to fingers reduces signal. Warm the hand or use earlobe.
- **Severe anemia**: SpO₂ can appear normal even with dangerously low oxygen-carrying capacity
- **Carbon monoxide poisoning**: Pulse oximeter cannot distinguish COHb from O₂Hb—may give falsely normal reading
- **Motion artifact**: Patient movement causes false readings. Wait for stable waveform.
- **Dark skin pigmentation**: Some older devices may read 2–4% higher than actual in patients with darker skin. Report any clinical inconsistency to the nurse.`
      },
      {
        title: 'Patient Mobility Assistance & Reporting Clinical Findings',
        content: `Healthcare support workers frequently assist patients with positioning and mobility. Safe patient handling prevents both patient injury and healthcare worker musculoskeletal injury—the most common occupational injury in healthcare. Equally important is accurately communicating clinical observations and vital sign findings to licensed nursing staff.

**Safe Patient Handling:**

**Back injury** accounts for more lost workdays in healthcare than any other industry injury. The Occupational Safety and Health Administration (OSHA) and The Joint Commission support **no-lift policies** in healthcare facilities, requiring the use of mechanical lifts and assistive devices whenever possible.

**Mechanical Lift Safety:**

- **Full-body (ceiling or floor) lifts**: For patients who cannot bear weight. Always have two staff members for floor lifts (one operating, one supporting patient).
- **Sit-to-stand lifts (stand assist)**: For patients who can partially bear weight but cannot stand independently. Patient must have adequate upper body and leg strength.
- **Transfer belts (gait belts)**: Provide a secure grip point during assisted transfers. Must be applied snugly at the waist. Never grab clothing for transfers.
- **Slide boards and transfer sheets**: Reduce friction during lateral transfers (bed to stretcher, bed to chair).

**Positioning Patients:**

Proper positioning prevents pressure injuries (**pressure ulcers/decubitus ulcers**), maintains airway patency, and supports recovery.

- **Supine (dorsal recumbent)**: Lying flat on back. Head of bed elevated 30–45° (HOB 30–45°) for patients on mechanical ventilation to prevent ventilator-associated pneumonia.
- **Fowler's position**: Supine with HOB elevated 45–60°. Semi-Fowler's: 15–45°. Used for patients with respiratory difficulty or during meals.
- **High Fowler's**: HOB 90° (sitting upright). Maximum respiratory support.
- **Lateral (side-lying)**: Reduces pressure on sacrum and heels. Alternate sides every 2 hours for patients who cannot reposition themselves.
- **Sims (semiprone)**: Lying at an angle between lateral and prone. Used for rectal procedures, enemas, and unconscious patients (allows drainage of secretions from the mouth).
- **Trendelenburg**: Bed tilted with head lower than feet. Rarely used; used for hypotension treatment in some protocols.
- **Reverse Trendelenburg**: Head higher than feet. Used during certain procedures.

**Pressure Injury Prevention:**

Inspect bony prominences (sacrum, heels, hips, ankles, elbows, occiput) with every repositioning. The **Braden Scale** quantifies pressure injury risk across six domains: sensory perception, moisture, activity, mobility, nutrition, and friction/shear. Score ≤18 indicates risk.

**Reporting Vital Signs and Observations (SBAR):**

All abnormal findings must be reported promptly to the supervising RN using a structured communication format. **SBAR** (Situation, Background, Assessment, Recommendation) is the evidence-based communication standard in healthcare:

- **Situation**: "I'm calling about Mr. Johnson in Room 412. His blood pressure is 82/50 and he's reporting dizziness."
- **Background**: "He's a 68-year-old admitted yesterday for a hip replacement. His baseline BP is around 130/80."
- **Assessment**: "I'm concerned he may be hypotensive."
- **Recommendation**: "I think he should be assessed immediately."

Never delay reporting out of fear—the nurse cannot act on information they don't have. Document all vital signs and the time they were taken, as well as the name of the nurse you reported to.`
      }
    ],
    test: [
      {
        question: 'The correct technique when counting respirations is to:',
        options: ['Tell the patient you are counting their breaths so they can breathe normally', 'Count while the patient believes you are still taking their pulse', 'Ask the patient to breathe deeply during the count', 'Count for only 15 seconds and multiply by 4 for efficiency'],
        correct: 1
      },
      {
        question: 'An adult blood pressure reading of 185/110 mmHg should be:',
        options: ['Documented and reported at the next scheduled check', 'Rechecked in 30 minutes before reporting', 'Reported immediately to nursing staff as a hypertensive crisis', 'Considered normal for elderly patients'],
        correct: 2
      },
      {
        question: 'A blood pressure cuff that is too small for the patient\'s arm will cause:',
        options: ['A falsely low blood pressure reading', 'A falsely high blood pressure reading', 'No difference in the reading', 'The diastolic to be accurate but the systolic to be low'],
        correct: 1
      },
      {
        question: 'Which oxygen saturation reading requires urgent notification of the nursing staff?',
        options: ['97%', '94%', '91%', '88% or below'],
        correct: 3
      },
      {
        question: 'SBAR is a communication tool in healthcare that stands for:',
        options: ['Safety, Background, Action, Resolution', 'Situation, Background, Assessment, Recommendation', 'Status, Baseline, Abnormality, Response', 'Summary, Brief, Alert, Report'],
        correct: 1
      },
      {
        question: 'Normal adult oral body temperature range is approximately:',
        options: ['95.0°F–97.0°F (35.0°C–36.1°C)', '97.8°F–99.1°F (36.6°C–37.3°C)', '99.5°F–101.0°F (37.5°C–38.3°C)', '100.5°F–102.0°F (38.1°C–38.9°C)'],
        correct: 1
      },
      {
        question: 'When measuring an adult\'s tympanic (ear) temperature, you should pull the pinna:',
        options: ['Down and back', 'Straight back with no angle', 'Up and back', 'Forward toward the face'],
        correct: 2
      },
      {
        question: 'A body temperature below 95°F (35°C) in an adult patient indicates:',
        options: ['A mild fever requiring monitoring', 'Hypothermia — a medical emergency requiring immediate nursing notification', 'Normal variation for elderly patients', 'An inaccurate thermometer reading that should be repeated'],
        correct: 1
      },
      {
        question: 'When counting a pulse rate, why should you never use your thumb?',
        options: ['The thumb is too thick to feel small arteries', 'The thumb has its own pulse that can be confused with the patient\'s pulse', 'OSHA regulations prohibit thumb contact with patients', 'The thumb applies too much pressure and collapses the artery'],
        correct: 1
      },
      {
        question: 'Normal adult respiratory rate is:',
        options: ['6–10 breaths per minute', '12–20 breaths per minute', '22–28 breaths per minute', '30–40 breaths per minute'],
        correct: 1
      },
      {
        question: 'A blood pressure cuff that is too LARGE for the patient\'s arm will cause:',
        options: ['A falsely high reading', 'A falsely low reading', 'No significant difference in the reading', 'The diastolic to be falsely high only'],
        correct: 1
      },
      {
        question: 'The First Korotkoff sound heard when deflating a blood pressure cuff represents:',
        options: ['The diastolic pressure', 'The systolic pressure', 'The mean arterial pressure', 'The pulse pressure'],
        correct: 1
      },
      {
        question: 'Pulse oximetry may give a falsely normal SpO₂ reading in a patient with:',
        options: ['Hypertension', 'Carbon monoxide poisoning', 'Severe dehydration', 'High fever'],
        correct: 1
      },
      {
        question: 'Fowler\'s position places the patient:',
        options: ['Flat on their back (supine)', 'Supine with head of bed elevated 45–60 degrees', 'Lying at an angle between lateral and prone (semiprone)', 'Head lower than feet (Trendelenburg)'],
        correct: 1
      },
      {
        question: 'The Braden Scale is used to assess a patient\'s risk for:',
        options: ['Falls during ambulation', 'Pressure injuries (pressure ulcers)', 'Aspiration during meals', 'Developing hospital-acquired infections'],
        correct: 1
      },
      {
        question: 'The WHO\'s "5 Moments for Hand Hygiene" specifies that hand hygiene is required:',
        options: ['Only before and after touching a patient', 'Before touching a patient, before clean procedures, after body fluid exposure, after touching a patient, and after touching patient surroundings', 'Only when gloves are not available', 'Only when the patient has a known infectious condition'],
        correct: 1
      },
      {
        question: 'When should a gait belt (transfer belt) be applied for an assisted patient transfer?',
        options: ['Over the patient\'s clothing loosely for comfort', 'Snugly around the waist — it provides a secure grip point during transfers', 'Around the patient\'s chest under the arms', 'Only when the patient weighs over 200 lbs'],
        correct: 1
      },
      {
        question: 'Lateral (side-lying) repositioning for immobile patients should occur at minimum every:',
        options: ['30 minutes', '1 hour', '2 hours', '4 hours'],
        correct: 2
      },
      {
        question: 'Tachypnea is defined as a respiratory rate greater than:',
        options: ['12 breaths per minute', '16 breaths per minute', '20 breaths per minute', '24 breaths per minute'],
        correct: 2
      },
      {
        question: 'The apical pulse is assessed using a stethoscope at the 5th intercostal space, mid-clavicular line. It is preferred over the radial pulse when:',
        options: ['The patient is ambulatory and active', 'The radial pulse is weak or irregular, or for pediatric patients', 'The patient is in a supine position only', 'A blood pressure reading is also needed simultaneously'],
        correct: 1
      }
    ]
  },
  {
    id: 'logistics-supply-chain-201',
    category: 'Logistics & Warehousing',
    title: 'Supply Chain Management 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Advance from warehouse operations fundamentals to a comprehensive understanding of supply chain strategy, transportation modes, inventory optimization techniques, and the technology systems that connect suppliers, warehouses, and customers. This course covers key performance indicators, demand forecasting, carrier selection, and how disruptions are managed in professional logistics environments.',
    lessons: [
      {
        title: 'Supply Chain Structure & Transportation Modes',
        content: `A **supply chain** is the entire network of organizations, people, activities, information, and resources involved in moving a product from raw material to end customer. Understanding how supply chains are structured and how goods move through them is essential knowledge for logistics professionals at every level.

**Supply Chain Tiers:**

Supply chains are described in terms of "tiers" relative to the final manufacturer or retailer:
- **Tier 1 Suppliers**: Direct suppliers who provide finished components or materials directly to the manufacturer (e.g., a seat manufacturer supplying an automotive plant).
- **Tier 2 Suppliers**: Supply materials or components to Tier 1 suppliers (e.g., a foam manufacturer supplying the seat maker).
- **Tier 3 Suppliers**: Supply raw materials to Tier 2 (e.g., a petroleum company supplying the foam manufacturer).

Supply chain disruptions frequently originate in lower tiers—events at a Tier 3 supplier in another country can cause production stoppages at the final manufacturer weeks later.

**Distribution Network Structures:**

- **Direct-to-consumer (DTC)**: Manufacturer ships directly to end customer. Efficient for e-commerce, eliminates middlemen.
- **Distribution Center (DC) model**: Manufacturer ships to regional DCs; DCs distribute to stores or customers. Enables local inventory positioning.
- **Cross-docking**: Inbound freight is sorted and transferred directly to outbound trailers with little or no storage. Reduces handling and storage costs. Requires precise timing coordination.

**Transportation Modes:**

Each mode has specific cost, speed, capacity, and reliability characteristics:

**Over-the-Road (OTR) Trucking:**
- **Full Truckload (FTL/TL)**: Shipper fills or pays for an entire trailer (~44,000 lbs, 2,500+ cu ft). Most cost-effective for large shipments.
- **Less-than-Truckload (LTL)**: Multiple shippers share trailer space. Carrier consolidates and breaks down loads at terminals. Slower but cost-effective for smaller shipments (150–10,000 lbs).
- **Parcel**: Small packages (typically under 150 lbs) via UPS, FedEx, USPS. Most expensive per pound but fastest for small quantities.

**Rail:** Low cost per ton-mile for heavy, bulk commodities (grain, coal, chemicals, automotive). Slow and not flexible for last-mile delivery.

**Ocean Freight:** The dominant mode for international trade. Containerized (20-foot or 40-foot TEU containers). Very low cost per unit but slow (typically 20–35 days transpacific). Subject to port congestion, weather, and geopolitical disruptions.

**Air Freight:** Fastest mode; 20–100× more expensive than ocean per unit. Used for high-value, time-sensitive, or perishable goods. Air cargo capacity is often in the belly of passenger aircraft.

**Intermodal:** Combines modes—most commonly rail + truck. Container moves by truck to rail terminal, then by rail for the long haul, then by truck for final delivery. Reduces cost vs. truck-only for long distances.

**Incoterms (International Commercial Terms):**

Incoterms, published by the International Chamber of Commerce (ICC), define the responsibilities, costs, and risk transfer points between buyer and seller in international trade. Key terms include:
- **FOB (Free on Board)**: Risk transfers when goods are loaded on the vessel at origin port. Buyer responsible for ocean freight and insurance.
- **CIF (Cost, Insurance, Freight)**: Seller pays freight and insurance to destination port.
- **DDP (Delivered Duty Paid)**: Seller responsible for all costs including import duties—maximum seller responsibility.`
      },
      {
        title: 'Inventory Optimization & Demand Forecasting',
        content: `Inventory is simultaneously a business asset and a cost center. Too little inventory causes **stockouts** (lost sales, production stoppages, unhappy customers). Too much inventory consumes cash, warehouse space, and increases obsolescence risk. Professional supply chain management seeks to continuously optimize this balance.

**Inventory Costs:**

Understanding the full cost of inventory goes beyond the purchase price:
- **Carrying costs (holding costs)**: Storage space, insurance, taxes, obsolescence risk, spoilage, and the **opportunity cost** of capital tied up in stock. Typically estimated at 20–35% of inventory value annually.
- **Ordering costs**: Administrative, processing, and transportation costs associated with placing and receiving orders.
- **Stockout costs**: Lost sales, expediting fees, customer defection, production downtime.

**Economic Order Quantity (EOQ):**

The **EOQ** formula calculates the order quantity that minimizes the total of ordering costs and carrying costs:

**EOQ = √(2DS/H)**
- D = Annual demand (units)
- S = Cost per order (ordering cost)
- H = Annual holding cost per unit

At the EOQ, ordering cost and holding cost are equal and total cost is minimized.

**Reorder Point (ROP):**

The **reorder point** is the inventory level that triggers placing a new order:

**ROP = (Average Daily Demand × Lead Time in Days) + Safety Stock**

**Safety stock** buffers against demand variability and supply variability during lead time. Higher variability = higher required safety stock.

**Demand Forecasting Methods:**

Accurate demand forecasting is the foundation of inventory optimization:

- **Moving Average**: Average of the last N periods of demand. Simple, smooths random variation, but lags in detecting trends. **Weighted Moving Average** gives more weight to recent periods.
- **Exponential Smoothing**: A formula that weights all historical data, with the most recent data receiving the highest weight (controlled by smoothing constant α, typically 0.1–0.3). More responsive to trends than simple moving average.
- **Seasonal Adjustment**: Adjust forecasts for known seasonal patterns. Calculate seasonal index (actual demand / average demand for the period), then deseasonalize forecast.
- **Collaborative Forecasting (CPFR)**: Collaborative Planning, Forecasting, and Replenishment—supplier and retailer share data and jointly develop forecasts. Reduces the **bullwhip effect** (demand signal amplification up the supply chain).

**ABC Analysis:**

Not all SKUs deserve equal management attention. **ABC classification** prioritizes inventory management effort:
- **A items** (~20% of SKUs, ~70–80% of annual dollar value): Tight control, frequent cycle counts, closer supplier relationships.
- **B items** (~30% of SKUs, ~15–25% of value): Moderate control.
- **C items** (~50% of SKUs, ~5% of value): Simple policies, larger safety stocks relative to demand, less frequent review.

**Just-in-Time (JIT) vs. Safety Stock Strategies:**

**JIT** aims to minimize inventory by receiving materials as close as possible to when they are needed. Reduces carrying costs but increases vulnerability to supply disruptions. **Safety stock** strategies accept higher carrying costs in exchange for service level resilience. The COVID-19 pandemic exposed the risks of over-reliance on JIT with lean supply chains—many companies are now moving toward "just-in-case" hybrid strategies.`
      },
      {
        title: 'Supply Chain Technology & KPI Management',
        content: `Modern supply chains are driven by technology systems that provide visibility, coordination, and data for decision-making. Logistics professionals must understand these systems and the key performance indicators (KPIs) used to measure supply chain effectiveness.

**Core Supply Chain Technology Systems:**

**Enterprise Resource Planning (ERP):**

An **ERP system** (SAP, Oracle, Microsoft Dynamics) integrates all business functions—purchasing, inventory, production, sales, finance, and HR—into a single database. For supply chain professionals:
- Purchase orders are created, approved, and tracked in the ERP
- Inventory positions are visible across the enterprise
- Supplier invoices are matched against POs and receipts (**3-way match**)
- Demand signals from sales flow to production planning and purchasing

**Transportation Management System (TMS):**

A **TMS** manages the transportation function:
- Carrier selection and rate shopping (compares carrier rates for a shipment)
- Load planning (optimizing how orders are grouped into shipments/loads)
- Route optimization
- Shipment tracking and event management
- Freight bill auditing and payment
- Carrier performance reporting

**Warehouse Management System (WMS):**

As covered in the Tier 1 course, a WMS manages warehouse operations. At an advanced level, WMS systems integrate with ERP for inventory accuracy and with TMS for outbound shipping coordination. Advanced WMS features include **slotting optimization** (placing high-velocity items closest to shipping docks), **labor management** (tracking picker productivity), and **yard management** (tracking trailer positions in the yard).

**Supply Chain Visibility Platforms:**

Real-time tracking of in-transit shipments using GPS, EDI (Electronic Data Interchange), carrier APIs, and IoT (Internet of Things) sensors. Allows proactive exception management—identifying delayed shipments before they cause stockouts.

**Electronic Data Interchange (EDI):**

**EDI** is the computer-to-computer exchange of standard business documents (purchase orders, invoices, advance shipping notices) between trading partners. Key EDI transaction sets:
- **EDI 850**: Purchase Order (buyer to supplier)
- **EDI 856**: Advance Ship Notice (ASN—supplier to buyer, prior to shipment arrival)
- **EDI 810**: Invoice (supplier to buyer)
- **EDI 940/945**: Warehouse shipping order and shipping advice

**Key Performance Indicators (KPIs):**

Measuring supply chain performance requires a balanced scorecard across cost, service, quality, and cycle time:

- **On-Time In-Full (OTIF)**: % of orders delivered to the customer on the promised date and with no quantity shortages. Major retailers (Walmart, Target) impose financial penalties for OTIF misses.
- **Order Cycle Time**: Time from customer order placement to delivery. Shorter is better for customer satisfaction.
- **Inventory Turns**: Annual cost of goods sold / average inventory value. Higher turns = more efficient use of working capital. Best-in-class varies by industry (grocery: 15–25 turns; automotive aftermarket: 4–8 turns).
- **Days of Supply (DOS)**: Current inventory / average daily demand. Represents how many days you can sell before stockout.
- **Perfect Order Rate**: % of orders that are on time, complete, damage-free, and with accurate documentation.
- **Freight Cost per Unit**: Total freight spend / units shipped. Tracks shipping efficiency.
- **Supplier On-Time Delivery**: % of inbound deliveries arriving on the promised date. Drives receiving planning and alerts to supplier reliability issues.`
      }
    ],
    test: [
      {
        question: 'Cross-docking differs from traditional warehousing in that it:',
        options: ['Stores inventory for 30-day periods before shipping', 'Transfers inbound freight directly to outbound trailers with little or no storage', 'Uses a single carrier for all inbound and outbound movements', 'Requires double the warehouse space for staging'],
        correct: 1
      },
      {
        question: 'In the EOQ formula EOQ = √(2DS/H), the variable "H" represents:',
        options: ['Annual demand in units', 'Order frequency per year', 'Annual holding (carrying) cost per unit', 'Lead time in hours'],
        correct: 2
      },
      {
        question: 'In ABC inventory analysis, "A items" are characterized by:',
        options: ['Representing approximately 50% of SKUs and 5% of annual value', 'Representing approximately 20% of SKUs but 70-80% of annual dollar value', 'Being the slowest-moving items requiring the most storage space', 'Items that are ordered only once per year'],
        correct: 1
      },
      {
        question: 'EDI 856 is the transaction set for:',
        options: ['Purchase Orders from buyer to supplier', 'Invoices from supplier to buyer', 'Advance Ship Notice from supplier to buyer', 'Warehouse shipping orders'],
        correct: 2
      },
      {
        question: 'OTIF stands for:',
        options: ['Over-the-road, Truck, Intermodal, Freight', 'On Time In Full', 'Outbound Transportation and Inbound Fulfillment', 'Operational Tracking and Inventory Forecasting'],
        correct: 1
      },
      {
        question: 'In supply chain terminology, a Tier 2 supplier provides materials or components to:',
        options: ['The end customer directly', 'The final manufacturer directly', 'Tier 1 suppliers who then supply the manufacturer', 'Government logistics agencies'],
        correct: 2
      },
      {
        question: 'Full Truckload (FTL) shipping is most cost-effective when:',
        options: ['Shipping small packages under 150 lbs', 'A shipper has enough freight to fill or nearly fill a trailer (~44,000 lbs)', 'Multiple shippers need to share costs on a single lane', 'Shipment must arrive within 24 hours'],
        correct: 1
      },
      {
        question: 'Under the Incoterm "DDP" (Delivered Duty Paid), who is responsible for all costs including import duties?',
        options: ['The buyer at the destination port', 'The freight broker arranging transport', 'The seller — maximum seller responsibility', 'A third-party customs broker'],
        correct: 2
      },
      {
        question: 'The Reorder Point (ROP) formula is:',
        options: ['Annual Demand / Number of Orders Per Year', '(Average Daily Demand × Lead Time) + Safety Stock', 'EOQ × Holding Cost / Ordering Cost', 'Current Inventory − Average Daily Usage'],
        correct: 1
      },
      {
        question: 'The "bullwhip effect" in supply chains describes:',
        options: ['The increased cost of air freight versus ocean freight', 'The amplification of demand signal variability as you move up the supply chain from retailer to raw material supplier', 'The delay in transit time caused by port congestion', 'The cost penalty applied by retailers for OTIF misses'],
        correct: 1
      },
      {
        question: 'ABC inventory analysis classifies "C items" as:',
        options: ['The highest-value 20% of SKUs requiring the tightest control', 'About 50% of SKUs accounting for roughly 5% of annual dollar value', 'Items that have been recalled or are on hold', 'Items that turn over more than 20 times per year'],
        correct: 1
      },
      {
        question: 'EDI 850 is the transaction set for:',
        options: ['Advance Ship Notice from supplier to buyer', 'Invoice from supplier to buyer', 'Purchase Order from buyer to supplier', 'Warehouse shipping order'],
        correct: 2
      },
      {
        question: 'Inventory Turns is calculated as:',
        options: ['Current Inventory ÷ Average Daily Demand', 'Annual Cost of Goods Sold ÷ Average Inventory Value', 'Total Orders Shipped ÷ Total SKU Count', 'Annual Freight Spend ÷ Units Shipped'],
        correct: 1
      },
      {
        question: 'A Transportation Management System (TMS) is primarily used to:',
        options: ['Manage warehouse picking, packing, and put-away operations', 'Manage carrier selection, load planning, route optimization, and freight billing', 'Integrate purchasing, inventory, and finance across the enterprise', 'Track employee performance and labor productivity'],
        correct: 1
      },
      {
        question: 'What is the primary risk of an over-reliance on Just-in-Time (JIT) inventory strategy, as exposed during the COVID-19 pandemic?',
        options: ['Higher carrying costs due to excess safety stock', 'Increased vulnerability to supply disruptions — little buffer when suppliers fail', 'Higher ordering costs from frequent small purchases', 'Reduced warehouse efficiency from continuous replenishment'],
        correct: 1
      },
      {
        question: 'In ocean freight, a TEU refers to:',
        options: ['A truck equivalent unit used to calculate road freight', 'A Twenty-foot Equivalent Unit — the standard container measurement', 'A transit event update from the carrier tracking system', 'A terminal entry unit for port check-in'],
        correct: 1
      },
      {
        question: 'The "Perfect Order Rate" KPI measures the percentage of orders that are:',
        options: ['Delivered within the zip code of the original purchase order', 'On time, complete, damage-free, and with accurate documentation', 'Shipped via the lowest-cost carrier available', 'Processed within 24 hours of order receipt'],
        correct: 1
      },
      {
        question: 'Collaborative Planning, Forecasting, and Replenishment (CPFR) primarily helps reduce:',
        options: ['Transportation costs through route optimization', 'The bullwhip effect by having supplier and retailer jointly develop forecasts from shared data', 'Warehouse labor costs through automation', 'Customs clearance delays in international trade'],
        correct: 1
      },
      {
        question: 'In a 3-way match for invoice payment, the three documents compared are:',
        options: ['Invoice, Bill of Lading, and Proof of Delivery', 'Purchase Order, Receiving Receipt, and Supplier Invoice', 'Packing List, ASN, and Freight Bill', 'Sales Order, Pick List, and Shipping Manifest'],
        correct: 1
      },
      {
        question: 'The "Days of Supply (DOS)" metric is calculated as:',
        options: ['Annual COGS ÷ Average Inventory Value', 'Current Inventory ÷ Average Daily Demand', 'Total Orders Shipped ÷ Order Cycle Time', 'Safety Stock ÷ Lead Time in Days'],
        correct: 1
      }
    ]
  },
  {
    id: 'manufacturing-quality-201',
    category: 'Manufacturing',
    title: 'Quality Assurance & Inspection 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Build on manufacturing process fundamentals to master quality assurance systems, measurement tools, statistical process control, and inspection methodologies used in production environments. This course covers calibration principles, GD&T interpretation, SPC charting, and the AIAG automotive quality core tools used in world-class manufacturing facilities.',
    lessons: [
      {
        title: 'Measurement Tools & Calibration Principles',
        content: `Quality assurance begins with accurate measurement. No inspection result is reliable unless the measurement tool itself is accurate and calibrated. Understanding measurement tools, their proper use, and the calibration systems that verify their accuracy is foundational to quality work.

**The Metrology Hierarchy:**

All measurement in industry traces to **national standards** maintained by NIST (National Institute of Standards and Technology) in the USA. Traceable calibration means there is an unbroken chain of comparison measurements from the shop floor tool to NIST standards. When a quality certificate states a measurement is "NIST-traceable," this chain exists and is documented.

**Measurement Uncertainty:**

No measurement is exact. Every measurement has **uncertainty**—a range within which the true value is expected to fall. Sources of measurement uncertainty include: the instrument's resolution and accuracy, temperature variation, operator technique, and part geometry. Measurement uncertainty must be much smaller than the tolerance being checked—typically, the measurement system should account for no more than **10–25% of the total tolerance**.

**Common Measurement Tools:**

**Vernier Calipers:**
Used to measure external dimensions, internal dimensions (with inside jaws), depth, and step features. Read the main scale in millimeters or fractions of an inch, then add the vernier scale reading. Accuracy: typically ±0.001" (±0.02mm) for analog verniers; ±0.0005" for digital.
- Proper technique: Light, consistent contact pressure. Wipe measuring faces before use. Close to the part, not the tips.

**Micrometers:**
Higher precision than calipers. The spindle advances 0.025" per revolution (for inch-reading micrometers). Read the sleeve (main scale), then the thimble scale, then the vernier scale if present.
- Range: Each micrometer covers a 1-inch range (0–1", 1–2", etc.)
- Accuracy: ±0.0001"
- Use a ratchet stop or friction thimble for consistent gauging pressure

**Dial Indicators and Test Indicators:**
Used for comparison measurements—detecting variations from a reference surface or detecting runout and flatness. A dial indicator measures linear displacement; a test indicator measures angular deflection of a contact point.

**Gauge Blocks (Jo Blocks):**
Precision-ground blocks of steel used as reference standards for calibrating instruments and setting comparators. Gauge blocks are "wrung" (slid together with slight pressure) to create a precise reference dimension.

**CMM (Coordinate Measuring Machine):**
Computer-controlled measurement system using a precision probe that touches the part surface at programmed points. Calculates part geometry, dimensions, and GD&T features automatically. Used for complex parts, high-accuracy requirements, and automated inspection.

**Calibration Systems (ISO 10012, MSA):**
- Every measurement tool must have a **calibration interval** (commonly 6 months to 1 year depending on use and criticality)
- Calibration records must document: date calibrated, calibration due date, tool ID, results, technician, and standards used
- Tools that fail calibration must be **tagged out of service** and removed from use until repaired and recertified
- **Gauge R&R (Repeatability and Reproducibility)** studies evaluate how much variation in measurement comes from the measurement system itself (gauge variation) versus part-to-part variation. A gauge R&R >30% is generally unacceptable for production use.`
      },
      {
        title: 'Statistical Process Control (SPC) & Control Charts',
        content: `**Statistical Process Control (SPC)** uses statistical methods to monitor manufacturing processes in real time, detecting shifts and trends before defects are produced. Rather than inspecting quality into a product after the fact, SPC helps build quality into the process.

**Variation in Manufacturing:**

All manufacturing processes exhibit **variation**. There are two types:
- **Common cause variation (natural/random)**: Inherent variability present in every process; predictable and statistical in nature. Cannot be eliminated without changing the process itself.
- **Special cause variation (assignable)**: Caused by specific, identifiable factors—a worn tool, wrong material, operator error, equipment malfunction. When special causes are present, the process is **out of control** and must be investigated and corrected.

**Process Capability:**

**Process capability** measures whether a process can consistently meet specifications. Key metrics:
- **Cp**: Ratio of the specification width to the process natural variation (6σ). Cp = (USL – LSL) / 6σ. Cp ≥ 1.33 is generally required (4-sigma capability in each direction); many automotive customers require Cp ≥ 1.67.
- **Cpk**: Accounts for how well the process is centered between specifications. Cpk = minimum of [(USL – mean)/3σ, (mean – LSL)/3σ]. Cpk = Cp only when the process is perfectly centered.
- **A process can be capable but not centered (Cp good, Cpk poor)**: Centering the process improves Cpk without changing process variability.

**Control Charts:**

A **control chart** plots process data over time with calculated **control limits** that represent the boundaries of expected variation from common causes alone. When data points fall outside control limits or show non-random patterns, a special cause is indicated.

**X-bar and R Chart (for continuous data, subgroups):**

Most common SPC chart pair for variable data:
- **X-bar chart**: Plots the average (X-bar) of each subgroup. Detects shifts in the process mean.
- **R chart**: Plots the range (max – min) within each subgroup. Detects changes in process variability.
- **Control limits**: Calculated from the average of all subgroup means and average range using constants (A2, D3, D4) based on subgroup size from standard SPC tables.

**Control Limit vs. Specification Limit:**

A common and serious error is confusing control limits with specification limits:
- **Control limits**: Statistically calculated from actual process data. Represent what the process IS doing.
- **Specification limits**: Engineering requirements. Represent what the process SHOULD do.
- A process can be "in control" (all points within control limits) yet still producing out-of-spec parts if the process is not capable. "In control" means predictable, not necessarily acceptable.

**Western Electric Rules (Control Chart Interpretation):**

Beyond points outside control limits, these patterns on a control chart also indicate special causes:
- 2 of 3 consecutive points beyond 2σ on the same side of the centerline
- 4 of 5 consecutive points beyond 1σ on the same side
- 8 consecutive points on the same side of the centerline (run rule)
- 6 consecutive points trending in one direction (trend rule)

**P-Charts and np-Charts (Attribute Data):**

When measuring defective vs. non-defective (pass/fail) rather than a continuous measurement:
- **p-chart**: Plots proportion defective. Used when subgroup size varies.
- **np-chart**: Plots number defective. Used with constant subgroup size.`
      },
      {
        title: 'AIAG Core Quality Tools & Inspection Planning',
        content: `The **Automotive Industry Action Group (AIAG)** developed five core quality tools that are now widely used across manufacturing industries, not just automotive. These tools provide a systematic approach to preventing defects during new product launches and managing ongoing production quality.

**The AIAG Five Core Quality Tools:**

**1. APQP (Advanced Product Quality Planning):**

A structured process for developing a quality plan during new product launches. APQP ensures customer requirements are understood and built into the product and process before production begins. The 5 phases:
1. Plan and define program
2. Product design and development
3. Process design and development
4. Product and process validation
5. Launch, feedback, and corrective action

**2. FMEA (Failure Mode and Effects Analysis):**

A systematic method for identifying potential failure modes in a design (**DFMEA**) or process (**PFMEA**), evaluating their effects and likelihood, and prioritizing corrective actions.

**Risk Priority Number (RPN) = Severity × Occurrence × Detection**
- **Severity (S)**: 1–10 scale; impact of the failure on the customer (10 = safety hazard without warning)
- **Occurrence (O)**: 1–10 scale; likelihood of the cause occurring (10 = failure almost inevitable)
- **Detection (D)**: 1–10 scale; ability to detect the failure before it reaches the customer (10 = cannot detect)
- Actions are prioritized for high RPN scores, especially those with high Severity ratings

**3. Control Plan:**

A document describing the controls (measurements, checks, frequencies, reaction plans) that will be applied to each characteristic in the process. The control plan is the operational roadmap for the quality system on the shop floor. It specifies:
- What to check (characteristic)
- How to check it (measurement method and tool)
- How often (frequency)
- Who checks it
- What to do if out of range (reaction plan)

**4. MSA (Measurement System Analysis):**

As described earlier, MSA (including Gauge R&R) validates the measurement system's ability to accurately measure process variation. Required for all key product characteristics.

**5. SPC (Statistical Process Control):**

Covered extensively in the previous lesson.

**Inspection Planning & Sampling:**

Not every part can be 100% inspected—it is often impractical and expensive. Sampling plans provide statistical confidence that a lot meets quality standards.

**AQL (Acceptable Quality Level):**

AQL sampling (per ANSI/ASQ Z1.4 for attribute data, Z1.9 for variable data) defines an acceptable defect rate and provides sampling tables to determine sample size and accept/reject criteria for a given lot size.

For example, for a lot of 500 units at AQL 1.0% using General Inspection Level II: inspect 50 units. Accept if 0–1 defectives found; reject if 2+ found.

**First Article Inspection (FAI):**

Required at the start of production of a new part or after significant process changes. The FAI (often documented per AS9102 in aerospace or per PPAP—Production Part Approval Process—in automotive) provides comprehensive dimensional, material, and functional verification that the first production parts conform to all engineering requirements before releasing the process for full production.`
      }
    ],
    test: [
      {
        question: 'What does "NIST-traceable calibration" mean for a measurement instrument?',
        options: ['The instrument was manufactured in the United States', 'There is an unbroken chain of measurement comparisons connecting the instrument to national standards', 'The instrument has been approved for use in all 50 states', 'The calibration was performed by a government laboratory'],
        correct: 1
      },
      {
        question: 'A process has Cp = 1.5 but Cpk = 0.8. This means the process:',
        options: ['Has insufficient variation to meet specifications', 'Is capable if properly centered, but is currently off-center', 'Has too much variation for the tolerance', 'Is statistically out of control'],
        correct: 1
      },
      {
        question: 'On a control chart, "8 consecutive points on the same side of the centerline" is a signal of:',
        options: ['Common cause variation — no action needed', 'A special cause requiring investigation', 'An out-of-spec condition', 'A calibration error in the measurement system'],
        correct: 1
      },
      {
        question: 'In an FMEA, a failure mode with Severity = 9, Occurrence = 2, Detection = 3 has an RPN of:',
        options: ['14', '54', '27', '45'],
        correct: 1
      },
      {
        question: 'The AIAG core quality tool that defines what characteristics to check, how to check them, and what to do if out of range is called:',
        options: ['APQP', 'FMEA', 'Control Plan', 'MSA'],
        correct: 2
      },
      {
        question: 'A vernier caliper\'s typical accuracy is:',
        options: ['±0.1"', '±0.01"', '±0.001"', '±0.0001"'],
        correct: 2
      },
      {
        question: 'A micrometer covers what measurement range per instrument?',
        options: ['0–6 inches — all micrometers cover the same range', '0–3 inches per instrument', 'A 1-inch range (e.g., 0–1", 1–2", 2–3")', '0–12 mm per instrument'],
        correct: 2
      },
      {
        question: 'Gauge R&R studies measure:',
        options: ['The accuracy of a part\'s dimensions against engineering tolerances', 'How much measurement variation comes from the measurement system itself versus actual part-to-part variation', 'The reliability and repeatability of the manufacturing process over time', 'The capability of a supplier\'s process to meet specifications'],
        correct: 1
      },
      {
        question: 'A Gauge R&R result above 30% indicates:',
        options: ['The gauge is performing within acceptable limits', 'The gauge is generally unacceptable for production use', 'The process is statistically in control', 'The measurement uncertainty is less than 10% of the tolerance'],
        correct: 1
      },
      {
        question: 'Common cause variation in a manufacturing process:',
        options: ['Is caused by specific identifiable events like tool wear or wrong material', 'Indicates the process is out of control and must be investigated', 'Is inherent, random variability present in every process that cannot be eliminated without changing the process', 'Always produces defective parts outside specification limits'],
        correct: 2
      },
      {
        question: 'Process capability index Cpk differs from Cp because Cpk:',
        options: ['Uses the range instead of standard deviation', 'Accounts for how well the process is centered between specification limits', 'Is used only for attribute (pass/fail) data', 'Requires a minimum of 100 data points while Cp requires only 30'],
        correct: 1
      },
      {
        question: 'In an FMEA, a high Detection (D) score (close to 10) means:',
        options: ['The failure mode is easy to detect before reaching the customer', 'The failure mode is almost impossible to detect before reaching the customer', 'The severity of the failure is catastrophic', 'The occurrence rate is very high'],
        correct: 1
      },
      {
        question: 'The X-bar chart monitors changes in:',
        options: ['Process variability (spread) within subgroups', 'The process mean (average) over time', 'The proportion of defective units in each lot', 'Individual measurement values without subgrouping'],
        correct: 1
      },
      {
        question: 'On a control chart, a "run rule" of 8 consecutive points on the same side of the centerline suggests:',
        options: ['Common cause variation — the process is stable', 'A special cause has shifted the process mean', 'The control limits need to be recalculated', 'The subgroup size should be increased'],
        correct: 1
      },
      {
        question: 'AQL (Acceptable Quality Level) sampling plans are used to:',
        options: ['Set the target defect rate for the manufacturing process', 'Determine sample size and accept/reject criteria for inspecting a lot of parts', 'Calculate process capability indices Cp and Cpk', 'Define the measurement frequency for SPC control charts'],
        correct: 1
      },
      {
        question: 'APQP (Advanced Product Quality Planning) is primarily used during:',
        options: ['Ongoing production to detect process drift', 'New product launches to ensure customer requirements are built into the product and process before production', 'Annual quality management system audits', 'Supplier qualification and incoming inspection'],
        correct: 1
      },
      {
        question: 'A First Article Inspection (FAI) is required:',
        options: ['On every 100th part produced during ongoing production', 'At the start of production of a new part or after significant process changes', 'Only when a customer complaint has been received', 'Annually on all parts in the production system'],
        correct: 1
      },
      {
        question: 'The difference between a control limit and a specification limit is:',
        options: ['Control limits are tighter than specification limits in all cases', 'Control limits are calculated from actual process data; specification limits are engineering requirements — they are independent', 'Specification limits are calculated statistically while control limits are set by the customer', 'They are interchangeable terms for the same concept'],
        correct: 1
      },
      {
        question: 'A p-chart is used in SPC to monitor:',
        options: ['The average and range of continuous measurement data in subgroups', 'The proportion of defective units when subgroup size varies', 'The number of defects per unit (c-chart application)', 'Individual measurements where subgrouping is not possible'],
        correct: 1
      },
      {
        question: 'When a calibration tool is found to be out of tolerance during a periodic calibration check, the correct action is to:',
        options: ['Continue using it until the next calibration interval and note the discrepancy', 'Tag it out of service, remove it from use, and investigate whether any measurements taken with it since the last calibration are suspect', 'Adjust it in the field and return it to service immediately', 'Increase the calibration interval since the tool is showing drift'],
        correct: 1
      }
    ]
  },
  {
    id: 'it-network-201',
    category: 'IT & Tech Support',
    title: 'Network Configuration & Security 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Advance from IT help desk fundamentals to hands-on network configuration and security administration. This course covers subnetting, VLAN configuration, firewall rules, wireless security standards, and active directory administration—the core skills needed for a network technician or junior systems administrator role.',
    lessons: [
      {
        title: 'IP Addressing, Subnetting & Network Architecture',
        content: `A solid understanding of IP addressing and subnetting is the single most important technical skill for any network technician. Without it, configuring routers, switches, firewalls, and servers is guesswork. Subnetting allows networks to be divided into logical segments for security, performance, and management purposes.

**IPv4 Address Structure:**

An IPv4 address is 32 bits, written in **dotted-decimal notation** as four 8-bit octets (0–255). Example: 192.168.10.50.

Every IPv4 address has two parts:
- **Network portion**: Identifies the network (determined by the subnet mask)
- **Host portion**: Identifies the specific device on that network

**Subnet Masks:**

The **subnet mask** uses binary 1s to mark the network bits and binary 0s to mark the host bits.

- 255.255.255.0 = /24 in CIDR notation = 24 network bits, 8 host bits
- 255.255.0.0 = /16 = 16 network bits, 16 host bits
- 255.0.0.0 = /8 = 8 network bits, 24 host bits

**CIDR (Classless Inter-Domain Routing)** notation expresses the subnet mask as a slash followed by the number of network bits: 192.168.10.0/24.

**Subnetting Calculation:**

For a /24 network (255.255.255.0):
- Number of host addresses = 2^8 = 256 total addresses
- Usable hosts = 256 – 2 = **254** (subtract 1 for network address, 1 for broadcast)
- Network address: 192.168.10.**0** (all host bits = 0)
- Broadcast address: 192.168.10.**255** (all host bits = 1)
- Usable range: 192.168.10.1 – 192.168.10.254

**Subnetting a /24 into smaller networks:**

To create 4 subnets from 192.168.10.0/24, borrow 2 bits from the host portion:
- New mask: /26 (255.255.255.192)
- Each subnet has 64 addresses (2^6), 62 usable hosts
- Subnets: .0/26, .64/26, .128/26, .192/26
- Example: 192.168.10.64/26 → Network: .64, Broadcast: .127, Hosts: .65–.126

**Network Architecture — Three-Tier Model:**

Enterprise networks commonly use a **three-tier hierarchical model**:

1. **Core Layer**: High-speed switching backbone connecting distribution layers. Optimized for speed, minimal complexity. Core switches do not connect end devices.
2. **Distribution Layer**: Policy enforcement, routing between VLANs, aggregation of access layer connections. Connects access switches to core.
3. **Access Layer**: End-user device connections. Ports connect to PCs, printers, IP phones, and wireless access points.

**Smaller networks** often use a **collapsed core** (two-tier) model where core and distribution are combined.

**Private IP Address Ranges (RFC 1918):**
- 10.0.0.0 – 10.255.255.255 (/8) — Large organizations
- 172.16.0.0 – 172.31.255.255 (/12) — Medium organizations
- 192.168.0.0 – 192.168.255.255 (/16) — Small/home networks

**NAT (Network Address Translation):** Allows private IP addresses to communicate on the internet by mapping them to a public IP at the router. The router maintains a translation table to route return traffic correctly.`
      },
      {
        title: 'VLAN Configuration, Switching & Wireless Security',
        content: `**VLANs (Virtual Local Area Networks)** are one of the most powerful tools in network administration. They allow a single physical switch infrastructure to be logically divided into separate broadcast domains, providing security, performance, and management benefits.

**How VLANs Work:**

Without VLANs, all devices connected to a switch share the same broadcast domain—a broadcast sent by one device is received by all devices. As networks grow, broadcasts consume bandwidth and expose all devices to each other's traffic.

VLANs segment the network at Layer 2 (Data Link Layer). Devices on different VLANs cannot communicate directly—traffic between VLANs must pass through a **Layer 3 device** (router or Layer 3 switch) where security policies can be enforced.

**Common VLAN Design:**

- **VLAN 1**: Default VLAN on most switches—do not use for data (security best practice)
- **VLAN 10**: Data VLAN (user workstations)
- **VLAN 20**: Voice VLAN (IP phones)
- **VLAN 30**: Management VLAN (switch, router management interfaces)
- **VLAN 40**: Server VLAN
- **VLAN 50**: Guest/IoT VLAN (isolated from corporate resources)

**Access Ports vs. Trunk Ports:**

- **Access Port**: Carries traffic for one VLAN only. End devices (PCs, printers) connect to access ports. The port adds the VLAN ID tag to frames internally and strips it when sending to the end device.
- **Trunk Port**: Carries traffic for multiple VLANs simultaneously using **IEEE 802.1Q tagging**. Trunk links connect switches to other switches, to routers (router-on-a-stick configuration), or to servers.

**802.1Q Frame Tagging:**

An 802.1Q trunk adds a 4-byte tag to each Ethernet frame containing the 12-bit VLAN ID (allows 4,094 VLANs). The receiving device reads the tag to determine which VLAN the frame belongs to.

**Spanning Tree Protocol (STP):**

When switches are connected with redundant links (for fault tolerance), Layer 2 loops cause **broadcast storms** that can bring down a network in seconds. **STP (IEEE 802.1D)** and its faster successor **RSTP (802.1w)** prevent loops by blocking redundant paths and automatically activating them only if the primary path fails.

**Wireless Security Standards:**

Wireless networks are inherently more vulnerable than wired because signals extend beyond physical boundaries. Understanding current security standards is essential:

- **WEP (Wired Equivalent Privacy)**: Deprecated. Broken—can be cracked in minutes. Never use.
- **WPA (Wi-Fi Protected Access)**: Improved over WEP but uses TKIP encryption which has vulnerabilities. Legacy use only.
- **WPA2 (802.11i)**: Uses **AES-CCMP** encryption. Widely deployed. Vulnerable to KRACK (Key Reinstallation Attack) and dictionary attacks on weak passphrases.
- **WPA3**: Current standard. Uses **SAE (Simultaneous Authentication of Equals)** replacing PSK handshake, eliminating offline dictionary attacks. Provides forward secrecy—past sessions can't be decrypted even if the key is compromised later. Require WPA3 for new deployments.
- **Enterprise mode (WPA2/WPA3-Enterprise)**: Uses **802.1X** authentication with a RADIUS server and unique per-user credentials instead of a shared passphrase. Required in corporate environments.

**Wireless Frequency Bands:**
- **2.4 GHz**: Better range, more penetration through walls, more interference (only 3 non-overlapping channels: 1, 6, 11). Use for legacy devices and maximum range.
- **5 GHz**: Higher throughput (up to 1.3+ Gbps with 802.11ac), 25 non-overlapping channels, less interference, shorter range.
- **6 GHz (Wi-Fi 6E, 802.11ax)**: Newest band, least interference, highest throughput, shortest range. Requires Wi-Fi 6E certified devices.`
      },
      {
        title: 'Firewall Rules, Active Directory & Security Fundamentals',
        content: `Network security requires more than just connecting devices correctly. Firewalls enforce traffic policies, Active Directory manages identities and access, and a layered security approach (defense in depth) protects organizational assets from increasingly sophisticated threats.

**Firewall Fundamentals:**

A **firewall** controls traffic flow between network zones by inspecting packets against a rule set. Firewalls can be hardware appliances (Cisco ASA, Palo Alto, Fortinet), software-based (Windows Firewall, pfSense), or cloud-based (next-generation firewall as a service).

**Firewall Rule Logic:**

Rules are evaluated **top to bottom**—the first matching rule wins. Best practices:
- Most specific rules first, most general rules last
- **Implicit deny all** at the bottom: any traffic not explicitly permitted is denied
- Rules specify: source IP/zone, destination IP/zone, protocol (TCP/UDP/ICMP), port, and action (permit/deny)

**Common Firewall Rule Types:**
- Allow internal LAN to reach internet (outbound web/DNS/email)
- Allow inbound HTTPS (TCP 443) to web servers in DMZ
- Allow IT management traffic (RDP port 3389, SSH port 22) only from management VLAN
- Deny all traffic from guest VLAN to corporate VLAN
- Allow VPN connections (UDP 500, UDP 4500 for IKEv2)

**DMZ (Demilitarized Zone):**

A **DMZ** is a network zone between the internet and the internal network where public-facing servers (web, email, DNS) are placed. Firewall rules allow controlled access to DMZ servers from the internet, while the internal network is protected from direct internet access.

**Active Directory (AD):**

**Microsoft Active Directory Domain Services (AD DS)** is the identity and access management system used in the vast majority of Windows enterprise environments. AD organizes users, computers, and resources into a hierarchical structure.

**Key AD Concepts:**

- **Domain**: The fundamental administrative unit. All objects in a domain share a common security database. Domain name example: company.local or company.com
- **Domain Controller (DC)**: The server running AD DS. Stores the AD database (NTDS.dit), authenticates users, and enforces Group Policy.
- **Organizational Units (OUs)**: Container objects used to organize users, computers, and groups within a domain. Group Policy Objects (GPOs) can be linked to OUs.
- **Groups**: Used to manage permissions. **Security groups** control access to resources. **Distribution groups** are used for email distribution only.
  - Global groups: Members from the same domain; can be added to Universal or Domain Local groups
  - Domain Local groups: Used to assign permissions to resources in the same domain
  - Universal groups: Can contain members from any domain; used in multi-domain forests

**Group Policy (GPO):**

Group Policy allows centralized configuration management for all domain-joined computers:
- Password complexity and length requirements
- Locking the screen after a period of inactivity
- Controlling USB drive usage
- Pushing software installations
- Configuring Windows Firewall settings

**Role-Based Access Control (RBAC):**

Assign permissions to roles (groups), then assign users to roles—not permissions directly to users. When an employee changes jobs, change their group membership rather than individually editing permissions on every resource.

**Cybersecurity Defense in Depth:**

No single security control is sufficient. Layer multiple controls:
1. **Perimeter security**: Firewall, IDS/IPS
2. **Network segmentation**: VLANs isolate sensitive systems
3. **Endpoint security**: Antivirus, EDR (Endpoint Detection and Response), patch management
4. **Identity security**: MFA, least privilege, AD monitoring
5. **Data security**: Encryption at rest and in transit
6. **Backup and recovery**: Offline, tested backups resistant to ransomware
7. **User training**: Phishing awareness, security culture`
      }
    ],
    test: [
      {
        question: 'A /26 subnet contains how many usable host addresses?',
        options: ['30', '62', '126', '254'],
        correct: 1
      },
      {
        question: 'A trunk port on a network switch differs from an access port in that it:',
        options: ['Connects directly to end-user devices like PCs', 'Carries traffic for only one VLAN', 'Carries traffic for multiple VLANs using 802.1Q tagging', 'Blocks broadcasts to prevent network loops'],
        correct: 2
      },
      {
        question: 'WPA3 improves over WPA2 primarily by using SAE, which eliminates:',
        options: ['The need for a wireless router', 'Offline dictionary attacks against the authentication handshake', 'The 2.4 GHz frequency band', 'The requirement for encryption keys'],
        correct: 1
      },
      {
        question: 'In firewall rule processing, when does a packet match a rule?',
        options: ['After all rules are evaluated and the best match is applied', 'At the first rule that matches — top to bottom', 'After the implicit deny rule at the bottom is reached', 'Based on which rule has the highest priority number'],
        correct: 1
      },
      {
        question: 'In Active Directory, Group Policy Objects (GPOs) are linked to:',
        options: ['Individual user accounts only', 'Individual computer objects only', 'Organizational Units (OUs), domains, or sites', 'Security groups for permission management'],
        correct: 2
      },
      {
        question: 'A /27 subnet provides how many usable host addresses?',
        options: ['14', '30', '62', '126'],
        correct: 1
      },
      {
        question: 'In CIDR notation, what does the "/24" in 192.168.1.0/24 represent?',
        options: ['The number of host addresses available', 'The number of network bits in the subnet mask', 'The default gateway address', 'The VLAN ID assigned to the subnet'],
        correct: 1
      },
      {
        question: 'NAT (Network Address Translation) allows private IP addresses to communicate on the internet by:',
        options: ['Assigning each private device a permanent public IP address', 'Mapping private IPs to a public IP at the router, maintaining a translation table for return traffic', 'Encrypting all traffic leaving the private network', 'Blocking all inbound traffic from the internet automatically'],
        correct: 1
      },
      {
        question: 'In the three-tier network hierarchy model, which layer connects end-user devices like PCs and printers?',
        options: ['Core layer', 'Distribution layer', 'Access layer', 'Aggregation layer'],
        correct: 2
      },
      {
        question: 'Spanning Tree Protocol (STP) prevents network outages caused by:',
        options: ['IP address conflicts between devices on the same VLAN', 'Layer 2 broadcast storms caused by switching loops with redundant links', 'Unauthorized wireless clients connecting to access points', 'Firewall rules blocking legitimate traffic'],
        correct: 1
      },
      {
        question: 'WPA3\'s SAE (Simultaneous Authentication of Equals) eliminates which attack compared to WPA2?',
        options: ['Man-in-the-middle attacks on encrypted sessions', 'Offline dictionary attacks against the authentication handshake', 'Denial-of-service (DoS) flooding attacks on the wireless network', 'Evil twin access point impersonation attacks'],
        correct: 1
      },
      {
        question: 'Enterprise wireless security (WPA2/WPA3-Enterprise) uses what authentication method instead of a shared passphrase?',
        options: ['MAC address filtering', '802.1X with a RADIUS server and unique per-user credentials', 'A rotating pre-shared key changed monthly', 'Certificate-pinning without a RADIUS server'],
        correct: 1
      },
      {
        question: 'In firewall rules, the "implicit deny all" rule at the bottom means:',
        options: ['All traffic from unknown sources is logged but allowed through', 'Any traffic not explicitly permitted by a preceding rule is blocked', 'The last rule with the lowest priority number takes precedence', 'All outbound traffic is denied by default unless explicitly permitted'],
        correct: 1
      },
      {
        question: 'A DMZ (Demilitarized Zone) in a network is used to:',
        options: ['Store sensitive internal databases isolated from all network traffic', 'Host public-facing servers (web, email) in a zone allowing controlled internet access while protecting the internal network', 'Connect guest users to an isolated VLAN with no internet access', 'Segregate VoIP traffic from data traffic on the same switches'],
        correct: 1
      },
      {
        question: 'Role-Based Access Control (RBAC) in Active Directory means:',
        options: ['Each user gets individually customized permissions for every resource', 'Permissions are assigned to roles (groups), and users are assigned to roles — not permissions directly to users', 'Administrators have access to all resources without restriction', 'Access is controlled by the physical location where the user logs in'],
        correct: 1
      },
      {
        question: 'The 6 GHz band introduced in Wi-Fi 6E (802.11ax) offers which advantage over 2.4 GHz and 5 GHz?',
        options: ['Longer range and better wall penetration', 'Least interference and highest throughput, at the cost of shorter range', 'Backward compatibility with 802.11b/g devices', 'Lower equipment cost than 5 GHz infrastructure'],
        correct: 1
      },
      {
        question: 'An 802.1Q trunk port tags Ethernet frames with:',
        options: ['The destination IP address for faster routing', 'A 12-bit VLAN ID identifying which VLAN the frame belongs to', 'An encryption key for secure inter-VLAN communication', 'The port speed and duplex setting for that connection'],
        correct: 1
      },
      {
        question: 'The default VLAN on most switches (VLAN 1) should:',
        options: ['Be used for all management and data traffic for simplicity', 'Never be used for data as a security best practice', 'Be configured as the voice VLAN for IP phones', 'Be disabled on all access ports but left active on trunk ports only'],
        correct: 1
      },
      {
        question: 'Defense in depth in cybersecurity means:',
        options: ['Installing the most expensive firewall available', 'Layering multiple security controls so that if one fails, others still protect the organization', 'Trusting only perimeter security to block all threats at the network edge', 'Giving all users administrator rights for operational efficiency'],
        correct: 1
      },
      {
        question: 'In Active Directory, the NTDS.dit file stored on the Domain Controller contains:',
        options: ['The Group Policy templates for all domain computers', 'The Active Directory database including all user accounts, computer accounts, and security information', 'The DNS zone files for the corporate domain', 'The certificate authority (CA) certificates for the domain'],
        correct: 1
      }
    ]
  },
  {
    id: 'admin-project-mgmt-201',
    category: 'Administrative & Office Skills',
    title: 'Project Management & Team Coordination 201',
    tier: 2,
    duration: '60-75 min',
    description: 'Build on administrative fundamentals to develop intermediate project management skills, team coordination techniques, and the tools and methodologies used by professional project managers. This course covers project lifecycle phases, scope management, scheduling with Gantt charts, stakeholder communication, risk management, and Agile vs. Waterfall approaches relevant to administrative and coordinator roles.',
    lessons: [
      {
        title: 'Project Lifecycle, Scope Management & Charter',
        content: `**Project management** is the application of knowledge, skills, tools, and techniques to project activities to meet project requirements. Administrative and office professionals who understand project management principles are exponentially more effective as coordinators, project support staff, or project managers themselves.

**What Is a Project?**

A project is a **temporary endeavor** undertaken to create a unique product, service, or result. Key characteristics:
- **Temporary**: Has a defined beginning and end
- **Unique**: Produces something new, distinct from routine operations
- **Progressive elaboration**: Details are developed incrementally as the project progresses

This distinguishes projects from **operations** (ongoing, repetitive work like processing invoices or answering customer calls).

**PMI's Five Project Management Process Groups:**

The **Project Management Institute (PMI)** and its PMBOK (Project Management Body of Knowledge) organize project management into five process groups:

1. **Initiating**: Define and authorize the project. Key output: **Project Charter**
2. **Planning**: Develop the project management plan, define scope, schedule, and budget
3. **Executing**: Direct and manage project work, manage the team
4. **Monitoring & Controlling**: Track performance, identify variances, manage changes
5. **Closing**: Finalize all activities, obtain formal acceptance, close contracts, capture lessons learned

**Project Charter:**

The **Project Charter** formally authorizes the project to exist. It designates the project manager and grants them authority to apply organizational resources. A well-written project charter includes:
- Project purpose and justification (the business case)
- High-level project description and deliverables
- High-level requirements and acceptance criteria
- High-level risks and assumptions
- Summary milestone schedule and budget
- Key stakeholder list
- Project manager name and authority level
- Sponsor signature and approval date

Without a signed charter, a project lacks formal authorization—the PM has no authority to commit resources.

**Scope Management:**

**Scope** defines what is and is not included in the project. Poor scope management leads to **scope creep**—the gradual, unauthorized expansion of project work that delays schedules and blows budgets.

**Scope Management Documents:**

- **Scope Statement**: Describes the project scope in detail—deliverables, acceptance criteria, and explicitly what is excluded.
- **WBS (Work Breakdown Structure)**: A hierarchical decomposition of the total scope into manageable work packages. The WBS is the foundation of the project schedule and budget. **100% Rule**: The WBS must capture 100% of the project scope—no more, no less.
- **WBS Dictionary**: Defines each WBS work package: scope description, deliverables, resource requirements, duration estimates, and acceptance criteria.

**Handling Scope Change:**

Any work not in the approved scope statement requires a **Change Request**. The change control process:
1. Document the requested change
2. Evaluate impact on scope, schedule, cost, and quality
3. Present to Change Control Board (CCB) or sponsor for approval/rejection
4. If approved, update all project documents
5. Communicate the change to affected stakeholders

Changes without this process are informal scope creep—they must be avoided.`
      },
      {
        title: 'Project Scheduling, Budgeting & Risk Management',
        content: `With scope defined, the next planning steps are developing the project schedule and budget, then identifying and planning responses to potential risks. These three elements—scope, schedule, and cost—form the **project management "triple constraint"** (sometimes called the "iron triangle"). A change to one almost always impacts the others.

**Project Scheduling:**

**Activity Sequencing — Network Diagrams:**

Before building a schedule, identify all activities from the WBS and determine their **dependencies**:
- **Finish-to-Start (FS)**: Activity B cannot start until Activity A finishes. Most common.
- **Start-to-Start (SS)**: Activity B cannot start until Activity A starts.
- **Finish-to-Finish (FF)**: Activity B cannot finish until Activity A finishes.
- **Lead**: Overlap—B starts before A finishes (negative lag)
- **Lag**: Delay—B starts some time after A finishes

**Critical Path Method (CPM):**

The **critical path** is the longest sequence of dependent activities through the project network. It determines the minimum project duration. Any delay on the critical path delays the entire project.

**Float (Slack)**: The amount of time an activity can be delayed without delaying the project. Activities on the critical path have **zero float**. Activities off the critical path have positive float—they can slip without affecting the finish date.

**To find the critical path:**
1. Forward pass: Calculate **Early Start (ES)** and **Early Finish (EF)** for each activity
2. Backward pass: Calculate **Late Start (LS)** and **Late Finish (LF)**
3. Float = LS – ES (or LF – EF)
4. Critical path = all activities with zero float

**Gantt Charts:**

A **Gantt chart** is a bar chart showing activities as horizontal bars across a timeline. It is the most widely used project scheduling tool because it is easy to read and communicate. Modern tools (Microsoft Project, Smartsheet, Asana, Jira) generate Gantt charts automatically from entered task data.

Gantt chart best practices:
- Show dependencies (arrows between tasks)
- Highlight critical path activities
- Include milestones (diamond symbols for key events or deliverables)
- Show resource assignments alongside tasks
- Update actual progress regularly (% complete)

**Project Budget:**

Budget development follows the WBS—cost estimates are built from the bottom up (each work package) and rolled up to a total project budget:
- **Bottom-up estimating**: Most accurate. Estimate each work package, then sum.
- **Analogous estimating**: Based on similar past projects. Less accurate, faster.
- **Parametric estimating**: Statistical models (e.g., cost per square foot, cost per feature point).

**Contingency reserve**: Added to the budget for identified risks (known unknowns). **Management reserve**: Additional budget held by management for unknown unknowns.

**Risk Management:**

**Risk** is an uncertain event or condition that, if it occurs, has a positive (opportunity) or negative (threat) effect on project objectives.

**Risk Management Process:**
1. **Identify risks**: Brainstorming, expert interviews, checklists, lessons learned
2. **Perform Qualitative Risk Analysis**: Score each risk for **Probability** (1–5) and **Impact** (1–5). P × I = Risk Score. Prioritize high-score risks.
3. **Perform Quantitative Risk Analysis**: Numerical analysis for high-priority risks. Monte Carlo simulation produces a probability distribution of project outcomes.
4. **Plan Risk Responses**: For threats:
   - **Avoid**: Change the project plan to eliminate the risk
   - **Transfer**: Shift financial impact to a third party (insurance, contract clause)
   - **Mitigate**: Reduce probability or impact
   - **Accept**: Acknowledge the risk without active response (active = contingency plan; passive = document only)
5. **Implement Risk Responses**: Execute the planned responses
6. **Monitor Risks**: Regularly review the risk register, watch for risk triggers, identify new risks`
      },
      {
        title: 'Stakeholder Communication, Agile & Team Coordination',
        content: `Executing projects successfully requires more than tools and schedules—it requires effective leadership of people, clear communication with stakeholders, and the judgment to select the right project management approach for the type of work.

**Stakeholder Management:**

A **stakeholder** is any individual or organization that may affect, be affected by, or perceive themselves to be affected by the project. Effective stakeholder management is among the most important and underrated project management skills.

**Stakeholder Analysis:**

Create a **stakeholder register** documenting:
- Stakeholder name and role
- Level of interest in the project (low/medium/high)
- Level of power/influence (low/medium/high)
- Current engagement level (unaware, resistant, neutral, supportive, champion)
- Desired engagement level
- Communication preferences

**Power/Interest Grid:**

Plot stakeholders on a 2×2 matrix:
- **High Power, High Interest**: Manage closely. These are your key stakeholders—frequent updates, involve in decisions.
- **High Power, Low Interest**: Keep satisfied. These stakeholders can derail the project if displeased, even if not actively engaged.
- **Low Power, High Interest**: Keep informed. They won't make decisions but are invested.
- **Low Power, Low Interest**: Monitor with minimal effort.

**Communications Management Plan:**

Defines what information is communicated, to whom, how often, in what format, and by whom:
- Daily standup: Team members, 15 minutes, verbal
- Weekly status report: Sponsor and key stakeholders, email, every Friday
- Monthly executive dashboard: Executive team, PowerPoint, end of month
- Ad hoc: Immediately for issues above defined thresholds

Tailor communication to the audience. Executives want summary-level status and exception alerts. Team members need detailed task information and blockers resolved.

**Waterfall vs. Agile:**

Two fundamentally different approaches to managing projects:

**Waterfall (Predictive)**:
- Sequential phases: Requirements → Design → Build → Test → Deploy
- All requirements defined upfront before work begins
- Changes are controlled and costly after planning is complete
- Best for: Projects with well-defined, stable requirements (construction, manufacturing, regulatory compliance projects)
- PM role: Planning-intensive upfront; monitoring and controlling throughout

**Agile (Adaptive)**:
- Work is divided into short, fixed-length iterations called **sprints** (typically 2–4 weeks)
- Working software (or deliverable) produced at the end of each sprint
- Requirements are expected to evolve; the backlog is continuously refined
- **Scrum framework** roles: **Product Owner** (defines and prioritizes requirements in the backlog), **Scrum Master** (facilitates and removes impediments), **Development Team** (self-organizing, cross-functional)
- Scrum ceremonies: Sprint Planning, Daily Standup (15 min), Sprint Review, Sprint Retrospective
- Best for: Software development, product development, marketing campaigns, environments with changing requirements

**Hybrid Approaches:**

Many real projects use a hybrid—Waterfall for phases with well-defined scope (infrastructure, procurement, construction), Agile for phases with evolving requirements (software customization, user experience design).

**Team Coordination Best Practices:**

- **RACI Matrix**: Defines for each task/deliverable who is **Responsible** (does the work), **Accountable** (owns the outcome—only one person), **Consulted** (provides input), and **Informed** (receives updates).
- **Issue Log**: Track open issues, assigned owner, due date, and resolution. Review in weekly team meetings.
- **Meeting discipline**: Agenda distributed in advance, start on time, capture action items with owner and due date, end on time, distribute minutes within 24 hours.
- **Lessons Learned**: Conduct retrospectives during and at project close. Document what went well, what to improve, and recommendations for future projects. Store in an accessible organizational repository—the purpose of lessons learned is only realized if future projects actually use them.`
      }
    ],
    test: [
      {
        question: 'The document that formally authorizes a project to exist and names the project manager is called:',
        options: ['The project scope statement', 'The work breakdown structure (WBS)', 'The project charter', 'The stakeholder register'],
        correct: 2
      },
      {
        question: 'In project scheduling, activities on the critical path have:',
        options: ['The highest resource costs', 'Zero float — any delay pushes back the project finish', 'The most dependencies on other activities', 'The most total float available'],
        correct: 1
      },
      {
        question: 'The RACI matrix designates for each task that only one person can be:',
        options: ['Responsible (does the work)', 'Accountable (owns the outcome)', 'Consulted (provides input)', 'Informed (receives updates)'],
        correct: 1
      },
      {
        question: 'In Scrum, the role responsible for defining and prioritizing the product backlog is the:',
        options: ['Scrum Master', 'Development Team lead', 'Product Owner', 'Project Sponsor'],
        correct: 2
      },
      {
        question: 'A stakeholder with high power but low interest in the project should be:',
        options: ['Managed closely with frequent detailed updates', 'Kept satisfied to prevent unexpected interference', 'Monitored with minimal effort', 'Excluded from the communications plan'],
        correct: 1
      },
      {
        question: 'The PMI project management process group that formally closes contracts and captures lessons learned is:',
        options: ['Monitoring and Controlling', 'Executing', 'Closing', 'Initiating'],
        correct: 2
      },
      {
        question: 'The WBS "100% Rule" states that:',
        options: ['Each WBS work package must be completable in 100 hours or less', 'The WBS must capture 100% of the project scope — no more, no less', '100% of team members must approve the WBS before work begins', 'Work packages must all have 100% cost estimates before the project can start'],
        correct: 1
      },
      {
        question: 'A "Finish-to-Start" dependency between activities A and B means:',
        options: ['Activity B must finish before Activity A can finish', 'Activity B can start at the same time as Activity A starts', 'Activity B cannot start until Activity A finishes', 'Activity A and B must finish at the same time'],
        correct: 2
      },
      {
        question: 'Float (slack) on a project activity represents:',
        options: ['Additional budget reserved for that activity', 'The amount of time an activity can be delayed without delaying the overall project end date', 'The number of people assigned to the activity', 'The risk score assigned to that activity in the risk register'],
        correct: 1
      },
      {
        question: 'Analogous estimating for project budgets is:',
        options: ['The most accurate method, estimating each work package from the bottom up', 'Based on similar past projects — less accurate but faster than bottom-up estimating', 'A statistical model using cost per unit of output', 'Required for all projects over $1 million in budget'],
        correct: 1
      },
      {
        question: 'Risk mitigation as a risk response strategy means:',
        options: ['Shifting financial impact to a third party through insurance or contract', 'Changing the project plan to completely eliminate the risk', 'Reducing the probability or impact of a risk without eliminating it', 'Acknowledging the risk and deciding to accept it without active response'],
        correct: 2
      },
      {
        question: 'In Agile Scrum, a Sprint Retrospective is held to:',
        options: ['Review the completed product increment with stakeholders and gather feedback', 'Plan which backlog items will be completed in the next sprint', 'Reflect on the team\'s process and identify improvements for the next sprint', 'Report project status to the project sponsor'],
        correct: 2
      },
      {
        question: 'The "iron triangle" of project management refers to:',
        options: ['Initiating, Planning, and Executing process groups', 'Schedule, Cost, and Scope — a change to one impacts the others', 'Sponsor, Project Manager, and Team', 'Risk, Quality, and Stakeholder Management'],
        correct: 1
      },
      {
        question: 'Scope creep is best defined as:',
        options: ['A planned increase in project scope approved through change control', 'Gradual, unauthorized expansion of project work beyond the approved scope', 'The natural reduction of scope that occurs as projects are completed', 'Work added to the project when the budget is cut'],
        correct: 1
      },
      {
        question: 'In a RACI matrix, which role means that only ONE person per task can hold this designation?',
        options: ['Responsible', 'Accountable', 'Consulted', 'Informed'],
        correct: 1
      },
      {
        question: 'Waterfall project management is BEST suited for which type of project?',
        options: ['Software development with rapidly evolving user requirements', 'Mobile app development with frequent user feedback loops', 'A construction project with well-defined, stable requirements and sequential phases', 'A marketing campaign that must adapt quickly to market response'],
        correct: 2
      },
      {
        question: 'The Project Charter formally authorizes the project and grants the project manager authority to:',
        options: ['Change the scope at any time without sponsor approval', 'Apply organizational resources to project activities', 'Hire and fire team members independently', 'Set the final project budget without finance approval'],
        correct: 1
      },
      {
        question: 'A lessons-learned repository provides value only if:',
        options: ['It is stored in a secure location accessible only to senior management', 'Future project teams actually retrieve and apply the lessons from past projects', 'It is updated exclusively at project closure, not during the project', 'It contains only negative outcomes and problems to avoid'],
        correct: 1
      },
      {
        question: 'Qualitative risk analysis scores each risk based on:',
        options: ['Exact dollar values for cost impact and schedule days at risk', 'Probability and Impact scores to prioritize which risks deserve further attention', 'Monte Carlo simulation to produce a probability distribution of outcomes', 'The project manager\'s personal experience with similar risks'],
        correct: 1
      },
      {
        question: 'A project\'s "critical path" is defined as:',
        options: ['The path with the highest total cost among all activity sequences', 'The sequence of activities with the most resource conflicts', 'The longest sequence of dependent activities through the network, determining the minimum project duration', 'The path the project manager chooses to focus quality control efforts on'],
        correct: 2
      }
    ]
   },
  {
    id: 'game-show-contestant-101',
    category: 'Media & Entertainment',
    title: 'Game Show Contestant Mastery — Tier 1',
    tier: 1,
    duration: '60 min',
    description: 'Learn exactly how to get on and win game shows. This course covers the entire audition process, what producers look for, stage presence, and foundational knowledge to become a successful contestant.',
    lessons: [
      {
        title: 'How Game Show Casting Actually Works',
        content: `Understanding the casting process is your first step to getting on a game show. Every show has a casting department dedicated to finding contestants who will be entertaining, knowledgeable, and telegenic.

**The Casting Funnel:**
- **Application Stage**: Thousands apply, but only 5-15% move forward
- **Video/Photo Review**: Casting directors review submissions looking for energy, personality, and camera presence
- **Phone/Video Interview**: If selected, you'll do a brief interview to assess your personality and knowledge
- **In-Person Audition**: The final stage usually includes a mock game and on-camera test
- **Background Check**: All finalists are vetted before final selection

**What Casting Directors Want:**
1. **Energy and Enthusiasm** — They want someone who looks excited to be there
2. **Personality** — Unique, memorable people who will keep viewers engaged
3. **Knowledge** — You need to demonstrate you can answer questions competently
4. **Story** — Every contestant needs a compelling backstory or interesting fact
5. **Camera Presence** — You must look comfortable on camera and speak clearly

**Geographic Considerations**: Many shows film in specific cities (Jeopardy in Los Angeles, Wheel of Fortune in Culver City, etc.). Being local or willing to travel at your own expense increases your chances.

**Eligibility Requirements**: Most shows require you to be 18+, a US resident, and not have appeared on a similar show within the last 1-2 years. Always read the official rules before applying.`
      },
      {
        title: 'How to Fill Out Applications the Right Way',
        content: `Your application is your first impression — make it count. A well-crafted application can dramatically increase your chances of being selected.

**Application Best Practices:**

**Photos**: Submit high-quality, recent photos showing your personality. Include:
- A clear headshot with good lighting
- A full-body shot in appropriate attire
- An "action" shot showing personality (hobbies, interests)
- Avoid sunglasses, hats, or anything hiding your face

**Written Responses**: Be specific and memorable:
- Instead of "I like travel," write "I've visited 47 countries and once got stranded in an airport for 36 hours"
- Include quantifiable achievements when possible
- Use humor appropriately — casting directors read hundreds of applications
- Be authentic — your real personality will come through on camera

**The "Interesting Fact" Section**: This is crucial:
- Avoid generic responses like "I love my family"
- Think of what makes you unique: unusual jobs, hobbies, achievements, or experiences
- The weirdest facts often get the best reactions from hosts

**Video Submissions** (when required):
- Keep it under 2-3 minutes
- Start strong — introduce yourself with energy
- Showcase your personality, not just your knowledge
- Answer sample questions to demonstrate quick thinking
- Good lighting and clear audio are essential
- Practice, but don't memorize — you want to seem natural

**Timing Matters**: Apply early in a season's casting cycle. Many shows cast months in advance. Follow the show's social media for casting announcements.`
      },
      {
        title: 'What Producers Are Really Looking For',
        content: `Producers have one primary goal: to create entertaining television. Understanding their priorities helps you position yourself as the ideal contestant.

**The Three P's: Personality, Performance, and Polish**

**Personality Trumps Knowledge**:
- Producers will often choose a fun, engaging contestant over a trivia expert
- Viewers connect with personalities, not encyclopedias
- Show enthusiasm during every interaction with the production team

**Performance Under Pressure**:
- They need contestants who won't freeze on camera
- Practice answering questions out loud under time pressure
- Demonstrating comfort with cameras and microphones is essential

**Polish and Professionalism**:
- Respond promptly to all casting communications
- Be flexible with scheduling — production schedules change constantly
- Follow all instructions exactly when given
- Show up prepared: know the show's format, rules, and history

**Red Flags for Producers**:
- Overconfidence or arrogance
- Being too quiet or mumbling during interviews
- Not knowing the show well (never say "I've never actually watched it")
- Conflict or drama during the audition process
- Being unavailable for the full tape day

**What Producers Notice**:
- How you treat everyone on set, from PAs to hosts
- Your energy level throughout a long audition day
- How you handle losing or making mistakes
- Whether you follow directions precisely

**The "Casting Story"**: Producers love a narrative. Think about what storyline you bring — the underdog, the expert, the quirky hobbyist, or the hometown hero.`
      },
      {
        title: 'Audition Tips and What to Expect',
        content: `The audition is your moment to shine. Knowing what happens and how to prepare gives you a major advantage.

**Before the Audition:**
- Research the show exhaustively — watch recent episodes, know the current format
- Practice with timing — most game shows move fast
- Prepare your "intro story" — you'll have 15-30 seconds to introduce yourself
- Review your application so your answers match what you wrote
- Choose your outfit carefully (covered in a later lesson)

**Typical Audition Format:**
1. **Check-in and paperwork**: Arriving early, signing releases, proof of identity
2. **Group orientation**: Learning about the show format and expectations
3. **Mock game**: Playing a shortened version of the actual game
4. **On-camera test**: Answering questions while being filmed
5. **Interview**: Brief one-on-one with a casting producer

**During the Mock Game:**
- Answer quickly but don't rush — accuracy matters more than speed
- Be loud and clear with your answers
- Show excitement when getting questions right
- React authentically — producers want genuine emotions
- Don't be discouraged by wrong answers — how you bounce back matters

**Common Audition Mistakes:**
- Second-guessing yourself out loud
- Answering before being called on (for buzzer shows)
- Over-explaining answers when a simple response is needed
- Being too tense or nervous — try to have fun
- Badmouthing other contestants or the show

**After the Audition:**
- Send a polite thank-you note if you have contact info
- Don't pest casting staff with follow-up calls/emails
- If you don't hear back within the stated timeframe, assume you weren't selected
- Apply again for future seasons if allowed`
      },
      {
        title: 'Stage Presence and Camera Basics',
        content: `Looking good on camera is a learned skill. These techniques will help you appear confident and telegenic.

**Body Language Fundamentals:**

**Posture**: Stand tall with shoulders back and down. Imagine a string pulling the top of your head upward. Good posture projects confidence and energy.

**Eye Contact**: Look directly at the camera or host when speaking. If multiple cameras are present, the floor director will indicate which one to address. Find the red recording light and make eye contact.

**Hands and Gestures**:
- Keep hands visible and relaxed at your sides when not gesturing
- Use purposeful gestures to emphasize points
- Avoid fidgeting, touching your face, or wringing your hands
- Practice keeping your hands still while concentrating

**Voice Techniques:**
- Project your voice — microphones amplify but don't fix mumbling
- Speak slightly slower than normal conversation pace
- Vary your tone to maintain interest
- Avoid verbal fillers like "um", "uh", and "like"

**The "Breathe and Smile" Technique**:
When nervous, take a deep breath and smile. This naturally lowers your shoulders, relaxes your face, and projects warmth. A genuine smile makes you instantly more likable on camera.

**Rehearsal Tips:**
- Record yourself practicing answers and watch the playback
- Practice in front of a mirror to monitor expressions
- Do mock interviews with friends who can give honest feedback
- Time yourself to ensure your intro fits in the allotted time

**Stage fright is normal** — even experienced performers get nervous. The key is to channel that energy into enthusiasm rather than tightening up.`
      },
      {
        title: 'What to Wear (and What Not to Wear)',
        content: `Your wardrobe choice can make or break your on-camera appearance. Productions often have specific guidelines, but knowing the basics helps you come prepared.

**General Rules:**

**Do Wear:**
- Solid, jewel tones: deep blues, emerald greens, burgundy, rich purples
- Colors that complement your skin tone
- Comfortable clothes you can sit, stand, and move in
- Layers if the studio might be cold
- Clothes that fit well — neither tight nor baggy
- Professional attire appropriate for the show's tone

**Don't Wear:**
- Pure white (blows out on camera)
- Pure black (loses detail on camera)
- Small patterns, thin stripes, or checks (cause moiré effect)
- Busy prints or loud patterns that distract from your face
- Excessive jewelry that might make noise
- Clothing with visible logos or brands
- Wrinkled or stained clothing

**For Quiz/Trivia Shows** (Jeopardy, etc.):
- Business casual: nice button-down, blouse, sweater, or blazer
- Dress pants, slacks, or a professional skirt
- Comfortable closed-toe shoes (feet often aren't visible)
- Avoid looking like you're going to a job interview OR the gym

**For Physical Game Shows** (Price is Right, etc.):
- Wear bright, energetic colors
- Comfortable clothes you can move in
- Athletic shoes with good support
- Avoid loose clothing that could catch on props

**Hair and Makeup:**
- Style hair away from your face
- Avoid extreme hairstyles or colors unless that's your authentic look
- Makeup should be natural but present — studio lights can wash you out
- Bring touch-up items (powder, lip balm) for long production days

**Always Bring Options**: Most contestants bring 2-3 outfit choices. The production team may request specific colors or styles to avoid conflicts with other contestants or set design.`
      },
      {
        title: 'Common Game Show Formats & Rules',
        content: `Understanding different game formats helps you choose which shows to pursue and how to prepare.

**Quiz/Trivia Shows:**

**Jeopardy!**: Knowledge + buzzer speed + wagering strategy. Three players, six categories per round, Daily Doubles hidden on the board. Key: buzzing timing matters — you can't ring in until the host finishes reading.

**Who Wants to Be a Millionaire**: Ladder format with increasing difficulty. Lifelines (now called "Ask the Host" and "50/50") help with difficult questions. Key: there's no time limit for most questions, so take your time.

**Wheel of Fortune**: Letter guessing + puzzle solving. You spin a wheel for dollar amounts and guess consonants. Vowels cost $250. Key: practice solving puzzles with partial information.

**The Price is Right**: Pricing knowledge + luck. Contestants "Come on Down!" from the audience. Games test grocery knowledge, bidding strategy, and carnival-game skills. Key: know common grocery item prices.

**Word/Puzzle Shows:**

** chain reaction shows**: Build word chains by guessing connecting words. Strategy involves recognizing patterns and vocabulary.

**Physical/Stunt Shows**:
- Ninja Warrior: Athletic courses with upper body focus
- Holey Moley: Mini golf with physical obstacles
- Know your physical abilities and prepare accordingly

**Team Shows**:
- Family Feud: Survey-based questions, family teamwork
- Press Your Luck: Strategy + luck, avoid "Whammies"
- Know your team's strengths and coordinate

**Key Universal Rules:**
1. Never reveal outcomes before air date (contract violation)
2. Judges' decisions are final
3. Follow host instructions exactly
4. Illegal actions can result in disqualification and lost winnings`
      },
      {
        title: 'General Trivia Foundations',
        content: `Being well-read across multiple categories improves your odds for any quiz show. Here's how to build a strong foundation.

**Essential Knowledge Categories:**

**Geography**: Know all 50 states and capitals, major world capitals, continent locations, oceans, major rivers, and mountain ranges. Understand time zones and their references.

**History**: American history from colonization through present. Major wars and their dates. World history highlights: ancient civilizations, Renaissance, World Wars.

**Science**: Basic chemistry (periodic table symbols), physics concepts, biology fundamentals, astronomy basics, scientific method.

**Literature**: Classic American and British authors, famous book titles and plots, poetry basics, major literary movements.

**Pop Culture**: Current music, movies, TV shows, viral trends. Also, historical pop culture: music from each decade, classic films, TV history.

**Sports**: Major sports rules, championship names, famous athletes, record holders, basic statistics.

**Building Your Knowledge Base:**

**Daily Habits:**
- Read news from reliable sources daily
- Use trivia apps to practice quick recall
- Watch Jeopardy! and play along, tracking your categories
- Listen to podcasts on varied topics during commutes

**Weekly Practice:**
- Take online practice quizzes in weak categories
- Review "Jeopardy! College Champion" study guides
- Study world maps and flags
- Learn one new topic in depth each week

**The "Learn Something New" Approach**:
When you encounter something you don't know, write it down and research it. Build connections — knowing that potassium is K helps you remember the element symbol.

**Remember**: Even the best contestants don't know everything. The goal is breadth, not depth, across as many categories as possible.`
      },
      {
        title: 'How to Practice Effectively at Home',
        content: `Consistent, deliberate practice separates successful contestants from average ones. Here's how to create an effective training regimen.

**Daily Practice (15-30 minutes):**

**Morning**: Quick quiz on one app while having coffee
- Recommended: Jeopardy! World Tour, Trivia HQ, Sporcle
- Focus on categories where you're weak

**Evening**: Watch and play along with actual game shows
- Pause after each clue/question
- Answer in full voice, not just in your head
- Keep score to track improvement

**Weekly Deep Practice (1-2 hours):**

**Buzzer Practice (for buzzer shows)**:
- Use a clicker, pen, or even a toilet-paper roll to simulate buzzer timing
- Watch Jeopardy! and practice buzzing in after the clue ends
- Goal: develop muscle memory for signaling

**Speed Rounds**:
- Set a timer for 60 seconds and answer rapid-fire questions
- Practice thinking quickly: trust your first instinct
- Have a partner read questions aloud

**Mock Games**:
- Set up complete simulations with friends or family
- Include the full experience: intro, game, interview
- Record yourself and review the footage

**Memory Enhancement:**
- Use mnemonics for lists: "HOMES" for Great Lakes
- Create mental "memory palaces" for categorizing information
- Flashcard apps like Anki for spaced repetition learning

**Physical Preparation:**
- Practice standing for long periods
- Work on your "game face" — reactions after right/wrong answers
- Breathwork for staying calm under pressure

**Track Your Progress:**
Keep a practice log. Note which categories you ace vs. struggle with. Monitor your buzzer timing improvement. Celebrate progress!`
      },
      {
        title: 'Legal Stuff, Background Checks, and Taxes on Winnings',
        content: `Winning money on a game show comes with important legal and financial considerations. Understanding these before you appear protects you later.

**Background Checks:**
All major game shows conduct background checks before final contestant selection. Expect checks on:

- Criminal history (felonies usually disqualify)
- Identity verification
- Employment verification
- Previous game show appearances
- Social media presence

**Red Flags**: Felony convictions, bankruptcy within certain timeframes, lying on applications, recent appearances on similar shows, offensive social media content.

**Eligibility Restrictions:**
- Most shows require US residency
- 18+ age requirement (some shows 21+)
- Usually prohibited: employees of the production company, network, sponsors, or immediate family members
- Typically 1-2 year waiting period after appearing on other game shows

**Taxes on Winnings:**

**Federal**: Game show winnings are taxable as ordinary income (10-37% depending on your bracket). The show will report winnings over $600 to the IRS via Form 1099-MISC.

**State**: Winnings are taxable in your home state AND in the state where the show tapes. California residents avoid double-taxation; others may owe two states.

**Prize Taxes**: Non-cash prizes (cars, trips) are taxed at fair market value. If you win a $30,000 car, you owe taxes on $30,000 regardless of whether you keep it.

**Smart Planning Tips:**
1. Set aside 35-40% of winnings for taxes immediately
2. Consider consulting a tax professional before appearing
3. Factor in travel costs and lost wages for taping days
4. Non-cash prizes can often be declined if the tax burden is too high

**Confidentiality**: All contestants sign non-disclosure agreements. Revealing outcomes before air date can result in forfeiture of prizes and legal action.`
      }
    ],
    test: [
      {
        question: 'What percentage of applicants typically move past the initial application stage for most game shows?',
        options: ['1-2%', '5-15%', '25-35%', '40-50%'],
        correct: 1
      },
      {
        question: 'According to casting directors, which quality typically matters MORE for selection?',
        options: ['Encyclopedic trivia knowledge', 'Personality and enthusiasm', 'Physical attractiveness', 'Previous TV experience'],
        correct: 1
      },
      {
        question: 'On Jeopardy!, when can you buzz in to answer?',
        options: ['As soon as the clue appears on screen', 'Anytime during the clue reading', 'Only after the host finishes reading the clue', 'Only after all three contestants have locked in'],
        correct: 2
      },
      {
        question: 'Which of the following should you AVOID wearing on camera for a game show?',
        options: ['Solid jewel-tone colors', 'Small checkered patterns', 'Well-fitted clothes', 'Comfortable shoes'],
        correct: 1
      },
      {
        question: 'What is the "HOMES" mnemonic used to remember?',
        options: ['The Great Lakes', 'Types of clouds', 'European capitals', 'Periodic table elements'],
        correct: 0
      },
      {
        question: 'How are non-cash prizes (cars, trips) taxed?',
        options: ['Not taxed at all', 'Taxed at a lower rate than cash', 'Taxed at fair market value', 'Only taxed if you sell them'],
        correct: 2
      },
      {
        question: 'What percentage of winnings should you typically set aside for taxes?',
        options: ['10-15%', '20-25%', '35-40%', '50-55%'],
        correct: 2
      },
      {
        question: 'Which is a common reason contestants are disqualified even after being selected?',
        options: ['Being too nervous during the audition', 'Wearing the wrong color outfit', 'Lying on their application', 'Not knowing enough trivia'],
        correct: 2
      },
      {
        question: 'What does "NDA" stand for in game show contestant agreements?',
        options: ['No Discussion Allowed', 'Non-Disclosure Agreement', 'Non-Disqualification Assurance', 'National Digital Archive'],
        correct: 1
      },
      {
        question: 'Why might a contestant owe taxes in two different states?',
        options: ['Federal law requires double taxation', 'Their home state AND the taping state both tax winnings', 'Game shows are always taxed twice', 'States tax contestants differently based on income'],
        correct: 1
      }
    ]
  },
  {
    id: 'game-show-contestant-201',
    category: 'Media & Entertainment',
    title: 'Game Show Contestant Mastery — Tier 2',
    tier: 2,
    duration: '75 min',
    description: 'Advanced strategies for winning on game shows. Deep dives into specific show strategies, memory techniques, handling pressure, and post-win planning for maximum success.',
    lessons: [
      {
        title: 'Advanced Audition Techniques',
        content: `Once you've mastered the basics, advanced audition techniques can dramatically increase your selection odds and help you stand out from thousands of other applicants.

**Building Your "Contestant Brand":**

Every successful contestant has a memorable hook. When you audition, you're not just there to answer questions — you're there to create story moments producers can use.

**The Story Hook Formula:**
- Have one defining fact about yourself ready in 15 seconds
- Include why this matters: "I've collected 5,000 Pez dispensers, which taught me to notice details quickly — perfect for spot prizes"
- Practice your hook until it feels natural, not rehearsed

**Strategic Networking:**
- Join online communities of game show enthusiasts and past contestants
- Attend live audition events even for shows you're not applying to (producers move between shows)
- Follow casting directors on social media (many post tips and announcements)
- Connect with former contestants who can share insights

**Multiple Show Strategy:**
Smart contestants apply to multiple shows simultaneously:
- Apply to 3-5 shows in your wheelhouse
- Space applications to avoid scheduling conflicts
- Each audition practice makes you better for the next

**The "Callback Pipeline":**
Many experienced contestants get "called back" multiple times before being selected. If you don't get picked immediately:
- Stay positive and maintain relationships with casting staff
- Reapply when eligible (usually 12 months)
- Update your application with new accomplishments
- Continue practicing — your skills remain fresh

**Psychological Positioning:**
- Show you WANT to be there without desperation
- Demonstrate resilience: how you handle setbacks matters
- Reveal strategic thinking during mock games — casting loves that

**The "Storytelling" Audition Approach:**
Instead of just answering questions, frame responses as mini-narratives. "I once got locked in a library overnight — and used that time to memorize every U.S. President in order."`
      },
      {
        title: 'Deep Strategy for Popular Shows (Jeopardy, Wheel, Price is Right)',
        content: `Each major game show has unique optimal strategies. Masters know the specific approaches that maximize winning potential.

**Jeopardy! Strategy:**

**Board Management:**
- Start at the bottom of categories (higher value clues)
- Control the board as the leader to find Daily Doubles
- As a challenger, target categories where you're strong
- Daily Doubles are statistically more likely in rows 3-5

**Buzzer Technique:**
- The "lockout" period is 5 frames (about 0.1 seconds) after the clue ends
- Watch the host's lips — begin pressing as the last syllable is spoken
- Do NOT press repeatedly — you lock yourself out
- Practice with a clicker to build muscle memory

**Wagering Strategy:**
- Always have a wager plan before the game
- In FJ, the standard wager is: (your score - 2nd place score) + $1
- For tie scores, wager everything or nothing (never in between)
- In third place with low score: wager to "catch up" if both leaders miss

**Daily Double Betting:**
- First DD: When tied or behind, bet big (true Daily Double risks are often worth it)
- Later DDs: Adjust based on game position
- Never bet less than the clue value unless strategically necessary

**Wheel of Fortune Strategy:**

**Spinning vs. Solving:**
- If you know the puzzle, SOLVE — spinning risks bankruptcy
- Only spin when stuck and there are enough consonants left
- Buy vowels early to confirm letters before spinning

**Letter Selection:**
- RSTLNE are given in bonus round
- In regular play: call C, H, M, D, P early (common letters)
- After those, look at puzzle category for hints

**Category Intelligence:**
- "Phrase" puzzles often have common sayings
- "Thing" puzzles might be compound words
- "Proper Name" always has a capital letter

**The Price is Right Strategy:**

**Contestant's Row Bidding:**
- $1 bid: Use when you think everyone has overbid
- Bid exactly $1 higher than someone else
- Last bidder has advantage: can bid $1 or $1 over

**Spin the Wheel:**
- Total of 85-90 usually wins (need to leave room for a spin)
- If you spin .05 or .15 first, strong chance of $.70+ total
- Two small spins = stay, one large = spin again? Complex math applies`
      },
      {
        title: 'Memory Techniques and Rapid Recall',
        content: `Quiz champions aren't born with better memories — they use proven techniques. Master these methods to access knowledge instantly under pressure.

**The Memory Palace Technique:**

This ancient Greek method ("Method of Loci") uses spatial memory to store information:
1. Choose a familiar place (your home)
2. Place items to remember in specific locations mentally
3. Create vivid, unusual images for each item
4. Walk through mentally to recall

**Example for U.S. Presidents:**
- Imagine Washington washing clothes in your front yard
- Jefferson playing jazz in the living room
- Lincoln freeing a lion from your kitchen

The weirder the image, the more memorable. Sex and violence stick best (use responsibly).

**The Chunking Method:**

Break information into digestible pieces:
- Phone numbers: 555-867-5309 (chunks of 3-4)
- Dates: 1776 becomes "17-76" or "Declaration of Independence"
- Lists: Group by category, first letter, or relationship

**Spaced Repetition Systems:**

Apps like Anki optimize memory retention:
1. Review new information frequently at first
2. Gradually extend intervals as you remember
3. Focus time on weakening memories, not strong ones

**Quick Recall Exercises:**

**Speed Association:**
- See a word, instantly call out a related fact
- "Washington" → "First president, Virginia, 1790s"
- Build speed: reduce thinking time daily

**Flashcard Racing:**
- Set timer for 60 seconds
- See how many cards you can answer correctly
- Track improvement over time

**Reverse Recall:**
- Start with the answer, name the question
- "1776" → "When was the Declaration signed?"
- Strengthens bidirectional memory paths

**The "First Letter" Memory Jog:**
- Memorize first letters of sequences
- "ROY G BIV" for rainbow colors
- First letters of each president's last name in order

**Handling "On the Tip of Tongue":**
- Scan first letter sounds mentally
- Think of related memories or contexts
- Move on and return — the answer often surfaces`
      },
      {
        title: 'Handling Pressure and Nerves on Camera',
        content: `Even the most knowledgeable contestants can crumble under pressure. Learn to perform your best when it matters most.

**Understanding Performance Anxiety:**

The physiological response to stress (fight-or-flight) impairs memory and decision-making. Your goal is not to eliminate nerves, but to manage them.

**Pre-Game Rituals:**
Professional athletes and contestants use consistent rituals to create calm:
- Same morning routine (breakfast, music, preparation)
- Breathing exercises before taking the stage
- Positive visualization of success
- Power poses (hands on hips, chest open) for 2 minutes

**The 4-7-8 Breathing Technique:**
1. Breathe in through nose for 4 counts
2. Hold breath for 7 counts
3. Exhale slowly through mouth for 8 counts
4. Repeat 3-4 times

This activates the parasympathetic nervous system, reducing anxiety within 60 seconds.

**On-Camera Strategies:**

**When You Freeze:**
- Take a breath (buying yourself a moment)
- It's okay to say "let me think" or repeat the question
- Trust your first instinct — overthinking causes more errors
- One moment of silence feels longer to you than to viewers

**After a Wrong Answer:**
- Take a breath and reset
- Don't beat yourself up visibly
- Producers and viewers respect resilience
- Many champions recover from early mistakes

**Managing the Buzzer (for buzzer shows):**
- Nervousness causes early or late presses
- Consciously relax your buzzer hand
- Focus on timing, not outcome
- Practice while stress-testing yourself (timer, stakes)

**Reframing Anxiety:**
Research shows that naming your emotion ("I'm feeling nervous") reduces its power. Also: reframe nerves as excitement ("I'm excited to be here") — the physiological state is nearly identical.

**The "Big Moment" Mindset:**
- Focus on process, not outcome
- You've practiced — trust your preparation
- Win or lose, you're having an experience few people ever do
- The worst outcome is still a great story`
      },
      {
        title: 'Reading Hosts and Other Contestants',
        content: `Success comes from understanding everyone at the table — especially your opponents. Here's how to read and respond to the humans you compete against.

**Reading Your Opponents:**

**Confidence Signals:**
- Upright posture, direct eye contact = confidence
- Leaning forward = engaged and ready
- Quick buzzer presses = high alert

**Uncertainty Signals:**
- Looking down, touching face = doubt
- Hesitant buzzes = unsure
- Fidgeting = nerves

**Intelligence Clues:**
- Watching what you're watching (same category focus)
- Reaction to other players' answers (knows if it's right?)
- Body language when confident vs. uncertain categories

**Using Opponent Reads:**
- If opponents are uncertain, consider buzzing (they're unlikely to)
- Watch for patterns: some always buzz on certain categories
- Note when opponents look frustrated — might be their weak area

**Reading the Host:**

Most hosts maintain neutrality, but subtle tells exist:

**Jeopardy! and quiz hosts:**
- Pause before "correct" might indicate they expected different
- Tone of "correct" vs. "yes" can reveal
- Some hosts hint when Daily Doubles or key moments come

**Game show hosts (Price is Right, etc.):**
- Build-up before reveals = suspense tactic
- "Are you sure?" type questions = sometimes a hint
- Energy level suggests whether you're on track

**Host Psychology:**
- Hosts want entertaining games
- Help the host help you — be responsive, clear, engaging
- Build genuine rapport during contestant interviews
- Hosts may subtly favor contestants who "play along"

**Interacting with Other Contestants:**

During taping breaks:
- Be friendly but strategic
- Share general tips, not your specific game strategy
- Learn about their backgrounds — might reveal strengths
- Build goodwill — you might meet them again

**Post-Game Sportsmanship:**
- Congratulate winners sincerely
- gracious losers are often invited back
- Avoid excuses: "I knew that!" creates bad impressions`
      },
      {
        title: 'Betting/Strategy Math for Game Shows',
        content: `Game shows are mathematical games. Understanding the math behind wagering, spinning, and risk gives you a decisive edge.

**Jeopardy! Final Wagering:**

**Basic Formula for Leader:**
- Your wager = Your score - (2nd place score × 2) - 1
- This guarantees a win if you're correct, AND if the 2nd place player gets it right and bets everything

**Example:**
- You: $15,000, 2nd: $10,000, 3rd: $5,000
- Wager = $15,000 - ($10,000 × 2) - 1 = -$5,001 → bet $0
- Alternative: Bet $5,001 to cover 2nd place doubling to $20,000

**When in Third Place:**
- Bet everything or enough to catch leaders if they miss
- Calculate scenarios: What if 1st bets wrong and misses?

**Daily Double Math:**
- True Daily Double: 2x current score
- Statistically optimal: Bet maximum when your confidence is >50%
- Strategic: Larger bets early game, conservative bets late game

**Wheel of Fortune Bonus Round:**

Given letters RSTLNE, optimal additional letters to choose:
- Typical picks: C, H, M, D, P
- Less common but valuable: G, B, K
- Depends on puzzle category

**The Price is Right Spinning Math:**

**First Spin Value Analysis:**
- If first spin ≥ .70, stop (70% chance of winning)
- If first spin < .70, spin again
- Edge case: .65 with leader at .90 → always spin again

**Contestant's Row Bidding Probability:**
- Optimal: Bid $1 + actual price, or $1 over highest bid
- Bidding $1 has ~20% success rate when others overbid
- Being last bidder gives ~40% advantage

**Game Theory Basics:**

**Prisoner's Dilemma in games:**
- In auctions/bidding games, commit to maximum willing to pay beforehand
- Never get caught in "bidding wars" by ego
- Calculate expected value, not just "I want to win"

**Expected Value (EV) Calculation:**
EV = (Probability of Winning) × (Prize Value) - Cost

Example: 25% chance at $10,000, costs $500 to enter:
EV = 0.25 × $10,000 - $500 = $2,500 - $500 = $2,000 (positive, worth it)`
      },
      {
        title: 'Building Real Stage Charisma',
        content: `Charisma isn't magic — it's a set of learnable behaviors that make people want to watch and root for you.

**The Charisma Formula: Presence + Power + Warmth**

**Presence: Being Fully There**
- Eye contact that feels connected
- Listening actively (not planning your next line)
- Reacting genuinely to what happens
- Body language that says "I'm glad to be here"

**Power: Projecting Confidence**
- Strong posture: shoulders back, chest open
- Voice: Projected, clear, slightly lower register
- Controlled movements: no fidgeting or nervous habits
- Space: Take your space, don't shrink

**Warmth: Likeability Factor**
- Genuine smiles (engage your eyes, not just mouth)
- Laughing at host jokes
- Showing empathy for opponents
- Authentic enthusiasm that comes through

**The "Best Self" Technique:**

Before appearing, identify your authentic best qualities:
- Are you the funny one? The earnest one? The underdog?
- Lean into your natural personality, not a fake persona
- Audiences smell inauthenticity — be yourself amplified

**Specific Charisma Hacks:**

**The "Eyebrow Flash":**
When meeting someone (or a camera), raise eyebrows slightly for a split second. This signals "I recognize you" and creates instant warmth.

**The "Lean In":**
When someone speaks, lean slightly forward. This shows engagement and makes the speaker feel valued.

**The "Touch and Go":**
Brief, appropriate touch on shoulder or arm (where culture allows) — creates connection. On camera, a touch of your own arm or chest can convey sincerity.

**Mirror and Match:**
Subtly match the host's energy level and pace. If they're high energy, amp up. If they're serious, respect that.

**The Victory Moment:**
- When winning: react first, then composed gratitude
- Raise arms, jump, genuine surprise — producers love it
- Thank your family/support system — heartland appeal

**The "Graceful Loser":**
- Clap for winner, smile, shake hands
- Avoid "I knew that" or sour expressions
- Gracious losers are often invited back for tournament play`
      },
      {
        title: 'Post-Win Planning (Legal, Taxes, Publicity)',
        content: `Winning is just the beginning. Proper planning maximizes your prize and sets you up for future opportunities.

**Immediate Post-Win Steps:**

**Documentation:**
- Keep ALL paperwork from production
- Photograph any non-cash prizes immediately
- Note exact prize values as stated by production
- Save all tax forms you receive

**The "Waiting Period":**
Most shows air 2-8 weeks after taping (some same-day, some months)
- You cannot discuss outcome until it airs
- Start planning, but don't spend money yet
- Line up professional help (lawyer, accountant) if winnings are substantial

**Legal Considerations:**

**Prize Acceptance:**
- Read all documents before signing
- You can usually decline prizes you don't want
- Some prizes have transfer options, others don't
- "Cash equivalent" may be available for some non-cash prizes

**Publicity Requirements:**
- Shows own your image and story for promotional purposes
- You may be required to do press (interviews, appearances)
- Negotiations on publicity obligations are sometimes possible for large winners

**Tax Planning:**

**Federal Taxes:**
- Winnings are ordinary income (your marginal rate + applicable brackets)
- Estimated tax payments may be required quarterly
- Consider adjusting W-4 withholding at your job
- Large wins: consult tax professional before April 15

**State Taxes:**
- California taxes winners at ~9.3% (where most shows tape)
- Plus your home state (credit for CA taxes paid may or may not apply)
- Some states (TX, FL, etc.) have no income tax — move before winning?

**Deductions:**
- Travel, preparation costs are potentially deductible
- Contestant "professionals" may deduct coaching, supplies
- Consult CPA: rules are complex

**Publicity Strategy:**

**Social Media:**
- Decide on your approach before the episode airs
- Live-tweeting your own episode builds following
- Some winners become minor celebrities — be ready
- Lock down privacy settings on personal posts

**Media Opportunities:**
- Local news may interview you
- Consider whether you want press or privacy
- Game show communities will discuss your gameplay
- YouTube reaction videos are now common

**Long-Term Opportunity:**
Some winners parlay their appearance into:
- Speaking engagements
- Trivia host jobs
- Podcast appearances
- Future TV opportunities
- Book deals (for major winners)`
      },
      {
        title: 'Networking in the Game Show World',
        content: `The game show community is small and surprisingly connected. Building relationships can lead to future opportunities.

**The Contestant Community:**

**Online Forums:**
- Reddit: r/Jeopardy, r/gamegrumps, r/trivia
- Official show websites have forums
- Facebook groups for past contestants
- Discord servers for active players

**What You Gain:**
- Inside information on casting timelines
- Tips on auditioning for specific shows
- Support during the waiting period
- Friends who understand the experience
- Potential practice partners

**Casting Director Relationships:**

**Building Rapport:**
- Be memorable for the right reasons (positive, prepared, professional)
- Follow casting staff on social media professionally
- Thank-you emails after auditions (brief, not pushy)
- Stay visible: apply to other shows they cast

**The Callback Pipeline:**
Many contestants audition multiple times before selection:
- Maintain your relationship with casting staff over years
- Update them on life changes (new job, achievement, etc.)
- Reapply enthusiastically when eligible
- Each "no" brings you closer to "yes" with persistence

**Past Contestant Connections:**

**Why Connect:**
- They can demystify the process
- Some recommend new contestants to casting
- They know unwritten rules and expectations
- Guest appearances, tournaments, all-star games

**How to Connect:**
- Attend game show conventions and events
- Reach out via social media (respectful, not demanding)
- Many past contestants are active in online communities
- Offer value: share your own expertise or experiences

**Industry Connections:**

**Beyond Contestants:**
- Production assistants often move to other shows
- Make friends with crew — they remember who was nice
- Hosts sometimes recommend contestants for specials
- Writers and researchers have input on contestant selection

**Long-term Strategy:**
Think of game shows as a community, not a one-time event:
- Build reputation as someone great to work with
- Stay in touch with connections after your appearance
- Be a good sport in online discussions
- Consider hosting or creating trivia events locally`
      },
      {
        title: 'Creating Realistic Practice Simulations',
        content: `The best practice mimics real conditions. Create training environments that prepare you for actual gameplay pressure.

**Building Your Home Studio:**

**Jeopardy! Practice Setup:**
- Use online practice games (J! Archive, Jeopardy! apps)
- Stand while playing to mimic real conditions
- Use a clicker, pen, or buzzer substitute
- Play with contestants: assign buzzer, keep real score
- Wear your game-day outfit during practice

**Wheel of Fortune Setup:**
- Print puzzle boards or project them on a wall
- Use a spinning object to simulate wheel randomness
- Set up with family/friends to solve against timers
- Practice "buying a vowel" and letter-calling rhythm

**Price is Right Preparation:**
- Watch episodes and bid out loud before contestants
- Research current grocery prices (they rarely change)
- Practice physical pricing games with household objects
- Time yourself for quick reactions

**Timed Pressure Drills:**

**Speed Rounds:**
- Set countdown timer (10-15 seconds per question)
- Have someone read questions aloud — you answer immediately
- Wrong answers = 0 points, no answers = penalty
- Track accuracy under increasing time pressure

**"Sudden Death" Simulations:**
- One tough question determines win/lose
- Practice answering with stakes (e.g., loser buys dinner)
- Get comfortable with high-pressure moments

**Buzzer Practice Methods:**

**The Light Lock Trick:**
- Jeopardy! lights activate when buzzer is "open"
- Practice with a partner who signals when pressing is allowed
- Build muscle memory for the "sweet spot" timing

**Reaction Time Testing:**
- Online reaction tests measure your base speed
- Average reaction time: 250ms
- Elite buzzer speed: 150-200ms
- Practice daily to improve

**Full Game Rehearsals:**

**Weekly Game Nights:**
- Invite trivia-loving friends
- Rotate who "hosts" to practice varied hosting styles
- Record sessions and review your performance
- Vary quiz categories to simulate real distribution

**Competition Practice:**
- Join local trivia leagues
- Enter pub trivia tournaments regularly
- Competitions acclimate you to pressure with strangers
- Winning local competitions proves your readiness

**The "Pre-Show" Ritual Practice:**
- Practice your full pre-game routine in simulation
- Same foods, same warm-up, same mental prep
- When the real show comes, it feels familiar`
      }
    ],
    test: [
      {
        question: 'In Jeopardy!, where are Daily Doubles statistically most likely to be located?',
        options: ['In the $200 row', 'In the $400 row', 'In rows 3-5 (middle to bottom)', 'Evenly distributed across all rows'],
        correct: 2
      },
      {
        question: 'When leading in Jeopardy! Final, the standard safe wager formula is:',
        options: ['Everything you have', 'Double the second place score', 'Your score minus (2nd place score × 2) minus $1', 'Zero — always guarantee a tie'],
        correct: 2
      },
      {
        question: 'On Wheel of Fortune, what are the six letters given to you automatically in the bonus round?',
        options: ['R, S, T, L, N, E', 'A, E, I, O, U, Y', 'C, D, H, M, P, B', 'J, K, Q, X, Z, W'],
        correct: 0
      },
      {
        question: 'The "Memory Palace" technique relies on what type of memory?',
        options: ['Auditory memory', 'Spatial memory', 'Muscle memory', 'Emotional memory'],
        correct: 1
      },
      {
        question: 'The 4-7-8 breathing technique activates which nervous system?',
        options: ['Sympathetic nervous system (fight-or-flight)', 'Parasympathetic nervous system (calm)', 'Central nervous system', 'Somatic nervous system'],
        correct: 1
      },
      {
        question: 'In The Price is Right "Contestant\'s Row", what is the optimal bidding strategy as the last bidder?',
        options: ['Bid the exact price you think it is', 'Bid $1 over the highest bid or just $1', 'Bid the maximum you think it could be', 'Always bid $1,000'],
        correct: 1
      },
      {
        question: 'What is the "Eyebrow Flash" technique used for in building charisma?',
        options: ['To show dominance over opponents', 'To signal recognition and create instant warmth', 'To distract the host during gameplay', 'To improve buzzer timing'],
        correct: 1
      },
      {
        question: 'In The Price is Right wheel spinning, if your first spin lands on .70 or higher, the optimal strategy is:',
        options: ['Spin again to try for $1.00', 'Stop (you have a ~70% chance of winning)', 'Always spin exactly twice', 'Let someone else spin for you'],
        correct: 1
      },
      {
        question: 'Why might a game show winner owe taxes in two different states?',
        options: ['Federal law requires it for prizes over $10,000', 'Their home state plus the taping state both tax winnings', 'All game show winnings are double-taxed', 'Only million-dollar winners pay multiple state taxes'],
        correct: 1
      },
      {
        question: 'What is "Expected Value" (EV) in game show context?',
        options: ['The average score you\'ll get', 'Prize probability multiplied by value minus cost', 'The minimum you\'re guaranteed to win', 'The host\'s predicted rating for your episode'],
        correct: 1
      }
    ]
  }
];

module.exports = COURSES;
