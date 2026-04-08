"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram, Linkedin, Mail, FileText, Download, Phone, FileDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Hero() {
  const resumeUrl = "https://drive.google.com/file/d/1z3Tc1QnWLP6F_Qq5nQsXwVqwNy1r8iEZ/view";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1z3Tc1QnWLP6F_Qq5nQsXwVqwNy1r8iEZ";

  const roles = [
    "Full-Stack Developer",
    "React Enthusiast",
    "Backend Engineer",
    "AI App Builder",
    "Problem Solver",
    "CS Student",
  ];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1));
      }, isDeleting ? 45 : 80);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1 z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4 tracking-wide"
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold mb-4 leading-tight"
            >
              <span className="text-gradient">Balachandran S</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 h-10 flex items-center justify-center lg:justify-start"
            >
              <span className="text-primary font-semibold">{displayText}</span>
              <span className="ml-0.5 inline-block w-0.5 h-7 bg-primary animate-pulse" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Passionate about Full-Stack Development, AI-based applications.
              Building scalable projects and continuously learning modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-mono font-bold tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2 cyber-button hover:shadow-[0_0_15px_rgba(0,212,170,0.4)]"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/uc?export=download&id=1z3Tc1QnWLP6F_Qq5nQsXwVqwNy1r8iEZ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground font-mono font-bold tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2 cyber-button hover:shadow-[0_0_15px_rgba(0,212,170,0.4)]"
              >
                <FileDown className="w-4 h-4" /> Download
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/Balachandransakthivel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/balas111005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/_im__bala__/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors text-pink-500"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="tel:9342727360"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors text-green-500"
                title="Call Me"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:balas111005@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="flex-1 relative mt-16 md:mt-0 flex justify-center w-full max-w-[400px] md:max-w-none z-10">
              {/* Cyber HUD Badges */}
              <div className="absolute -left-2 sm:-left-10 lg:-left-6 xl:-left-16 top-[15%] sm:top-1/4 bg-card/80 backdrop-blur-md border border-primary/40 p-2 sm:p-3 rounded-lg cyber-button animate-bounce z-20" style={{ animationDuration: '4s' }}>
                <p className="text-[10px] font-mono text-primary">SYS.UPTIME</p>
                <p className="text-lg sm:text-xl font-display font-bold text-foreground glow-text">99.9%</p>
              </div>

              <div className="absolute -right-2 sm:-right-8 lg:-right-6 xl:-right-12 bottom-[15%] sm:bottom-1/4 bg-card/80 backdrop-blur-md border border-amber-500/40 p-2 sm:p-3 rounded-lg cyber-button animate-pulse z-20" style={{ animationDuration: '3s' }}>
                <p className="text-[10px] font-mono text-amber-500">PROJECTS</p>
                <p className="text-lg sm:text-xl font-display font-bold text-foreground drop-shadow-[0_0_10px_rgba(240,165,0,0.5)]">15+</p>
              </div>

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Holographic Glowing Ring */}
                <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 blur-[2px] animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-10px] rounded-full border-t-2 border-r-2 border-cyan-400/50 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-[-20px] rounded-full border-b-2 border-l-2 border-amber-500/50 animate-[spin_20s_linear_infinite]" />

                <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/40 bg-card relative group shadow-[0_0_30px_rgba(0,212,170,0.3)] hover:shadow-[0_0_50px_rgba(0,212,170,0.5)] transition-shadow duration-500">
                  <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2026-01-02-at-3.24.42-PM-1767438290143.jpeg?width=800&height=800&resize=contain"
                    alt="Balachandran S"
                    className="w-full h-full object-cover object-center select-none group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Scanning Light Beam Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent scanner-beam z-10 pointer-events-none mix-blend-overlay" />
                </div>
              </div>
            </div>  </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
