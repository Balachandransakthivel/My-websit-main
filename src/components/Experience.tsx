"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Mobile App Development Intern",
    company: "ALO Info-Tech Pvt. Ltd.",
    location: "India",
    period: "16 June 2025 - 25 June 2025",
    description: [
      "Developed and tested mobile application features with hands-on experience in frontend and backend development",
      "Implemented UI/UX designs and integrated APIs to enhance application functionality and user experience",
      "Conducted application testing and basic performance optimization to improve stability and usability",
    ],
    type: "internship",
  },
  {
    title: "UI/UX Design Intern",
    company: "ZORO TECH",
    location: "India",
    period: "10 December 2025 - 31 December 2025",
    description: [
      "Applied UI/UX design principles to create intuitive and user-friendly interface designs",
      "Designed wireframes and visual layouts focusing on usability, consistency, and user experience",
      "Collaborated on design improvements by following user-centered design methodologies",
    ],
    type: "internship",
  },
  {
    title: "Web Designer - Implant Training",
    company: "Training Trains",
    location: "India",
    period: "24 December 2024 - 07 January 2025",
    description: [
      "Learned the fundamentals of web design including HTML and CSS",
      "Understood website structure, layouts, and styling techniques",
      "Gained practical exposure to front-end web design concepts",
    ],
    type: "training",
  },
];

export function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Internships & <span className="text-gradient">Training</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional experience and training that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            exp.type === "internship" 
                              ? "bg-blue-500/10 text-blue-500" 
                              : "bg-green-500/10 text-green-500"
                          }`}>
                            {exp.type === "internship" ? "Internship" : "Training"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    
                    {exp.period && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
