import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

/* ==========================================
   MAGNETIC SOCIAL ICON
========================================== */
function MagneticSocialIcon({ href, children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 25 });
  const springY = useSpring(y, { stiffness: 400, damping: 25 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="relative group w-11 h-11 flex items-center justify-center rounded-full bg-white/3 border border-white/10 transition-all duration-300 z-10 cursor-none shadow-[0_5px_15px_rgba(0,0,0,0.3)] hover:bg-white/8 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]"
    >
      <motion.div 
        style={{ x: springX, y: springY }} 
        className="relative z-10 text-white/60 group-hover:text-accent-cyan transition-colors duration-300"
      >
        {children}
      </motion.div>
    </motion.a>
  );
}

/* ==========================================
   ELITE MAGNETIC 3D LOGO COMPONENT
========================================== */
function MagneticLogo() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  
  // 3D Tilt calculation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Magnetic Pull calculation
  const pullX = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);
  const pullY = useTransform(mouseYSpring, [-0.5, 0.5], [-12, 12]);
  
  // Dynamic Glare calculation
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [10, 90]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [10, 90]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
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
      style={{ rotateX, rotateY, x: pullX, y: pullY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative group flex items-center justify-center shrink-0 z-50 cursor-none"
    >
      {/* 1. Ambient Holographic Aura */}
      <div className="absolute inset-0 bg-linear-to-r from-accent-cyan via-accent-blue to-[#b06ab3] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-2xl"></div>

      {/* 2. Physical Glass Chassis (Upgraded to a high-tech square-ish box) */}
      <div 
        className="relative flex items-center justify-center px-6 py-3.5 rounded-3xl bg-[#030305]/80 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,255,255,0.05)] group-hover:border-accent-cyan/40 transition-colors duration-500" 
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Sweeping Laser Scanline inside the glass */}
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
            <div className="absolute top-0 -left-full w-[200%] h-full bg-linear-to-r from-transparent via-accent-cyan/10 to-transparent animate-[sweep_2s_ease-in-out_infinite]"></div>
        </div>

        {/* Dynamic Glass Glare (Tracks Cursor) */}
        <motion.div 
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 mix-blend-overlay pointer-events-none transition-opacity duration-500" 
          style={{ background: useMotionTemplate`radial-gradient(100px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4), transparent 80%)` }} 
        />

        {/* Top Edge Premium Highlight */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-white/40 group-hover:via-accent-cyan to-transparent z-10 transition-colors duration-500"></div>

        {/* 3. 3D Floating Typography (Fixed Alignment) */}
        <div 
          className="relative z-20 flex items-center gap-0.75 font-black tracking-tighter" 
          style={{ transform: "translateZ(50px)" }}
        >
          {/* The Letters - Locked dead center */}
          <div className="flex items-center text-[1.6rem] sm:text-[1.8rem] leading-none uppercase pt-1">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">M</span>
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/40 -ml-0.5">A</span>
          </div>
          
          {/* The Next-Level Animated Dot */}
          <div className="flex flex-col ml- justify-end h-full pt-3">
            <motion.div 
              className="w-2 h-2 ml-1 sm:w-2.5 sm:h-2.5 bg-accent-cyan shadow-[0_0_15px_#00f2fe,inset_0_0_8px_#fff]"
              animate={{ 
                rotate: [0, 90, 180, 270, 360],
                scale: [2.5,1, 1],
                borderRadius: ["10%", "50%","100%", "20%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      className={`fixed -top-1.5 left-0 w-full z-9900 transition-all duration-700 ease-out pointer-events-none ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-start justify-between pointer-events-auto">
        
        {/* LEFT: Elite Logo */}
        <MagneticLogo />

        {/* CENTER: Liquid Navigation */}
        <nav 
          className="hidden lg:flex items-center gap-2 p-2 bg-bg-base/60 border border-white/5 rounded-full backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.02)] shrink-0"
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
            RIGHT: VERTICAL MAGNETIC SOCIAL DOCK
        ========================================== */}
        <div className="relative w-12.5 flex justify-end">
          
          {/* Removed the container background, borders, and padding. Just a clean, open flex column. */}
          <div className="absolute top-2 right-0 flex flex-col gap-6">
            
            {/* GitHub */}
            <MagneticSocialIcon href="https://github.com/Mohdali644">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.15rem] h-[1.15rem]">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </MagneticSocialIcon>

            {/* LinkedIn */}
            <MagneticSocialIcon href="https://www.linkedin.com/in/mohd-ali-dev/">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.15rem] h-[1.15rem]">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </MagneticSocialIcon>

            {/* Email */}
            <MagneticSocialIcon href="mailto:envied94@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.15rem] h-[1.15rem]">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 4l10 8 10-8" />
              </svg>
            </MagneticSocialIcon>

          </div>
        </div>

      </div>
    </motion.header>
  );
}