"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Terminal, X, ExternalLink, Code2 } from "lucide-react";
import { useState } from "react";

type Certification = {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: JSX.Element;
  link?: string;
  image?: string;
  accent: string;
  sysId: string;
};

export function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const mainCerts: Certification[] = [
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      date: "Dec 2025",
      description: "Advanced analytics implementation and data analysis strategies.",
      icon: <Award className="w-6 h-6 text-emerald-400" />,
      image: "/certs/ga-cert.png",
      accent: "emerald-400",
      sysId: "CERT-GA-01",
    },
    {
      title: "Purple Fabric AI Champion",
      issuer: "Intellect AI",
      date: "March 2026",
      description: "Advanced AI champion certification for intelligent system architectures.",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      image: "/certs/pf-champion.png",
      accent: "purple-400",
      sysId: "CERT-PF-CH",
    },
    {
      title: "Purple Fabric Engineer",
      issuer: "Intellect AI",
      date: "March 2026",
      description: "Engineering methodologies for integrating and deploying AI fabrics.",
      icon: <Award className="w-6 h-6 text-pink-400" />,
      image: "/certs/pf-engineer.png",
      accent: "pink-400",
      sysId: "CERT-PF-EG",
    },
    {
      title: "Design Spark Challenge",
      issuer: "Design Spark",
      date: "Participation",
      description: "Innovative engineering and design challenges using modern CAD tools.",
      icon: <Award className="w-6 h-6 text-orange-500" />,
      image: "/certs/design-spark.png",
      accent: "orange-500",
      sysId: "CERT-DS-01",
    },
    {
      title: "Full-Stack React Mastery",
      issuer: "L&T EduTech",
      date: "Completed",
      description: "Comprehensive training in enterprise-grade React application development.",
      icon: <Award className="w-6 h-6 text-blue-400" />,
      image: "/certs/react-mastery.png",
      accent: "blue-400",
      sysId: "CERT-LT-FS",
    },
  ];

  const hackerRankCerts: Certification[] = [
    {
      title: "HackerRank Java (Basic)",
      issuer: "HackerRank",
      date: "Valid",
      description: "Core Java programming, data structures, and algorithms. (ID: 603b1363850d)",
      icon: <Code2 className="w-6 h-6 text-[#00EA64]" />,
      link: "https://www.hackerrank.com/certificates/603b1363850d",
      accent: "[#00EA64]",
      sysId: "CERT-HR-JAV",
    },
    {
      title: "HackerRank React (Basic)",
      issuer: "HackerRank",
      date: "Valid",
      description: "React component architecture, state management, and hooks. (ID: 026be0c53cc7)",
      icon: <Code2 className="w-6 h-6 text-[#00EA64]" />,
      link: "https://www.hackerrank.com/certificates/026be0c53cc7",
      accent: "[#00EA64]",
      sysId: "CERT-HR-RCT",
    },
    {
      title: "HackerRank Python (Basic)",
      issuer: "HackerRank",
      date: "Valid",
      description: "Python syntax, standard library, and algorithmic problem solving. (ID: aef44a320655)",
      icon: <Code2 className="w-6 h-6 text-[#00EA64]" />,
      link: "https://www.hackerrank.com/certificates/aef44a320655",
      accent: "[#00EA64]",
      sysId: "CERT-HR-PY",
    },
  ];

  const internshipCerts: Certification[] = [
    {
      title: "UI/UX Design Internship",
      issuer: "Zoro Tech",
      date: "Dec 2025",
      description: "Successfully completed an internship in the field of UI/UX Design, gaining practical experience.",
      icon: <Award className="w-6 h-6 text-green-400" />,
      image: "/certs/zoro-tech.jpg",
      accent: "green-400",
      sysId: "INT-UIUX-01",
    },
    {
      title: "Mobile App Development Internship",
      issuer: "ALO Info-Tech",
      date: "June 2025",
      description: "Hands-on experience in designing, developing, and testing mobile applications.",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      image: "/certs/alo-infotech.png",
      accent: "blue-400",
      sysId: "INT-MOB-01",
    },
    {
      title: "Web Designer Workshop",
      issuer: "Training Trains",
      date: "Jan 2025",
      description: "Understanding of fundamental concepts of Web Designer training program.",
      icon: <Terminal className="w-6 h-6 text-orange-400" />,
      image: "/certs/training-trains.jpg",
      accent: "orange-400",
      sysId: "TRN-WEB-01",
    },
  ];

  return (
    <section id="certs" className="py-20 bg-background/50 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjB2MjBoMjBWMjBIMjB6IiBmaWxsPSIjMDBkNGFhIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz48L3N2Zz4=')] mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* LENSES & CERTS SECTION */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" /> SYS.ACCREDITATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display tracking-widest uppercase">
            <span className="text-gradient">Licenses &</span> Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (cert.image) {
                  setSelectedCert(cert);
                } else if (cert.link) {
                  window.open(cert.link, "_blank");
                }
              }}
              className="group relative bg-card/20 backdrop-blur-md rounded-xl p-6 border border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden cyber-button h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none mix-blend-overlay" />
              <div className={`absolute top-0 left-0 w-1 h-full bg-${cert.accent} opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_var(--tw-shadow-color)] shadow-${cert.accent}`} />

              <div className="flex items-start justify-between mb-4 flex-none">
                <div className="p-3 rounded-lg bg-background/50 border border-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-muted-foreground uppercase opacity-70 tracking-widest block mb-1">SYS.ID</span>
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {cert.sysId}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-mono text-muted-foreground uppercase mb-4 opacity-80">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-xs font-mono font-bold text-primary tracking-widest flex items-center gap-2 uppercase">
                  Verify Credentials <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERNSHIPS & TRAINING SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-12"
        >
          <span className="text-primary font-mono text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4" /> SYS.EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 font-display tracking-widest uppercase">
            <span className="text-gradient">Internships &</span> Training
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {internshipCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                if (cert.image) {
                  setSelectedCert(cert);
                } else if (cert.link) {
                  window.open(cert.link, "_blank");
                }
              }}
              className="group relative bg-card/20 backdrop-blur-md rounded-xl p-6 border border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden cyber-button h-full flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none mix-blend-overlay" />
              <div className={`absolute top-0 left-0 w-1 h-full bg-${cert.accent} opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_var(--tw-shadow-color)] shadow-${cert.accent}`} />

              <div className="flex items-start justify-between mb-4 flex-none">
                <div className="p-3 rounded-lg bg-background/50 border border-primary/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-muted-foreground uppercase opacity-70 tracking-widest block mb-1">SYS.ID</span>
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                    {cert.sysId}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-mono text-muted-foreground uppercase mb-4 opacity-80">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-xs font-mono font-bold text-primary tracking-widest flex items-center gap-2 uppercase">
                  View Certificate <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HACKERRANK VERIFICATION SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative pt-12 border-t border-primary/20"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 z-10">
            <a
              href="https://www.hackerrank.com/profile/balas111005"
              target="_blank"
              rel="noreferrer"
              className="text-[#00EA64] font-mono text-sm tracking-widest uppercase flex items-center gap-2 border border-[#00EA64]/30 px-4 py-2 rounded bg-[#00EA64]/5 hover:bg-[#00EA64]/20 transition-colors shadow-[0_0_15px_rgba(0,234,100,0.2)]"
            >
              <Code2 className="w-4 h-4" /> HackerRank Profile
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {hackerRankCerts.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                onClick={() => window.open(cert.link, "_blank")}
                className="group relative bg-[#00EA64]/5 backdrop-blur-md rounded-lg p-5 border border-[#00EA64]/20 hover:border-[#00EA64] hover:shadow-[0_0_15px_rgba(0,234,100,0.2)] transition-all cursor-pointer flex flex-col items-center text-center cyber-button"
              >
                <div className="w-12 h-12 rounded-full border border-[#00EA64]/30 shadow-[0_0_10px_rgba(0,234,100,0.2)] flex items-center justify-center mb-4 bg-background group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-[#00EA64] transition-colors">{cert.title}</h3>
                <p className="text-xs font-mono text-muted-foreground uppercase mb-2">Verified Skill Assessment</p>
                <div className="text-[10px] font-mono text-[#00EA64] bg-[#00EA64]/10 px-2 py-1 rounded mt-auto flex items-center justify-center gap-2 w-full">
                  VIEW ON HACKERRANK <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#050a0f] border border-primary/30 rounded-lg shadow-[0_0_50px_rgba(0,212,170,0.2)] overflow-hidden cyber-button"
            >
              <div className="p-4 border-b border-primary/20 flex justify-between items-center bg-primary/5">
                <div className="flex items-center gap-3">
                  {selectedCert.icon}
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{selectedCert.title}</h3>
                    <p className="text-xs font-mono text-primary uppercase">{selectedCert.issuer} • {selectedCert.sysId}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-primary/20 rounded text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/50"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative w-full aspect-[4/3] sm:aspect-video bg-black p-4 flex flex-col items-center justify-center">
                {selectedCert.image ? (
                  <div className="relative w-full h-full rounded border border-primary/10 overflow-hidden bg-black/50 flex items-center justify-center">
                    {/* Using regular img for maximum compatibility */}
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="text-center font-mono p-12 border border-dashed border-primary/30 rounded">
                    <Award className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                    <p className="text-primary/70 mb-6">VERIFICATION IMAGE OMITTED OR OFFLINE</p>
                    {selectedCert.link && (
                      <a href={selectedCert.link} target="_blank" rel="noreferrer" className="px-6 py-2 bg-primary/20 text-primary border border-primary hover:bg-primary hover:text-black transition-colors inline-block rounded cyber-button font-bold">
                        OPEN PLATFORM VERIFICATION
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
