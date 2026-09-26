import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            INDESTRUCTIBLE HARDWARE LOGO
        ========================================== */}
        <a href="#home" className="relative group cursor-none flex items-center justify-center flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue blur-2xl rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
          
          <div className="relative flex-shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#08080c] border border-white/10 rounded-2xl overflow-hidden shadow-[5px_5px_20px_rgba(0,0,0,0.9),inset_1px_1px_2px_rgba(255,255,255,0.05)] group-hover:border-accent-cyan/40 transition-all duration-500 transform group-hover:scale-105 active:scale-95">
            
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_60%,#00f2fe_100%)] opacity-0 group-hover:opacity-100 animate-[spin_2.5s_linear_infinite] z-0"></div>
            
            <div className="absolute inset-[1.5px] bg-[#050505] rounded-[14px] z-10 transition-colors duration-500 group-hover:bg-black"></div>
            
            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:4px_4px] z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

            <div className="relative z-20 flex items-baseline justify-center gap-1 sm:gap-1.5 ml-1 whitespace-nowrap">
              <span className="text-[1.4rem] sm:text-[1.6rem] font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-accent-cyan transition-all duration-500">
                M
              </span>
              <span className="text-[1.4rem] sm:text-[1.6rem] font-black text-white/80 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-accent-cyan group-hover:to-accent-blue transition-all duration-500">
                A
              </span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-cyan rounded-full mb-1 sm:mb-1.5 shadow-[0_0_12px_#00f2fe] group-hover:animate-pulse group-hover:bg-[#43e97b] group-hover:shadow-[0_0_20px_#43e97b] transition-all duration-300"></span>
            </div>

            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent z-20 pointer-events-none"></div>
          </div>
        </a>

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