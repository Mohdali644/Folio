import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    role: "Data Research Analyst",
    period: "Nov 2024 – Jan 2025",
    description: [
      "Conducted research and analyzed large datasets to support data-driven decisions.",
      "Collected and validated data, ensuring high accuracy and structural reliability.",
      "Developed interactive visualizations and reports for effective communication of findings.",
      "Identified emerging trends and provided actionable insights to key stakeholders."
    ],
    skills: ["Data Analytics", "Data Visualization", "Research", "Trend Analysis"]
  },
  {
    role: "Full-Stack Developer",
    period: "2025 – 2026",
    description: [
      "Engineered scalable web architectures and dynamic user interfaces utilizing ReactJS, Tailwind CSS, and Node.js.",
      "Competed as a core developer in the HackPrix Season 3 Hackathon, rapidly prototyping solutions under strict time constraints.",
      "Maintained version control and continuous integration via advanced GitHub repository management.",
      "Integrated machine learning models and Python-based backend analytics into seamless front-end dashboards."
    ],
    skills: ["React.js", "Node.js", "Python", "Git Architecture"]
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  
  // Advanced Scroll Tracking for the Laser Line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const laserHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative z-10 w-full" ref={containerRef}>
      
      {/* Ambient Glow */}
      <div className="absolute top-[20%] right-[10%] w-100 h-100 bg-accent-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col items-center mb-24"
        >
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white tracking-tighter relative inline-block">
            Professional Journey
            {/* Animated Underline */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-accent-cyan to-transparent opacity-80 blur-[1px]"></span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-accent-cyan shadow-[0_0_15px_#00f2fe]"></span>
          </h2>
        </motion.div>

        {/* ==========================================
            THE LASER TIMELINE
        ========================================== */}
        <div className="relative">
          
          {/* Base Inactive Track */}
          <div className="absolute left-3.75 sm:left-5.75 top-0 bottom-0 w-0.5 bg-white/10 rounded-full"></div>
          
          {/* Active Laser Beam (Grows on Scroll) */}
          <motion.div 
            style={{ height: laserHeight }}
            className="absolute left-3.75 sm:left-5.75 top-0 w-0.5 bg-linear-to-b from-accent-cyan via-accent-blue to-transparent shadow-[0_0_15px_#00f2fe] rounded-full origin-top"
          ></motion.div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20 group">
                
                {/* ==========================================
                    HARDWARE LED TIMELINE NODE
                ========================================== */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0, backgroundColor: "#1a1a24" }}
                  whileInView={{ scale: 1, opacity: 1, backgroundColor: "#00f2fe" }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-0 sm:left-2 top-6 w-8 h-8 rounded-full border-4 border-[#030305] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-colors duration-500"
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </motion.div>

                {/* ==========================================
                    GLASSMORPHIC EXPERIENCE CARD
                ========================================== */}
                <motion.div 
                  initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                  className="relative p-6 sm:p-8 bg-[#08080c]/80 backdrop-blur-2xl border border-white/5 rounded-2xl sm:rounded-4xl overflow-hidden hover:border-accent-cyan/30 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_40px_rgba(0,242,254,0.1)]"
                >
                  {/* Subtle Grid Background */}
                  <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[10px_10px] mask-[radial-gradient(ellipse_at_center,black_10%,transparent_80%)] pointer-events-none"></div>

                  <div className="relative z-10">
                    
                    {/* Card Header (Title & Date) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-accent-cyan transition-all duration-300">
                        {exp.role}
                      </h3>
                      
                      <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full w-fit">
                        <span className="text-accent-cyan text-xs sm:text-sm font-bold tracking-widest uppercase">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="flex flex-col gap-3 mb-8">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-text-muted text-sm sm:text-base leading-relaxed">
                          {/* Animated Chevron Bullet */}
                          <svg className="w-4 h-4 text-accent-cyan/70 mt-1 mr-3 shrink-0 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="group-hover:text-white/90 transition-colors duration-300">
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-1.5 bg-white/3 border border-white/10 rounded-full text-xs font-bold text-white/70 tracking-wider hover:bg-white/10 hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300 cursor-none"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}