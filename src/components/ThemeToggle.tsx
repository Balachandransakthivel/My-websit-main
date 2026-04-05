"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="w-16 h-8 rounded-full bg-secondary animate-pulse" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-16 h-8 rounded-full transition-all duration-300 flex-shrink-0 focus:outline-none flex items-center p-1"
      style={{
        background: isDark
          ? "linear-gradient(135deg,#0a2e28,#112228)"
          : "linear-gradient(135deg,#ccfbf1,#e6faf7)",
        border: `1.5px solid ${isDark ? "#00d4aa44" : "#0d948844"}`,
        boxShadow: isDark ? "inset 0 2px 4px rgba(0,0,0,0.5)" : "inset 0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Track icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 w-full h-full pointer-events-none">
        <Moon className={`w-3 h-3 ${isDark ? "opacity-0" : "opacity-100"} text-teal-800 transition-opacity`} />
        <Sun className={`w-3 h-3 ${isDark ? "opacity-100 text-teal-200" : "opacity-0"} transition-opacity`} />
      </div>

      {/* Thumb */}
      <motion.div
        layout
        initial={false}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md bg-gradient-to-br from-primary to-emerald-600"
      >
        {isDark ? <Moon className="w-3.5 h-3.5 text-white" /> : <Sun className="w-3.5 h-3.5 text-white" />}
      </motion.div>
    </button>
  );
}
