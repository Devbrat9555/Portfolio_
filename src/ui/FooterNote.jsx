import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FooterNote() {
  const icons = ["✨", "🚀", "💻"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 pt-12 border-t border-white/5 w-full">
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase">DESIGNED & BUILT BY</span>
        <span className="text-xs text-white font-black tracking-widest">DEVBRAT YADAV</span>
      </div>

      <div className="hidden md:block h-4 w-[1px] bg-white/10"></div>

      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold tracking-[0.2em]">
        <span>{new Date().getFullYear()}</span>
        <span>•</span>
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.5 }}
          className="text-white"
        >
          {icons[index]}
        </motion.span>
      </div>
    </div>
  );
}
