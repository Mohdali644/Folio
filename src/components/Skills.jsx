import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

// Reusable progress bar component with Framer Motion scroll triggers
const SkillBar = ({ name, pct, colorClass, width }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2 font-semibold text-[0.95rem]">
      <span className="text-white">{name}</span>
      <span className="text-accent-cyan drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">{pct}</span>
    </div>
    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden shadow-[inset_0_0_5px_rgba(0,0,0,0.5)] relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: width }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.175, 0.885, 0.32, 1.275], delay: 0.2 }}
        className={`h-full rounded-full relative bg-gradient-to-r ${colorClass}`}
      >
        {/* Neon Tip */}
        <div className="absolute right-0 top-0 h-full w-[15px] bg-white shadow-[0_0_15px_#fff,0_0_30px_#00f2fe] rounded-full"></div>
      </motion.div>
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-32 w-full relative z-10">
      <div className="max-w-6xl mx-auto px-8">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-16 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[3px] after:bg-accent-cyan after:rounded-full hover:after:w-full hover:after:shadow-[0_0_10px_#00f2fe] after:transition-all after:duration-400"
        >
          Tech Arsenal
        </motion.h2>

        {/* Extreme Marquee[cite: 3] */}
        <div className="overflow-hidden whitespace-nowrap relative py-4 mb-20 bg-[linear-gradient(90deg,transparent,rgba(0,242,254,0.05),transparent)] border-y border-accent-cyan/20 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="inline-block animate-[scroll_25s_linear_infinite]">
            {/* Duplicated content for seamless scrolling */}
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-stroke text-5xl font-black mx-8 tracking-widest hover:text-white hover:-webkit-text-stroke-0 hover:drop-shadow-[0_0_25px_#00f2fe] hover:scale-110 transition-all cursor-none">REACT.JS</span>
                <span className="text-accent-cyan text-5xl font-black mx-8 tracking-widest drop-shadow-[0_0_20px_rgba(0,242,254,0.5)] cursor-none">NODE.JS</span>
                <span className="text-stroke text-5xl font-black mx-8 tracking-widest hover:text-white hover:-webkit-text-stroke-0 hover:drop-shadow-[0_0_25px_#00f2fe] hover:scale-110 transition-all cursor-none">PYTHON</span>
                <span className="text-accent-cyan text-5xl font-black mx-8 tracking-widest drop-shadow-[0_0_20px_rgba(0,242,254,0.5)] cursor-none">MONGODB</span>
                <span className="text-stroke text-5xl font-black mx-8 tracking-widest hover:text-white hover:-webkit-text-stroke-0 hover:drop-shadow-[0_0_25px_#00f2fe] hover:scale-110 transition-all cursor-none">EXPRESS</span>
                <span className="text-accent-cyan text-5xl font-black mx-8 tracking-widest drop-shadow-[0_0_20px_rgba(0,242,254,0.5)] cursor-none">POSTGRESQL</span>
              </span>
            ))}
          </div>
        </div>

        {/* Extreme Dashboard Grid[cite: 3] */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Frontend Engine[cite: 3] */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TiltCard className="relative p-[2px] rounded-2xl bg-transparent overflow-hidden group">
              {/* Spinning Laser Border[cite: 5] */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,#00f2fe_50%,#4facfe_60%,transparent_80%,transparent_100%)] animate-[spinBeam_6s_linear_infinite] opacity-50 group-hover:opacity-100 group-hover:animate-[spinBeam_3s_linear_infinite] transition-opacity"></div>
              
              <div className="relative bg-[#08080c]/95 backdrop-blur-xl rounded-[14px] p-10 h-full z-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(0,242,254,0.6)]">💻</span>
                  <h3 className="text-2xl text-white tracking-wide uppercase">Frontend Engine</h3>
                </div>
                <div>
                  <SkillBar name="React.js" pct="90%" width="90%" colorClass="from-transparent to-accent-cyan" />
                  <SkillBar name="JavaScript (ES6+)" pct="85%" width="85%" colorClass="from-transparent to-accent-blue" />
                  <SkillBar name="HTML5 / CSS3" pct="95%" width="95%" colorClass="from-transparent to-accent-cyan" />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Backend Core[cite: 3] */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <TiltCard className="relative p-[2px] rounded-2xl bg-transparent overflow-hidden group">
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,#00f2fe_50%,#4facfe_60%,transparent_80%,transparent_100%)] animate-[spinBeam_6s_linear_infinite] opacity-50 group-hover:opacity-100 group-hover:animate-[spinBeam_3s_linear_infinite] transition-opacity"></div>
              <div className="relative bg-[#08080c]/95 backdrop-blur-xl rounded-[14px] p-10 h-full z-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(0,242,254,0.6)]">⚙️</span>
                  <h3 className="text-2xl text-white tracking-wide uppercase">Backend Core</h3>
                </div>
                <div>
                  <SkillBar name="Node.js" pct="85%" width="85%" colorClass="from-transparent to-accent-blue" />
                  <SkillBar name="Express.js" pct="80%" width="80%" colorClass="from-transparent to-accent-cyan" />
                  <SkillBar name="Python" pct="75%" width="75%" colorClass="from-transparent to-accent-blue" />
                  <SkillBar name="C Programming" pct="70%" width="70%" colorClass="from-transparent to-accent-cyan" />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 3: Data Matrix[cite: 3] */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <TiltCard className="relative p-[2px] rounded-2xl bg-transparent overflow-hidden group">
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,#00f2fe_50%,#4facfe_60%,transparent_80%,transparent_100%)] animate-[spinBeam_6s_linear_infinite] opacity-50 group-hover:opacity-100 group-hover:animate-[spinBeam_3s_linear_infinite] transition-opacity"></div>
              <div className="relative bg-[#08080c]/95 backdrop-blur-xl rounded-[14px] p-10 h-full z-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5 w-full">
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(0,242,254,0.6)]">🗄️</span>
                  <h3 className="text-2xl text-white tracking-wide uppercase">Data Matrix</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['MongoDB', 'PostgreSQL', 'Data Analytics'].map(tech => (
                    <span key={tech} className="bg-transparent text-text-muted border border-white/20 px-5 py-2 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-accent-cyan hover:text-black hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] hover:scale-105 transition-all cursor-none">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 4: Workflow Tools[cite: 3] */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <TiltCard className="relative p-[2px] rounded-2xl bg-transparent overflow-hidden group">
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_30%,#00f2fe_50%,#4facfe_60%,transparent_80%,transparent_100%)] animate-[spinBeam_6s_linear_infinite] opacity-50 group-hover:opacity-100 group-hover:animate-[spinBeam_3s_linear_infinite] transition-opacity"></div>
              <div className="relative bg-[#08080c]/95 backdrop-blur-xl rounded-[14px] p-10 h-full z-10 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5 w-full">
                  <span className="text-3xl drop-shadow-[0_0_10px_rgba(0,242,254,0.6)]">🔧</span>
                  <h3 className="text-2xl text-white tracking-wide uppercase">Workflow Tools</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {['Git / GitHub', 'POSTMAN', 'JWTAuth', 'Recoil'].map(tech => (
                    <span key={tech} className="bg-transparent text-text-muted border border-white/20 px-5 py-2 rounded-md text-sm font-semibold tracking-wide uppercase hover:bg-accent-cyan hover:text-black hover:border-accent-cyan hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] hover:scale-105 transition-all cursor-none">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}