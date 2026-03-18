import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Conversational AI System",
    metric: "+20% accuracy",
    description: "Users were getting stuck in confusing support flows. I built an NLP pipeline for real-time intent classification using transformer models and LLM workflows — integrated with FastAPI for sub-200ms responses. The system now handles 50K+ daily conversations and cut support tickets by 35%.",
    stack: ["PyTorch", "Transformers", "FastAPI", "Redis", "Docker"],
    github: "#",
  },
  {
    title: "Real-Time ML Inference API",
    metric: "40% faster inference",
    description: "Our model was too slow for production. I rebuilt the inference pipeline with ONNX Runtime, added async batching, and deployed on Kubernetes with auto-scaling. Went from 80ms to 45ms p99 latency, serving 10K requests/sec without breaking a sweat.",
    stack: ["FastAPI", "ONNX Runtime", "Kubernetes", "Prometheus", "Python"],
    github: "#",
  },
  {
    title: "Multimodal Content Moderation",
    metric: "97.3% precision",
    description: "Content safety needed both image and text understanding. I combined CLIP embeddings with custom classifiers and built active learning loops so the model keeps getting better. Now processing 2M+ images daily with less than 1% false positives.",
    stack: ["PyTorch", "CLIP", "AWS SageMaker", "PostgreSQL", "S3"],
    github: "#",
  },
  {
    title: "ML Feature Pipeline & Training Platform",
    metric: "3x faster iterations",
    description: "The team was spending weeks just getting data ready. I built an automated ETL platform with data validation, a feature store, and experiment tracking — cutting the model training cycle from 2 weeks down to 4 days.",
    stack: ["Apache Airflow", "Spark", "MLflow", "Delta Lake", "GCP"],
    github: "#",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Projects = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          Things I've built that are actually running in production. Each one started with a real problem.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={item}
            className="group relative rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold pr-4">{project.title}</h3>
              <span className="font-mono text-sm font-semibold text-accent whitespace-nowrap shrink-0 bg-accent/10 px-2.5 py-1 rounded-md">
                {project.metric}
              </span>
            </div>

            <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs rounded-md border border-border bg-secondary px-2.5 py-1 text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href={project.github} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <Github className="h-4 w-4" /> Code
              </a>
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                View Details <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
