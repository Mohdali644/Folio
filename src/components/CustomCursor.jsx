import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for the instant dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Motion values with physics for the delayed magnetic outline
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorOutlineX = useSpring(cursorX, springConfig);
  const cursorOutlineY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      // Replicates the querySelectorAll hover logic to expand the cursor
      // Triggers on links, buttons, inputs, and your custom glass panels
      const isInteractive = e.target.closest('a, button, input, textarea, .glass-panel, .glow-card');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 1. The tiny precision dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent-cyan rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />

      {/* 2. The magnetic tracker outline */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 border transition-colors duration-300 ${
          isHovering 
            ? 'w-16 h-16 bg-[#b06ab3]/10 border-[#b06ab3] shadow-[0_0_25px_rgba(176,106,179,0.3)]' 
            : 'w-10 h-10 border-accent-cyan/40 shadow-[0_0_15px_rgba(0,242,254,0.1)]'
        }`}
        style={{
          x: cursorOutlineX,
          y: cursorOutlineY,
        }}
      />
    </>
  );
}