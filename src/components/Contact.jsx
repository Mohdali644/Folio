import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 w-full relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-accent-blue),var(--color-accent-cyan))] rounded-full blur-[150px] opacity-15 z-0 animate-[pulseOrb_8s_ease-in-out_infinite_alternate,rotateBorder_10s_linear_infinite]"></div>
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-black mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:after:content-[''] relative inline-block">
            Let's Connect.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Have a project in mind or want to discuss opportunities? Send a transmission.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
          
          {/* Contact Methods[cite: 3] */}
          <div className="flex flex-col gap-6">
            {[
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email Me", val: "envied94@gmail.com", link: "mailto:envied94@gmail.com" },
              { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Call Me", val: "(+91) 9390203537", link: "tel:+919390203537" },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Location", val: "Hyderabad, India", link: "#" }
            ].map((item, i) => (
              <motion.a 
                href={item.link}
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel !p-6 flex items-center gap-5 group cursor-none hover:translate-x-4 hover:border-accent-cyan/50 hover:shadow-[0_10px_30px_rgba(0,242,254,0.15)] transition-all"
              >
                <div className="w-14 h-14 bg-accent-cyan/5 border border-accent-cyan/20 rounded-full flex justify-center items-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-black group-hover:shadow-[0_0_20px_#00f2fe] group-hover:rotate-12 group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon}></path></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.85rem] text-text-muted uppercase tracking-widest mb-1">{item.label}</span>
                  <strong className="text-[1.1rem] text-white tracking-wide group-hover:text-accent-cyan transition-colors">{item.val}</strong>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Cyber Form[cite: 3, 5] */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel !p-10"
          >
            <form className="flex flex-col gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="relative">
                  <input type="text" id="name" required placeholder=" " className="peer w-full bg-black/40 border border-white/10 rounded-3xl p-4 text-white focus:border-accent-cyan/50 focus:bg-accent-cyan/5 focus:shadow-[0_0_20px_rgba(0,242,254,0.1)] outline-none transition-all cursor-none" />
                  <label htmlFor="name" className="absolute left-5 top-4 text-text-muted pointer-events-none transition-all bg-transparent peer-focus:-top-3 peer-focus:left-4 peer-focus:text-[0.8rem] peer-focus:text-accent-cyan peer-focus:bg-[#050505] peer-focus:px-2 peer-focus:font-semibold peer-focus:tracking-widest peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-4 peer-not-placeholder-shown:text-[0.8rem] peer-not-placeholder-shown:text-accent-cyan peer-not-placeholder-shown:bg-[#050505] peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:tracking-widest">Initiator Name</label>
                  <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-accent-cyan transition-all duration-400 -translate-x-1/2 rounded-full peer-focus:w-full peer-focus:shadow-[0_0_10px_#00f2fe]"></div>
                </div>
                {/* Email Input */}
                <div className="relative">
                  <input type="email" id="email" required placeholder=" " className="peer w-full bg-black/40 border border-white/10 rounded-3xl p-4 text-white focus:border-accent-cyan/50 focus:bg-accent-cyan/5 focus:shadow-[0_0_20px_rgba(0,242,254,0.1)] outline-none transition-all cursor-none" />
                  <label htmlFor="email" className="absolute left-5 top-4 text-text-muted pointer-events-none transition-all bg-transparent peer-focus:-top-3 peer-focus:left-4 peer-focus:text-[0.8rem] peer-focus:text-accent-cyan peer-focus:bg-[#050505] peer-focus:px-2 peer-focus:font-semibold peer-focus:tracking-widest peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-4 peer-not-placeholder-shown:text-[0.8rem] peer-not-placeholder-shown:text-accent-cyan peer-not-placeholder-shown:bg-[#050505] peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:tracking-widest">Return Signal (Email)</label>
                  <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-accent-cyan transition-all duration-400 -translate-x-1/2 rounded-full peer-focus:w-full peer-focus:shadow-[0_0_10px_#00f2fe]"></div>
                </div>
              </div>
              
              {/* Message Input */}
              <div className="relative">
                <textarea id="message" rows="5" required placeholder=" " className="peer w-full bg-black/40 border border-white/10 rounded-3xl p-4 text-white focus:border-accent-cyan/50 focus:bg-accent-cyan/5 focus:shadow-[0_0_20px_rgba(0,242,254,0.1)] outline-none transition-all resize-y cursor-none"></textarea>
                <label htmlFor="message" className="absolute left-5 top-4 text-text-muted pointer-events-none transition-all bg-transparent peer-focus:-top-3 peer-focus:left-4 peer-focus:text-[0.8rem] peer-focus:text-accent-cyan peer-focus:bg-[#050505] peer-focus:px-2 peer-focus:font-semibold peer-focus:tracking-widest peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:left-4 peer-not-placeholder-shown:text-[0.8rem] peer-not-placeholder-shown:text-accent-cyan peer-not-placeholder-shown:bg-[#050505] peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:tracking-widest">Transmission Data (Message)</label>
                <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-accent-cyan transition-all duration-400 -translate-x-1/2 rounded-full peer-focus:w-full peer-focus:shadow-[0_0_10px_#00f2fe]"></div>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-accent-cyan to-accent-blue text-black font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:shadow-[0_0_30px_rgba(0,242,254,0.6)] hover:-translate-y-1 transition-all flex justify-center items-center gap-3 group cursor-none mt-4">
                <span>Transmit Message</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}