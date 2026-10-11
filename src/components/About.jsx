import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-32 relative w-full bg-transparent overflow-hidden" ref={containerRef}>
      
      {/* Ambient Background Glow */}
      <div className="absolute top-[30%] right-[-5%] w-[40vw] h-[40vw] max-w-125 max-h-125 bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none transform-gpu z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
        {/* ==========================================
              LEFT SIDE: THE OPTIMIZED QUANTUM REACTOR
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 group/card"
          >
            {/* Outer Magnetic Hover Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-cyan via-accent-blue to-[#b06ab3] rounded-[3.5rem] opacity-0 group-hover/card:opacity-30 blur-2xl transition-opacity duration-700 pointer-events-none transform-gpu"></div>

            {/* The Glass Containment Unit - Blur is safely kept here since this box doesn't move */}
            <div 
              style={{ isolation: "isolate" }}
              className="absolute inset-0 rounded-[3rem] bg-[#030305]/80 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(255,255,255,0.02)] overflow-hidden flex items-center justify-center transform-gpu transition-all duration-700 group-hover/card:border-accent-cyan/20"
            >
              
              {/* LIQUID LAYER 1: The Dark Matter Core (Stripped of heavy shadows & blends) */}
              <motion.div
                animate={{
                  x: [0, 20, -15, 25, -20, 0],
                  y: [0, -20, 25, -15, 20, 0],
                  scale: [1, 1.05, 0.95, 1.1, 0.9, 1],
                  rotate: [0, 90, 180, 270, 360],
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 70% 70% 30% / 30% 30% 60% 40%",
                    "50% 50% 20% 80% / 25% 80% 20% 75%",
                    "70% 30% 50% 50% / 70% 50% 50% 30%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ]
                }}
                transition={{ 
                  x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 23, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  borderRadius: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ willChange: "transform, border-radius", transform: "translateZ(0)" }}
                className="absolute w-[60%] h-[60%] bg-gradient-to-tr from-[#0052d4] to-[#4364f7] shadow-[inset_0_0_30px_rgba(255,255,255,0.2)] opacity-90 pointer-events-none"
              />

              {/* LIQUID LAYER 2: The Neon Energy Web (Used pure opacity instead of color-dodge) */}
              <motion.div
                animate={{
                  x: [0, -25, 20, -20, 15, 0],
                  y: [0, 25, -20, 15, -25, 0],
                  scale: [1, 0.95, 1.1, 0.9, 1.05, 1],
                  rotate: [360, 270, 180, 90, 0],
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 70% 30% 60%",
                    "70% 30% 30% 70% / 60% 40% 60% 40%",
                    "30% 70% 50% 50% / 50% 30% 70% 50%",
                    "50% 50% 80% 20% / 75% 20% 80% 25%",
                    "40% 60% 70% 30% / 40% 70% 30% 60%"
                  ]
                }}
                transition={{ 
                  x: { duration: 22, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 19, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 21, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 35, repeat: Infinity, ease: "linear" },
                  borderRadius: { duration: 17, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ willChange: "transform, border-radius", transform: "translateZ(0)" }}
                className="absolute w-[55%] h-[55%] bg-gradient-to-bl from-accent-cyan to-transparent shadow-[0_0_30px_rgba(0,242,254,0.3)] opacity-80 pointer-events-none"
              />

              {/* LIQUID LAYER 3: The Titanium Lens (Removed backdrop-blur on the moving element) */}
              <motion.div
                animate={{
                  x: [0, 15, -10, 15, -15, 0],
                  y: [0, -15, 15, -10, 10, 0],
                  scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
                  rotate: [0, 120, 240, 360],
                  borderRadius: [
                    "50% 50% 20% 80% / 25% 80% 20% 75%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 70% 70% 30% / 30% 30% 60% 40%",
                    "70% 30% 50% 50% / 70% 50% 50% 30%",
                    "50% 50% 20% 80% / 25% 80% 20% 75%"
                  ]
                }}
                transition={{ 
                  x: { duration: 17, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 16, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 22, repeat: Infinity, ease: "linear" },
                  borderRadius: { duration: 13, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ willChange: "transform, border-radius", transform: "translateZ(0)" }}
                className="absolute w-[40%] h-[40%] bg-white/5 border border-white/30 shadow-[inset_0_0_20px_rgba(255,255,255,0.6)] opacity-100 pointer-events-none"
              />

              {/* Floating Quantum Sparks (Cheap to animate) */}
              <motion.div 
                animate={{ y: [-30, 30, -30], x: [-15, 15, -15], opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute top-[25%] left-[30%] w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_10px_#00f2fe] pointer-events-none transform-gpu" 
              />
              <motion.div 
                animate={{ y: [30, -30, 30], x: [15, -15, 15], opacity: [0, 1, 0], scale: [1.5, 0.5, 1.5] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
                className="absolute bottom-[25%] right-[30%] w-2 h-2 bg-[#b06ab3] rounded-full shadow-[0_0_10px_#b06ab3] pointer-events-none transform-gpu" 
              />

              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
            </div>

            {/* Floating Info Badge (Blink fix is kept securely intact here) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-6 -right-6 sm:bottom-3 sm:-right-10 px-4 py-3 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 group/badge hover:border-accent-cyan/40 transition-colors duration-500 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/badge:bg-accent-cyan/95 group-hover/badge:scale-110 transition-all duration-300">
                <span className="text-accent-cyan text-lg">🎓</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-wide text-sm">B.E. INFO TECH</span>
                <span className="text-white/40 text-xs font-medium uppercase tracking-widest">Class of 2027</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ==========================================
              RIGHT SIDE: THE CONTENT
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-[clamp(3.5rem,7vw,5rem)] font-light text-white leading-none tracking-tight mb-4">
              About <span className="font-bold">Me</span>
              <span className="text-accent-cyan font-extrabold animate-pulse">.</span>
            </h2>
            <h3 className="text-xl sm:text-2xl text-accent-cyan font-medium mb-8 leading-relaxed">
              Architecting Intelligent Systems <br className="hidden sm:block"/> & Seamless Experiences.
            </h3>

            <div className="flex flex-col gap-6 text-text-muted text-base sm:text-lg font-light leading-relaxed mb-12">
              <p>
                I am a Front-End Developer and aspiring <span className="text-white font-medium">Full-Stack Architect</span> pursuing my B.E. in Information Technology at Lords Institute. My focus is bridging the gap between high-performance web architecture and artificial intelligence. I don't just write syntax—I engineer scalable digital ecosystems.
              </p>
              <p>
                My technical arsenal is rooted in the <span className="text-white font-medium">MERN stack, Python-driven AI/NLP</span>, and advanced Data Analytics. Whether I am building machine learning models that secure hackathon victories or architecting pixel-perfect web platforms, my relentless focus remains on delivering uncompromising technical excellence.
              </p>
            </div>

            {/* Stat Cards Matrix */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              
              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-accent-cyan/30 hover:bg-white/4 transition-all duration-300 flex flex-col items-center text-center justify-center gap-1 group">
                <span className="text-white font-bold tracking-wider text-sm sm:text-base group-hover:text-accent-cyan transition-colors">Full Stack</span>
                <span className="text-white/30 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] font-bold">MERN Core</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-accent-blue/70 hover:bg-white/4 transition-all duration-300 flex flex-col items-center text-center justify-center gap-1 group">
                <span className="text-white font-bold text-sm sm:text-base group-hover:text-blue-400 transition-colors">AI / ML</span>
                <span className="text-white/30 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] font-bold">Python & NLP</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-[#b06ab3]/70 hover:bg-white/4 transition-all duration-300 flex flex-col items-center text-center justify-center gap-1 group">
                <span className="text-white font-bold text-sm sm:text-base group-hover:text-pink-400 transition-colors">Data</span>
                <span className="text-white/30 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] font-bold">Analytics</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}