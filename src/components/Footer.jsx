import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-8 bg-bg-base/80 backdrop-blur-[20px] border-t border-white/5 mt-20">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-accent-cyan to-transparent shadow-[0_0_15px_#00f2fe]"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 mb-16">
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-3xl font-black mb-6 text-white flex items-baseline">
              MA<span className="text-accent-cyan drop-shadow-[0_0_10px_#00f2fe]">.</span>
            </div>
            <p className="text-text-muted leading-relaxed max-w-sm mb-8">Architecting intelligent digital experiences through code and creativity.</p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#43e97b]/5 border border-[#43e97b]/20 rounded-xl mt-5 font-mono text-[0.75rem] text-[#43e97b]">
              <span className="w-1.5 h-1.5 bg-[#43e97b] rounded-full shadow-[0_0_10px_#43e97b] animate-[rapidBlink_1.5s_infinite]"></span>
              PORTFOLIO_CORE_V3 // ACTIVE
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-[1.2rem] font-black uppercase tracking-widest mb-8 text-white">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Work', 'Connect'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-muted font-medium hover:text-accent-cyan hover:pl-2 hover:drop-shadow-[0_0_10px_#00f2fe] transition-all cursor-none">{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="text-[1.2rem] font-black uppercase tracking-widest mb-8 text-white">Digital Presence</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="https://github.com/Mohdali644" target="_blank" rel="noreferrer" className="text-text-muted font-medium hover:text-accent-cyan hover:pl-2 hover:drop-shadow-[0_0_10px_#00f2fe] transition-all cursor-none">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/mohd-ali-dev/" target="_blank" rel="noreferrer" className="text-text-muted font-medium hover:text-accent-cyan hover:pl-2 hover:drop-shadow-[0_0_10px_#00f2fe] transition-all cursor-none">LinkedIn</a></li>
              <li><a href="mailto:envied94@gmail.com" className="text-text-muted font-medium hover:text-accent-cyan hover:pl-2 hover:drop-shadow-[0_0_10px_#00f2fe] transition-all cursor-none">Email</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 mb-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-text-muted text-[0.9rem]">
          <p>&copy; 2026 Mohd Ali. Engineered with <span className="text-accent-cyan drop-shadow-[0_0_10px_rgba(0,242,254,0.5)] font-bold">React & Tailwind</span>.</p>
          <a href="#home" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex justify-center items-center text-white hover:bg-accent-cyan hover:text-black hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,242,254,0.3)] transition-all cursor-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}