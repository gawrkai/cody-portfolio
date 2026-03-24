import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";
import { usePerson } from "@/context/PersonContext";

const Contact = () => {
  const { contact } = usePerson();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{contact.heading}</h2>
          <p className="text-muted-foreground text-lg mb-3">{contact.intro}</p>
          <p className="text-sm text-warm-glow italic mb-10">{contact.tagline}</p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              <Send className="h-4 w-4" />
              Send an Email
            </a>
            <a
              href={contact.linkedin}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all duration-200 hover:bg-surface-hover hover:-translate-y-0.5"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={contact.github}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all duration-200 hover:bg-surface-hover hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground mb-2 font-medium">Currently exploring</p>
            <div className="flex flex-wrap justify-center gap-2">
              {contact.exploring.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-xs rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-primary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
