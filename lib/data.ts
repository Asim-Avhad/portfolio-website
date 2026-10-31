/* ==================================================================
   All site content lives here. Edit this file to update the portfolio;
   components read from it and never hard-code copy.
   ================================================================== */
import syncWriteImg from "@/public/Syncwrite.png";
import sociableImg from "@/public/Sociable.png";
import expenseImg from "@/public/Expense.png";
import type { StaticImageData } from "next/image";

export const site = {
  name: "Asim Avhad",
  role: "AI Engineer",
  tagline: "Master of AI at Monash University: NLP, generative AI, deep learning and multi-agent planning.",
  location: "Melbourne, Australia",
  timezone: "Australia/Melbourne",
  email: "avhadasim30@gmail.com",
  github: "https://github.com/Asim-Avhad",
  linkedin: "https://www.linkedin.com/in/asim-avhad/",
  resume: "/Asim-Avhad-Resume.pdf",
  // The hero's one sentence. Update it when your situation changes.
  intro: "I'm Asim Avhad, studying AI at Monash and open to new roles.",
} as const;

export const links = [
  { name: "Work", hash: "#work" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Toolkit", hash: "#toolkit" },
  { name: "Contact", hash: "#contact" },
] as const;

export const heroStats = [
  { value: "92%", label: "of support tickets automated by my RAG copilot" },
  { value: "152", label: "trains routed in a multi-agent scheduler" },
  { value: "2×", label: "first place in project competitions, 2025" },
  { value: "10", label: "Himalayan treks and counting" },
] as const;

/* ---------------------------------------------------------------- */
/* Featured AI work                                                  */
/* ---------------------------------------------------------------- */

export type Visual = "pipeline" | "rail" | "galaxy";

export type FeaturedProject = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  context: string;
  summary: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  stack: string[];
  visual: Visual;
  // Add a repo / demo URL when you publish one and a button appears automatically.
  repo?: string;
  demo?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "support-copilot",
    title: "Support Ticket Copilot",
    kicker: "NLP, retrieval, generative AI",
    year: "2026",
    context: "Solo project",
    summary:
      "A support assistant that reads a customer's message, works out which of 77 banking issues it's about, pulls the right help-centre sections and drafts a reply that cites its sources, and knows when to hand off to a human.",
    highlights: [
      "Fine-tuned DistilBERT on Banking77 (13,083 queries) in a custom PyTorch loop with mixed precision, benchmarked against a 91.0% TF-IDF baseline.",
      "Hybrid retrieval: BM25 plus embeddings fused with Reciprocal Rank Fusion, routed by predicted intent. Gemini or a local Ollama model drafts the cited reply.",
      "Guardrails hand uncertain or off-topic tickets to a person, escalate possible fraud and strip citations that don't hold up.",
    ],
    metrics: [
      { value: "0.64→0.77", label: "top-3 retrieval hit rate with intent routing" },
      { value: "92%", label: "tickets automated at 94.7% intent accuracy" },
      { value: "77", label: "banking intents classified" },
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "DistilBERT", "BM25", "Embeddings", "Gemini", "Ollama", "Streamlit"],
    visual: "pipeline",
  },
  {
    slug: "flatland",
    title: "Flatland Train Scheduling",
    kicker: "Multi-agent planning",
    year: "2026",
    context: "Solo, Monash University",
    summary:
      "Routing 152 trains with deadlines across one shared rail network without collisions, then replanning live when trains break down, inside strict time budgets.",
    highlights: [
      "Space-time A* with a reservation table, reverse-BFS distance heuristics and prioritised planning across 16 agent orderings.",
      "Adaptive Large Neighbourhood Search over groups of 12 trains to cut lateness, plus online replanning after breakdowns.",
    ],
    metrics: [
      { value: "152", label: "trains routed with deadlines" },
      { value: "92%", label: "success rate" },
      { value: "Top 20", label: "in the cohort" },
    ],
    stack: ["Python", "Space-time A*", "Reservation tables", "Large Neighbourhood Search"],
    visual: "rail",
  },
  {
    slug: "galaxy",
    title: "Galaxy Morphology & Redshift",
    kicker: "Computer vision",
    year: "2025",
    context: "1st place, project competition",
    summary:
      "CNNs trained on a GPU to classify galaxies by shape and estimate how far away they are (redshift) straight from telescope images, demoed live in a Flask app.",
    highlights: [
      "Trained CNNs with CUDA to classify galaxy morphology from telescope imagery.",
      "Improved redshift estimates by feeding CNN features into an MLP, validated on a held-out set.",
    ],
    metrics: [
      { value: "1st", label: "place, 2025 project competition" },
      { value: "CNN→MLP", label: "feature pipeline for redshift" },
    ],
    stack: ["Python", "PyTorch", "CUDA", "CNNs", "Flask"],
    visual: "galaxy",
  },
];

