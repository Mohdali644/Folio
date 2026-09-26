import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function About() {
  return (
    <section id="about" className="py-32 w-full relative z-10">
      
      {/* Elegant Ambient Background */}
      <div className="absolute top-[30%] left-[10%] w-125 h-125 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 xl:gap-24 items-center">
          
          {/* ==========================================
              LEFT: THE LIQUID GLASS MONOLITH
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <TiltCard className="w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[2.5rem] group">
              
              {/* Outer Frosted Glass Container */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(255,255,255,0.02)]">
                
                {/* Subtle Grid Texture */}
                <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]"></div>

                {/* THE LIQUID CORE (Organic Morphing Blob) */}
                <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
                  {/* Background Aura */}
                  <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-accent-cyan via-accent-blue to-[#b06ab3] opacity-30 blur-3xl animate-[spin_10s_linear_infinite]"></div>
                  
                  {/* The Physical Liquid Shape */}
                  <div className="relative w-[65%] h-[65%] bg-gradient-to-br from-accent-cyan to-accent-blue animate-[morph_8s_ease-in-out_infinite] shadow-[0_0_60px_rgba(0,242,254,0.6),inset_20px_20px_20px_rgba(255,255,255,0.4)] opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                </div>

                {/* Inner Glass Reflection */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none"></div>
              </div>

              {/* ==========================================
                  FLOATING 3D BADGES (Outside the container)
              ========================================== */}
              
              {/* Bottom Right Floating Degree Card */}
              <div 
                className="absolute -bottom-10 -right-4 sm:-right-10 z-40 bg-[#050505]/95 backdrop-blur-2xl border border-accent-cyan/30 px-6 py-4 rounded-2xl flex items-center gap-5 shadow-[0_20px_40px_rgba(0,242,254,0.15)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,242,254,0.3)] transition-all duration-500"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-cyan to-accent-blue rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                  <span className="text-2xl text-black">🎓</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[1.1rem] tracking-wide font-black leading-tight">B.E. INFO TECH</span>
                  <span className="text-accent-cyan text-[0.75rem] font-bold tracking-[0.1em] uppercase mt-1">Class of 2027</span>
                </div>
              </div>

            </TiltCard>
          </motion.div>

          {/* ==========================================
              RIGHT: THE EDITORIAL CONTENT
          ========================================== */}
          <div className="flex flex-col justify-center">
            
            {/* Elegant Header */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="mb-8"
            >
              <h2 className="text-[clamp(2rem,3.3vw,4.5rem)] font-black text-white leading-none tracking-tighter mb-3 relative">
                About Me<span className="text-accent-cyan">.</span>
              </h2>
              <h3 className="text-[clamp(1.6rem,1.5vw,2.2rem)] font-bold text-white leading-[1.2] tracking">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue drop-shadow-[0_0_10px_rgba(0,242,254,0.2)]">Intelligent Systems</span> <br className="hidden md:block"/>
                & Seamless Experiences.
              </h3>
            </motion.div>
            
            {/* Professional Typography */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col gap-6 mb-12 text-text-muted text-lg leading-relaxed font-medium"
            >
              <p>
                I am a Front-End Developer and aspiring <strong className="text-white font-bold">Full-Stack Architect</strong> pursuing my B.E. in Information Technology at Lords Institute. My focus is bridging the gap between high-performance web architecture and artificial intelligence. I don't just write syntax—I engineer scalable digital ecosystems.
              </p>
              
              <p>
                My technical arsenal is rooted in the <strong className="text-white font-bold border-b border-accent-cyan/50 pb-0.5">MERN stack</strong>, <strong className="text-white font-bold border-b border-accent-blue/50 pb-0.5">Python-driven AI/NLP</strong>, and advanced Data Analytics. Whether I am building machine learning models that secure hackathon victories or architecting pixel-perfect web platforms, my relentless focus remains on delivering uncompromising technical excellence.
              </p>
            </motion.div>

            {/* ==========================================
                THE PREMIUM STAT CARDS
            ========================================== */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            >
              {[
                { title: "Full Stack", sub: "MERN Core", color: "from-accent-cyan to-accent-blue", shadow: "hover:shadow-[0_10px_30px_rgba(0,242,254,0.2)]", border: "group-hover:border-accent-cyan/50" },
                { title: "AI / ML", sub: "Python & NLP", color: "from-accent-blue to-[#80d0c7]", shadow: "hover:shadow-[0_10px_30px_rgba(79,172,254,0.2)]", border: "group-hover:border-accent-blue/50" },
                { title: "Data", sub: "Analytics", color: "from-[#b06ab3] to-[#4568dc]", shadow: "hover:shadow-[0_10px_30px_rgba(176,106,179,0.2)]", border: "group-hover:border-[#b06ab3]/50" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`relative bg-white/[0.02] border border-white/5 p-6 rounded-2xl cursor-none group transition-all duration-500 overflow-hidden ${stat.shadow} ${stat.border}`}
                >
                  {/* Subtle Gradient Reveal on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center gap-2">
                    <h4 className="text-white font-black text-xl tracking-tight group-hover:scale-105 transition-transform duration-300">{stat.title}</h4>
                    <span className="text-text-muted text-[0.7rem] uppercase tracking-[0.15em] font-bold group-hover:text-white/80 transition-colors">{stat.sub}</span>
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