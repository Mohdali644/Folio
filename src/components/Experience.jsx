import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

// ==========================================
// YOUR EXPERIENCE DATA
// ==========================================
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
      "Competed as a core developer in the HackPrix Season 3 & HackForge 2.0 Hackathons, rapidly prototyping solutions under strict time constraints.",
      "Maintained version control and continuous integration via advanced GitHub repository management.",
      "Integrated machine learning models and Python-based backend analytics into seamless front-end dashboards."
    ],
    skills: ["React.js", "Node.js", "Python", "Git Architecture"]
  }
];

// ==========================================
// SMOOTH REACTIVE CARD
// ==========================================
function ExperienceCard({ exp }) {
  const cardRef = useRef(null);
  
  // 1. Track scroll strictly for this card's entrance
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "center center"]
  });

  // 2. Wrap the scroll in a fluid Spring (Removes ALL scroll jitter)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });
  
  // 3. Map the spring to physics
  const cardOpacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const cardY = useTransform(smoothProgress, [0, 1], [80, 0]);
  const borderDraw = useTransform(smoothProgress, [0.3, 1], [0, 1]); // Border draws slightly after it appears

  // For the node lighting up
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });

  return (
    <div ref={cardRef} className="relative pl-12 sm:pl-20 group">
      
      {/* ==========================================
          PERFECTLY ALIGNED LED TIMELINE NODE
      ========================================== */}
      {/* Left is 0, width is 8 (32px). Center is exactly 16px, which perfectly aligns with the line! */}
      <motion.div 
        animate={isInView ? { borderColor: "#00f2fe", boxShadow: "0 0 20px rgba(0,242,254,0.6)" } : { borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 0px transparent" }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 top-8 w-8 h-8 rounded-full bg-[#030305] border-2 flex items-center justify-center z-20"
      >
        <motion.div 
          animate={isInView ? { backgroundColor: "#ffffff", scale: 1.2 } : { backgroundColor: "rgba(255,255,255,0.2)", scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-2 h-2 rounded-full"
        ></motion.div>
      </motion.div>

      {/* ==========================================
          THE CARD ITSELF
      ========================================== */}
      <motion.div 
        style={{ opacity: cardOpacity, y: cardY }}
        className="relative p-8 sm:p-10 bg-[#050508]/80 backdrop-blur-3xl border border-white/5 rounded-3xl overflow-hidden group hover:bg-[#08080c]/90 transition-colors duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform-gpu"
      >
        {/* The Animated SVG Border Engine - Now perfectly smooth */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl" style={{ zIndex: 10 }}>
          <rect
            width="100%"
            height="100%"
            rx="1.5rem"
            fill="none"
            stroke="url(#cyanGlow)"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            className="group-hover:opacity-100 opacity-0 transition-opacity duration-700"
          />
          <motion.rect
            width="100%"
            height="100%"
            rx="1.5rem"
            fill="none"
            stroke="rgba(0,242,254,0.4)"
            strokeWidth="2"
            pathLength={borderDraw} // Uses the smoothed scroll spring
          />
          <defs>
            <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-20">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-accent-cyan animate-pulse shadow-[0_0_8px_#00f2fe]"></span>
                <span className="text-accent-cyan text-[0.65rem] font-bold tracking-[0.3em] uppercase opacity-80">
                  Execution Phase
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {exp.role}
              </h3>
            </div>
            
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/3 border border-white/10 rounded-lg backdrop-blur-sm group-hover:border-accent-cyan/40 transition-colors duration-500">
              <span className="text-text-muted text-xs sm:text-sm font-mono font-bold tracking-widest uppercase group-hover:text-white transition-colors duration-500">
                {exp.period}
              </span>
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="flex flex-col gap-4 mb-10">
            {exp.description.map((desc, i) => (
              <li key={i} className="flex items-start text-text-muted text-sm sm:text-base leading-relaxed group/bullet">
                <span className="text-white/20 font-mono text-xs mt-1 mr-4 group-hover/bullet:text-accent-cyan transition-colors duration-300 select-none">
                  0{i + 1}
                </span>
                <span className="group-hover/bullet:text-white/90 transition-colors duration-300">
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
                className="px-4 py-1.5 bg-[#030305] border border-white/10 rounded-full text-[0.7rem] sm:text-xs font-bold text-white/60 tracking-widest uppercase hover:bg-accent-cyan/10 hover:border-accent-cyan/50 hover:text-accent-cyan transition-all duration-300 cursor-none shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ==========================================
// MAIN EXPORT
// ==========================================
export default function Experience() {
  // We attach the ref STRICTLY to the timeline container, not the section padding
  const timelineRef = useRef(null);
  
  // Track the scroll of just the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Wrap the laser height in a spring damper to completely remove trackpad jitter
  const smoothLaser = useSpring(scrollYProgress, { stiffness: 50, damping: 20, restDelta: 0.001 });
  const laserHeight = useTransform(smoothLaser, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 relative z-10 w-full overflow-hidden">
      
      {/* Heavy Ambient Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none z-0 transform-gpu"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none z-0 transform-gpu"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-24 items-center text-center"
        >
          <span className="text-accent-cyan text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80 drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">
            Career Progression
          </span>
            <h2 className="text-[clamp(3.5rem,7vw,5rem)] font-light text-white leading-none tracking-tight">
            Professional <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-accent-cyan to-white bg-size-[200%_auto] animate-[gradient_4s_linear_infinite]">Journey</span>
          </h2>
        </motion.div>

        {/* ==========================================
            THE FIBER OPTIC TIMELINE (ULTRA-SMOOTH)
        ========================================== */}
        <div ref={timelineRef} className="relative">
          
          {/* Base Inactive Track */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 -ml-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
          
          {/* Active Fiber-Optic Surge (Forced GPU Acceleration) */}
          <motion.div 
            style={{ height: laserHeight }}
            className="absolute left-4 top-0 w-0.5 -ml-px bg-linear-to-b from-transparent via-accent-cyan to-[#ffffff] shadow-[0_0_20px_#00f2fe,0_0_40px_#00f2fe] origin-top rounded-full z-10 transform-gpu will-change-[height]"
          ></motion.div>

          {/* Traveling Laser Spark (Now with Comet Tail & GPU Acceleration) */}
          <motion.div
            style={{ top: laserHeight }}
            className="absolute left-4 -ml-1.25 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_30px_#00f2fe,0_0_60px_#ffffff] -mt-1.25 z-20 transform-gpu will-change-[top] flex items-center justify-center"
          >
            {/* Extreme Physics: High-Speed Comet Tail (Simulates motion blur to hide scroll jitter) */}
            <div className="absolute bottom-0.75 left-1/2 -translate-x-1/2 w-0.75 h-24 bg-linear-to-t from-white via-accent-cyan to-transparent opacity-90 blur-[1px] pointer-events-none rounded-full"></div>
            
            {/* Core Energy Pulse */}
            <div className="absolute inset-0 rounded-full bg-accent-cyan animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-60"></div>
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-24">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
          </div>
        </div>
    </section>
  );
}