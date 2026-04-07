"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Terminal } from "lucide-react";

// Organize skills by category for a structured neural map visualization
const SKILL_CATEGORIES = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Java", "JS", "HTML5", "CSS3"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Git", "REST APIs", "postman","figma", "Vercel"]
  }
];

export function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" /> SYS.MODULE // Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display tracking-widest uppercase">
            Skill <span className="text-gradient">Array</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-mono text-sm uppercase">
            Interactive neural map representing technical proficiencies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-card/20 backdrop-blur-md rounded-xl p-6 border border-primary/20 relative group overflow-hidden cyber-button"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <h3 className="font-mono text-lg text-foreground font-bold uppercase tracking-wider">{cat.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {cat.items.map((skill, skillIdx) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-md bg-background/50 border border-border group-hover:border-primary/50 text-muted-foreground group-hover:text-foreground font-mono text-sm transition-colors relative cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
