import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function Experience() {
  return (
    <section id="experience" className="py-32 w-full relative z-10">
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-accent-cyan rounded-full blur-[150px] opacity-10 z-0"></div>
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-16 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[3px] after:bg-accent-cyan after:rounded-full hover:after:w-full hover:after:shadow-[0_0_10px_#00f2fe] after:transition-all after:duration-400"
        >
          Professional Journey
        </motion.h2>

        <div className="relative py-8">
          {/* Glowing Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[24px] md:left-[24px] w-[2px] bg-gradient-to-b from-transparent via-accent-cyan to-transparent shadow-[0_0_15px_#00f2fe] z-0"></div>

          {/* Timeline Item 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative pl-[80px] mb-16 group"
          >
            {/* Glowing Marker Node */}
            <div className="absolute left-[13px] top-[24px] w-[24px] h-[24px] flex justify-center items-center z-10">
              <div className="absolute w-full h-full bg-accent-cyan rounded-full z-0 animate-[radarPulse_2s_cubic-bezier(0.215,0.61,0.355,1)_infinite]"></div>
              <div className="w-[12px] h-[12px] bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_#00f2fe] z-10 group-hover:scale-150 group-hover:bg-accent-cyan transition-transform duration-300"></div>
            </div>
            
            <TiltCard className="glass-panel group-hover:border-accent-cyan/40">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 pb-4 border-b border-white/5 gap-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-cyan to-white bg-clip-text text-transparent">Data Research Analyst</h3>
                <span className="bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 w-max cursor-none">
                  Nov 2024 - Jan 2025
                </span>
              </div>
              
              <ul className="flex flex-col gap-4">
                {[
                  "Conducted research and analyzed large datasets to support data-driven decisions.",
                  "Collected and validated data, ensuring high accuracy and structural reliability.",
                  "Developed interactive visualizations and reports for effective communication of findings.",
                  "Identified emerging trends and provided actionable insights to key stakeholders."
                ].map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-text-muted hover:text-white transition-colors">
                    <span className="text-accent-blue text-lg leading-tight drop-shadow-[0_0_10px_rgba(79,172,254,0.5)]">▹</span>
                    <p className="leading-relaxed">{duty}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-8">
                {["Data Analytics", "Data Visualization", "Research", "Trend Analysis"].map(t => (
                  <span key={t} className="bg-white/5 border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide cursor-none">{t}</span>
                ))}
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}