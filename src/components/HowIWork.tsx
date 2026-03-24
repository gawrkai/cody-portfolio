import { motion } from "framer-motion";
import { Lightbulb, Rocket, Heart, Users } from "lucide-react";
import { usePerson } from "@/context/PersonContext";

const icons = [Lightbulb, Rocket, Heart, Users] as const;

const HowIWork = () => {
  const { howIWork } = usePerson();

  return (
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
          {howIWork.map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
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
                    <Icon className="h-5 w-5 text-warm-glow" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">{p.text}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
