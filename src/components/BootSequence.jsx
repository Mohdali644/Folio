import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// ISOLATED COMPONENT 1: Hardware-Accelerated Hex Stream
// By isolating this, it updates its own state without lagging the main BootSequence.
// ==========================================
const HexStream = memo(() => {
  const [stream, setStream] = useState("");
  
  useEffect(() => {
    const chars = "0123456789ABCDEF";
    const interval = setInterval(() => {
      let str = "";
      for (let i = 0; i < 64; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
        if ((i + 1) % 4 === 0) str += " ";
      }
      setStream(str);
    }, 100); // 10FPS update is smooth but doesn't choke CPU
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[0.55rem] tracking-widest text-accent-cyan/40 font-mono leading-relaxed break-words h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
      {stream.repeat(15)}
    </div>
  );
});
HexStream.displayName = "HexStream";

// ==========================================
// ISOLATED COMPONENT 2: System Log Terminal
// ==========================================
const SystemLogs = memo(({ progress }) => {
  const allLogs = [
    "INITIATING_COLD_BOOT_SEQUENCE...",
    "VFS_MOUNT: OK [0x00A1]",
    "ALLOCATING_GPU_VRAM: 16384MB",
    "LOADING_REACT_DOM_TREE... OK",
    "ESTABLISHING_SECURE_UPLINK...",
    "NEURAL_NET_SYNC: CALIBRATING",
    "BYPASSING_FIREWALL: OVERRIDE",
    "TAILWIND_JIT_COMPILER: ACTIVE",
    "INJECTING_HOLOGRAPHIC_UI...",
    "AUTH_VERIFIED: MOHD_ALI",
  ];
  
  const visibleLogs = allLogs.slice(0, Math.max(1, Math.floor((progress / 100) * allLogs.length)));

  return (
    <div className="flex flex-col gap-2 text-[0.65rem] tracking-[0.2em] font-bold font-mono text-left w-full">
      {visibleLogs.map((log, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: 1, x: 0 }}
          className={log.includes("OVERRIDE") || log.includes("AUTH") ? "text-[#43e97b] drop-shadow-[0_0_8px_#43e97b]" : "text-text-muted"}
        >
          &gt; {log}
        </motion.div>
      ))}
    </div>
  );
});
SystemLogs.displayName = "SystemLogs";

