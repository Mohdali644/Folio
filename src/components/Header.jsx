import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

/* ==========================================
   ELITE MAGNETIC 3D LOGO COMPONENT
========================================== */
function MagneticLogo() {
  // Core Physics Trackers
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for buttery smooth movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // 3D Tilt calculation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Magnetic Pull calculation (moves the whole button)
  const pullX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const pullY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);

  // Dynamic Glare calculation (moves reflection across the glass)
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [10, 90]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    // Normalize coordinates between -0.5 and 0.5
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href="#home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        x: pullX,
        y: pullY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      className="relative group flex items-center justify-center flex-shrink-0 z-50 cursor-none"
    >
      {/* 1. Ambient Holographic Cast Shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-accent-blue to-[#b06ab3] blur-[25px] opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>

      {/* 2. Physical Glass Chassis */}
      <div 
        className="relative flex items-center justify-center px-7 py-3 rounded-full bg-white/[0.01] backdrop-blur-3xl border border-white/5 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] group-hover:bg-white/[0.03] group-hover:border-white/20 transition-colors duration-500"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spinning Conic Aura inside the glass */}
        <div className="absolute -inset-[200%] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[conic-gradient(from_0deg,transparent_0%,rgba(0,242,254,0.2)_25%,transparent_50%,rgba(176,106,179,0.15)_75%,transparent_100%)] animate-[spin_6s_linear_infinite]"></div>
        
        {/* Dark Depth Mask */}
        <div className="absolute inset-[1px] bg-[#0a0a0f]/80 rounded-full z-0 backdrop-blur-xl"></div>

        {/* Dynamic Glass Glare (Tracks Cursor) */}
        <motion.div 
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 mix-blend-overlay pointer-events-none rounded-full transition-opacity duration-500"
          style={{
            background: useMotionTemplate`radial-gradient(120px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4), transparent 80%)`
          }}
        />

        {/* Top Edge Premium Highlight */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 group-hover:via-accent-cyan to-transparent z-10 transition-colors duration-500"></div>

        {/* 3. 3D Floating Typography */}
        <div 
          className="relative z-20 flex items-baseline font-black tracking-tighter"
          style={{ transform: "translateZ(40px)" }} // Physically lifts the text off the glass
        >
          <span className="text-3xl sm:text-4xl text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] font-sans">
            M
          </span>
          <span className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-white/90 to-white/30 font-sans">
            A
          </span>
          <motion.span 
            className="text-accent-cyan text-4xl sm:text-5xl leading-none -ml-0.5"
            animate={{ 
              textShadow: [
                "0px 0px 5px rgba(0,242,254,0.3)", 
                "0px 0px 20px rgba(0,242,254,0.9)", 
                "0px 0px 5px rgba(0,242,254,0.3)"
              ] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
}

/* ==========================================
   MAIN HEADER COMPONENT
========================================== */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTab, setHoveredTab] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "#about" },
    { name: "Arsenal", id: "#skills" },
    { name: "Journey", id: "#experience" },
    { name: "Work", id: "#projects" },
    { name: "Connect", id: "#contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
      // Completely removed backgrounds, borders, and blurs from this wrapper.
      // It just handles the padding transition now.
      className={`fixed top-[-6px] left-0 w-full z-[9900] transition-all duration-700 ease-out pointer-events-none ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between pointer-events-auto">
        
        {/* ==========================================
            ELITE 3D MAGNETIC LOGO
        ========================================== */}
        <MagneticLogo />

        {/* ==========================================
            LIQUID NAVIGATION
        ========================================== */}
        <nav 
          className="hidden lg:flex items-center gap-2 p-2 bg-[#050505]/60 border border-white/5 rounded-full backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.02)] flex-shrink-0"
          onMouseLeave={() => setHoveredTab(null)}
        >
          {navLinks.map((link) => (
            <a 
              href={link.id} 
              key={link.name} 
              onMouseEnter={() => setHoveredTab(link.name)}
              className="relative px-6 py-2.5 text-[0.7rem] font-bold text-text-muted uppercase tracking-[0.25em] rounded-full cursor-none transition-colors duration-300 hover:text-white z-10"
            >
              <span className="relative z-20">{link.name}</span>
              
              <AnimatePresence>
                {hoveredTab === link.name && (
                  <motion.div
                    layoutId="nav-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </nav>

        {/* ==========================================
            HIRE ME BUTTON
        ========================================== */}
        <a 
          href="#contact" 
          className="group relative flex items-center gap-4 px-8 py-3.5 bg-[#050505] rounded-full overflow-hidden cursor-none transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex-shrink-0"
        >
          <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-white/10 via-white/5 to-white/10 group-hover:from-accent-cyan group-hover:via-accent-blue group-hover:to-accent-cyan transition-colors duration-500 [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]"></div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] z-0 skew-x-12"></div>
          
          <span className="relative flex h-2.5 w-2.5 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43e97b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#43e97b] shadow-[0_0_15px_#43e97b]"></span>
          </span>
          
          <span className="relative z-10 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan transition-all duration-300">
            Hire Me
          </span>
        </a>

      </div>
    </motion.header>
  );
}