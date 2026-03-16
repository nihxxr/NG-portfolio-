// index.js
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
      "Designed and deployed multi-agent GenAI bots on Microsoft Teams to automate HR FAQs, ticket triage, and policy lookups with sub‑second responses.",
    snippet:
      "Technologies: Python, MS Teams bots, REST APIs, LLMs, prompt engineering, workflow orchestration. Results: consistently delivered < 1s responses for common HR queries and reduced manual HR ticket load. Problem solving: turned loosely defined HR processes into structured workflows with guardrails to keep answers accurate and on‑policy.",
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
      "Implemented a Flask backend that serves personalised course recommendations using collaborative and content‑based filtering.",
    snippet:
      "Technologies: Python, Flask, MySQL, recommender systems (collaborative + content‑based), REST APIs. Results: optimised query paths to cut API latency by ~35%, improving perceived responsiveness for users. Problem solving: designed clean API contracts around noisy course–user data and tuned similarity logic to avoid irrelevant recommendations.",
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
      "Built a deep learning pipeline that converts graphs into natural‑language captions and question–answer pairs.",
    snippet:
      "Technologies: PyTorch, CNNs, LSTM/Transformer layers, LogicNLG ideas, MongoDB. Results: automatically generated descriptive captions and follow‑up questions for a variety of chart types (bar, line, pie). Problem solving: bridged the gap between numeric visual data and written explanations by combining visual feature extraction with sequence models and a structured storage layer.",
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
      "Developed a full‑stack tool that ingests METAR feeds from ICAO airports and scores aviation weather risk for flights.",
    snippet:
      "Technologies: Python, Flask/FastAPI, ICAO/METAR standards, weather APIs, basic risk modelling. Results: produced interpretable risk scores and summaries that can support safer routing and scheduling decisions. Problem solving: normalised complex weather codes into features, designed a risk metric, and exposed it via an API that non‑experts can understand.",
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
      "Trained and evaluated a behavioural screening model for autism traits with an emphasis on high recall.",
    snippet:
      "Technologies: Python, scikit‑learn, Pandas, Jupyter, model evaluation/validation. Results: prioritised recall so potentially at‑risk children are less likely to be missed during screening. Problem solving: dealt with imbalanced behavioural data, chose suitable algorithms, and tuned thresholds to align with the goal of early, sensitive detection.",
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
      "Engineered a modular UI automation suite in Java using Selenium and TestNG to cover critical UI flows.",
    snippet:
      "Technologies: Java, Selenium WebDriver, TestNG, Page Object Model. Results: enabled fast, repeatable regression checks for key user journeys during development. Problem solving: abstracted UI complexity into page objects and separated test data from logic to keep the suite maintainable as the UI evolved.",
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
      "Built a cyberbullying detection system combining DistilBERT embeddings with graph neural networks over a semantic k‑NN graph.",
    snippet:
      "Technologies: PyTorch Geometric, DistilBERT, GCNs, NLP, evaluation pipelines. Results: achieved ~0.90 F1 on a held‑out dataset of social media posts. Problem solving: modelled relationships between posts via a similarity graph to capture context that a single‑sentence classifier would miss.",
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
