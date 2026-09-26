import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const projectsData = [
  {
    title: "EverBuy E-Commerce",
    desc: "A highly responsive e-commerce front-end closely replicating Amazon's design. Features dynamic DOM manipulation for product listings, search, navigation, and a functional cart system.",
    gradient: "from-[#fa709a] to-[#fee140]",
    tech: ["HTML5", "CSS3", "Vanilla JS", "DOM"],
    demoLink: "https://mohdali644.github.io/EverBuy/",
    codeLink: "#"
  },
  {
    title: "Aptivox AI Platform",
    desc: "AI-powered interview platform utilizing NLP, ML, and real-time analytics. Achieved an 89% reduction in hiring time and 92% accuracy in candidate skill matching.",
    gradient: "from-[#00f2fe] to-[#4facfe]",
    trophy: "Top Performer (200+ Teams)",
    tech: ["Python", "NLP", "Machine Learning"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Whiskerverse Platform",
    desc: "An advanced, high-performance digital ecosystem focused on custom state management, modular front-end architecture, and fluid user interface interactions built completely from scratch.",
    gradient: "from-[#9a5ad5] to-[#c422a4]",
    trophy: "Core Ecosystem",
    tech: ["Vanilla JS", "CSS3 Architecture", "HTML5"],
    demoLink: "https://mohdali644.github.io/Whisker-verse/",
    codeLink: "https://github.com/Mohdali644/Whisker-verse"
  },
  {
    title: "Classic Web Arcade",
    desc: "Built classic web-based games including Tic-Tac-Toe and Rock-Paper-Scissors. Focused entirely on efficient game logic algorithms, DOM manipulation, and responsive UI/UX.",
    gradient: "from-[#667eea] to-[#764ba2]",
    tech: ["JavaScript", "CSS Animations", "Game Logic"],
    demoLink: "#",
    codeLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 w-full relative z-10">
      <div className="absolute top-[20%] left-[80%] w-[500px] h-[500px] bg-accent-blue rounded-full blur-[150px] opacity-10 z-0 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black text-center mb-16 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-[3px] after:bg-accent-cyan after:rounded-full hover:after:w-full hover:after:shadow-[0_0_10px_#00f2fe] after:transition-all after:duration-400"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard className="h-full border border-white/5 rounded-2xl overflow-hidden group">
                <div className="flex flex-col h-full bg-[#050505]/80 backdrop-blur-[20px]">
                  
                  {/* Visual Header */}
                  <div className={`relative w-full h-[220px] bg-gradient-to-br ${project.gradient} overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    {/* SVG Noise Overlay from style.css */}
                    <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22><filter_id=%22noiseFilter%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/></svg>')]"></div>
                    
                    {project.trophy && (
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[#ffd700] px-3 py-1.5 rounded-full text-xs font-bold border border-[#ffd700]/30 shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10">
                        🏆 {project.trophy}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-grow relative z-20 bg-black/40">
                    <h3 className="text-2xl font-bold text-accent-cyan mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,242,254,0.5)] transition-all cursor-none">{project.title}</h3>
                    <p className="text-text-muted text-[0.95rem] leading-relaxed mb-6 flex-grow">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="bg-white/5 border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide hover:bg-accent-cyan/10 hover:border-accent-cyan hover:text-accent-cyan transition-colors cursor-none">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 opacity-50 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                      <a href={project.codeLink} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-lg text-sm font-bold border border-white/10 hover:border-accent-cyan hover:bg-accent-cyan/10 transition-colors cursor-none">View Code</a>
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-lg text-sm font-bold text-black bg-gradient-to-r from-accent-cyan to-accent-blue shadow-[0_0_15px_rgba(0,242,254,0.4)] hover:shadow-[0_0_25px_rgba(0,242,254,0.6)] transition-shadow cursor-none">Live Demo</a>
                    </div>
                  </div>
                  
                </div>
              </TiltCard>
            </motion.div>
          ))}
          
          {/* V1.0 Portfolio Card (Span 2) */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2">
            <TiltCard className="h-full border border-white/5 rounded-2xl overflow-hidden group">
              <div className="flex flex-col h-full bg-[#050505]/80 backdrop-blur-[20px]">
                <div className="relative w-full h-[180px] bg-gradient-to-br from-[#13547a] to-[#80d0c7] overflow-hidden flex justify-center items-center group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22><filter_id=%22noiseFilter%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/></svg>')]"></div>
                  <h3 className="relative z-10 text-white text-4xl font-black drop-shadow-lg cursor-none">Mohd Ali v1.0</h3>
                </div>
                <div className="p-8 flex flex-col flex-grow relative z-20 bg-black/40">
                  <h3 className="text-2xl font-bold text-accent-cyan mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,242,254,0.5)] transition-all cursor-none">Animated Personal Portfolio</h3>
                  <p className="text-text-muted text-[0.95rem] leading-relaxed mb-6">Designed and developed a responsive personal portfolio to showcase projects, education, and experience globally. Hosted via GitHub Pages with advanced CSS glassmorphism, 3D tilt effects, and vanilla JS micro-interactions.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Vanilla JS", "Advanced CSS3", "HTML Canvas", "GitHub Pages"].map(t => (
                      <span key={t} className="bg-white/5 border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide hover:bg-accent-cyan/10 hover:border-accent-cyan hover:text-accent-cyan transition-colors cursor-none">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 opacity-50 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                    <a href="https://github.com/Mohdali644" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-lg text-sm font-bold border border-white/10 hover:border-accent-cyan hover:bg-accent-cyan/10 transition-colors cursor-none">GitHub Repo</a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}