export const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux",
    "Redux Toolkit",
    "Next.js",
    "Three.js",
    "GSAP",
    "Tailwind CSS",
    "Bootstrap"
  ],
  backend: [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "Nest.js"
  ],
  database: [
    "SQL",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "Redis"
  ],
  other: [
    "Git",
    "Postman",
    "DevOps",
    "Computer Networking",
    "AI Automation"
  ],
  learning: [
    "AI / ML"
  ]
};

export const projects = [
  {
    id: "01",
    title: "AirPods Control",
    description: "AirPods Control is a full-featured open-source Android application designed to bridge the gap between Apple AirPods and Android devices.",
    features: [
      "Battery status monitoring",
      "Noise Control toggles",
      "In-Ear Detection",
      "Audio FX / Equalizer settings",
      "Gesture mapping",
      "Raw BLE beacon packet diagnostics"
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Android Bluetooth Low Energy APIs"],
    github: "https://github.com/haseebjaved4212/AirPods-Clone-Controle",
    demo: "",
    image: "📱" // Using emoji/icon or visual abstraction instead of an image as we don't have real assets
  },
  {
    id: "02",
    title: "AniTrack",
    description: "AniTrack is a full-stack web application for tracking an anime journey.",
    features: [
      "Anime search",
      "Personal anime lists",
      "Progress tracking",
      "Ratings",
      "Statistics",
      "Visual charts"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"], // Assuming standard tech stack based on description
    github: "",
    demo: "",
    image: "📺"
  },
  {
    id: "03",
    title: "CoolBraze AI",
    description: "A complete AI-powered customer support system built with Django, Claude API, and RAG (Retrieval-Augmented Generation).",
    features: [
      "Handle customer queries",
      "Make refund decisions",
      "Detect fraud",
      "Search company documents and policies",
      "Streaming monitoring dashboard"
    ],
    technologies: ["Django", "Claude API", "RAG", "AI Agents", "PostgreSQL", "Vector Search"],
    github: "",
    demo: "",
    image: "🤖"
  },
  {
    id: "04",
    title: "Graphite",
    description: "Graphite is an open-source Python web application that transforms uploaded images or live camera captures into realistic artistic sketches.",
    features: [
      "Line thickness control",
      "Contrast control",
      "Paper texture",
      "Side-by-side preview",
      "Batch processing",
      "ZIP export",
      "FastAPI endpoint"
    ],
    technologies: ["Python", "FastAPI", "Computer Vision", "Image Processing"],
    github: "",
    demo: "",
    image: "🎨"
  },
  {
    id: "05",
    title: "Job Portal",
    description: "Job Portal is a full-stack web application built with Django 6 that connects employers with job seekers through role-based access.",
    features: [
      "Employer accounts",
      "Job posting",
      "Edit/manage listings",
      "Job seeker browsing",
      "Job details",
      "Applications",
      "Secure authentication",
      "Modular architecture"
    ],
    technologies: ["HTML", "CSS", "Django", "Django Templates"],
    github: "https://github.com/haseebjaved4212/Job-Portal",
    demo: "",
    image: "💼"
  },
  {
    id: "06",
    title: "ClickMart",
    description: "ClickMart is a production-ready full-stack e-commerce web application built with a modern decoupled architecture.",
    features: [
      "Modern decoupled architecture",
      "Full e-commerce functionality",
      "Secure authentication",
      "Product management"
    ],
    technologies: ["React 19", "Django REST Framework", "Linux VPS", "SSL"],
    github: "",
    demo: "",
    image: "🛍️"
  }
];
