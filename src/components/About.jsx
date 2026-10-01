import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-32 relative w-full bg-transparent overflow-hidden" ref={containerRef}>
      
      {/* Ambient Background Glow */}
      <div className="absolute top-[30%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none transform-gpu z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* ==========================================
              LEFT SIDE: THE SHARP LIQUID VISUAL
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square max-w-500 mx-auto lg:mx-0"
          >
            {/* The Glass Containment Unit */}
            <div className="absolute inset-0 rounded-[3rem] bg-[#030305]/60 backdrop-blur-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4),inset_0_0_40px_rgba(255,255,255,0.02)] overflow-hidden flex items-center justify-center transform-gpu">
              
              {/* LIQUID LAYER 1: The Sharp 3D Core */}
              <motion.div
                animate={{
                  x: [0, 30, -20, 15, 0],
                  y: [0, -30, 20, -15, 0],
                  scale: [1, 1.15, 0.9, 1.05, 1],
                  rotate: [0, 120, 240, 360],
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 70% 70% 30% / 30% 30% 60% 40%",
                    "50% 50% 20% 80% / 25% 80% 20% 75%",
                    "70% 30% 50% 50% / 70% 50% 50% 30%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                  ]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                // Removed the blur, added a 3D inner shadow, and made the colors solid
                className="absolute w-[65%] h-[65%] bg-linear-to-tr from-accent-cyan to-[#0052d4] shadow-[inset_0_0_50px_rgba(255,255,255,0.5),0_15px_40px_rgba(0,242,254,0.4)] opacity-95 transform-gpu"
              />

              {/* LIQUID LAYER 2: The Undercurrent */}
              <motion.div
                animate={{
                  x: [0, -20, 30, -10, 0],
                  y: [0, 20, -30, 15, 0],
                  scale: [1, 0.95, 1.1, 0.9, 1],
                  rotate: [360, 240, 120, 0],
                  borderRadius: [
                    "40% 60% 70% 30% / 40% 70% 30% 60%",
                    "70% 30% 30% 70% / 60% 40% 60% 40%",
                    "30% 70% 50% 50% / 50% 30% 70% 50%",
                    "50% 50% 80% 20% / 75% 20% 80% 25%",
                    "40% 60% 70% 30% / 40% 70% 30% 60%"
                  ]
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                // Solid secondary shape that morphs behind the main core
                className="absolute w-[55%] h-[55%] bg-linear-to-bl from-accent-blue to-accent-cyan shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] opacity-70 transform-gpu"
              />

              {/* Grid Overlay inside the glass for cyber texture */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
            </div>

            {/* Floating Info Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-6 -right-6 sm:bottom-3 sm:-right-10 px-4 py-3 bg-[#0a0a0f]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 group hover:border-accent-cyan/40 transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-cyan/10 group-hover:scale-110 transition-all duration-300">
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
              About <span className="font-bold">Me.</span>
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
                <span className="text-white font-bold text-sm sm:text-base group-hover:text-accent-cyan transition-colors">Full Stack</span>
                <span className="text-white/30 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] font-bold">MERN Core</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-accent-blue/30 hover:bg-white/4 transition-all duration-300 flex flex-col items-center text-center justify-center gap-1 group">
                <span className="text-white font-bold text-sm sm:text-base group-hover:text-accent-blue transition-colors">AI / ML</span>
                <span className="text-white/30 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] font-bold">Python & NLP</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-[#b06ab3]/30 hover:bg-white/4 transition-all duration-300 flex flex-col items-center text-center justify-center gap-1 group">
                <span className="text-white font-bold text-sm sm:text-base group-hover:text-[#b06ab3] transition-colors">Data</span>
                <span className="text-white/30 text-[0.6rem] sm:text-xs uppercase tracking-[0.2em] font-bold">Analytics</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}