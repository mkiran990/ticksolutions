export const companyInfo = {
  name: "TICK Solutions",
  tagline: "We Turn Ideas Into Digital Solutions.",
  description: "A premier creative engineering and AI studio. We architect high-performance web applications, intelligent mobile experiences, and cloud-native digital products that scale.",
  contactEmail: "hello@ticksolutions.com",
  phone: "+1 (800) 555-TICK",
  whatsappNumber: "15551234567", // WhatsApp format
  linkedinUrl: "https://linkedin.com/company/ticksolutions",
  githubUrl: "https://github.com/ticksolutions",
  twitterUrl: "https://x.com/ticksolutions",
  address: "Innovation Tech Hub, Tower B, Silicon Suite 400"
};

export const heroStats = [
  { value: "99.9%", label: "System Uptime SLA" },
  { value: "50+", label: "Enterprise Projects Delivered" },
  { value: "10x", label: "Average Performance Boost" },
  { value: "24/7", label: "Continuous Support & Ops" }
];

export const servicesData = [
  {
    id: "web-development",
    iconName: "Code2",
    title: "Website & Web App Development",
    shortDesc: "Building modern, ultra-fast web applications with cutting-edge frontend architectures and responsive systems.",
    fullDesc: "From high-converting SaaS platforms to complex enterprise dashboards, we build scalable web solutions with React, Next.js, and TypeScript.",
    features: [
      "Custom React & Next.js Single Page & SSR Applications",
      "Tailwind & Modern CSS Design Systems",
      "API Integration & Microservices",
      "Sub-second Load Speeds & Lighthouse 95+ Ratings"
    ],
    accentColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "mobile-apps",
    iconName: "Smartphone",
    title: "Mobile App Development",
    shortDesc: "Native and cross-platform iOS & Android apps designed for intuitive user engagement and offline resilience.",
    fullDesc: "We build pixel-perfect mobile applications using React Native and Flutter, delivering native 60fps performance and seamless device integrations.",
    features: [
      "Cross-Platform iOS & Android Apps",
      "Offline Sync & Real-time WebSockets",
      "Biometric Security & Native Payment Gateways",
      "App Store & Google Play Deployment Automation"
    ],
    accentColor: "from-purple-500 to-indigo-600"
  },
  {
    id: "ai-solutions",
    iconName: "BrainCircuit",
    title: "AI & Machine Learning Engineering",
    shortDesc: "Integrating predictive LLMs, custom chatbots, and automated intelligence pipelines directly into your business.",
    fullDesc: "Empower your workflow with AI. We design RAG pipelines, fine-tuned AI assistants, automated document processing, and computer vision tools.",
    features: [
      "Custom OpenAI / Claude LLM Integrations",
      "RAG Vector Search Knowledge Bases",
      "Automated Workflow & Data Mining Pipelines",
      "Real-time Predictive Analytics Dashboards"
    ],
    accentColor: "from-blue-500 to-teal-500"
  },
  {
    id: "cloud-infrastructure",
    iconName: "CloudLightning",
    title: "Cloud Architecture & DevOps",
    shortDesc: "Resilient serverless and containerized cloud setups powered by AWS, Docker, Kubernetes, and automated CI/CD.",
    fullDesc: "Eliminate downtime and scale effortlessly. We engineer zero-downtime deployment pipelines, infrastructure as code, and auto-scaling server clusters.",
    features: [
      "AWS, GCP & Vercel Enterprise Infrastructure",
      "Docker Containerization & Kubernetes Orchestration",
      "Zero-Downtime Automated CI/CD Pipelines",
      "24/7 Security Monitoring & Disaster Recovery"
    ],
    accentColor: "from-sky-400 to-cyan-600"
  },
  {
    id: "custom-software",
    iconName: "Cpu",
    title: "Custom Enterprise Software",
    shortDesc: "Tailor-made backend microservices, CRM solutions, and ERP engines built specifically for your core business operations.",
    fullDesc: "Off-the-shelf software doesn't fit every workflow. We build custom backend systems using Node.js, Python, and Go for high-concurrency needs.",
    features: [
      "Microservices & GraphQL/REST APIs",
      "High-Throughput Database Architecture",
      "Legacy System Migration & Refactoring",
      "Role-Based Access & Enterprise Security"
    ],
    accentColor: "from-violet-500 to-purple-700"
  },
  {
    id: "ui-ux-design",
    iconName: "Palette",
    title: "UI/UX & Product Design",
    shortDesc: "Crafting visually commanding user interfaces, interactive wireframes, and design tokens that users love.",
    fullDesc: "We create immersive digital aesthetics. Every interface is crafted with precision, motion design principles, and accessibility standards.",
    features: [
      "User Experience Audits & Wireframing",
      "Interactive High-Fidelity Prototypes",
      "Design Systems & Brand Token Guidelines",
      "Micro-interaction & Animation Specifications"
    ],
    accentColor: "from-emerald-400 to-teal-600"
  }
];

