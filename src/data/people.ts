import type { Person } from "@/types/person";

const placeholderHowIWork: Person["howIWork"] = [
  {
    text: "Your approach",
    detail: "Replace this with how you like to work — collaboration, shipping, focus areas.",
  },
  {
    text: "How you ship",
    detail: "Add a second principle here.",
  },
  {
    text: "What you value",
    detail: "Add a third principle here.",
  },
  {
    text: "Collaboration",
    detail: "Add a fourth principle here.",
  },
];

export const people: Person[] = [
  {
    slug: "kingsley-uwakwe",
    displayName: "Kingsley Uwakwe",
    navLabel: "KU",
    regionLabel: "Canada",
    theme: "canada",
    hero: {
      badge: "Based in Canada",
      titleBefore: "Hi, I'm ",
      titleHighlight: "Kingsley Uwakwe",
      titleAfter: "",
      subtitle:
        "Senior software engineer with 11+ years across ML, large-scale systems, and production software. Specialized in LLMs and RAG — from research to reliable, measurable impact in healthcare and enterprise.",
      tagline:
        "Pragmatic, systems-first AI: reliability, scalability, and business outcomes — not just model accuracy.",
      openToWork: true,
    },
    resumeUrl: "/resumes/kingsley-uwakwe.pdf",
    projects: [
      {
        title: "Enterprise Healthcare RAG Platform",
        metric: "~60% search lift",
        description:
          "Production RAG over clinical and operational documents using OpenAI, Amazon Bedrock, LangChain, and Pinecone — stronger accuracy and faster findability for enterprise search. High-throughput Go and FastAPI paths for ingestion, embedding, and real-time vector updates.",
        stack: ["OpenAI", "Amazon Bedrock", "LangChain", "Pinecone", "Go", "FastAPI", "AWS"],
        github: "#",
      },
      {
        title: "Ordibl — AI Agents & Automation",
        metric: "~35% product efficiency",
        description:
          "Co-founded product line around LLM-driven automation: modular LangChain / LangGraph agents, enterprise RAG assistants, and evaluation frameworks so models behave reliably in the wild. APIs and real-time services in Python with React frontends.",
        stack: ["LangChain", "LangGraph", "Python", "React", "RAG"],
        github: "#",
      },
      {
        title: "Retail-Scale Platform & Document ML",
        metric: "5M+ req / day",
        description:
          "Backend platform work for Amazon Retail and CX: Spring Boot microservices on AWS ECS with DynamoDB, Redis, and Aurora PostgreSQL. TensorFlow pipelines for document automation that cut manual compliance review workloads substantially; TypeScript services and Plaid integrations for modernized financial flows.",
        stack: ["Spring Boot", "TensorFlow", "AWS ECS", "DynamoDB", "Kafka", "TypeScript"],
        github: "#",
      },
      {
        title: "Cloud-Native ML Infrastructure",
        metric: "E2E pipelines",
        description:
          "Scalable training and inference stacks with Docker, Kubernetes, Kubeflow, and AWS EKS; Terraform for reproducible environments. LangGraph orchestration for multi-turn and agentic workflows. Full observability with CloudWatch, Prometheus, and Grafana.",
        stack: ["Kubernetes", "Kubeflow", "Terraform", "LangGraph", "Prometheus", "Grafana"],
        github: "#",
      },
    ],
    skillGroups: [
      {
        title: "AI / ML",
        skills: [
          "LLMs & RAG",
          "LangChain, LangGraph & agents",
          "Prompt engineering & LLM evaluation",
          "Hugging Face, PyTorch, TensorFlow",
          "Embeddings & vector search",
          "Kubeflow & ML pipelines",
          "Feature engineering & model deployment",
        ],
      },
      {
        title: "Programming & backend",
        skills: [
          "Python, Go, TypeScript, Node.js",
          "C#, Java, JavaScript, .NET, PHP",
          "FastAPI, GraphQL, REST",
          "Microservices & event-driven architecture",
          "Unit testing",
        ],
      },
      {
        title: "Cloud & DevOps",
        skills: [
          "GCP, AWS, Azure",
          "Lambda, DynamoDB, S3, API Gateway, RDS",
          "Docker, Kubernetes",
          "Terraform",
          "CI/CD (GitHub Actions)",
          "Elasticsearch",
        ],
      },
      {
        title: "Data systems",
        skills: ["Pinecone", "Snowflake", "Kafka", "Redis", "PostgreSQL"],
      },
    ],
    howIWork: placeholderHowIWork,
    experience: [
      {
        company: "STANLEY Healthcare",
        role: "Senior Software Engineer",
        dates: "Jun 2022 – Present",
        bullets: [
          "Engineered enterprise RAG pipelines with OpenAI, Amazon Bedrock, LangChain, and Pinecone — improved document search accuracy and efficiency by ~60%.",
          "Built high-throughput Go and FastAPI services for healthcare data processing and real-time embedding into vector databases.",
          "Provisioned scalable ML infrastructure with Docker, Kubernetes, Kubeflow, and AWS EKS for training and inference.",
          "Automated provisioning with Terraform; observability with CloudWatch, Prometheus, and Grafana.",
          "Orchestrated LangGraph workflows for multi-turn memory and autonomous reasoning; mentored engineers on LLM patterns and cloud-native ML.",
        ],
      },
      {
        company: "Ordibl",
        role: "Co-Founder",
        dates: "Jul 2024 – Present",
        bullets: [
          "Building AI-powered automation with LLM systems and agent-based architectures; improved AI product efficiency by ~35%.",
          "Modular agent frameworks with LangChain and LangGraph for autonomous task workflows.",
          "Enterprise knowledge systems with RAG for conversational search; prompt-engineering and evaluation pipelines for reliability.",
          "Scalable APIs and real-time AI services with Python and React.",
        ],
      },
      {
        company: "Fusion Computing Limited",
        role: "Senior Software Engineer",
        dates: "Oct 2016 – Mar 2022",
        bullets: [
          "Directed backend platform work for Amazon Retail and CX engineering teams.",
          "Scaled microservices handling 5M+ daily API requests (Spring Boot, AWS ECS, DynamoDB, Redis, Aurora PostgreSQL).",
          "Cut manual compliance review ~40% with TensorFlow-driven document automation.",
          "Refactored legacy financial modules into TypeScript microservices (e.g. Plaid integrations).",
          "Real-time ranking and A/B testing with Kafka, Kinesis, and Spark; ML recommendations with Amazon applied scientists.",
          "Infrastructure with Docker, Kubernetes, Terraform, and AWS.",
        ],
      },
      {
        company: "Thought Media",
        role: "Software Engineer",
        dates: "Aug 2012 – Sep 2016",
        bullets: [
          "Backend APIs with Node.js and Django for B2B/B2C e-commerce.",
          "Mobile-first UIs with AngularJS, jQuery, Bootstrap; Stripe, Twilio, Google Maps.",
          "SQL optimization and caching; RabbitMQ for async workflows.",
          "Automated testing with Jest, PyTest, and Selenium in CI.",
        ],
      },
    ],
    contact: {
      heading: "Let's Talk",
      intro:
        "Open to roles where strong data platforms, reliable pipelines, and high engineering standards matter — Canada and remote.",
      tagline: "Regina, SK · +1 (639) 554-4305",
      email: "kingsleyuwakwe12@outlook.com",
      linkedin: "https://www.linkedin.com/in/kingsley-uwakwe-585ab926/",
      github: "https://github.com/KingsleyU12",
      exploring: ["LLMs & RAG", "Healthcare AI", "MLOps", "Cloud-native ML"],
    },
  },
  {
    slug: "thiago-gabry",
    displayName: "Thiago Gabry",
    navLabel: "TG",
    regionLabel: "Brazil",
    theme: "brazil",
    hero: {
      badge: "Based in Brazil",
      titleBefore: "Hi, I'm ",
      titleHighlight: "Thiago Gabry",
      titleAfter: "",
      subtitle:
        "Machine Learning Engineer with 4+ years shipping production AI in NLP, conversational AI, and multimodal computer vision. Strong in LLM-powered apps, neural machine translation, and real-time inference — with a focus on accessibility and sign language technologies.",
      tagline:
        "From dialogue understanding to pose and video: pragmatic ML that works in production, not just in notebooks.",
      openToWork: true,
    },
    resumeUrl: "/resumes/thiago-gabry.pdf",
    projects: [
      {
        title: "Production conversational ML & inference",
        metric: "Live APIs",
        description:
          "FastAPI and Python services deploying NLP models for conversational AI platforms — real-time inference, scalable backends, and close collaboration with backend engineers on high-throughput integrations.",
        stack: ["FastAPI", "Python", "NLP", "Real-time inference"],
        github: "#",
      },
      {
        title: "NLP pipelines for dialogue systems",
        metric: "End-to-end",
        description:
          "Tokenization, text normalization, and feature engineering on large conversational datasets; intent classification and NER for stronger understanding; LLM-driven workflows for contextual dialogue and automated responses.",
        stack: ["Python", "NLP", "NER", "LLMs"],
        github: "#",
      },
      {
        title: "Sign language translation stack",
        metric: "NMT + pose",
        description:
          "Text-to-gloss pipelines with spaCy; rule-based restructuring into sign language grammar; neural machine translation from text to gloss sequences; gloss-to-skeletal-pose generation with lexicons, smoothing, and motion processing.",
        stack: ["PyTorch", "spaCy", "NMT", "Pose sequences"],
        github: "#",
      },
      {
        title: "Pose-to-video & gesture rendering",
        metric: "Multimodal",
        description:
          "Pose dataset loaders and preprocessing from sign-language video; pose-to-video synthesis and animation pipelines; GAN-based models for more realistic gesture rendering and frame-level generation.",
        stack: ["OpenCV", "GANs", "Video processing", "Python"],
        github: "#",
      },
    ],
    skillGroups: [
      {
        title: "ML & NLP",
        skills: [
          "Python",
          "PyTorch",
          "Scikit-learn",
          "Deep learning",
          "NLP pipelines",
          "Neural machine translation",
          "Text classification & NER",
          "spaCy",
          "Feature engineering",
          "Model evaluation",
          "Sign language translation systems",
        ],
      },
      {
        title: "Vision & gestures",
        skills: [
          "OpenCV",
          "MediaPipe",
          "Pose estimation",
          "Gesture recognition",
          "Video processing",
          "GANs",
          "Pose-to-video generation",
        ],
      },
      {
        title: "Engineering & deployment",
        skills: ["FastAPI", "REST APIs", "Model deployment", "Real-time inference"],
      },
      {
        title: "Data",
        skills: ["SQL", "NumPy", "Pandas", "Data pipelines", "Dataset preprocessing"],
      },
    ],
    howIWork: [
      {
        text: "Production over demos",
        detail:
          "I care about inference latency, monitoring, and behavior in real conversational systems — not only offline metrics.",
      },
      {
        text: "Accessibility-minded ML",
        detail:
          "Sign language and multimodal work taught me to design pipelines that bridge text, structure, motion, and video.",
      },
      {
        text: "Solid data foundations",
        detail:
          "Heavy emphasis on normalization, dataset prep, and evaluation so models stay understandable and maintainable.",
      },
      {
        text: "Cross-functional integration",
        detail:
          "I work with backend engineers to plug ML into platforms that already serve real users and traffic.",
      },
    ],
    experience: [
      {
        company: "Ordibl",
        role: "Machine Learning Engineer",
        dates: "May 2023 – Present",
        bullets: [
          "Shipped production ML inference services with FastAPI and Python for conversational AI platforms.",
          "Built NLP pipelines for conversational data: tokenization, normalization, and feature engineering.",
          "Trained and deployed models for intent classification and named-entity recognition.",
          "Implemented LLM-driven workflows for contextual dialogue and automated response generation.",
          "Designed data processing pipelines for large conversational datasets used in training.",
          "Built monitoring for model accuracy, API performance, and inference latency in production.",
          "Optimized backend ML infrastructure for real-time inference and scalable deployment alongside platform engineers.",
        ],
      },
      {
        company: "Xetlink Technology",
        role: "Machine Learning Engineer (Junior)",
        dates: "Oct 2020 – Apr 2023",
        bullets: [
          "Text-to-gloss translation with spaCy — tokenization, lemmatization, and grammar-aware rules.",
          "Rule-based NLP to reshape natural language into sign-language grammar structures.",
          "Neural machine translation from text sentences to sign language gloss sequences.",
          "Gloss-to-skeletal-pose systems using lexicons and pose datasets; smoothing and transition handling.",
          "Dataset loaders and preprocessing for pose data from sign-language video.",
          "Pose-to-video synthesis and animation pipelines; GAN-based models for realistic gesture rendering.",
        ],
      },
    ],
    contact: {
      heading: "Let's Talk",
      intro:
        "Open to roles in NLP, conversational AI, multimodal ML, and accessibility-focused products — Brazil and remote. B.Sc. in Machine Learning (IFF / UFF, Santo Antônio de Pádua, 2014–2020).",
      tagline: "Rio de Janeiro, Brazil · +55 22 99243-2692",
      email: "tgabry.datascience@outlook.com",
      linkedin: "https://www.linkedin.com/in/thiago-da-silva-gabry-05456139b/",
      github: "#",
      exploring: ["Conversational AI", "LLM applications", "Sign language tech", "Real-time ML"],
    },
  },
  {
    slug: "gustavo-gabry",
    displayName: "Gustavo Gabry",
    navLabel: "GG",
    regionLabel: "Brazil",
    theme: "brazil",
    hero: {
      badge: "Based in Brazil",
      titleBefore: "Hi, I'm ",
      titleHighlight: "Gustavo Gabry",
      titleAfter: "",
      subtitle:
        "AI / ML engineer focused on conversational systems: FastAPI inference services, NLP pipelines, and LLM-backed dialogue — with strong interest in evaluation, reliable deployment, and real-time ML at scale.",
      tagline:
        "Building assistants and backends that stay measurable in production: latency, throughput, and prediction quality.",
      openToWork: true,
    },
    resumeUrl: "/resumes/gustavo-gabry.pdf",
    projects: [
      {
        title: "LLM conversational assistant",
        metric: "Ordibl",
        description:
          "Conversational AI using LLM APIs and NLP pipelines to automate support-style workflows. Semantic retrieval to ground responses and improve multi-turn handling. Related product: ordibl.ai.",
        stack: ["LLM APIs", "Python", "NLP", "Retrieval"],
        github: "#",
      },
      {
        title: "NLP intent classification system",
        metric: "Real-time APIs",
        description:
          "Intent classification over conversational text with full preprocessing and training workflows. Inference APIs integrated with backend services for live prediction in assistant flows.",
        stack: ["Python", "NLP", "FastAPI", "Scikit-learn"],
        github: "#",
      },
      {
        title: "Production ML inference for conversational AI",
        metric: "Live stack",
        description:
          "FastAPI services deploying NLP models for platforms ingesting user interaction data; preprocessing for tokenization, normalization, and feature engineering; NER and intent models wired into dialogue logic.",
        stack: ["FastAPI", "Python", "NER", "Production ML"],
        github: "#",
      },
      {
        title: "Data pipelines & ML observability",
        metric: "E2E quality",
        description:
          "Training and evaluation dataset pipelines; monitoring for accuracy, API latency, and inference throughput; testing model updates and validating behavior before and after release.",
        stack: ["Python", "Pipelines", "Monitoring", "Docker"],
        github: "#",
      },
    ],
    skillGroups: [
      {
        title: "ML & NLP",
        skills: [
          "Python",
          "PyTorch",
          "Scikit-learn",
          "Deep learning",
          "Model evaluation",
          "Feature engineering",
          "NLP pipelines",
          "spaCy",
          "Text classification",
          "NER",
        ],
      },
      {
        title: "Engineering & deployment",
        skills: ["FastAPI", "REST APIs", "Model deployment", "Real-time inference"],
      },
      {
        title: "Data",
        skills: ["SQL", "NumPy", "Pandas", "Dataset preprocessing"],
      },
      {
        title: "Platform",
        skills: ["Git", "Docker", "Linux"],
      },
    ],
    howIWork: [
      {
        text: "Measure what ships",
        detail:
          "I care about latency, throughput, and prediction quality in production — not only offline scores.",
      },
      {
        text: "NLP with structure",
        detail:
          "Solid tokenization, normalization, and feature workflows so models and LLM layers stay maintainable.",
      },
      {
        text: "Partner with product & backend",
        detail:
          "ML has to fit dialogue management, APIs, and automation tools the team actually runs day to day.",
      },
      {
        text: "Validate before you scale",
        detail:
          "Testing updates, checking accuracy shifts, and confirming behavior in real conversational traffic.",
      },
    ],
    experience: [
      {
        company: "Ordibl",
        role: "Machine Learning Engineer",
        dates: "Jan 2024 – Present",
        bullets: [
          "Production ML inference with FastAPI and Python, deploying NLP models for conversational AI on user interaction data.",
          "Preprocessing pipelines for conversational datasets: tokenization, normalization, and feature engineering.",
          "Intent classification and NER models to improve language understanding in assistants.",
          "LLM-driven conversational workflows integrated with dialogue management for contextual responses.",
          "Data pipelines for training and evaluation datasets; monitoring for model metrics, API latency, and inference throughput.",
          "Optimized backend ML services for real-time inference and scalable deployment across conversational infrastructure.",
          "Worked with backend and product teams to integrate ML into production platforms and automation tools; tested updates and validated production behavior.",
        ],
      },
    ],
    contact: {
      heading: "Let's Talk",
      intro:
        "Open to remote ML engineer roles with US and LATAM teams — NLP, LLM applications, and conversational AI. B.Sc. in Machine Learning, Estácio de Sá University (Jan 2023 – Jan 2026), Rio de Janeiro.",
      tagline: "Rio de Janeiro, Brazil · +55 22 98119-4519",
      email: "ggabry.ai@outlook.com",
      linkedin: "https://www.linkedin.com/in/gustavo-gabry-1b0989253/",
      github: "#",
      exploring: ["LLM applications", "Conversational AI", "Real-time ML", "Scalable AI backends"],
    },
  },
];

const bySlug = new Map(people.map((p) => [p.slug, p]));

export function getPersonBySlug(slug: string | undefined): Person | undefined {
  if (!slug) return undefined;
  return bySlug.get(slug);
}

export function getAllPeople(): Person[] {
  return people;
}
