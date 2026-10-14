export interface Project {
  id: string;
  title: string;
  category: 'ml' | 'rag' | 'systems' | 'all';
  problemStatement: string;
  description: string;
  fullOverview: string;
  architectureHighlights: string[];
  technologies: string[];
  status: 'Prototype Completed' | 'In Active Development' | 'Engine Implemented' | 'Simulation Ready';
  githubUrl: string;
  liveDemoUrl: string;
  responsibleAIFeature?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: 'Core' | 'Advanced' | 'Specialized';
  category: 'programming' | 'ai_ml' | 'genai_rag' | 'backend' | 'frontend' | 'tools';
  highlight?: string;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  organization: string;
  type: 'education' | 'event' | 'certification' | 'achievement';
  description: string;
  tags: string[];
}

export const PERSONAL_DATA = {
  name: "Sarathi R",
  role: "AI & Machine Learning Engineer",
  degree: "Bachelor of Engineering in Computer Science",
  dob: "14.05.2007",
  statusBadge: "Exploring AI • Building Intelligent Systems",
  headline: "Turning Ideas Into Intelligent Solutions.",
  subheadline: "I'm a Computer Science Engineering student passionate about Machine Learning, Artificial Intelligence, Retrieval-Augmented Generation, and building practical AI-powered applications.",
  aboutIntro: "I am a Computer Science Engineering student focused on the intersection of theoretical machine learning and production-ready intelligent software. My aim is to engineer robust, high-performance systems that solve difficult computational and real-world challenges.",
  aboutDetail: "My core work revolves around developing scalable Machine Learning models, production Retrieval-Augmented Generation (RAG) pipelines, neural representations, and full-stack AI-enabled microservices. I enjoy digging deep into model mechanics, latency optimization, and designing responsible, privacy-respecting architectures.",
  philosophy: "Build with purpose. Learn continuously. Solve meaningful problems.",
  email: "sarathir.cse@example.com",
  photo: "/profile.jpg",
  links: {
    github: "https://github.com/sarathi-r",
    linkedin: "https://linkedin.com/in/sarathi-r",
    leetcode: "https://leetcode.com/u/sarathi-r",
    resume: "#resume",
  }
};

