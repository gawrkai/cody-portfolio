import type { Person } from "@/types/person";

/** Showcase cards until individual resumes / links are provided */
const templateFeaturedProjects: Person["projects"] = [
  {
    title: "Conversational AI System",
    metric: "+20% accuracy",
    description:
      "NLP pipeline for real-time intent classification using transformer models and LLM workflows, integrated with FastAPI for sub-200ms responses — handling high daily conversation volume and reducing support load.",
    stack: ["PyTorch", "Transformers", "FastAPI", "Redis", "Docker"],
    github: "#",
  },
  {
    title: "Real-Time ML Inference API",
    metric: "40% faster inference",
    description:
      "Inference stack rebuilt with ONNX Runtime and async batching, deployed on Kubernetes with auto-scaling — lower p99 latency at high request rates.",
    stack: ["FastAPI", "ONNX Runtime", "Kubernetes", "Prometheus", "Python"],
    github: "#",
  },
  {
    title: "Multimodal Content Moderation",
    metric: "High precision",
    description:
      "Combined vision and text signals with embeddings and custom classifiers, plus active learning so the system keeps improving in production.",
    stack: ["PyTorch", "CLIP", "PostgreSQL", "S3"],
    github: "#",
  },
  {
    title: "ML Feature Pipeline & Training Platform",
    metric: "Faster iterations",
    description:
      "Automated ETL with validation, feature workflows, and experiment tracking so the team spends less time on plumbing and more time on models.",
    stack: ["Apache Airflow", "Spark", "MLflow", "Delta Lake", "GCP"],
    github: "#",
  },
];

const placeholderExperience = (name: string): Person["experience"] => [
  {
    company: "TBD",
    role: "Your role",
    dates: "—",
    bullets: [
      `${name.split(" ")[0]} — add your work experience, dates, and impact bullets here.`,
    ],
  },
];

const placeholderSkills: Person["skillGroups"] = [
  { title: "Core", skills: ["Add your skills in src/data/people.ts"] },
  { title: "Stack", skills: ["—"] },
  { title: "Tools", skills: ["—"] },
  { title: "More", skills: ["—"] },
];

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
        "Professional summary and focus areas will go here once you share your resume and goals.",
      tagline: "Details coming soon — tailored for Brazil.",
      openToWork: true,
    },
    resumeUrl: "#",
    projects: [...templateFeaturedProjects],
    skillGroups: placeholderSkills,
    howIWork: placeholderHowIWork,
    experience: placeholderExperience("Gustavo Gabry"),
    contact: {
      heading: "Let's Talk",
      intro: "Contact links and copy will be updated when you provide them.",
      tagline: "Open to opportunities in Brazil and remotely.",
      email: "hello@example.com",
      linkedin: "#",
      github: "#",
      exploring: ["Your interests"],
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
