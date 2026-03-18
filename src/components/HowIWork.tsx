import { motion } from "framer-motion";
import { Lightbulb, Rocket, Heart, Users } from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    text: "I like building things that actually get used.",
    detail: "A model sitting in a notebook isn't really solving anything. I focus on getting solutions into production where they make a difference.",
  },
  {
    icon: Rocket,
    text: "I focus on making models practical, not just accurate.",
    detail: "Great accuracy means nothing if the system is too slow or too complex to maintain. I always think about the full picture.",
  },
  {
    icon: Heart,
    text: "I care about performance, but also simplicity and maintainability.",
    detail: "Code should be easy to read, easy to debug, and easy for the next person to pick up. That's just good engineering.",
  },
  {
    icon: Users,
    text: "Clear communication and teamwork matter to me.",
    detail: "The best solutions come from good collaboration. I enjoy working with cross-functional teams and explaining complex things simply.",
  },
];

const HowIWork = () => (
  <section id="approach" className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          A bit about my approach — because tools and frameworks change, but mindset sticks.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            className="rounded-xl border border-border bg-card p-6 md:p-8 transition-all duration-200 hover:border-warm-glow/20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-warm-glow/10 p-2.5 shrink-0">
                <p.icon className="h-5 w-5 text-warm-glow" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">{p.text}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowIWork;
