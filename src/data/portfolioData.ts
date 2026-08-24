import { Profile, SkillCategory, Project, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const INITIAL_PROFILE: Profile = {
  name: "Ali Koné, MFin, CPA, CIA",
  title: "Senior Data Scientist & Agentic AI Architect",
  role: "Senior Data Scientist & AI Systems Architect",
  headline: "Architecting governed enterprise multi-agent ecosystems, semantic RBAC, and production LLM runtimes.",
  bioSummary: "CPA and CIA turned AI engineer with 15+ years across internal audit, SOX 404 compliance, and risk analytics, and most recently the architecture of production agentic AI systems. Primary architect of an enterprise multi-agent platform on Google ADK whose semantic RBAC, structured audit logging, and tiered evaluation framework make autonomous agents governable at scale. Equally credible leading a SOX 404 and ITGC testing program, building the machine learning that modernizes one, or working at the intersection of the two — AI governance, controls automation, and continuous auditing.",
  fullBio: [
    "I am a CPA and CIA turned AI engineer with over 15 years spanning internal audit, SOX 404 compliance, risk analytics, and the engineering of production-grade agentic AI platforms. My work bridges the gap between deep machine learning systems and the rigorous governance, security, and auditability required by Fortune 500 enterprises.",
    "At Capgemini, I architect and serve as primary engineer on an enterprise multi-agent AI platform built on Google ADK, coordinating 8 orchestrators and specialist agents with 50+ modular skills over the Agent-to-Agent (A2A) protocol. I designed the platform's Model Context Protocol (MCP) streamable-HTTP layer, semantic RBAC security gating, and a four-tier evaluation framework backed by MLflow and LLM-as-judge scoring.",
    "Previously at Techfield, Moss Adams, BMO Financial Group, and PwC, I pioneered the integration of AI-driven analytics, process mining, and automated data validation in Python and SQL into enterprise audit and compliance operations — converting sample-based testing into continuous population analysis."
  ],
  location: "Frisco, TX (Open to Remote Worldwide)",
  email: "ali1.1kone@gmail.com",
  phone: "(214) 730-9408",
  avatarUrl: "https://github.com/tlfmcooper.png",
  resumeUrl: "#resume",
  githubUrl: "https://github.com/tlfmcooper",
  linkedinUrl: "https://linkedin.com/in/ali-kone",
  websiteUrl: "https://github.com/tlfmcooper",
  availability: {
    status: "available",
    label: "Available for Senior AI & Architectural Roles",
    description: "Open to Senior Data Scientist, Agentic AI Systems Architect, and AI Governance leadership roles."
  },
  stats: {
    yearsExperience: 15,
    skillsDeployed: "50+",
    dailyLogVolume: "1M+",
    anomalyAccuracy: "95%+"
  }
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-1",
    name: "Certified Public Accountant (CPA)",
    issuer: "NASBA",
    badge: "Accounting & Controls"
  },
  {
    id: "cert-2",
    name: "Certified Internal Auditor (CIA)",
    issuer: "Institute of Internal Auditors (IIA)",
    badge: "Governance & Audit"
  },
  {
    id: "cert-3",
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    badge: "Cloud ML"
  },
  {
    id: "cert-4",
    name: "Google Cloud Associate Cloud Engineer",
    issuer: "Google Cloud",
    badge: "Cloud Infrastructure"
  },
  {
    id: "cert-5",
    name: "Google Cloud Generative AI Leader",
    issuer: "Google Cloud",
    badge: "Generative AI"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "agentic_ai",
    name: "Agentic AI & LLM Systems",
    description: "Multi-agent orchestration, Agent-to-Agent protocol, MCP layer, vector retrieval, and LLM-as-judge evaluation.",
    icon: "Cpu",
    skills: [
      { name: "Multi-Agent Orchestration (Google ADK)", level: 96, experience: "Production", isKeySkill: true, tag: "Orchestration" },
      { name: "Agent-to-Agent (A2A) Protocol", level: 95, experience: "Production", isKeySkill: true, tag: "Protocols" },
      { name: "Model Context Protocol (MCP)", level: 94, experience: "Production", isKeySkill: true, tag: "MCP" },
      { name: "Retrieval-Augmented Generation (RAG)", level: 96, experience: "4+ years", isKeySkill: true, tag: "RAG" },
      { name: "Vector Search (pgvector, Redis Stack)", level: 92, experience: "3+ years", tag: "Vectors" },
      { name: "Agent Evaluation & LLM-as-Judge", level: 94, experience: "Production", isKeySkill: true, tag: "Evaluation" },
      { name: "Prompt Engineering & Guardrails", level: 95, experience: "4+ years", tag: "Safety" },
      { name: "Gemini, OpenAI, Ollama, LangChain", level: 94, experience: "4+ years", tag: "Models" }
    ]
  },
  {
    id: "audit_governance",
    name: "Audit, Risk & AI Governance",
    description: "SOX 404 compliance, IT General Controls (ITGC), semantic RBAC, continuous auditing, and COSO framework.",
    icon: "ShieldCheck",
    skills: [
      { name: "SOX 404 & Internal Controls", level: 98, experience: "15+ years", isKeySkill: true, tag: "Compliance" },
      { name: "IT General Controls (ITGC) Testing", level: 96, experience: "12+ years", isKeySkill: true, tag: "ITGC" },
      { name: "Semantic RBAC & Structured Audit Logs", level: 94, experience: "Production", isKeySkill: true, tag: "AI Safety" },
      { name: "COSO Framework & Risk Assessment", level: 95, experience: "15+ years", tag: "Risk" },
      { name: "Continuous Auditing & Fraud Analytics", level: 92, experience: "10+ years", tag: "Analytics" },
      { name: "IFRS 16 / ASC 842 Lease Standards", level: 90, experience: "8+ years", tag: "Accounting" },
      { name: "Workpaper Review & Deficiency Remediation", level: 96, experience: "15+ years", tag: "Assurance" }
    ]
  },
  {
    id: "ml_datascience",
    name: "Machine Learning & Data Science",
    description: "Time-series forecasting, anomaly detection, predictive modeling, NLP, and deep learning architectures.",
    icon: "Server",
    skills: [
      { name: "Anomaly Detection (Isolation Forest, XGBoost)", level: 94, experience: "6+ years", isKeySkill: true, tag: "Detection" },
      { name: "Time-Series Forecasting (Prophet)", level: 95, experience: "5+ years", isKeySkill: true, tag: "Forecasting" },
      { name: "Natural Language Processing (NLP)", level: 92, experience: "5+ years", tag: "NLP" },
      { name: "Deep Learning (TensorFlow, PyTorch)", level: 88, experience: "4+ years", tag: "Deep Learning" },
      { name: "Scikit-Learn & Statistical Modeling", level: 95, experience: "8+ years", tag: "ML" },
      { name: "Config-Driven Generative UI", level: 90, experience: "Production", tag: "GenUI" }
    ]
  },
  {
    id: "data_engineering",
    name: "Data & Analytics Engineering",
    description: "High-throughput data pipelines, SQL optimization, asynchronous microservices, and executive dashboards.",
    icon: "Database",
    skills: [
      { name: "Python, Pandas & NumPy", level: 98, experience: "10+ years", isKeySkill: true, tag: "Core" },
      { name: "SQL & PostgreSQL (pgvector)", level: 96, experience: "12+ years", isKeySkill: true, tag: "Databases" },
      { name: "FastAPI & Flask Microservices", level: 94, experience: "5+ years", isKeySkill: true, tag: "APIs" },
      { name: "ETL & Pipelines (Apache Airflow, Spark)", level: 88, experience: "5+ years", tag: "Pipelines" },
      { name: "R & Statistical Computing", level: 86, experience: "6+ years", tag: "Stats" },
      { name: "Power BI & Tableau Dashboards", level: 92, experience: "8+ years", tag: "BI" }
    ]
  },
  {
    id: "cloud_devops",
    name: "Cloud, DevOps & Observability",
    description: "Multi-cloud infrastructure, Kubernetes orchestration, GitOps deployment, and telemetry tracking.",
    icon: "Cloud",
    skills: [
      { name: "GCP (Vertex AI, Cloud Functions)", level: 95, experience: "5+ years", isKeySkill: true, tag: "GCP" },
      { name: "Kubernetes, Helm & Docker", level: 92, experience: "5+ years", isKeySkill: true, tag: "Containers" },
      { name: "ArgoCD & Argo Workflows", level: 90, experience: "3+ years", tag: "GitOps" },
      { name: "AWS & Azure Cloud Services", level: 88, experience: "6+ years", tag: "Cloud" },
      { name: "CI/CD (GitHub Actions, Jenkins, Pytest)", level: 94, experience: "6+ years", tag: "CI/CD" },
      { name: "MLflow, OpenTelemetry & New Relic", level: 90, experience: "4+ years", tag: "Observability" },
      { name: "Terraform & IaC", level: 85, experience: "3+ years", tag: "IaC" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aios-platform",
    title: "AIOS Platform (Agentic Operating System)",
    subtitle: "Google ADK, Agent-to-Agent (A2A) Protocol & Model Context Protocol (MCP)",
    category: "ai",
    description: "Enterprise multi-agent ecosystem running orchestrators and specialist agents coordinating modular skills over the A2A protocol with semantic RBAC.",
    longDescription: "Core architecture and implementation of an enterprise agentic AI platform built on Google ADK. Features a hybrid skills-forward design, an authenticated streamable-HTTP Model Context Protocol (MCP) endpoint exposing 110+ platform tools with multi-cluster OIDC authentication, semantic RBAC with structured audit logging, and a four-tier evaluation framework with live LLM-as-judge scoring.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://github.com/tlfmcooper/aios-platform",
    githubUrl: "https://github.com/tlfmcooper/aios-platform",
    technologies: ["Google ADK", "Python", "FastAPI", "Agent-to-Agent (A2A)", "Model Context Protocol (MCP)", "Kubernetes", "pgvector", "MLflow", "ArgoCD"],
    featured: true,
    date: "2024 - 2026",
    metrics: [
      { label: "Modular Skills", value: "50+ Skills" },
      { label: "Exposed Platform Tools", value: "110+ REST Tools" },
      { label: "Bespoke Code Retired", value: "3,400+ LOC" }
    ],
    architectureHighlights: [
      "Config-driven delegation hierarchy validating agent graphs at startup/hot-reload to prevent cycles and port collisions",
      "Streamable-HTTP MCP endpoint replacing legacy SSE shims with multi-cluster OIDC authentication",
      "Semantic RBAC fast-failing unauthorized requests before LLM invocation with structured audit logs",
      "Four-tier evaluation framework: static dataset linting, offline cassette replay in CI, live LLM-as-judge, and HTTP smoke tests"
    ],
    features: [
      "Domain orchestrators automating K8s diagnosis, ArgoCD deployment, and store health checks",
      "Self-improving memory loop extracting facts with pgvector deduplication and background embedding workers",
      "Config-driven Generative UI rendering interactive forms from declarative YAML specifications"
    ],
    roleDescription: "Primary Architect and Lead Engineer: Designed the agent graph runtime, MCP layer, semantic RBAC security gates, and evaluation baselines."
  },
  {
    id: "gitops-alikone",
    title: "GitOps Infrastructure & Telemetry Automation",
    subtitle: "ArgoCD, Kubernetes Orchestration & Continuous Delivery Pipeline",
    category: "cloud",
    description: "Declarative GitOps repository managing Kubernetes deployments, Helm charts, automated rollback pipelines, and telemetry monitoring.",
    longDescription: "Production GitOps repository defining declarative infrastructure and application deployments across Kubernetes clusters. Incorporates ArgoCD applications, Helm chart values, automated pre-commit gates, 127 pytest modules, and real-time observability configurations for high-availability agent and microservice workloads.",
    coverImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://github.com/tlfmcooper/gitops-alikone",
    githubUrl: "https://github.com/tlfmcooper/gitops-alikone",
    technologies: ["GitOps", "ArgoCD", "Kubernetes", "Helm", "Docker", "Python", "GitHub Actions", "OpenTelemetry"],
    featured: true,
    date: "2024 - 2026",
    metrics: [
      { label: "Deployment Method", value: "Declarative GitOps" },
      { label: "Availability Target", value: "99.9% Uptime" },
      { label: "CI/CD Test Modules", value: "127 Pytest Modules" }
    ],
    architectureHighlights: [
      "Declarative multi-cluster application management with automated ArgoCD drift detection and sync policies",
      "Helm-managed autoscaling microservices running behind high-throughput load balancers",
      "Pre-commit gating and automated vulnerability scanning in GitHub Actions CI pipelines"
    ],
    features: [
      "Zero-downtime rolling updates and automated canary rollback strategies",
      "Centralized secret management integration and role-based cluster access controls",
      "OpenTelemetry agent sidecars streaming distributed metrics and traces"
    ],
    roleDescription: "Architected the GitOps release topology, Helm packaging, and automated continuous delivery pipelines."
  },
  {
    id: "portfolio-manager",
    title: "Quantitative Portfolio & Risk Manager",
    subtitle: "Financial Engineering, Econometrics & Algorithmic Risk Analytics",
    category: "opensource",
    description: "Quantitative portfolio optimization, stochastic modeling, and risk analytics engine built on modern financial engineering methodologies.",
    longDescription: "Quantitative analytics and financial modeling system implementing modern portfolio theory, factor risk attribution, Monte Carlo simulations, and algorithmic hedging strategies. Combines Python, Pandas, and NumPy for high-performance financial computation and automated risk reporting.",
    coverImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://github.com/tlfmcooper/portfolio-manager",
    githubUrl: "https://github.com/tlfmcooper/portfolio-manager",
    technologies: ["Python", "Pandas", "NumPy", "Quantitative Modeling", "Financial Engineering", "Risk Analytics", "Matplotlib"],
    featured: true,
    date: "2023 - 2025",
    metrics: [
      { label: "Domain", value: "Quantitative Finance" },
      { label: "Analysis Engine", value: "Vectorized Python" },
      { label: "Methodology", value: "MFin / Financial Eng" }
    ],
    architectureHighlights: [
      "Vectorized covariance matrix estimation and mean-variance efficient frontier optimization",
      "Value at Risk (VaR) and Conditional VaR calculation using historical and parametric models",
      "Multi-factor risk attribution and stress testing under volatile market regimes"
    ],
    features: [
      "Automated risk parameter calculation and portfolio rebalancing recommendations",
      "Interactive data visualizations of asset correlation heatmaps and return distributions",
      "Modular design allowing integration with real-time market data feeds"
    ],
    roleDescription: "Built quantitative asset allocation algorithms, risk measurement models, and analytics tooling."
  },
  {
    id: "prof-mle-exam-prep",
    title: "Google Cloud Professional ML Engineer Prep",
    subtitle: "Curated Knowledge Base, Model Architectures & GCP MLOps Engineering",
    category: "opensource",
    description: "Comprehensive technical reference, architecture blueprints, and hands-on implementations for Google Cloud Professional Machine Learning Engineer certification.",
    longDescription: "Engineered study guide and hands-on repository covering end-to-end Machine Learning systems on Google Cloud Platform. Spans data preparation, feature engineering, distributed training on Vertex AI, model tuning, pipeline orchestration with Kubeflow/Vertex Pipelines, model monitoring, and serving architectures.",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://github.com/tlfmcooper/prof-mle-exam-prep",
    githubUrl: "https://github.com/tlfmcooper/prof-mle-exam-prep",
    technologies: ["GCP", "Vertex AI", "TensorFlow", "PyTorch", "Kubeflow Pipelines", "BigQuery ML", "MLOps", "Python"],
    featured: false,
    date: "2024",
    metrics: [
      { label: "Target Certification", value: "Google Cloud PMLE" },
      { label: "Platform", value: "Vertex AI & MLOps" },
      { label: "Coverage", value: "End-to-End GCP ML" }
    ],
    architectureHighlights: [
      "Reference patterns for distributed training strategies on Vertex AI with GPU/TPU acceleration",
      "Vertex AI Pipelines (Kubeflow) DAG implementations for reproducible ML workflows",
      "Model deployment patterns for online low-latency inference and batch prediction"
    ],
    features: [
      "Feature Store configuration and data validation best practices",
      "Model drift monitoring and automated retraining triggers",
      "Comprehensive cheat sheets and architectural trade-off comparisons"
    ],
    roleDescription: "Created architectural diagrams, technical guides, and code implementations for GCP ML engineering."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-capgemini",
    role: "Senior Data Scientist",
    company: "Capgemini",
    location: "Chicago, IL",
    period: "Dec 2024 — Present",
    current: true,
    description: "Architecting production agentic AI systems for a global quick-service restaurant client, turning multi-step platform engineering and business operations runbooks into conversational, self-service workflows.",
    achievements: [
      "Architected and served as primary engineer on an enterprise multi-agent AI platform built on Google ADK, running 8 orchestrators and specialist agents that coordinate 50+ modular skills over the Agent-to-Agent (A2A) protocol.",
      "Led the refactor from a sub-agent-centric design to a hybrid skills-forward architecture, retiring 3,400+ lines of bespoke agent code and introducing a config-driven delegation hierarchy that validates agent graphs at startup and hot reload, rejecting unknown targets, cycles, and port collisions before activation.",
      "Built the platform's Model Context Protocol (MCP) layer — an authenticated streamable-HTTP endpoint replacing a legacy SSE shim — with multi-cluster routing and multiple OIDC providers, exposing 110+ platform REST tools to agents and to developer IDEs.",
      "Implemented semantic RBAC with hierarchical agent, skill, tool, and script-level permissions that fast-fail unauthorized access before LLM invocation, with structured audit logging of authentication, tool-invocation, and permission-denial events, prompt-injection screening, sandboxed code execution, and destructive-action confirmation gates.",
      "Designed a four-tier agent evaluation framework — static dataset linting, deterministic offline cassette replay in CI, live LLM-as-judge scoring, and HTTP release smoke tests — with committed score baselines, MLflow trend tracking, automated PII redaction, and an admin dashboard for case-level drilldown and on-demand re-runs.",
      "Engineered a self-improving agent memory loop that extracts facts from every request, deduplicates them via pgvector similarity search, and auto-injects relevant context into downstream LLM calls, backed by background embedding workers and scheduled synthesis jobs.",
      "Delivered config-driven generative UI rendering interactive forms from declarative YAML specifications with dynamic lookups and conditional fields, enabling agents to collect missing parameters for deployment, onboarding, and ordering journeys.",
      "Shipped domain agents automating Kubernetes and ArgoCD diagnosis, deployment and package triage, configuration drift detection, APM alert triage, and multi-market store health checks — backed by 127 pytest modules with pre-commit gating and GitHub Actions CI.",
      "Engineered an Analytics & Metrics Platform on FastAPI and Flask with Prophet time-series models for real-time anomaly detection, processing 1M+ log entries daily at 95%+ accuracy while cutting false-positive alerts by 45%, deployed via Helm with automated CI/CD and autoscaling at 99.9% uptime.",
      "Built a RAG-based service desk assistant on Ollama (Gemma) and a Redis Stack vector database with automated PDF ingestion and Q&A generation, reaching 85% first-contact resolution and cutting knowledge base search time from 15 minutes to under 5 seconds."
    ],
    techStack: ["Google ADK", "Python", "FastAPI", "Model Context Protocol (MCP)", "A2A Protocol", "Kubernetes", "ArgoCD", "Prophet", "pgvector", "Redis Stack", "MLflow", "Vertex AI", "Helm"]
  },
  {
    id: "exp-techfield",
    role: "Data Scientist",
    company: "Techfield",
    location: "Atlanta, GA",
    period: "Jan 2024 — Nov 2024",
    current: false,
    description: "Designed and deployed Retrieval-Augmented Generation (RAG) systems, anomaly detection models, and analytical data transformation pipelines on cloud infrastructure.",
    achievements: [
      "Designed and deployed a Retrieval-Augmented Generation (RAG) system using LangChain, OpenAI embeddings, and GPT models, improving knowledge retrieval accuracy and response quality.",
      "Automated document ingestion and vector database embedding, making enterprise knowledge searchable at scale without manual curation.",
      "Developed microservices with FastAPI and uvicorn, deployed via Jenkins and Docker for continuous integration.",
      "Implemented anomaly detection using Isolation Forest, XGBoost, and Autoencoder models to improve data reliability across ingested sources.",
      "Built analytical pipelines with Apache Airflow and Spark for efficient large-scale data transformation.",
      "Deployed machine learning models on AWS with hyperparameter tuning and ongoing performance monitoring.",
      "Conducted sentiment analysis on customer feedback to surface experience insights and drive product improvements."
    ],
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI", "Docker", "Jenkins", "Apache Airflow", "Spark", "AWS", "XGBoost", "Scikit-Learn"]
  },
  {
    id: "exp-moss-adams",
    role: "Consulting Manager, Risk Assurance & Internal Audit",
    company: "Moss Adams",
    location: "Dallas, TX",
    period: "Sep 2022 — Oct 2023",
    current: false,
    description: "Directed end-to-end SOX 404 consulting engagements, IT General Controls (ITGCs) testing, and modernized audit delivery with Python, SQL, and predictive models.",
    achievements: [
      "Led SOX 404 consulting engagements end to end, scoping financial and non-financial data to material financial statement risks and documenting business processes through client interviews, written narratives, and flowcharts.",
      "Evaluated internal control design across financial and operational risks and executed testing over business process controls and IT General Controls (ITGCs), identifying deficiencies and defining remediation plans.",
      "Partnered with client management to close control gaps through corrective action plans tracked to validated completion, and reviewed audit workpapers for consistency with quality standards and external auditor requirements.",
      "Modernized audit delivery by embedding data visualization and machine learning into the testing approach, reducing reporting time by 30%, and streamlined control testing through automated data extraction in Python and SQL with Power BI risk dashboards.",
      "Led process mining initiatives that surfaced control gaps and operational inefficiencies sample-based testing would have missed, and applied predictive models to strengthen risk assessment."
    ],
    techStack: ["SOX 404", "ITGC Controls", "COSO Framework", "Python", "SQL", "Power BI", "Risk Assessment", "Workpaper Review"]
  },
  {
    id: "exp-bmo",
    role: "Manager, Governance, Compliance & Audit",
    company: "BMO Financial Group",
    location: "Toronto, ON",
    period: "Apr 2016 — Aug 2022",
    current: false,
    description: "Shaped annual audit plans, led AI-driven analytics and automation into audit and compliance operations, and managed IFRS 16 and ASC 842 lease transitions.",
    achievements: [
      "Shaped the annual audit plan for assigned business units against organizational objectives and regulatory requirements, and managed end-to-end assignments across planning, risk assessment, fieldwork, and reporting.",
      "Recommended enhancements to control procedures and partnered with executives to resolve findings through data-informed root cause analysis.",
      "Contributed to the IFRS 16 and ASC 842 lease transition project, developing analytical models, identifying process gaps, and validating system readiness against the new standards.",
      "Spearheaded the integration of AI-driven analytics and automation into audit and compliance operations across business units.",
      "Automated data validation workflows in Python and SQL, cutting audit processing time by 40%, and applied machine learning to detect anomalies and flag compliance breaches early.",
      "Designed predictive risk models and Power BI dashboards to monitor controls and emerging risks, and mentored audit teams in applying data science to risk and governance work."
    ],
    techStack: ["Audit & Compliance", "Python", "SQL", "IFRS 16 / ASC 842", "Power BI", "Machine Learning", "Risk Modeling", "Fraud Analytics"]
  },
  {
    id: "exp-pwc",
    role: "Experienced Senior Associate, Audit & Assurance",
    company: "PwC",
    location: "Montreal, QC",
    period: "Dec 2011 — May 2013",
    current: false,
    description: "Led SOX reviews over accounting and financial reporting controls, built automation scripts in Python and R for large-scale transaction testing, and enhanced fraud detection.",
    achievements: [
      "Led SOX reviews over accounting and financial reporting controls for assigned areas — assessing key controls, detecting deficiencies, and designing remediation strategies and mitigating controls to reduce risk exposure.",
      "Improved audit efficiency by 25% through automation and analytics, building Python and R scripts for large-scale transaction testing and statistical risk modeling.",
      "Enhanced fraud detection through data mining and machine learning–based risk scoring, and designed SQL databases to standardize audit data for continuous auditing."
    ],
    techStack: ["SOX 404", "PwC Audit Methodology", "Python", "R", "SQL", "Fraud Detection", "Statistical Risk Modeling"]
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Master of Science (M.S.) in Financial Engineering",
    school: "WorldQuant University",
    location: "New Orleans, LA (Global)",
    period: "Financial Engineering",
    achievements: [
      "Quantitative curriculum covering stochastic calculus, time-series econometrics, predictive machine learning, and algorithmic risk engineering."
    ]
  },
  {
    id: "edu-2",
    degree: "Master of Finance (M.Fin)",
    school: "Rotman School of Management, University of Toronto",
    location: "Toronto, ON",
    period: "Master of Finance",
    achievements: [
      "Specialization in quantitative asset pricing, corporate risk management, financial econometrics, and regulatory governance frameworks."
    ]
  }
];

const STORAGE_KEY = 'portfolio_custom_profile_data_v3';

export function getStoredProfile(): Profile {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...INITIAL_PROFILE, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error("Failed to read from localStorage", e);
  }
  return INITIAL_PROFILE;
}

export function saveStoredProfile(profile: Profile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error("Failed to write to localStorage", e);
  }
}

export function resetStoredProfile(): Profile {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to clear localStorage", e);
  }
  return INITIAL_PROFILE;
}
