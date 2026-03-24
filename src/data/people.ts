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
        "Professional summary and focus areas will go here once you share your resume and goals.",
      tagline: "Details coming soon — tailored for Brazil.",
      openToWork: true,
    },
    resumeUrl: "#",
    projects: [...templateFeaturedProjects],
    skillGroups: placeholderSkills,
    howIWork: placeholderHowIWork,
    experience: placeholderExperience("Thiago Gabry"),
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
