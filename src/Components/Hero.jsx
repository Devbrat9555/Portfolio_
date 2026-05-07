import React from 'react'
import { SparklesCore } from '../ui/Sparkles.jsx';
import LightRays from '../ui/LightRays.jsx';
import resume from '../assets/Vrat_Resume_.pdf';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617] selection:bg-sky-500/30">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={35}
          className="w-full h-full"
          particleColor="#38bdf8"
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#0ea5e9"
          raysSpeed={0.4}
          lightSpread={2}
          rayLength={1}
          followMouse={true}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 mt-[-10vh]">
        
        {/* Status Chip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-14"
        >
          <div className="group relative px-8 py-3 bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-2xl flex items-center gap-4 transition-all hover:border-sky-500/40 hover:bg-white/[0.05]">
            <div className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </div>
            <span className="text-xs text-gray-400 font-black tracking-[0.5em] uppercase group-hover:text-sky-300 transition-colors">Software Engineer</span>
          </div>
        </motion.div>

        {/* Name Intro */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-10"
        >
           <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 italic drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">Devbrat Yadav</span>
           </h1>
        </motion.div>

        {/* Bio Text - Refined */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-xl md:text-3xl max-w-4xl leading-relaxed mb-20 font-light tracking-tight"
        >
          Specializing in <span className="text-white font-medium border-b-2 border-sky-500/20">Full-Stack Development</span> & <span className="text-white italic">Algorithm Design</span>. <br className="hidden md:block" /> 
          I engineer digital solutions that are as <span className="text-sky-400">robust</span> as they are <span className="text-white italic tracking-widest">elegant</span>.
        </motion.p>

        {/* Action Buttons - ULTIMATE 'WOW' DESIGN */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-10 justify-center items-center w-full"
        >
          {/* Resume Button - Magnetic Glass */}
          <a href={resume} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group">
            <button className="relative w-full sm:w-auto px-14 py-6 bg-transparent border border-sky-500/30 rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.05] active:scale-95 shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:shadow-[0_0_50px_rgba(14,165,233,0.3)]">
               <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <span className="relative text-white font-black text-xs tracking-[0.4em] uppercase group-hover:text-white transition-colors">Get Resume</span>
               {/* Hover Shine Effect */}
               <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>
            </button>
          </a>
          
          {/* Contact Button - Liquid Border */}
          <a href="#contact" className="w-full sm:w-auto group">
            <button className="relative w-full sm:w-auto px-14 py-6 bg-white text-black font-black text-xs tracking-[0.4em] rounded-full transition-all duration-500 hover:bg-transparent hover:text-white border border-transparent hover:border-white/20 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-3">
                LET'S TALK
                <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </a>
        </motion.div>
      </div>

      {/* THE "MOON" HORIZON - ENHANCED */}
      <div className="absolute bottom-0 left-0 right-0 h-[45vh] pointer-events-none z-20 overflow-hidden">
        <div className="absolute bottom-[-25vh] left-1/2 -translate-x-1/2 w-[180vw] h-[70vh] bg-[#010617] border-t-[1px] border-sky-500/30 rounded-[100%]">
          <div className="absolute inset-0 bg-gradient-to-t from-sky-500/[0.02] via-sky-500/[0.05] to-transparent rounded-[100%] shadow-[0_-20px_80px_rgba(14,165,233,0.15)]"></div>
        </div>
      </div>

    </div>
  )
}


