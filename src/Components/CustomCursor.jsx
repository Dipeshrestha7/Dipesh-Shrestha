import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function CustomCursor() {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const down = () => setIsActive(true);
    const up = () => setIsActive(false);
    const enter = () => setIsHidden(false);
    const leave = () => setIsHidden(true);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseenter', enter);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseenter', enter);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  // Detect interactive elements under mouse
  useEffect(() => {
    const updateInteractive = (e) => {
      const target = e.target;
      if (!target) return;
      const isInteractable = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]');
      document.documentElement.style.setProperty('--cursor-scale', isInteractable ? '1.3' : '1');
    };
    window.addEventListener('mousemove', updateInteractive);
    return () => window.removeEventListener('mousemove', updateInteractive);
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/60 backdrop-blur-[1px]"
        animate={{ x: position.x, y: position.y, scale: isHidden ? 0 : isActive ? 0.9 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 40, mass: 0.5 }}
        style={{ mixBlendMode: 'difference' }}
      />
      {/* Core dot with smooth follow */}
      <motion.div
        className="pointer-events-none fixed z-[100] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300"
        animate={{ x: position.x, y: position.y, scale: isHidden ? 0 : isActive ? 0.7 : 1, filter: isActive ? 'blur(1px)' : 'blur(0px)' }}
        transition={{ type: 'spring', stiffness: 250, damping: 30 }}
      />
    </>
  );
}

export default CustomCursor;


