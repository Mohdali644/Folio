import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

// Your exact core languages and frameworks
const skillCategories = [
  {
    title: "Frontend Languages",
    status: "Optimized",
    icon: "✧",
    skills: [
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Core",
    status: "Active",
    icon: "⛋",
    skills: [
      { name: "Node.js & Express", level: 80 },
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Data & AI",
    status: "Learning",
    icon: "⚲",
    skills: [
      { name: "Machine Learning", level: 70 },
      { name: "Data Analytics", level: 80 },
      { name: "SQL / Databases", level: 80 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    title: "Tools & Architecture",
    status: "Secure",
    icon: "⟡",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Postman", level: 85 },
      { name: "Responsive Design", level: 100 },
    ],
  },
];

/* ==========================================
   LIQUID GLASS SPATIAL CARD (GPU Optimized)
========================================== */
function SpatialCard({ category, catIndex }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, delay: catIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      // Added transform-gpu so the entrance animation doesn't cause scroll jank
      className="relative p-8 sm:p-10 rounded-[2.5rem] group cursor-none overflow-hidden transform-gpu"
    >
      {/* ================= BACKGROUND & GLASS PHYSICS ================= */}
      
      {/* 1. Base Glass Panel */}
      <div className="absolute inset-0 bg-[#0a0a0f]/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] z-0 transition-all duration-700 group-hover:bg-[#0a0a0f]/60 group-hover:border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transform-gpu"></div>

      {/* 2. Magnetic Aurora Orb (Follows Cursor) */}
      <motion.div
        // Added will-change-transform for buttery smooth cursor tracking
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem] transform-gpu will-change-transform"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 242, 254, 0.08),
              transparent 60%
            )
          `,
        }}
      />

      {/* 3. Liquid Gradient Mesh (Visible on Hover) */}
      {/* Added transform-gpu and will-change-transform to offload the spin animation to the graphics card */}
      <div className="absolute -inset-full z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.4)_0%,rgba(176,106,179,0.3)_50%,transparent_100%)] blur-[80px] animate-[spin_20s_linear_infinite] transform-gpu will-change-transform"></div>
      
      {/* 4. Elegant Top Border Highlight */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-white/20 group-hover:via-accent-cyan/50 to-transparent z-10 transition-colors duration-700"></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/3 border border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group-hover:border-accent-cyan/30 group-hover:shadow-[inset_0_0_20px_rgba(0,242,254,0.1)] transition-all duration-500">
              <span className="text-2xl text-white/70 group-hover:text-accent-cyan transition-colors">{category.icon}</span>
            </div>
            <h3 className="text-2xl font-medium text-white/90 tracking-wide">{category.title}</h3>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-white/2 border border-white/5 flex items-center gap-2 group-hover:bg-accent-cyan/5 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/70 group-hover:bg-accent-cyan group-hover:shadow-[0_0_10px_#00f2fe] transition-all"></span>
            <span className="text-xs text-white/50 tracking-widest uppercase">{category.status}</span>
          </div>
        </div>

        {/* Fiber Optic Loading Bars */}
        <div className="flex flex-col gap-8">
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="flex flex-col gap-3 group/skill">
              
              {/* Text & Percentage */}
              <div className="flex justify-between items-end">
                <span className="text-base text-white/70 tracking-wide group-hover/skill:text-white transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-sm font-light text-white/40 group-hover/skill:text-accent-cyan transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>
              
              {/* Liquid Progress Bar */}
              <div className="relative w-full h-1.5 bg-white/3 rounded-full overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] transform-gpu">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, delay: 0.2 + (skillIndex * 0.15), ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 h-full bg-linear-to-r from-transparent via-accent-cyan/50 to-accent-cyan rounded-full transform-gpu"
                >
                  {/* Glowing Core at the tip */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full bg-white blur-[2px] rounded-full group-hover/skill:shadow-[0_0_15px_#00f2fe] transition-shadow duration-300 transform-gpu"></div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

/* ==========================================
   MAIN SECTION
========================================== */
export default function Skills() {
  return (
    <section id="skills" className="py-32 relative z-10 w-full overflow-hidden">
      
      {/* Minimal Ambient Orbs (Now GPU Accelerated) */}
      <div className="absolute top-[20%] left-[10%] w-150 h-150 bg-accent-cyan/5 rounded-full blur-[200px] pointer-events-none transform-gpu will-change-transform z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-125 h-125 bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none transform-gpu will-change-transform z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-24 items-center text-center transform-gpu"
        >
          <span className="text-accent-cyan text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80">
            Technical Architecture
          </span>
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-light text-white leading-none tracking-tight">
            Core <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-accent-cyan to-white bg-size-[200%_auto] animate-[gradient_4s_linear_infinite]">Arsenal</span>
          </h2>
        </motion.div>

        {/* Spatial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <SpatialCard 
              key={index} 
              category={category} 
              catIndex={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}