// ==========================================
// MAIN COMPONENT: The Extreme Sequence
// ==========================================
export default function BootSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("INITIALIZING");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Core Boot Engine
  useEffect(() => {
    let currentProg = 0;
    
    const bootInterval = setInterval(() => {
      // Smooth logarithmic pacing
      let increment = Math.floor(Math.random() * 3) + 1;
      if (currentProg > 70) increment = Math.floor(Math.random() * 2) + 1;
      if (currentProg > 90 && Math.random() > 0.4) increment = 0; // Cinematic hangs

      currentProg += increment;

      if (currentProg >= 100) {
        currentProg = 100;
        setProgress(100);
        setPhase("SYSTEM_ONLINE");
        clearInterval(bootInterval);
        
        // Zero-Lag Exit Trigger
        setTimeout(() => {
          setIsUnlocked(true);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 300); // Clean unmount
          }, 1200); // Length of the exit animation
        }, 600);
      } else {
        setProgress(currentProg);
        if (currentProg > 25) setPhase("DECRYPTING_ASSETS");
        if (currentProg > 50) setPhase("COMPILING_MODULES");
        if (currentProg > 85) setPhase("AUTHORIZING_USER");
      }
    }, 40);

    return () => clearInterval(bootInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-[#030305] cursor-none select-none"
          // ZERO LAG EXIT: Uses hardware-accelerated clip-path and opacity instead of filters/box-shadows
          initial={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
        >
          
          {/* ==========================================
              BACKGROUND LAYERS (GPU Optimized) 
          ========================================== */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22><filter_id=%22noise%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.8%22_numOctaves=%223%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22/></svg>')] z-0"></div>
          
          {/* Hardware-Accelerated 3D Grid */}
          <div className="absolute bottom-[-20%] w-[150%] h-[60vh] opacity-20 bg-[linear-gradient(rgba(0,242,254,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(600px)_rotateX(75deg)] z-0 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

          {/* ==========================================
              HUD CORNERS (Static Positioning)
          ========================================== */}
          {/* Top Left: Terminal */}
          <div className="absolute top-8 left-8 w-72 z-20 hidden md:block">
            <div className="text-accent-cyan font-mono font-bold text-[0.65rem] tracking-[0.3em] mb-4 border-b border-accent-cyan/30 pb-2">BOOT_LOG_STREAM</div>
            <SystemLogs progress={progress} />
          </div>

          

          {/* Bottom Left & Right: Target Crosshairs */}
          <div className="absolute bottom-10 left-10 w-12 h-12 border-b-2 border-l-2 border-accent-cyan/40 z-20"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 border-b-2 border-r-2 border-accent-cyan/40 z-20"></div>
          <div className="absolute top-10 left-10 w-12 h-12 border-t-2 border-l-2 border-accent-cyan/40 z-20 md:hidden"></div>
          <div className="absolute top-10 right-10 w-12 h-12 border-t-2 border-r-2 border-accent-cyan/40 z-20 md:hidden"></div>

          {/* ==========================================
              THE SINGULARITY CORE (Massive SVG Engine)
          ========================================== */}
          <motion.div 
            className="relative z-30 flex flex-col items-center justify-center will-change-transform"
            // ZERO LAG ZOOM: Uses transform scale, highly optimized by the GPU
            animate={isUnlocked ? { scale: 12, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          >
            
            {/* COMPLEX SVG REACTOR RINGS */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Outer Dashed Orbit */}
              <svg className="absolute w-[600px] h-[600px] animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(0,242,254,0.1)" strokeWidth="0.2" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="#00f2fe" strokeWidth="0.5" strokeDasharray="2 8" />
              </svg>

              {/* Middle Geometric Frame */}
              <svg className="absolute w-[450px] h-[450px] animate-[spin_15s_linear_infinite_reverse]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(79,172,254,0.3)" strokeWidth="0.5" strokeDasharray="15 30" />
                <polygon points="50,5 93,27 93,73 50,95 7,73 7,27" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.2" />
              </svg>

              {/* Inner High-Speed Core Ring */}
              <svg className="absolute w-[340px] h-[340px] animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#00f2fe" strokeWidth="1" strokeDasharray="1 10 30 10" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(67,233,123,0.3)" strokeWidth="0.2" strokeDasharray="4 4" />
              </svg>

              {/* Data Arc Indicators (Pure CSS rotation for zero lag) */}
              <div className="absolute w-[400px] h-[400px] border-t-2 border-accent-cyan rounded-full animate-[spin_4s_ease-in-out_infinite_alternate]"></div>
              <div className="absolute w-[380px] h-[380px] border-b-2 border-accent-blue rounded-full animate-[spin_5s_ease-in-out_infinite_alternate-reverse]"></div>
            </div>

            {/* ==========================================
                CENTRAL DATA HUB
            ========================================== */}
            <div className={`relative z-10 flex flex-col items-center justify-center w-[280px] h-[280px] rounded-full bg-[#030305]/80 backdrop-blur-md border-2 transition-colors duration-300 ${progress === 100 ? 'border-[#43e97b] shadow-[0_0_60px_rgba(67,233,123,0.3),inset_0_0_30px_rgba(67,233,123,0.2)]' : 'border-accent-cyan/30 shadow-[0_0_40px_rgba(0,242,254,0.1),inset_0_0_20px_rgba(0,0,0,0.8)]'}`}>
              
              {/* Dynamic SVG Circular Progress Bar */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                {/* Background Track */}
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                {/* Active Progress Line */}
                <circle 
                  cx="50" cy="50" r="46" 
                  fill="none" 
                  stroke={progress === 100 ? "#43e97b" : "#00f2fe"} 
                  strokeWidth="2" 
                  strokeDasharray="289" // 2 * PI * 46 ≈ 289
                  strokeDashoffset={289 - (289 * progress) / 100}
                  className="transition-all duration-75 ease-linear"
                />
              </svg>

              {/* The Number */}
              <div className="text-7xl font-black tabular-nums text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] relative z-20 flex items-start">
                {progress}
                <span className={`text-2xl mt-2 ml-1 ${progress === 100 ? 'text-[#43e97b]' : 'text-accent-cyan'}`}>%</span>
              </div>
              
              {/* Status Label */}
              <div className={`mt-4 text-[0.65rem] tracking-[0.4em] uppercase font-bold font-mono text-center px-4 ${progress === 100 ? 'text-[#43e97b] drop-shadow-[0_0_8px_#43e97b]' : 'text-accent-cyan'}`}>
                {phase}
              </div>

            </div>
          </motion.div>

          {/* ==========================================
              BOTTOM WARNING TAPE
          ========================================== */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 border border-accent-cyan/20 bg-black/50 backdrop-blur-sm px-8 py-2 z-20"
            animate={{ opacity: isUnlocked ? 0 : 1, y: isUnlocked ? 20 : 0 }}
          >
            <span className={`w-2 h-2 rounded-full animate-ping ${progress === 100 ? 'bg-[#43e97b]' : 'bg-[#ff003c]'}`}></span>
            <span className={`text-[0.65rem] font-bold tracking-[0.3em] font-mono uppercase ${progress === 100 ? 'text-[#43e97b]' : 'text-white'}`}>
              {progress === 100 ? 'OVERRIDE_SUCCESSFUL // ACCESS_GRANTED' : 'RESTRICTED_ACCESS // IDENTIFICATION_REQUIRED'}
            </span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}