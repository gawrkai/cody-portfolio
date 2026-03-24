import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { usePerson } from "@/context/PersonContext";

const Hero = () => {
  const person = usePerson();
  const { hero, resumeUrl } = person;
  const resumeIsPdf = resumeUrl.endsWith(".pdf");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--hero-orb-1)), hsl(var(--hero-orb-2)))",
        }}
      />

      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="text-lg animate-wave inline-block">👋</span>
            <span className="text-sm text-muted-foreground">
              {hero.badge}
              {hero.openToWork ? " · Open to new opportunities" : ""}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {hero.titleBefore}
            <span className="text-primary">{hero.titleHighlight}</span>
            {hero.titleAfter}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">{hero.subtitle}</p>

          <p className="text-base md:text-lg text-warm-glow mb-10 italic">{hero.tagline}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`/${person.slug}#projects`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={resumeUrl}
              download={resumeIsPdf ? `${person.slug}-resume.pdf` : undefined}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all duration-200 hover:bg-surface-hover hover:-translate-y-0.5"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={`/${person.slug}#contact`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all duration-200 hover:bg-surface-hover hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