export const moreAiProjects: {
  title: string;
  meta: string;
  description: string;
  stack: string[];
  visual?: "circuit";
}[] = [
  {
    title: "Deep Learning Kaggle Competition",
    meta: "Solo project at Monash, 2026",
    description:
      "Fine-tuned pretrained models, comparing architectures and settings on a validation split. Finished top 15 in the cohort.",
    stack: ["PyTorch", "Transfer learning"],
  },
  {
    title: "F1 Race Prediction & Pit Strategy",
    meta: "Personal project",
    description:
      "Predicted Grand Prix winners from cleaned practice and qualifying data, and built a pit-stop recommendation tool on top.",
    stack: ["Python", "Pandas", "scikit-learn"],
    visual: "circuit",
  },
];

/* ---------------------------------------------------------------- */
/* Earlier full-stack work                                           */
/* ---------------------------------------------------------------- */

export type WebProject = {
  title: string;
  description: string;
  tags: string[];
  image: StaticImageData;
  href: string;
  linkLabel: string;
};

export const webProjects: WebProject[] = [
  {
    title: "SyncWrite",
    description: "Real-time collaborative documents with live comments, mentions and sharing.",
    tags: ["Next.js", "React", "Clerk", "Tailwind", "shadcn/ui"],
    image: syncWriteImg,
    href: "https://sync-write-virid.vercel.app/",
    linkLabel: "Live site",
  },
  {
    title: "Sociable",
    description: "A social network with posts with images, comments, friends and a personal feed.",
    tags: ["React", "Redux", "MongoDB", "Tailwind"],
    image: sociableImg,
    href: "https://github.com/Asim-Avhad/Sociable-Social-Media",
    linkLabel: "Source",
  },
  {
    title: "Expense Tracker",
    description: "Track spending by category and see where the money goes with interactive charts.",
    tags: ["React", "Chart.js", "MongoDB", "Tailwind"],
    image: expenseImg,
    href: "https://github.com/Asim-Avhad/Expense-Tracker",
    linkLabel: "Source",
  },
];

export const olderProjects = [
  {
    title: "ScrapIT",
    meta: "MERN stack, 2023 to 2024",
    description: "A marketplace for listing and buying household scrap, with notifications and simplified payments.",
  },
  {
    title: "Data Structure Visualizer",
    meta: "C++ and graphics, 2023",
    description: "Animated stacks, queues, linked lists and BSTs in C++. Led the team; 2nd place in the OOP-CG mini-project competition.",
  },
] as const;

/* ---------------------------------------------------------------- */
/* Experience & education                                            */
/* ---------------------------------------------------------------- */

export type ExperienceKind = "Study" | "Work" | "Teaching";

