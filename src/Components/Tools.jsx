import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useSpring, animate } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript,
  SiVite, SiNodedotjs, SiExpress, SiGithub, SiGit,
  SiFigma, SiCplusplus, SiMongodb, SiPython
} from "react-icons/si";

const techLogos = [
  { node: <SiCplusplus className="text-[#00599C]" />, label: "C++", url: "https://isocpp.org/" },
  { node: <SiReact className="text-[#61DAFB]" />, label: "React", url: "https://react.dev/" },
  { node: <SiHtml5 className="text-[#E34F26]" />, label: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3 className="text-[#3178C6]" />, label: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript className="text-[#F7DF1E]" />, label: "JS", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind", url: "https://tailwindcss.com/" },
  { node: <SiMongodb className="text-[#47A248]" />, label: "MongoDB", url: "https://www.mongodb.com/" },
  { node: <SiNodedotjs className="text-[#339933]" />, label: "Node.js", url: "https://nodejs.org/" },
  { node: <SiExpress className="text-[#FFFFFF]" />, label: "Express", url: "https://expressjs.com/" },
  { node: <SiPython className="text-[#3776AB]" />, label: "Python", url: "https://www.python.org/" },
  { node: <SiGithub className="text-[#FFFFFF]" />, label: "GitHub", url: "https://github.com/" },
  { node: <SiGit className="text-[#F05032]" />, label: "Git", url: "https://git-scm.com/" }
];

export default function Skills() {
  const orbitRef = useRef(null);
  const rotationY = useMotionValue(0);
  const speed = useMotionValue(0.2); // Normal speed
  const smoothSpeed = useSpring(speed, { stiffness: 50, damping: 20 });
  const [radius, setRadius] = useState(450);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(180);
      else if (window.innerWidth < 1024) setRadius(300);
      else setRadius(450);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useAnimationFrame((time, delta) => {
    const currentRotation = rotationY.get();
    rotationY.set(currentRotation + smoothSpeed.get());
    if (orbitRef.current) {
      orbitRef.current.style.transform = `rotateY(${rotationY.get()}deg)`;
    }
  });

  const handleMouseEnter = () => {
    animate(speed, 0.02, { duration: 1.5, ease: "easeOut" }); // Slow down smoothly
  };

  const handleMouseLeave = () => {
    animate(speed, 0.2, { duration: 1.5, ease: "easeIn" }); // Speed up smoothly
  };

  return (
    <div className="relative h-[600px] w-full flex items-center justify-center overflow-hidden py-20 group">
      {/* Background Decorative Glow */}
      <div className="absolute w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full -z-10"></div>

      <div className="absolute flex flex-col items-center gap-4 z-20 pointer-events-none">
          <span className="text-[10px] text-sky-500 font-bold tracking-[0.5em] uppercase">Digital Arsenal</span>
          <h2 className="text-4xl font-black text-white/10 uppercase italic">Interactive Orbit</h2>
      </div>

      {/* The 3D Orbit Stage */}
      <div 
        className="relative w-full h-full flex items-center justify-center perspective-[1200px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={orbitRef}
          className="relative w-[300px] h-[300px] flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {techLogos.map((item, index) => {
            const total = techLogos.length;
            const angle = (index / total) * 360;
            return (
              <a 
                key={index} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <motion.div
                  className="flex flex-col items-center gap-3 p-6 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl transition-all duration-500"
                  whileHover={{ 
                    scale: 1.15, 
                    backgroundColor: "rgba(14, 165, 233, 0.08)", 
                    borderColor: "rgba(14, 165, 233, 0.4)",
                    y: -10
                  }}
                  style={{
                    transform: `rotateY(${-angle}deg)`, // Counter-rotate to face the camera
                  }}
                >
                  <div className="text-5xl">
                    {item.node}
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 font-black uppercase tracking-[0.2em]">
                    {item.label}
                  </span>
                </motion.div>
              </a>
            )
          })}
        </div>
      </div>

      <style jsx="true">{`
        .perspective-[1200px] {
          perspective: 1200px;
        }
      `}</style>
    </div>
  )
}

