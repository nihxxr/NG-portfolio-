index.js
export const servicesData = [
  {
    title: "Backend Engineering & APIs",
    description:
      "Designing reliable backend systems with clean contracts, observable behavior, and production-ready performance.",
    items: [
      {
        title: "RESTful Services",
        description: "(Flask, FastAPI, Modular Architectures)",
      },
      {
        title: "Data & Persistence",
        description: "(MySQL, MongoDB, Schema Design, Query Tuning)",
      },
      {
        title: "Testing & Automation",
        description: "(Test Suites, Page Object Model, CI-friendly flows)",
      },
    ],
  },
  {
    title: "Applied AI & ML Systems",
    description:
      "Bringing ML models into real products—from recommenders to graph captioning and autism detection.",
    items: [
      {
        title: "Model Integration",
        description: "(Recommenders, Classifiers, PyTorch Pipelines)",
      },
      {
        title: "Data Workflows",
        description: "(EDA, Feature Engineering, Experiment Tracking)",
      },
      {
        title: "Evaluation & Metrics",
        description: "(Precision/Recall, Latency, Robustness Checks)",
      },
    ],
  },
  {
    title: "GenAI & Automation",
    description:
      "Building GenAI-powered tools and bots that actually fit into teams’ daily workflows.",
    items: [
      {
        title: "LLM-Powered Bots",
        description: "(MS Teams Bots, Prompt Engineering, Plugins)",
      },
      {
        title: "Workflow Orchestration",
        description: "(Multi-Agent Logic, HR Automations, Guardrails)",
      },
      {
        title: "Brand-Locked Generation",
        description: "(Tone Guidelines, OCR + LLM Copy Systems)",
      },
    ],
  },
  {
    title: "Domain-Focused Solutions",
    description:
      "Applying AI and backend engineering in high-context domains like aviation and healthcare.",
    items: [
      {
        title: "Aviation Weather Systems",
        description: "(METAR, ICAO Standards, Risk Scoring)",
      },
      {
        title: "Healthcare & Autism",
        description: "(Behavioral Screening Models, High Recall Focus)",
      },
      {
        title: "Education & Outreach",
        description: "(AI Workshops, Simplified Technical Narratives)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "GenAI HR Assistant – MS Teams Bots",
    description:
      "Designed and deployed multi-agent GenAI bots on Microsoft Teams that automate HR FAQs, ticket triage, and policy lookups, consistently returning answers in under one second.",
    href: "#",
    image: "/assets/projects/genai-hr-bots.jpg",
    bgImage: "/assets/projects/genai-hr-bots.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "GenAI / LLMs" },
      { id: 3, name: "MS Teams Bots" },
      { id: 4, name: "REST APIs" },
      { id: 5, name: "Workflow Orchestration" },
    ],
  },
  {
    id: 2,
    name: "Course Recommender Backend – Sconti",
    description:
      "Implemented a Flask backend that serves personalised course recommendations using both collaborative and content-based filtering, reducing average response latency by ~35%.",
    href: "#",
    image: "/assets/projects/course-recommender.jpg",
    bgImage: "/assets/backgrounds/royal-blue-bg.jpg",
    frameworks: [
      { id: 1, name: "Flask" },
      { id: 2, name: "Python" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "Recommender Systems" },
      { id: 5, name: "Latency Optimization" },
    ],
  },
  {
    id: 3,
    name: "Graph-to-Insight Captioning System",
    description:
      "Built a deep learning pipeline that converts graphs into natural-language captions and question–answer pairs, storing structured insights in MongoDB for later search and analysis.",
    href: "#",
    image: "/assets/projects/graph-captioning.jpg",
    bgImage: "/assets/backgrounds/royal-blue-bg.jpg",
    frameworks: [
      { id: 1, name: "PyTorch" },
      { id: 2, name: "CNNs" },
      { id: 3, name: "LSTM / Transformers" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "LogicNLG" },
    ],
  },
  {
    id: 4,
    name: "ICAO Weather Risk Analysis System",
    description:
      "Developed a full-stack tool that ingests live METAR feeds from ICAO airports and scores aviation weather risk to support safer route and scheduling decisions.",
    href: "#",
    image: "/assets/projects/icao-weather-risk.jpg",
    bgImage: "/assets/backgrounds/building-bg.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Flask / FastAPI" },
      { id: 3, name: "Weather APIs" },
      { id: 4, name: "ICAO / METAR" },
      { id: 5, name: "Risk Modeling" },
    ],
  },
  {
    id: 5,
    name: "Autism Trait Detection Model",
    description:
      "Trained and evaluated a behavioural screening model for autism traits, optimised for high recall so fewer at-risk children are missed in early-stage assessments.",
    href: "#",
    image: "/assets/projects/autism-detection.jpg",
    bgImage: "/assets/backgrounds/pet-cat-bg.jpg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "Scikit-learn" },
      { id: 3, name: "Pandas" },
      { id: 4, name: "Jupyter" },
      { id: 5, name: "Model Evaluation" },
    ],
  },
  {
    id: 6,
    name: "Test Automation Mini Suite",
    description:
      "Engineered a modular UI automation suite in Java using Selenium and TestNG, covering critical flows such as authentication and dashboards for fast regression feedback.",
    href: "#",
    image: "/assets/projects/test-automation-suite.jpg",
    bgImage: "/assets/backgrounds/car-bg.jpg",
    frameworks: [
      { id: 1, name: "Java" },
      { id: 2, name: "Selenium WebDriver" },
      { id: 3, name: "TestNG" },
      { id: 4, name: "Page Object Model" },
      { id: 5, name: "Regression Testing" },
    ],
  },
  {
    id: 7,
    name: "GNN Cyberbullying Detection System",
    description:
      "Built a cyberbullying detection system that combines DistilBERT text embeddings with graph neural networks over a semantic k‑NN graph, achieving around 0.90 F1 on held-out data.",
    href: "#",
    image: "/assets/projects/gnn-cyberbullying.jpg",
    bgImage: "/assets/backgrounds/royal-blue-bg.jpg",
    frameworks: [
      { id: 1, name: "PyTorch Geometric" },
      { id: 2, name: "DistilBERT" },
      { id: 3, name: "Graph Neural Networks" },
      { id: 4, name: "NLP" },
      { id: 5, name: "Model Evaluation" },
    ],
  },
];
export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nihar-g",
  },
  {
    name: "Email",
    href: "mailto:nihargowda5565@gmail.com",
  },
];
