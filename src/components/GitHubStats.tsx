"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen, Star, Activity, Terminal } from "lucide-react";

const GITHUB_USERNAME = "Balachandransakthivel";

export function GitHubStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { label: "REPOSITORIES", value: 20, icon: <BookOpen className="w-5 h-5 text-cyan-400" /> },
    { label: "STARS EARNED", value: 14, icon: <Star className="w-5 h-5 text-amber-500" /> },
    { label: "CONTRIBUTIONS", value: 63, icon: <Activity className="w-5 h-5 text-primary" /> },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          {/* Cyber corner marks */}
          <div className="absolute -top-4 left-1/2 -ml-32 w-4 h-4 border-t-2 border-l-2 border-primary/50 opacity-50" />
          <div className="absolute -top-4 right-1/2 -mr-32 w-4 h-4 border-t-2 border-r-2 border-primary/50 opacity-50" />

          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" /> SYS.MONITOR // GitHub
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-display tracking-widest uppercase">
            GitHub <span className="text-gradient">Analytics</span>
          </h2>
        </motion.div>

        {/* Stats HUD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/30 backdrop-blur-md rounded-lg border border-primary/20 p-6 flex flex-col items-center justify-center relative overflow-hidden cyber-button"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="flex gap-2 items-center mb-2">
                {stat.icon}
                <span className="font-mono text-xs text-muted-foreground tracking-widest">{stat.label}</span>
              </div>
              <div className="text-5xl font-display font-bold text-foreground drop-shadow-[0_0_15px_rgba(0,212,170,0.5)]">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