export const FOCUS_AREAS = [
  {
    title: "Machine Learning",
    description: "Developing predictive models, feature pipelines, and rigorous statistical evaluation benchmarks for high-accuracy decision systems.",
    icon: "Brain",
  },
  {
    title: "Generative AI & RAG",
    description: "Architecting context-aware LLM agents, dense vector retrieval pipelines, hybrid search, and LangGraph-orchestrated workflows.",
    icon: "Sparkles",
  },
  {
    title: "Intelligent Automation",
    description: "Creating autonomous agents and deterministic reasoning pipelines that automate complex multi-step workflows with precision.",
    icon: "Cpu",
  },
  {
    title: "Full-Stack AI Engineering",
    description: "Building low-latency FastAPI and Flask microservices connected to responsive, accessible React interfaces.",
    icon: "Layers",
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  { name: "Python", level: "Advanced", category: "programming", highlight: "Primary language for ML, RAG & data systems" },
  { name: "Java", level: "Core", category: "programming", highlight: "Object-oriented design & algorithms" },
  { name: "C", level: "Core", category: "programming", highlight: "Low-level memory management & CS fundamentals" },
  { name: "TypeScript", level: "Advanced", category: "programming", highlight: "Type-safe full-stack interfaces" },
  { name: "SQL", level: "Core", category: "programming", highlight: "Relational data modeling & complex queries" },

  // AI & Machine Learning
  { name: "Machine Learning", level: "Specialized", category: "ai_ml", highlight: "Supervised, unsupervised & ensemble learning" },
  { name: "Scikit-learn", level: "Advanced", category: "ai_ml", highlight: "Model pipelines, cross-validation & metrics" },
  { name: "PyTorch", level: "Advanced", category: "ai_ml", highlight: "Neural networks, tensors & backprop" },
  { name: "Model Evaluation", level: "Specialized", category: "ai_ml", highlight: "ROC-AUC, Precision-Recall, F1 & calibration" },
  { name: "Data Preprocessing", level: "Advanced", category: "ai_ml", highlight: "Feature engineering, scaling & imputation" },

  // Generative AI & RAG
  { name: "RAG Architectures", level: "Specialized", category: "genai_rag", highlight: "Naive, Advanced & Modular retrieval flows" },
  { name: "LLM Integration", level: "Specialized", category: "genai_rag", highlight: "OpenAI, Anthropic, HuggingFace & Ollama" },
  { name: "Vector Databases", level: "Specialized", category: "genai_rag", highlight: "Qdrant, ChromaDB, similarity search" },
  { name: "Embeddings", level: "Advanced", category: "genai_rag", highlight: "Dense sentence transformers & semantic search" },
  { name: "LangChain / LangGraph", level: "Advanced", category: "genai_rag", highlight: "Multi-agent graph workflows & memory" },
  { name: "Prompt Engineering", level: "Advanced", category: "genai_rag", highlight: "Few-shot, CoT, structured output parsing" },

  // Backend Development
  { name: "FastAPI", level: "Advanced", category: "backend", highlight: "Asynchronous APIs with Pydantic validation" },
  { name: "Flask", level: "Core", category: "backend", highlight: "Lightweight ML inference microservices" },
  { name: "REST APIs", level: "Advanced", category: "backend", highlight: "Clean RESTful design & OpenAPI docs" },
  { name: "Microservices", level: "Core", category: "backend", highlight: "Modular decoupled service architecture" },

  // Frontend Development
  { name: "React", level: "Advanced", category: "frontend", highlight: "Modern hooks, component trees & state" },
  { name: "JavaScript (ES6+)", level: "Advanced", category: "frontend", highlight: "Async/await, DOM, modular patterns" },
  { name: "HTML5 & CSS3", level: "Advanced", category: "frontend", highlight: "Semantic structure & responsive layouts" },
  { name: "Tailwind CSS", level: "Advanced", category: "frontend", highlight: "Utility-first modern responsive UI" },

  // Databases & Tools
  { name: "MongoDB", level: "Core", category: "tools", highlight: "Document storage & aggregation pipelines" },
  { name: "Git & GitHub", level: "Advanced", category: "tools", highlight: "Version control, branching & collaboration" },
  { name: "Docker", level: "Core", category: "tools", highlight: "Containerization & reproducible environments" },
  { name: "Linux / CLI", level: "Core", category: "tools", highlight: "Shell scripting & system administration" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "depression-prediction",
    title: "AI-Powered Depression Prediction",
    category: "ml",
    featured: true,
    problemStatement: "Detecting early signs of clinical depression through non-invasive self-reported sentiment and behavioural indicators with strict privacy safeguards.",
    description: "Machine learning-based risk prediction system featuring supportive digital features, trained on balanced demographic datasets with calibrated risk scoring.",
    fullOverview: "A compassionate, privacy-first diagnostic aid that evaluates multi-factor behavioral inputs to identify depressive patterns early. The pipeline applies text sentiment analysis, behavioral feature extraction, and ensemble classification while preserving patient anonymity.",
    architectureHighlights: [
      "Privacy-first data masking with client-side feature tokenization",
      "Calibrated ensemble classifier with Scikit-learn Random Forests & Gradient Boosting",
      "Model interpretability module utilizing SHAP values for transparent clinical factor explanation",
      "Secure Flask API integrated with MongoDB for encrypted audit logging"
    ],
    technologies: ["Python", "Flask", "Scikit-learn", "MongoDB", "NLP", "SHAP"],
    status: "Prototype Completed",
    githubUrl: "https://github.com/sarathi-r/ai-depression-prediction",
    liveDemoUrl: "https://depression-ai-shield.demo",
    responsibleAIFeature: "Zero personal identity retention, bias auditing across age subgroups, and explicit medical disclaimer with integrated crisis intervention hotline linkages."
  },
  {
    id: "sovereign-workbench",
    title: "Sovereign AI Workbench",
    category: "rag",
    featured: true,
    problemStatement: "Enterprises and individuals need generative AI reasoning over proprietary, confidential documents without sending data to third-party cloud APIs.",
    description: "Self-hosted, privacy-focused AI workbench designed for strictly air-gapped or confidential document workflows utilizing local LLMs and vector retrieval.",
    fullOverview: "An enterprise-grade document intelligence workbench running completely on local hardware. Features multi-format ingestion (PDF, DOCX, Markdown), dense semantic chunking, Qdrant vector indexing, and LangGraph-driven multi-step synthesis.",
    architectureHighlights: [
      "100% Local Inference via Ollama / vLLM (Llama 3 & Mistral instruct)",
      "Hybrid dense & sparse search using Qdrant vector database",
      "Recursive chunking with context preservation and citation verification",
      "LangGraph cyclical orchestration for automated fact-checking against source text"
    ],
    technologies: ["Local LLMs", "RAG", "Qdrant", "LangGraph", "FastAPI", "Python"],
    status: "In Active Development",
    githubUrl: "https://github.com/sarathi-r/sovereign-ai-workbench",
    liveDemoUrl: "https://sovereign-workbench.demo",
    responsibleAIFeature: "Air-gapped operation guarantee; deterministic citation mapping so no response is generated without attributable source chunks."
  },
  {
    id: "rpm-anomaly-detector",
    title: "Real-Time Patient Anomaly Detector",
    category: "ml",
    featured: false,
    problemStatement: "Continuous remote patient telemetry produces noisy high-volume streams where critical biometric degradation can easily be obscured.",
    description: "Machine learning system focused on detecting anomalous patient vital-sign patterns (ECG, SpO2, heart rate, blood pressure) from streaming telemetry.",
    fullOverview: "Built for remote health monitoring, this system digests simulated streaming vitals, identifies multi-variate anomalies using isolation forests and dynamic thresholding, and classifies warning severities for proactive clinical escalation.",
    architectureHighlights: [
      "Sliding window time-series feature engineering (variance, skew, peak interval)",
      "Unsupervised Isolation Forest + dynamic Z-score thresholding",
      "FastAPI streaming endpoint with WebSockets for sub-100ms anomaly dispatch",
      "Interactive telemetry dashboard with real-time waveform anomaly highlighting"
    ],
    technologies: ["Python", "Machine Learning", "FastAPI", "Data Visualization", "NumPy"],
    status: "Engine Implemented",
    githubUrl: "https://github.com/sarathi-r/rpm-anomaly-detector",
    liveDemoUrl: "https://rpm-anomaly-detector.demo",
    responsibleAIFeature: "False-alarm reduction filters to mitigate clinical alarm fatigue, accompanied by confidence interval scoring."
  },
  {
    id: "agrosim-ai",
    title: "AgroSim-AI Decision Simulator",
    category: "systems",
    featured: false,
    problemStatement: "Farmers face unpredictable climate shifts leading to severe crop loss due to sub-optimal sowing schedules and mismatched cultivar choices.",
    description: "Agricultural decision-support simulator focused on climate-aware sowing windows, soil moisture forecasting, and crop yield risk optimization.",
    fullOverview: "Combines historical agro-meteorological datasets with predictive ML models to simulate crop lifecycle scenarios. Evaluates soil moisture trends, precipitation probabilities, and seasonal heat units to deliver actionable planting dates.",
    architectureHighlights: [
      "Multi-variable climate regression and historical weather pattern indexing",
      "Soil moisture depletion simulation based on evapotranspiration equations",
      "Interactive scenario modeling allowing farmers to adjust rainfall forecasts",
      "Modular Python engine designed for low-bandwidth rural mobile interfaces"
    ],
    technologies: ["Python", "Machine Learning", "Agricultural Data", "Pandas", "Scikit-learn"],
    status: "Simulation Ready",
    githubUrl: "https://github.com/sarathi-r/agrosim-ai",
    liveDemoUrl: "https://agrosim-ai.demo",
    responsibleAIFeature: "Contextualized recommendations calibrated against regional rainfall thresholds to protect vulnerable smallholder farmers."
  }
];

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    id: "edu-be",
    year: "2024 — Present",
    title: "Bachelor of Engineering in Computer Science",
    organization: "Anna University Affiliated Institution",
    type: "education",
    description: "Rigorous undergraduate curriculum emphasizing Data Structures, Algorithms, Operating Systems, Machine Learning, Database Management, and Discrete Mathematics.",
    tags: ["Computer Science", "Engineering", "Algorithms", "Mathematics"]
  },
  {
    id: "hackathon-ai",
    year: "2025",
    title: "AI Innovation Hackathon Finalist",
    organization: "National Technical Symposium",
    type: "event",
    description: "Engineered and deployed a working prototype for autonomous document classification and question answering under intense 36-hour sprint constraints.",
    tags: ["Hackathon", "FastAPI", "RAG", "Rapid Prototyping"]
  },
  {
    id: "cert-dl",
    year: "2025",
    title: "Deep Learning & Neural Architectures Specialization",
    organization: "Online Advanced Coursework",
    type: "certification",
    description: "Comprehensive training in Deep Neural Networks, Backpropagation, Convolutional and Recurrent Networks, Attention Mechanisms, and Transformer foundations.",
    tags: ["Deep Learning", "PyTorch", "Transformers", "Neural Networks"]
  },
  {
    id: "achieve-dsa",
    year: "2025 — Present",
    title: "Algorithmic Problem Solving & LeetCode Milestone",
    organization: "Competitive Programming",
    type: "achievement",
    description: "Consistent problem solver tackling complex algorithmic challenges across Dynamic Programming, Graph Theory, Binary Search, and Tree traversals.",
    tags: ["Data Structures", "Algorithms", "Problem Solving", "LeetCode"]
  },
  {
    id: "oss-rag",
    year: "2026",
    title: "Open Source AI & RAG Benchmarking",
    organization: "Developer Community",
    type: "achievement",
    description: "Active contributor to open-source RAG evaluation recipes, testing retrieval accuracy across dense and hybrid index configurations.",
    tags: ["Open Source", "Vector DBs", "RAG Evaluation", "Python"]
  }
];

