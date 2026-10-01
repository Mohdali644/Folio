import { useState, useEffect, useMemo } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Front-End Developer", "Full-Stack Developer", "Creative Engineer"];

  const options = useMemo(() => ({
    fullScreen: { enable: false, zIndex: 0 },
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 150, duration: 0.4 } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.1, width: 1 },
      move: { enable: true, speed: 0.8, outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 40 }, value: 40 },
      opacity: { value: 0.2 },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), []);

  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      tsParticles.load({ id: "hero-particles", options });
    });
  }, [options]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center text-center overflow-x-clip overflow-y-visible">
      
      {/* GPU Optimized Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-cyan rounded-full blur-[100px] opacity-30 mix-blend-screen animate-[pulseOrb_8s_ease-in-out_infinite_alternate] transform-gpu will-change-transform z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-accent-blue rounded-full blur-[100px] opacity-30 mix-blend-screen animate-[pulseOrb_10s_ease-in-out_infinite_alternate-reverse] transform-gpu will-change-transform z-0"></div>
      <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-[#b06ab3] rounded-full blur-[90px] opacity-20 mix-blend-screen animate-[spin_15s_linear_infinite] transform-gpu will-change-transform z-0"></div>

      <div id="hero-particles" className="absolute inset-0 z-0 mix-blend-screen mask-[radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center pointer-events-none mt-10 w-full px-6">
        
        {/* Typography */}
        <div className="relative mt-24 mb-2 sm:mb-4 w-full overflow-hidden flex justify-center py-2">
          <h1 className="text-[clamp(4.5rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex gap-4 sm:gap-6">
            <motion.span
              initial={{ opacity: 0, x: -150, filter: "blur(20px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="inline-block transform-gpu"
            >
              Mohd
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, x: 150, filter: "blur(20px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="inline-block transform-gpu"
            >
              Ali<span className="text-accent-cyan animate-pulse">.</span>
            </motion.span>
          </h1>
        </div>

        {/* Changing Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8 text-[clamp(1.5rem,4vw,2.5rem)] font-medium tracking-tight text-white/80"
        >
          <span>I am a</span>
          <div className="relative h-[1.6em] mt-2 min-w-70 sm:min-w-100 overflow-hidden flex justify-center sm:justify-start">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={roleIndex}
                initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="absolute font-black bg-linear-to-r from-accent-cyan via-white to-accent-blue bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,242,254,0.2)] transform-gpu"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-text-muted text-lg max-w-5xl mb-20 mt-2 font-medium px-4 transform-gpu"
        >
          B.E. Information Technology | Engineering scalable architectures and Responive interfaces.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.19, 1, 0.22, 1] }}
          className="flex mt-7 flex-col sm:flex-row items-center gap-6 pointer-events-auto z-20"
        >
          <a href="#projects" className="relative group px-10 py-4 rounded-full bg-white text-black font-bold text-sm tracking-[0.15em] uppercase overflow-hidden cursor-none shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,242,254,0.4)] transition-all duration-500 hover:-translate-y-1">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore My Work</span>
            <div className="absolute inset-0 bg-linear-to-r from-accent-cyan to-accent-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
          </a>

          <a href="Ali.Resume.pdf" download className="glass-panel py-4! px-10! rounded-full! font-bold text-sm tracking-[0.15em] uppercase text-white hover:bg-white/10 hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(0,242,254,0.2)] transition-all duration-300 hover:-translate-y-1 cursor-none backdrop-blur-md">
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}