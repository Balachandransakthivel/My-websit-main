"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { useRef } from "react";
import {
  WaveformSVG,
  CafeSVG,
  HomeHubSVG,
  HostelSVG,
  NeuralNetSVG,
  CafeProSVG,
} from "./ProjectSVGs";

type SvgKey = "waveform" | "cafe" | "homehub" | "hostel" | "neural" | "cafepro";

const SVG_MAP: Record<SvgKey, React.FC> = {
  waveform: WaveformSVG,
  cafe: CafeSVG,
  homehub: HomeHubSVG,
  hostel: HostelSVG,
  neural: NeuralNetSVG,
  cafepro: CafeProSVG,
};

const projects: {
  title: string;
  subtitle: string;
  description: string;
  svgKey: SvgKey;
  tech: string[];
  github: string;
  live: string;
  isNew: boolean;
  accentColor: string;
}[] = [
  {
    title: "Level Up AI",
    subtitle: "AI Learning Platform",
    description: "AI-driven content recommendation feature to personalize user experiences. Designed backend logic with structured data handling and Docker containerization.",
    svgKey: "neural",
    tech: ["React", "TypeScript", "Vite", "Supabase"],
    github: "https://github.com/Balachandransakthivel/levelup-ai",
    live: "https://levelup-learning-ai.vercel.app/",
    isNew: false,
    accentColor: "var(--primary)",
  },
  {
    title: "Cafe Pro",
    subtitle: "Restaurant Website",
    description: "Responsive website with React components for Home, Menu, About, and Contact. Modern UI layouts with responsive design principles.",
    svgKey: "cafepro",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Balachandransakthivel/cafesoftware",
    live: "https://cafesoftware.vercel.app/",
    isNew: false,
    accentColor: "var(--amber)",
  },
  {
    title: "Text-to-Voice",
    subtitle: "Web Speech Application",
    description: "Web Speech API converts text into natural speech. React-based UI with multiple voice and language selection options.",
    svgKey: "waveform",
    tech: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/Balachandransakthivel/react-text-to-speech-app",
    live: "https://react-text-to-speech-app.vercel.app/",
    isNew: false,
    accentColor: "var(--cyan)",
  },
  {
    title: "SmartCafe App",
    subtitle: "Cafe Management System",
    description: "Full-stack cafe management with real-time table tracking, POS ordering, kitchen display integration, and analytics dashboard.",
    svgKey: "cafe",
    tech: ["React Native", "Node.js", "Supabase"],
    github: "https://github.com/Balachandransakthivel/SmartCafeApp",
    live: "",
    isNew: true,
    accentColor: "var(--amber)",
  },
  {
    title: "HomeHub",
    subtitle: "Home Services Marketplace",
    description: "Marketplace connecting homeowners with vetted service providers. Real-time booking, map tracking, reviews, and secure payments.",
    svgKey: "homehub",
    tech: ["Next.js", "Tailwind CSS", "Prisma"],
    github: "https://github.com/Balachandransakthivel/HomeHub",
    live: "",
    isNew: true,
    accentColor: "var(--cyan)",
  },
  {
    title: "Smart Hostel",
    subtitle: "Hostel Admin System",
    description: "Comprehensive hostel management — room allocation, check-in/out, complaint tracking, attendance monitoring, and fee reminders.",
    svgKey: "hostel",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/Balachandransakthivel/smart-hostel-management-system",
    live: "",
    isNew: true,
    accentColor: "var(--primary)",
  },
];

/* Multi-layer 3D Depth Card */
function ParallaxCard({ children, accent }: { children: React.ReactNode; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Rotate entire card (Main 3D Tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  // Translate inner layers (Parallax Depth)
  const trZ_bg = useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]); // Moves away
  const trZ_fg = useTransform(mouseXSpring, [-0.5, 0.5], [30, -30]); // Pops out

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY, 
        transformStyle: "preserve-3d", 
        perspective: 1200 
      }}
      className="h-full relative w-full group cursor-crosshair"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-md cyber-button border border-border transition-colors duration-300 group-hover:border-primary/50"
        style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
      >
        {/* Layer 1: Background grid/decorations pushed back */}
        <motion.div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ x: trZ_bg, y: trZ_bg, transform: "translateZ(-40px)" }}
        >
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at center, var(--primary) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        </motion.div>

        {/* Dynamic Holographic Scanline on Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 scanner-beam pointer-events-none" />

        {/* Layer 2: Main Content (passed from parent) */}
        <motion.div 
          className="relative h-full flex flex-col z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          {children}
        </motion.div>

        {/* Layer 3: Floating corners popping OUT */}
        <motion.div 
          className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/70 pointer-events-none"
          style={{ x: trZ_fg, y: trZ_fg, transform: "translateZ(50px)" }}
        />
        <motion.div 
          className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/70 pointer-events-none"
          style={{ x: useTransform(x, [-0.5, 0.5], [-30, 30]), y: useTransform(y, [-0.5, 0.5], [-30, 30]), transform: "translateZ(50px)" }}
        />
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase">SYS.ARCHIVES</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-mono text-sm uppercase">
            Holographic projection of built systems and applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const SvgComponent = SVG_MAP[project.svgKey];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="h-96"
              >
                <ParallaxCard accent={project.accentColor}>
                  {/* SVG Banner */}
                  <div className="relative h-44 overflow-hidden border-b border-border/50 bg-[#020508]">
                    <SvgComponent />
                    
                    {project.isNew && (
                      <div className="absolute top-2 left-2 pointer-events-auto">
                        <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono border rounded bg-background/80 backdrop-blur" style={{ borderColor: project.accentColor, color: project.accentColor }}>
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: project.accentColor }} />
                          UPDATE
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute top-3 right-3 flex gap-2 pointer-events-auto">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-background/50 border border-border backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/20 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-background/50 border border-border backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary/20 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col pointer-events-auto">
                    <h3 className="text-xl font-display font-bold tracking-widest uppercase mb-1 drop-shadow-md">{project.title}</h3>
                    <p className="text-xs font-mono mb-3 uppercase tracking-wider" style={{ color: project.accentColor }}>
                      › {project.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-4 flex-1 opacity-80">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-[10px] font-mono tracking-wider border rounded-sm"
                          style={{ borderColor: `${project.accentColor}40`, color: project.accentColor, backgroundColor: `${project.accentColor}10` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ParallaxCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