export const techStack = [
  { name: "React", category: "Frontend", icon: "Atom", color: "#61DAFB", desc: "Interactive UI Library" },
  { name: "Next.js", category: "Fullstack", icon: "Layers", color: "#ffffff", desc: "Production React Framework" },
  { name: "Node.js", category: "Backend", icon: "Server", color: "#68A063", desc: "Asynchronous Event Runtime" },
  { name: "Python", category: "AI / Data", icon: "Code", color: "#3776AB", desc: "Machine Learning & Automation" },
  { name: "TypeScript", category: "Language", icon: "FileCode", color: "#3178C6", desc: "Strongly-typed JavaScript" },
  { name: "Tailwind CSS", category: "Styling", icon: "Sparkles", color: "#38BDF8", desc: "Utility-first Design System" },
  { name: "AWS", category: "Cloud", icon: "Cloud", color: "#FF9900", desc: "Cloud Hosting & Serverless" },
  { name: "Docker", category: "DevOps", icon: "Box", color: "#2496ED", desc: "Containerized Applications" },
  { name: "PostgreSQL", category: "Database", icon: "Database", color: "#4169E1", desc: "Relational Database Engine" },
  { name: "MongoDB", category: "Database", icon: "HardDrive", color: "#47A248", desc: "NoSQL Data Store" },
  { name: "PyTorch", category: "AI / ML", icon: "Brain", color: "#EE4C2C", desc: "Deep Learning Neural Nets" },
  { name: "GraphQL", category: "API", icon: "Network", color: "#E10098", desc: "Flexible Query APIs" }
];

