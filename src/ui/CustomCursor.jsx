import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Position Motion Values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for buttery smoothness
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Even smoother lag for the outer ring
  const trailConfig = { stiffness: 80, damping: 15, mass: 0.8 };
  const trailX = useSpring(cursorX, trailConfig);
  const trailY = useSpring(cursorY, trailConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring - Follows with subtle lag and glow */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-sky-500/50 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHidden ? 0 : 1,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(14, 165, 233, 0.15)' : 'rgba(14, 165, 233, 0)',
          borderColor: isHovering ? 'rgba(14, 165, 233, 0.8)' : 'rgba(14, 165, 233, 0.3)',
          boxShadow: isHovering 
            ? '0 0 20px rgba(14, 165, 233, 0.4)' 
            : '0 0 0px rgba(14, 165, 233, 0)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />

      {/* Inner Dot - Faster and more precise */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference shadow-[0_0_10px_white]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHidden ? 0 : 1,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
}
