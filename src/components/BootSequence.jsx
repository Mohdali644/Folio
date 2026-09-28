import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BootSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING_CORE");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Core Boot Engine
  useEffect(() => {
    let currentProg = 0;
    
    const bootInterval = setInterval(() => {
      let increment = Math.floor(Math.random() * 3) + 1;
      if (currentProg > 70) increment = Math.floor(Math.random() * 2) + 1;
      if (currentProg > 90 && Math.random() > 0.4) increment = 0;

      currentProg += increment;

      if (currentProg >= 100) {
        currentProg = 100;
        setProgress(100);
        setPhase("SYSTEM_ONLINE");
        clearInterval(bootInterval);
        
        // Trigger the zoom
        setTimeout(() => {
          setIsUnlocked(true);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 100);
          }, 1200); // Wait for zoom to finish
        }, 600);
      } else {
        setProgress(currentProg);
        if (currentProg > 30) setPhase("RENDERING_SPATIAL_UI");
        if (currentProg > 60) setPhase("COMPILING_MODULES");
        if (currentProg > 85) setPhase("AUTHORIZING_USER");
      }
    }, 35);

    return () => clearInterval(bootInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-[#030305] cursor-none select-none"
          initial={{ opacity: 1 }}
          animate={isUnlocked ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
        >
          
          {/* ==========================================
              HEAVY BACKGROUNDS (Fades out instantly to prevent lag)
          ========================================== */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isUnlocked ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* SVG Noise */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22><filter_id=%22noise%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.8%22_numOctaves=%223%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22/></svg>')] z-0"></div>
            
            {/* 3D Grid */}
            <div className="absolute bottom-[-20%] w-[150%] h-[60vh] opacity-20 bg-[linear-gradient(rgba(0,242,254,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.2)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(600px)_rotateX(75deg)] z-0 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

            {/* Ambient Center Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent-cyan/20 rounded-full blur-[100px] mix-blend-screen z-0"
              style={{ transform: `translate(-50%, -50%) scale(${progress / 50})` }}
            />

            {/* HUD Corners */}
            <div className="absolute bottom-10 left-10 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-accent-cyan/40 z-20"></div>
            <div className="absolute bottom-10 right-10 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-r-2 border-accent-cyan/40 z-20"></div>
            <div className="absolute top-10 left-10 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-l-2 border-accent-cyan/40 z-20"></div>
            <div className="absolute top-10 right-10 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-accent-cyan/40 z-20"></div>
            
            {/* Warning Tape */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 border border-accent-cyan/20 bg-black/40 backdrop-blur-md px-6 sm:px-8 py-2.5 z-20 rounded-full">
              <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-ping ${progress === 100 ? 'bg-[#43e97b]' : 'bg-[#ff003c]'}`}></span>
              <span className={`text-[0.55rem] sm:text-[0.65rem] font-bold tracking-[0.2em] sm:tracking-[0.3em] font-mono uppercase ${progress === 100 ? 'text-[#43e97b]' : 'text-white/80'}`}>
                {progress === 100 ? 'OVERRIDE_SUCCESSFUL // ACCESS_GRANTED' : 'RESTRICTED_ACCESS // SECURE_UPLINK'}
              </span>
            </div>
          </motion.div>

          {/* ==========================================
              THE WARP-DRIVE CORE (Only scales SVGs for zero lag)
          ========================================== */}
          <motion.div
            className="relative flex items-center justify-center transform-gpu will-change-transform z-30"
            initial={{ scale: 1 }}
            animate={isUnlocked ? { scale: 40, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* COMPLEX SVG REACTOR RINGS */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(0,242,254,0.1)" strokeWidth="0.2" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="#00f2fe" strokeWidth="0.5" strokeDasharray="2 8" />
              </svg>
              <svg className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] animate-[spin_15s_linear_infinite_reverse]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(79,172,254,0.3)" strokeWidth="0.5" strokeDasharray="15 30" />
                <polygon points="50,5 93,27 93,73 50,95 7,73 7,27" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" />
              </svg>
              <svg className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#00f2fe" strokeWidth="1" strokeDasharray="1 10 30 10" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(67,233,123,0.3)" strokeWidth="0.2" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* CENTRAL DATA HUB BORDER */}
            <div className={`relative flex items-center justify-center w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full transition-colors duration-500 border-2 ${progress === 100 ? 'border-[#43e97b]' : 'border-accent-cyan/30'}`}>
              
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                <circle 
                  cx="50" cy="50" r="46" 
                  fill="none" 
                  stroke={progress === 100 ? "#43e97b" : "#00f2fe"} 
                  strokeWidth="2" 
                  strokeDasharray="289"
                  strokeDashoffset={289 - (289 * progress) / 100}
                  className="transition-all duration-75 ease-linear"
                />
              </svg>

              {/* HEAVY CONTENT (Fades out so it doesn't scale and lag) */}
              <motion.div 
                className={`absolute inset-0 rounded-full flex flex-col items-center justify-center bg-[#030305]/60 backdrop-blur-xl ${progress === 100 ? 'shadow-[0_0_80px_rgba(67,233,123,0.2),inset_0_0_30px_rgba(67,233,123,0.2)]' : 'shadow-[0_0_50px_rgba(0,242,254,0.1),inset_0_0_20px_rgba(0,0,0,0.8)]'}`}
                animate={{ opacity: isUnlocked ? 0 : 1 }}
                transition={{ duration: 0.1 }}
              >
                <div className="text-6xl sm:text-7xl font-black tabular-nums text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] flex items-start">
                  {progress}
                  <span className={`text-xl sm:text-2xl mt-1.5 sm:mt-2 ml-1 ${progress === 100 ? 'text-[#43e97b]' : 'text-accent-cyan'}`}>%</span>
                </div>
                
                <div className={`mt-3 sm:mt-4 text-[0.55rem] sm:text-[0.65rem] tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold font-mono text-center px-4 ${progress === 100 ? 'text-[#43e97b] drop-shadow-[0_0_8px_#43e97b]' : 'text-accent-cyan'}`}>
                  {phase}
                </div>
              </motion.div>

            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}