export const experience: {
  date: string;
  title: string;
  org: string;
  location: string;
  kind: ExperienceKind;
  points: string[];
}[] = [
  {
    date: "2026 to 2027",
    title: "Master of Artificial Intelligence",
    org: "Monash University",
    location: "Melbourne, VIC",
    kind: "Study",
    points: [
      "Semester 1 GPA 3.5 / 4.0, with 92% in Python programming.",
      "Units include Deep Learning, and Planning and Automated Reasoning.",
    ],
  },
  {
    date: "Jun 2025 to Jan 2026",
    title: "Guest Lecturer, Deep Learning",
    org: "K. K. Wagh Institute of Engineering",
    location: "Nashik, India",
    kind: "Teaching",
    points: [
      "Invited back several times to teach final-year B.E. students CNNs, image classification, Transformers and generative AI, to people meeting each idea for the first time.",
    ],
  },
  {
    date: "2021 to 2025",
    title: "B.E. Computer Science & Design",
    org: "K. K. Wagh Institute of Engineering",
    location: "Nashik, India",
    kind: "Study",
    points: [
      "CGPA 8.35 / 10. Algorithms, machine learning, operating systems, networks.",
      "Discipline Head of the Design Society (DeSoc).",
    ],
  },
  {
    date: "Dec 2023 to Jan 2024",
    title: "IT & Cybersecurity Intern",
    org: "FIVE Holdings",
    location: "Dubai, UAE",
    kind: "Work",
    points: [
      "Helped roll out ManageEngine UEM and mobile device management across a live hotel, replacing scattered device records with one secured inventory.",
      "Applied endpoint-security procedures on live guest and staff systems and mapped how data flows between network, POS and back-office.",
    ],
  },
  {
    date: "Nov 2023",
    title: "Teaching Assistant, MongoDB",
    org: "K. K. Wagh Institute of Engineering",
    location: "Nashik, India",
    kind: "Teaching",
    points: ["Ran hands-on MongoDB labs for AI & Data Science students and helped them debug their own queries."],
  },
];

/* ---------------------------------------------------------------- */
/* Toolkit                                                           */
/* ---------------------------------------------------------------- */

export const skillGroups = [
  {
    title: "NLP & Generative AI",
    items: ["Hugging Face Transformers", "RAG", "Embeddings", "Hybrid search", "Prompt engineering", "Gemini API", "Ollama"],
  },
  {
    title: "Machine Learning",
    items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "CNNs", "Computer vision", "OpenCV", "CUDA", "Pandas", "NumPy"],
  },
  {
    title: "Planning & Search",
    items: ["A* & heuristic search", "Multi-agent path finding", "Large Neighbourhood Search", "PDDL"],
  },
  {
    title: "Languages",
    items: ["Python", "C++", "C", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Software & Data",
    items: ["React", "Next.js", "Node.js", "Flask", "Streamlit", "REST APIs", "MongoDB", "MySQL", "Docker", "Git", "pytest"],
  },
  {
    title: "Design",
    items: ["Figma", "UI/UX", "Design thinking", "Prototyping"],
  },
] as const;

export const marqueeItems = [
  "PyTorch",
  "Hugging Face",
  "RAG",
  "Gemini",
  "CUDA",
  "A* search",
  "scikit-learn",
  "Next.js",
  "React",
  "Flask",
  "Docker",
  "MongoDB",
  "Figma",
] as const;

/* ---------------------------------------------------------------- */
/* Recognition                                                       */
/* ---------------------------------------------------------------- */

export const awards = [
  { place: "1st", title: "IEEE Technovation", detail: "Project competition", date: "Apr 2025" },
  { place: "1st", title: "MET Enthusia", detail: "Project competition", date: "Mar 2025" },
  { place: "Top 15", title: "Deep Learning Kaggle", detail: "Monash cohort", date: "2026" },
  { place: "Top 20", title: "Flatland scheduling", detail: "Monash cohort", date: "2026" },
  { place: "2nd", title: "OOP & Computer Graphics", detail: "Mini-project competition", date: "2023" },
  { place: "2nd", title: "UI/UX design", detail: "Design competition", date: "" },
] as const;

export const certifications = [
  { title: "Supervised Machine Learning", issuer: "Stanford and DeepLearning.AI" },
  { title: "Full Stack Web Development", issuer: "Apna College" },
  { title: "Database Management Systems", issuer: "NPTEL" },
  { title: "Design Thinking", issuer: "IUCEE" },
] as const;

/* ---------------------------------------------------------------- */
/* Off the clock                                                     */
/* ---------------------------------------------------------------- */

export const beyond = [
  { value: "10", label: "Himalayan treks", detail: "National-level certificates from Indiahikes, TTH and Bikat Adventures." },
  { value: "Zonal", label: "level swimmer", detail: "Butterfly is my stroke. Also water polo and cricket." },
  { value: "Visharad", label: "flutist", detail: "Formally trained in Indian classical flute." },
  { value: "2", label: "languages", detail: "English (fluent) and Marathi (native)." },
] as const;