export const portfolioProjects = [
  {
    id: "pg-connect",
    title: "PG Connect Platform",
    subtitle: "Smart Accommodation & Property Management Ecosystem",
    category: "Web & Mobile App",
    layoutVariant: "hero-featured", // Large featured card
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "Stripe API"],
    description: "A comprehensive digital ecosystem simplifying property management, tenant onboarding, automated rent billing, and maintenance ticket tracking for modern accommodations.",
    metrics: [
      { label: "Active Users", value: "45,000+" },
      { label: "Rent Processed", value: "$3.8M+" },
      { label: "Ticket Resolution", value: "< 2 Hours" }
    ],
    previewImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    githubLink: "#",
    liveDemoUrl: "#",
    detailedOverview: "PG Connect revolutionized property management by introducing real-time tenant notifications, automated biometric access keys, and instant digital lease contracts."
  },
  {
    id: "nexus-ai-analytics",
    title: "Nexus Enterprise AI Hub",
    subtitle: "Real-time Predictive Business Intelligence",
    category: "AI & Data Engine",
    layoutVariant: "two-column",
    tags: ["Python", "PyTorch", "React", "AWS Lambda", "FastAPI"],
    description: "An enterprise AI analytics suite that transforms unstructured multi-channel customer data into real-time forecasting reports and intelligent automated actions.",
    metrics: [
      { label: "Data Pipeline", value: "10M Events/day" },
      { label: "Prediction Accuracy", value: "98.4%" }
    ],
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    githubLink: "#",
    liveDemoUrl: "#",
    detailedOverview: "Built for high-volume financial and supply chain teams requiring continuous forecasting without complex manual spreadsheet engineering."
  },
  {
    id: "zenith-health",
    title: "Zenith Telehealth Mobile App",
    subtitle: "HIPAA-Compliant Patient Care Platform",
    category: "Mobile Application",
    layoutVariant: "two-column",
    tags: ["React Native", "WebRTC", "Node.js", "Docker"],
    description: "A secure telemedicine platform delivering HD video consultations, instant prescription delivery routing, and encrypted health record vaults.",
    metrics: [
      { label: "Consultations", value: "120,000+" },
      { label: "App Rating", value: "4.9 / 5.0" }
    ],
    previewImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    githubLink: "#",
    liveDemoUrl: "#",
    detailedOverview: "Features end-to-end encrypted video channels, live doctor queue management, and automated sync with hospital electronic health record systems."
  },
  {
    id: "pulse-cloud-ops",
    title: "Pulse Operations Dashboard",
    subtitle: "Multi-Cloud Infrastructure Telemetry Control",
    category: "Cloud & DevOps",
    layoutVariant: "full-visual",
    tags: ["Next.js", "Kubernetes", "Go", "GraphQL", "TailwindCSS"],
    description: "A developer-first observability cockpit providing real-time log ingestion, container node health monitoring, and automated incident mitigation.",
    metrics: [
      { label: "Latency Reduction", value: "65%" },
      { label: "Cost Savings", value: "32% AWS" }
    ],
    previewImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    githubLink: "#",
    liveDemoUrl: "#",
    detailedOverview: "Designed for engineering leads to monitor global Kubernetes clusters, detect memory leaks, and trigger rollbacks with a single click."
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Blueprinting",
    desc: "We analyze your business objectives, technical requirements, user personas, and infrastructure constraints to map out a clear project blueprint.",
    deliverable: "Architecture Specs & Interactive Prototype"
  },
  {
    step: "02",
    title: "System Design & UX",
    desc: "Our product design team crafts high-fidelity wireframes, UI design tokens, and database schemas prioritizing scale and user delight.",
    deliverable: "Figma Design System & Data Schema"
  },
  {
    step: "03",
    title: "Agile Engineering Sprints",
    desc: "Using two-week sprints, our full-stack engineers write clean, typed, modular code with continuous integration and weekly live staging demos.",
    deliverable: "Weekly Staging Build & Clean Git Repo"
  },
  {
    step: "04",
    title: "QA, Launch & Scale",
    desc: "Rigorous automated testing, security penetration audits, cloud auto-scaling deployment, and post-launch monitoring ensure smooth operation.",
    deliverable: "Production Deployment & 24/7 Monitoring"
  }
];

export const teamMembers = [
  {
    name: "Kiran Sharma",
    role: "Founder & Lead Architect",
    specialty: "Full-Stack • Cloud Systems • AI Pipelines",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    skills: ["React", "Node.js", "Python", "AWS Architecture"],
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Alex Vance",
    role: "Principal AI Engineer",
    specialty: "LLM Fine-tuning • RAG • Computer Vision",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    skills: ["PyTorch", "FastAPI", "OpenAI API", "Vector Databases"],
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "Elena Rostova",
    role: "Head of Product & UX",
    specialty: "Design Systems • Product Strategy • Motion UX",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    skills: ["Figma", "Design Tokens", "Framer Motion", "User Research"],
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  },
  {
    name: "David Chen",
    role: "Senior Mobile Engineer",
    specialty: "React Native • Native iOS/Android • WebSockets",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    skills: ["React Native", "TypeScript", "Swift", "GraphQL"],
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
];

export const testimonials = [
  {
    quote: "TICK Solutions delivered our enterprise SaaS platform ahead of schedule with sub-second speeds. Their technical execution is truly world-class.",
    author: "Sarah Jenkins",
    title: "CTO at CloudScale Inc."
  },
  {
    quote: "The team converted our complex data pipeline into an effortless AI dashboard. Our client retention jumped 40% after launch.",
    author: "Marcus Brody",
    title: "Head of Product at DataPulse"
  }
];
