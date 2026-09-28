import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ==========================================
   ULTRA-PREMIUM LUMINOUS INPUT COMPONENT
========================================== */
const PremiumInput = ({ label, icon, type = "text", placeholder, value, onChange, isTextarea }) => {
  return (
    <div className="flex flex-col gap-2.5 group/field relative z-10">
      
      {/* Reactive Label */}
      <label className="text-[0.65rem] text-white/50 uppercase tracking-[0.25em] font-bold pl-1 group-focus-within/field:text-accent-cyan group-focus-within/field:drop-shadow-[0_0_5px_rgba(0,242,254,0.5)] transition-all duration-300">
        {label}
      </label>
      
      <div className="relative">
        {/* Ambient Outer Glow (Activates on Hover & Focus) */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-xl blur-lg opacity-0 group-hover/field:opacity-20 group-focus-within/field:opacity-40 transition-opacity duration-500 -z-10"></div>

        {/* Integrated SVG Icon */}
        <div className="absolute left-4 top-[1.1rem] w-5 h-5 text-white/20 group-focus-within/field:text-accent-cyan transition-colors duration-300 z-20 pointer-events-none">
          {icon}
        </div>

        {/* The Glass Input Field */}
        {isTextarea ? (
          <textarea
            required
            rows="4"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="relative w-full bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan focus:bg-white/[0.08] focus:shadow-[inset_0_0_25px_rgba(0,242,254,0.15)] transition-all duration-500 resize-none cursor-none z-10"
          />
        ) : (
          <input
            type={type}
            required
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="relative w-full bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan focus:bg-white/[0.08] focus:shadow-[inset_0_0_25px_rgba(0,242,254,0.15)] transition-all duration-500 cursor-none z-10"
          />
        )}
      </div>
    </div>
  );
};


/* ==========================================
   MAIN CONTACT SECTION
========================================== */
export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message transmitted successfully.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative w-full bg-transparent overflow-x-clip" ref={containerRef}>
      
      {/* GPU OPTIMIZED AMBIENT BACKGROUND */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#b06ab3]/5 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mb-20 items-center text-center"
        >
          <span className="text-accent-cyan text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-80 drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">
            Secure Channel
          </span>
          <h2 className="text-[clamp(3.5rem,7vw,5rem)] font-light text-white leading-none tracking-tight">
            Let's <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-cyan to-white bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          
          {/* ==========================================
              LEFT: EDITORIAL CONTACT INFO
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center h-full"
          >
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">
              Ready to architect the <br className="hidden lg:block"/> next big thing?
            </h3>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed font-light mb-12 max-w-md">
              Whether you have a specific project in mind, need a full-stack engineer for your team, or just want to chat about AI and spatial architecture—my inbox is always open.
            </p>

            {/* Premium Info Cards */}
            <div className="flex flex-col gap-4">
              <a href="mailto:envied94@gmail.com" className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl overflow-hidden hover:border-accent-cyan/30 transition-colors duration-500 cursor-none flex items-center gap-6">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 via-accent-cyan/5 to-transparent -translate-x-[100%] group-hover:animate-[sweep_2s_ease-in-out_infinite] z-0"></div>
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all duration-500 z-10">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-500">✉️</span>
                </div>
                <div className="flex flex-col z-10">
                  <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-bold mb-1">Email Address</span>
                  <span className="text-white font-medium tracking-wide group-hover:text-accent-cyan transition-colors duration-300">envied94@gmail.com</span>
                </div>
              </a>

              <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-white/10 transition-colors duration-500 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group-hover:bg-white/[0.05] transition-all duration-500">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-500">📍</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white/40 text-[0.65rem] uppercase tracking-[0.2em] font-bold mb-1">Location</span>
                  <span className="text-white font-medium tracking-wide">Hyderabad, India (Willing to relocate)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==========================================
              RIGHT: THE LUMINOUS FORM
          ========================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Form Container (Brighter glass to make inputs pop) */}
            <div className="relative p-8 sm:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_30px_rgba(255,255,255,0.02)] overflow-hidden">
              
              {/* Inner ambient flare */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-cyan/10 rounded-full blur-[80px] pointer-events-none transform-gpu z-0"></div>

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                
                <PremiumInput 
                  label="Identification"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  icon={
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  }
                />

                <PremiumInput 
                  label="Return Address"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  icon={
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  }
                />

                <PremiumInput 
                  label="Transmission"
                  isTextarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  icon={
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  }
                />

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group relative w-full flex items-center justify-center gap-3 mt-4 px-8 py-4 bg-[#0a0a0f] border border-white/10 rounded-xl overflow-hidden cursor-none transition-all duration-300 hover:border-accent-cyan/50 hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 via-accent-cyan/10 to-transparent -translate-x-[150%] group-hover:animate-[sweep_1.5s_ease-in-out_infinite] z-0 skew-x-12"></div>
                  
                  <span className="relative flex h-2.5 w-2.5 z-10">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSubmitting ? 'bg-accent-blue' : 'bg-[#43e97b]'}`}></span>
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 shadow-[0_0_15px_currentColor] ${isSubmitting ? 'bg-accent-blue' : 'bg-[#43e97b]'}`}></span>
                  </span>
                  
                  <span className="relative z-10 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-cyan transition-all duration-300">
                    {isSubmitting ? "Transmitting..." : "Initialize Uplink"}
                  </span>
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}