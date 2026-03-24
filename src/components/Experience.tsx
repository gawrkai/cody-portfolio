import { motion } from "framer-motion";
import { usePerson } from "@/context/PersonContext";

const Experience = () => {
  const { experience } = usePerson();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">Places where I&apos;ve shipped real things.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border hidden md:block" />

          <div className="space-y-6">
            {experience.map((role, i) => (
              <motion.div
                key={`${role.company}-${role.dates}-${i}`}
                className="relative md:pl-12"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="absolute left-[15px] top-8 h-[9px] w-[9px] rounded-full bg-primary border-2 border-background hidden md:block" />

                <div className="rounded-xl border border-border bg-card p-6 md:p-8 transition-colors duration-200 hover:border-primary/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-1">
                    <div>
                      <h3 className="text-lg font-bold">{role.role}</h3>
                      <p className="text-primary font-medium text-sm">{role.company}</p>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{role.dates}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {role.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                        <span className="text-accent mt-0.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
