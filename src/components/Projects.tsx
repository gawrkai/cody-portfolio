import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { usePerson } from "@/context/PersonContext";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Projects = () => {
  const { projects } = usePerson();

  return (
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
            Highlights from production systems — shipped, measured, and maintained for real users and teams.
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

              <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{project.description}</p>

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
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View Details <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
