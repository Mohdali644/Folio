import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

// ==========================================
// YOUR PROJECTS DATA
// ==========================================
const projects = [
  {
    title: "Everbuy",
    category: "E-Commerce Platform",
    description: "A high-performance, modern e-commerce storefront engineered for seamless user experiences, rapid cart interactions, and highly responsive layouts.",
    tech: ["React.js", "Tailwind CSS","Responisve Design", "UI/UX"],
    link: "https://ever-buy-neon.vercel.app/",
    github: "https://github.com/Mohdali644/EverBuy",
    image: "/everbuy.png", // CHANGE THIS TO YOUR EXACT FILE NAME
    imageGradient: "from-[#00f2fe] to-[#4facfe]" // Cyan glow overlay
  },
  {
    title: "Whiskerverse",
    category: "Interactive Web Application",
    description: "An immersive, highly responsive digital ecosystem featuring fluid UI/UX principles. Built to handle complex state management while maintaining a pixel-perfect front-end.",
    tech: ["TypeScript", "Tailwind CSS", "ES6+ JavaScript", "UI/UX"],
    link: "https://mohdali644.github.io/Whisker-verse/",
    github: "https://github.com/Mohdali644/Whisker-verse",
    image: "/whiskerverse.png", // CHANGE THIS TO YOUR EXACT FILE NAME
    imageGradient: "from-[#ff9a9e] to-[#fecfef]" // Soft pink glow overlay
  },
  {
    title: "HackPrix Analytics",
    category: "AI & Data Dashboard",
    description: "A real-time data visualization matrix integrating machine learning models and Python-based backends, built during the HackPrix Season 3 hackathon.",
    tech: ["Python", "Machine Learning", "React.js", "Data Analytics"],
    link: "#",
    github: "#",
    image: "/hackprix.jpg", // CHANGE THIS TO YOUR EXACT FILE NAME
    imageGradient: "from-[#b06ab3] to-[#4568dc]" // Purple/Blue glow overlay
  }
];

// ==========================================
// 3D HOLOGRAPHIC PROJECT CARD
// ==========================================
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // 3D Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  // Dynamic Glare Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 2000 }}
      className="w-full relative z-10"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full rounded-4xl sm:rounded-[3rem] bg-white/2 border border-white/5 backdrop-blur-3xl overflow-visible group cursor-none shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:border-white/20 transition-colors duration-700 transform-gpu"
      >
        {/* Holographic Glare */}
        <motion.div
          className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-4xl sm:rounded-[3rem] mix-blend-overlay"
          style={{
            background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 40%)`
          }}
        />

        {/* Layout Grid inside Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-100 sm:min-h-125">
          
          {/* ==========================================
              LEFT SIDE: THE IMAGE VISUALS
          ========================================== */}
          <div className="relative p-4 sm:p-6 overflow-hidden rounded-t-4xl lg:rounded-l-[3rem] lg:rounded-tr-none h-64 lg:h-full lg:min-h-100">
            
            {/* Visual Container (Pushed back slightly in 3D) */}
            <div 
              className="absolute inset-4 sm:inset-6 rounded-2xl sm:rounded-3xl overflow-hidden bg-bg-base border border-white/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transform-gpu"
              style={{ transform: "translateZ(-20px)" }}
            >
              {/* THE ACTUAL PROJECT SCREENSHOT */}
              <img 
                src={project.image} 
                alt={project.title}
                // CHANGED: object-contain prevents cropping, and p-6 creates an elegant floating border
                className="w-full h-full object-contain object-center p-6 sm:p-8 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />

              {/* Cinematic Color Overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${project.imageGradient} mix-blend-overlay opacity-40 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none`}></div>
              
              {/* Edge Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] pointer-events-none"></div>
              </div>
          </div>

          {/* ==========================================
              RIGHT SIDE: THE CONTENT
          ========================================== */}
          <div 
            className="relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
            style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-accent-cyan shadow-[0_0_10px_#00f2fe]"></span>
              <span className="text-accent-cyan text-[0.65rem] sm:text-xs font-bold tracking-[0.25em] uppercase drop-shadow-[0_0_8px_rgba(0,242,254,0.5)]">
                {project.category}
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
              {project.title}
            </h3>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed font-light mb-10 max-w-lg group-hover:text-white/80 transition-colors duration-500">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10" style={{ transform: "translateZ(30px)" }}>
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 sm:px-4 py-1.5 rounded-full bg-white/3 border border-white/10 text-white/70 text-xs sm:text-sm font-medium tracking-wide shadow-[inset_0_0_10px_rgba(255,255,255,0.02)] group-hover:border-accent-cyan/30 group-hover:text-accent-cyan transition-colors duration-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-6 mt-auto" style={{ transform: "translateZ(40px)" }}>
              <a href={project.link} className="relative group/btn flex items-center gap-3 overflow-hidden">
                <span className="text-white font-bold text-sm tracking-[0.15em] uppercase z-10 group-hover/btn:text-accent-cyan transition-colors duration-300">
                  View Live
                </span>
                <span className="relative mr-11 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-accent-cyan group-hover/btn:bg-accent-cyan/10 transition-all duration-300">
                  <svg className="w-3 h-3 text-white group-hover/btn:text-accent-cyan group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              
              <a href={project.github} className="text-white/40 hover:text-white font-bold text-sm tracking-[0.15em] uppercase transition-colors duration-300">
                Source Code
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ==========================================
// MAIN EXPORT
// ==========================================
export default function Projects() {
  return (
    <section id="projects" className="py-32 relative w-full bg-transparent overflow-x-clip">
      
      {/* GPU Optimized Ambient Background Orbs */}
      <div className="absolute top-[10%] left-[0%] w-[60vw] h-[60vw] max-w-200 max-h-200 bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform z-0"></div>
      <div className="absolute bottom-[20%] right-[0%] w-[50vw] h-[50vw] max-w-150 max-h-150 bg-[#b06ab3]/5 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-24 items-center text-center"
        >
          <span className="text-accent-cyan text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80 drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">
            Execution & Delivery
          </span>
            <h2 className="text-[clamp(3.5rem,7vw,5rem)] font-light text-white leading-none tracking-tight">
            Selected <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white via-accent-cyan to-white bg-size-[200%_auto] animate-[gradient_4s_linear_infinite]">Works</span>
          </h2>
        </motion.div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}