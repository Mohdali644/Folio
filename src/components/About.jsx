import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function About() {
  return (
    <section id="about" className="py-32 w-full relative z-10 bg-transparent">
      
      {/* GPU-Accelerated Ambient Background */}
      <div className="absolute top-[20%] left-[10%] w-100 h-100 bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none z-0 transform-gpu will-change-transform"></div>
      <div className="absolute bottom-[10%] right-[10%] w-125 h-125 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none z-0 transform-gpu will-change-transform"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 xl:gap-24 items-center">
          
          {/* ==========================================
              LEFT: OPTIMIZED LIQUID GLASS
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <TiltCard className="w-full aspect-4/5 sm:aspect-square md:aspect-[4.1/5] rounded-[2.5rem] group">
              
              <div className="absolute inset-0 bg-white/2 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu">
                <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[30px_30px] mask-[linear-gradient(to_bottom,black_20%,transparent_100%)]"></div>

                <div className="absolute inset-0 flex items-center justify-center transform-3d">
                  <div className="absolute w-[80%] h-[80%] bg-linear-to-tr from-accent-cyan via-accent-blue to-[#b06ab3] opacity-20 blur-xl animate-[spin_12s_linear_infinite] transform-gpu will-change-transform"></div>
                  <div className="relative w-[65%] h-[65%] bg-linear-to-br from-accent-cyan to-accent-blue animate-[morph_8s_ease-in-out_infinite] shadow-[0_0_50px_rgba(0,242,254,0.4),inset_20px_20px_20px_rgba(255,255,255,0.2)] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"></div>
                </div>

                <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-tr from-white/5 to-transparent opacity-30 pointer-events-none"></div>
              </div>


              <div 
                className="absolute -bottom-8 -right-4 sm:-right-8 z-40 bg-[#050505]/90 backdrop-blur-xl border border-accent-cyan/20 px-5 py-3 rounded-2xl flex items-center gap-4 shadow-[0_20px_40px_rgba(0,242,254,0.1)] group-hover:-translate-y-2 transition-transform duration-500 transform-gpu"
                style={{ transform: "translateZ(60px)" }}
              >
                <div className="w-10 h-10 bg-linear-to-br from-accent-cyan to-accent-blue rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                  <span className="text-xl text-black">🎓</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-lg tracking-wide font-black leading-tight">B.E. INFO TECH</span>
                  <span className="text-accent-cyan text-[0.65rem] font-bold tracking-[0.15em] uppercase mt-0.5">Class of 2027</span>
                </div>
              </div>

            </TiltCard>
          </motion.div>

          {/* ==========================================
              RIGHT: EDITORIAL CONTENT
          ========================================== */}
          <div className="flex flex-col justify-center">
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <h2 className="text-[clamp(3rem,6vw,3.5rem)] font-black text-white leading-none tracking-tighter mb-5 relative">
                About Me<span className="text-accent-cyan">.</span>
              </h2>
              <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] font-medium text-white/90 leading-snug tracking-tight">
                Architecting <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-accent-cyan to-accent-blue">Intelligent Systems</span> <br className="hidden md:block"/>
                & Seamless Experiences.
              </h3>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-5 mb-10 text-text-muted text-base sm:text-lg leading-relaxed font-light"
            >
              <p>
                I am a Front-End Developer and aspiring <strong className="text-white font-medium">Full-Stack Architect</strong> pursuing my B.E. in Information Technology at Lords Institute. My focus is bridging the gap between high-performance web architecture and artificial intelligence. I don't just write syntax—I engineer scalable digital ecosystems.
              </p>
              
              <p>
                My technical arsenal is rooted in the <strong className="text-white font-medium">MERN stack</strong>, <strong className="text-white font-medium">Python-driven AI/NLP</strong>, and advanced Data Analytics. Whether I am building machine learning models that secure hackathon victories or architecting pixel-perfect web platforms, my relentless focus remains on delivering uncompromising technical excellence.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                { title: "Full Stack", sub: "MERN Core", color: "from-accent-cyan to-accent-blue" },
                { title: "AI / ML", sub: "Python & NLP", color: "from-accent-blue to-[#80d0c7]" },
                { title: "Data", sub: "Analytics", color: "from-[#b06ab3] to-[#4568dc]" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="relative bg-white/1 border border-white/5 p-5 rounded-2xl cursor-none group transition-all duration-500 overflow-hidden hover:border-white/10"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center gap-1.5">
                    <h4 className="text-white/90 font-bold text-lg tracking-tight group-hover:text-white transition-colors">{stat.title}</h4>
                    <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.15em] font-bold group-hover:text-pi transition-colors">{stat.sub}</span>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}