export const APPROACH_DATA = [
  {
    id: "explore",
    title: "Explore",
    tagline: "Researching fundamentals & untangling difficult problems",
    description: "Before writing a single line of code, I dive into the underlying mathematical principles, investigate academic research papers, and dissect domain constraints to ensure the solution targets the root problem.",
    icon: "Compass",
    number: "01",
    deliverables: ["Literature & paper review", "Data distribution audit", "Mathematical formulation"]
  },
  {
    id: "build",
    title: "Build",
    tagline: "Turning concepts into resilient, functional prototypes",
    description: "I transform theoretical designs into clean, modular implementations. Leveraging type safety, asynchronous microservices, and tested ML pipelines, I write code that is built to endure production workloads.",
    icon: "Cpu",
    number: "02",
    deliverables: ["Clean modular architecture", "Reproducible pipelines", "Type-safe microservices"]
  },
  {
    id: "improve",
    title: "Improve",
    tagline: "Benchmarking, feedback loops, and relentless refinement",
    description: "Engineering does not stop at deployment. I measure inference latency, calculate precision-recall tradeoffs, audit models for bias, and iteratively refactor until the system operates with peak reliability.",
    icon: "Sparkles",
    number: "03",
    deliverables: ["Quantitative benchmarks", "Latency profiling", "Responsible AI audits"]
  }
];
