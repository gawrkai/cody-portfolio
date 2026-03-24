import { motion } from "framer-motion";
import { Brain, Server, Database, Settings } from "lucide-react";
import { usePerson } from "@/context/PersonContext";

const icons = [Brain, Server, Database, Settings] as const;

const Skills = () => {
  const { skillGroups } = usePerson();

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg">What I work with day to day.</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={group.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/20"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {group.skills.map((skill, si) => (
                    <li key={`${group.title}-${si}-${skill}`} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
