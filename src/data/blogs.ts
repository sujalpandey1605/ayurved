export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: "understanding-panchakarma-the-five-pillars-of-detox",
    title: "Understanding Panchakarma: The Five Pillars of Detox",
    excerpt: "A clear, practical guide to what Panchakarma actually is, what each step does and how to know if you need it.",
    date: "2025-02-12",
    category: "Panchakarma",
    readTime: "6 min read",
    image: "/blog-imgs/panchakarma.jpg",
    content: [
      "Panchakarma literally means 'five actions'. It is the most well-known classical Ayurvedic protocol and is designed to clear deep-seated toxins (ama) that even a clean diet cannot remove on its own.",
      "The five core procedures are Vamana (therapeutic emesis), Virechana (purgation), Basti (medicated enema), Nasya (nasal medication) and Raktamokshana (blood-letting). Not every patient needs all five — your doctor selects only what suits your dosha and condition.",
      "Before the main procedures, the body is prepared through Snehana (oleation) and Swedana (sudation). These steps loosen toxins from the tissues and bring them into the digestive tract where they can be eliminated.",
      "Patients usually report better digestion, sleep, energy and skin clarity within days of completing the program. The deeper benefits — reduced inflammation, stable hormones, mental calm — show up over the following weeks.",
      "If you have been carrying chronic fatigue, gut issues, skin flare-ups or simply feel 'off', a supervised Panchakarma can be a powerful reset.",
    ],
  },
  {
    slug: "diet-tips-for-people-with-chronic-kidney-disease",
    title: "Diet Tips for People with Chronic Kidney Disease",
    excerpt: "What to eat, what to limit and the small daily habits that protect your kidneys.",
    date: "2025-01-30",
    category: "Kidney Health",
    readTime: "7 min read",
    image: "/blog-imgs/blog-kidney.png",
    content: [
      "When kidney function falls, the diet has to do extra work. The right foods reduce the load on the kidneys, prevent fluid build-up and keep your blood values stable.",
      "Protein needs to be moderate, not zero. Good sources include moong dal, paneer in small quantities and egg whites. Red meat and protein powders are usually best avoided.",
      "Limit salt to under 5 g per day. That includes hidden salt in pickles, papads, chutneys and packaged snacks. Cooking at home gives you control.",
      "Watch potassium and phosphorus if your reports show high values. Coconut water, bananas, oranges and tomatoes are common culprits for potassium; dairy and processed foods drive up phosphorus.",
      "Stay well hydrated, but follow your doctor's daily fluid limit. In advanced CKD, drinking too much can be as harmful as drinking too little.",
    ],
  },
  {
    slug: "managing-stress-the-ayurvedic-way",
    title: "Managing Stress the Ayurvedic Way",
    excerpt: "Three time-tested practices that calm the nervous system and rebuild resilience.",
    date: "2025-01-18",
    category: "Wellness",
    readTime: "5 min read",
    image: "/blog-imgs/holistic.jpg",
    content: [
      "Modern stress is rarely a single event — it is the constant hum of notifications, deadlines and incomplete sleep. Ayurveda treats this state as aggravated Vata and over-stimulated Sadhaka Pitta.",
      "Begin with Abhyanga — a gentle daily self-massage with warm sesame or Brahmi oil. Even ten minutes is enough to calm the nervous system before your shower.",
      "Add Nadi Shodhana (alternate nostril breathing) for five minutes morning and evening. It synchronises the two sides of the brain and lowers heart rate within minutes.",
      "Anchor your day with consistent sleep timings. Going to bed and waking up at the same time every day, even on weekends, is one of the most powerful Ayurvedic prescriptions.",
      "Together, these three practices can reduce baseline stress dramatically in 2–3 weeks of consistent practice.",
    ],
  },
  {
    slug: "early-warning-signs-your-liver-needs-attention",
    title: "Early Warning Signs Your Liver Needs Attention",
    excerpt: "The liver is silent until it is not. Here is what to watch for and how Ayurveda can help.",
    date: "2025-01-05",
    category: "Liver Health",
    readTime: "6 min read",
    image: "/blog-imgs/blog-liver.png",
    content: [
      "The liver does over 500 jobs every day, from filtering toxins to producing bile and storing nutrients. It rarely complains until it is already stressed.",
      "Look out for unexplained fatigue, mild yellowness in the eyes, persistent nausea, dull pain under the right rib, and dark urine. Skin issues and stubborn weight gain can also be signals.",
      "Ayurveda links liver function to Pitta dosha. Bhumi Amla, Kalmegh, Kutki and Punarnava are classical hepatoprotective herbs used in carefully formulated combinations.",
      "Lifestyle changes matter most: cut alcohol, reduce fried foods and finish dinner by 8 pm. Add bitter greens, turmeric and lemon water in the morning.",
      "If liver enzymes are already raised on reports, get a proper assessment instead of self-medicating. Targeted Ayurvedic care under supervision can often normalise values within months.",
    ],
  },
  {
    slug: "ayurvedic-routine-for-better-sleep",
    title: "An Ayurvedic Routine for Better Sleep",
    excerpt: "Sleep is medicine. A simple evening routine can transform how you wake up.",
    date: "2024-12-22",
    category: "Wellness",
    readTime: "5 min read",
    image: "/blog-imgs/blog-sleep.png",
    content: [
      "Quality sleep heals more than any supplement can. Yet most adults today struggle to fall asleep or stay asleep through the night.",
      "Begin winding down 90 minutes before bedtime. Dim the lights, switch off bright screens and shift to warm, low-stimulation activities.",
      "A cup of warm milk with a pinch of nutmeg and turmeric is one of the oldest Ayurvedic sleep aids. It works particularly well for restless minds.",
      "Massage your feet with warm sesame oil for five minutes. The soles have nerve endings that signal the entire body to relax.",
      "Aim to be in bed by 10:30 pm. The hours before midnight carry the deepest restorative sleep value, according to both Ayurveda and modern chronobiology.",
    ],
  },
  {
    slug: "controlling-blood-sugar-naturally",
    title: "Controlling Blood Sugar Naturally",
    excerpt: "Realistic, food-first strategies for type 2 diabetes that work in Indian kitchens.",
    date: "2024-12-10",
    category: "Diabetes",
    readTime: "7 min read",
    image: "/blog-imgs/blog-diabetes.png",
    content: [
      "Type 2 diabetes is largely a lifestyle disease. The good news is that it responds beautifully to consistent, simple changes.",
      "Build every plate around vegetables, dal, a small portion of grain and a healthy fat. Cut added sugar to near zero and limit fruit juices entirely.",
      "Walk for 20 minutes after dinner. This single habit can blunt post-meal sugar spikes more than any tablet.",
      "Methi seeds soaked overnight, bitter gourd juice twice a week and a pinch of cinnamon in your morning chai are classical supports — not magic, but useful.",
      "Track HbA1c every 3 months and make decisions based on data, not how you feel. Sustained improvement is always possible with discipline.",
    ],
  },
  {
    slug: "what-is-shirodhara-and-who-is-it-for",
    title: "What Is Shirodhara and Who Is It For?",
    excerpt: "The famous oil-on-forehead therapy explained — when it helps and when it does not.",
    date: "2024-11-28",
    category: "Therapies",
    readTime: "5 min read",
    image: "/blog-imgs/blog-shirodhara.png",
    content: [
      "Shirodhara is a classical Ayurvedic therapy where a thin, continuous stream of warm medicated oil is poured on the forehead for 30–45 minutes.",
      "It is widely used for chronic stress, anxiety, insomnia, migraine, hair fall and certain skin conditions. The effect on the nervous system is remarkable.",
      "The oil is selected based on your dosha — Brahmi, Bhringraj, Ksheerabala or Mahanarayan are common choices.",
      "Most people feel deeply relaxed after the very first session. A typical therapeutic course is 7 to 14 sessions on consecutive days.",
      "It is not recommended during severe cold, sinusitis, certain skin conditions or in late pregnancy. A short consultation is enough to know if it suits you.",
    ],
  },
  {
    slug: "joint-pain-its-not-just-about-age",
    title: "Joint Pain: It Is Not Just About Age",
    excerpt: "Why young adults are increasingly facing joint pain and what to do about it.",
    date: "2024-11-15",
    category: "Joints & Spine",
    readTime: "6 min read",
    image: "/blog-imgs/blog-joint-pain.png",
    content: [
      "We are seeing more 30 and 40-year-olds with knee, neck and back pain than ever before. Long sitting hours and weak core muscles are the main culprits.",
      "Posture matters more than people realise. Even small daily corrections — screen at eye level, feet flat on the floor — can prevent cumulative damage.",
      "Movement is medicine. A 10-minute mobility routine each morning beats an hour at the gym twice a week.",
      "Anti-inflammatory foods like turmeric, ginger, leafy greens and walnuts help. Excess sugar, fried food and alcohol consistently make joint pain worse.",
      "If pain has lasted more than 6 weeks, get a proper assessment. Early intervention prevents structural damage that becomes harder to reverse.",
    ],
  },
  {
    slug: "fertility-and-the-power-of-preparation",
    title: "Fertility and the Power of Preparation",
    excerpt: "Why a 90-day pre-conception window can change your IVF outcome.",
    date: "2024-10-30",
    category: "Fertility",
    readTime: "7 min read",
    image: "/blog-imgs/treatment-17.jpg",
    content: [
      "It takes about 90 days for an egg to mature and for sperm to fully form. That window is your single biggest opportunity to influence fertility outcomes.",
      "Both partners benefit from clean diet, regular sleep, quitting smoking and reducing alcohol during this period.",
      "Ayurvedic Rasayana herbs like Shatavari, Ashwagandha and Gokshura support the reproductive tissue (shukra dhatu) when used under guidance.",
      "Stress is a silent fertility killer. Daily pranayama and 30 minutes of nature time make a measurable difference to hormone profiles.",
      "Whether you are trying naturally or going for IVF, this 90-day preparation phase is one of the highest-return investments you can make.",
    ],
  },
  {
    slug: "five-everyday-ayurvedic-habits-anyone-can-start",
    title: "Five Everyday Ayurvedic Habits Anyone Can Start",
    excerpt: "Simple, doable practices that build long-term wellness — no incense or sanskrit required.",
    date: "2024-10-15",
    category: "Lifestyle",
    readTime: "4 min read",
    image: "/blog-imgs/why-choose.jpg",
    content: [
      "Drink a glass of warm water first thing in the morning. It gently wakes up digestion and supports natural detoxification.",
      "Eat your largest meal at lunch when digestive fire is strongest. Keep dinner light and finish 2–3 hours before bedtime.",
      "Oil pull with a tablespoon of sesame oil for 5 minutes before brushing. Better gum health and clearer skin are common benefits.",
      "Walk for at least 20 minutes a day in daylight. Simple, free and disproportionately effective.",
      "Be in bed by 10:30 pm. This single change improves energy, weight, mood and immunity all at once.",
    ],
  },
  {
    slug: "high-blood-pressure-the-silent-disease-explained",
    title: "High Blood Pressure: The Silent Disease Explained",
    excerpt: "What your numbers mean, why they matter and how Ayurveda can help.",
    date: "2024-09-28",
    category: "Hypertension",
    readTime: "6 min read",
    image: "/blog-imgs/treatment-16.jpg",
    content: [
      "Most people with high blood pressure feel completely normal. That is exactly what makes it dangerous — damage builds quietly over years.",
      "A normal reading is below 120/80. Consistent readings above 140/90 need attention; values above 160/100 need urgent care.",
      "Salt is one factor, not the only one. Sleep, stress, alcohol, body weight and even chronic loneliness all influence BP.",
      "Ayurvedic herbs like Sarpagandha, Arjuna and Jatamansi can be powerful additions when used under medical guidance — never as standalone unsupervised remedies.",
      "Measure your BP at home twice a week, log the numbers and review with your doctor. Data beats guesswork every single time.",
    ],
  },
  {
    slug: "supporting-cancer-care-with-ayurveda",
    title: "Supporting Cancer Care with Ayurveda",
    excerpt: "How integrative Ayurveda helps you tolerate chemo better and rebuild faster.",
    date: "2024-09-12",
    category: "Cancer Care",
    readTime: "7 min read",
    image: "/src/assets/dr-joshi-clinic.jpg",
    content: [
      "Modern oncology saves lives. Integrative Ayurveda makes the journey kinder — reducing side-effects, supporting strength and improving quality of life.",
      "Common chemotherapy side-effects like nausea, mouth ulcers, neuropathy and fatigue often respond to specific Ayurvedic protocols.",
      "Rasayana herbs like Ashwagandha, Amalaki and Guduchi help maintain blood counts, immunity and energy between cycles.",
      "Diet matters enormously. Soft, easy-to-digest, protein-rich meals help maintain weight even during difficult phases.",
      "Always coordinate with your oncologist. The goal is partnership, not parallel treatment — and the patient always benefits when both teams talk to each other.",
    ],
  },
];

export function findBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
