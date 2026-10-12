export const links = {
  email: "nihargowda5565@gmail.com",
  linkedin: "https://www.linkedin.com/in/nihar-g",
  github: "https://github.com/nihxxr",
};

export const experience = [
  {
    when: "Aug 2026 to now",
    role: "AI Engineer",
    org: "Usraz Education (EngConvo)",
    where: "Bengaluru, remote",
    what: "Building internal automation bots and an AI test portal for IELTS Sutra.",
  },
  {
    when: "2025",
    role: "AI/ML Copywriting and Product Intern",
    org: "MyMuse",
    what: "Built an OCR and LLM tool that turns product reviews and images into on-brand ad copy.",
  },
  {
    when: "Dec 2024 to Apr 2025",
    role: "GenAI Intern",
    org: "Happiest Minds Technologies",
    what: "Built multi-agent GenAI bots on Microsoft Teams that answer HR questions, triage tickets and look up policy.",
  },
  {
    when: "Jun 2022 to Dec 2022",
    role: "Backend Developer Intern",
    org: "Sconti Technologies",
    what: "Built Flask APIs and a course recommender using collaborative and content-based filtering, and cut API latency by about 35%.",
  },
];

export const skills = [
  { group: "Machine learning", items: ["PyTorch", "scikit-learn", "PyTorch Geometric", "Transformers", "NLP", "Model evaluation"], wide: true },
  { group: "GenAI", items: ["LLM APIs", "Prompt design", "Multi-agent bots", "OCR pipelines"] },
  { group: "Backend", items: ["Python", "FastAPI", "Flask", "SQLAlchemy", "PostgreSQL", "MySQL", "MongoDB"] },
  { group: "Frontend", items: ["React", "Vite", "JavaScript", "HTML and CSS"] },
  { group: "Shipping", items: ["Docker", "GitHub Actions", "pytest", "Netlify", "Render", "Selenium"], wide: true },
];

export const moreProjects = [
  {
    name: "Cyberbullying detection with graph neural networks",
    what: "DistilBERT embeddings over a k-nearest-neighbour graph of posts, classified with a GCN so each post is judged with its context. About 0.90 F1 on held-out posts.",
    stack: "PyTorch Geometric, DistilBERT",
  },
  {
    name: "Graph-to-insight captioning",
    what: "A deep learning pipeline that turns bar, line and pie charts into written captions and question and answer pairs.",
    stack: "PyTorch, CNN, LSTM",
  },
  {
    name: "UI test automation suite",
    what: "A Selenium and TestNG suite built on the Page Object Model, with test data kept apart from test logic.",
    stack: "Java, Selenium, TestNG",
  },
];

export const education = [
  { when: "From Feb 2027", what: "Master of Information Technology, specialising in AI", where: "James Cook University, Brisbane" },
  { when: "2021 to 2025", what: "B.Tech in Artificial Intelligence and Machine Learning", where: "Acharya Institute of Technology, Bengaluru" },
];
