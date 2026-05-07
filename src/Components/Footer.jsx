import React from 'react'
import { SparklesCore } from '../ui/Sparkles.jsx';
import LightRays from '../ui/LightRays.jsx';
import { HoverBorderGradient } from '../ui/HoverBorderGradient.jsx';
import SocialButton from '../ui/Buttons/SocialButton.jsx';
import TiltedCard from '../ui/Cards/TiltedCard.jsx';
import devbratImg from '../assets/Devbrat.png';
import FooterNote from '../ui/FooterNote.jsx';
import logo from '../assets/Logo VA.png';
import resume from '../assets/Resume/Resume.pdf';

function Footer() {
  return (
    <>
    <footer className="bg-black text-gray-400 py-6 pt-40 relative overflow-hidden">

      <div
        className="
          footer-content 
          flex flex-col md:flex-row
          max-w-6xl mx-auto px-4
          items-center md:items-start
          justify-between
          text-center md:text-left      /* center text on mobile */
          gap-10
          pb-32 md:pb-10
        "
      >

        {/* LEFT SIDE */}
        <div className="leftside w-full md:w-1/2 flex flex-col items-center md:items-start relative z-10">
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter leading-none">
              <span className="text-white">LETS </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 italic">CONNECT</span>
            </h1>

            <p className="text-slate-400 text-lg max-w-xl leading-relaxed mx-auto md:mx-0 font-light">
              Architecting the future, one line of code at a time. <br className="hidden md:block" />
              Open for <span className="text-white font-medium">Opportunities</span> & <span className="text-white font-medium">Collaborations</span>.
            </p>
          </div>

          {/* CTA BUTTONS - REDUCED GAP */}
          <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start w-full">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="group relative">
               <div className="absolute -inset-1 bg-sky-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold tracking-widest text-xs uppercase transition-all hover:border-sky-500/50 hover:bg-white/10">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  RESUME
               </button>
            </a>

            <a href="mailto:yadavdevbrat022@gmail.com" className="group relative">
               <div className="absolute -inset-1 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <button className="flex items-center gap-2 px-8 py-4 bg-sky-500 text-white rounded-2xl font-black tracking-widest text-xs uppercase transition-all hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  GET IN TOUCH
               </button>
            </a>
          </div>
          
          <FooterNote />
        </div>

        {/*Right side Card and SOCIALS */}
        <div className="rightside w-full md:w-1/2 flex flex-col items-center md:items-end gap-12 relative z-10">
            <div className="relative group/avatar">
               <div className="absolute -inset-4 bg-sky-500/10 blur-3xl opacity-0 group-hover/avatar:opacity-100 transition-opacity"></div>
               <TiltedCard
                 imageSrc={devbratImg}
                 altText="Devbrat Yadav"
                 captionText="Devbrat Yadav"
                 containerHeight="320px"
                 containerWidth="270px"
                 imageHeight="320px"
                 imageWidth="270px"
                 rotateAmplitude={15}
                 scaleOnHover={1.05}
                 showMobileWarning={false}
                 showTooltip={true}
                 displayOverlayContent={true}
                 overlayContent={
                   <div className="w-16 h-16 bg-white/10 backdrop-blur-3xl rounded-2xl flex items-center justify-center border border-white/20">
                      <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                   </div>
                 }
               />
            </div>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-end items-center">
          <SocialButton platform="linkedin" href="https://www.linkedin.com/in/devbrat1087" tooltip="LinkedIn" />
          <SocialButton platform="github" href="https://github.com/Devbrat9555" tooltip="GitHub" />
          <SocialButton platform="leetcode" href="https://leetcode.com/u/Devbrat_yadav" tooltip="LeetCode" />
          <SocialButton platform="instagram" href="https://www.instagram.com/devbrat_yadav" tooltip="Instagram" />
          <SocialButton platform="whatsapp" href="https://wa.me/917054619727" tooltip="WhatsApp" />
        </div>

      </div>
      </div>

        {/* Stars background effect - Creates twinkling stars across the page */}
                   <div className="absolute inset-0 top-0 bottom-0 z-0  pointer-events-none overflow-hidden">

                        {/* Layer 1 — Light Rays */}
                        <div className="absolute inset-0 z-10">
                            <LightRays
                            raysOrigin="bottom-center"
                            raysColor="#ffffff"
                            raysSpeed={1}
                            lightSpread={1}
                            rayLength={0.5}
                            followMouse={true}
                            mouseInfluence={0.2}
                            noiseAmount={0}
                            distortion={0}
                            />
                        </div>

                        {/* Layer 2 — Sparkles */}
                        <div className="absolute inset-0 z-20 pt-50 flex justify-center mix-blend-screen">
                            <SparklesCore
                            background="transparent"
                            minSize={0.2}
                            maxSize={0.8}
                            particleDensity={25}
                            className="w-[30%] h-full"
                            particleColor="#FFFFFF"
                            />
                        </div>

                        </div>
                    
            {/* Planet/Globe curved horizon effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[350px] pointer-events-none" style={{overflow: 'visible'}}>
                    
          {/* SVG for perfect curved horizon line */}
          <svg 
            className="absolute bottom-0 left-0 right-0 w-full" 
            style={{overflow: 'visible'}}
            viewBox="0 0 1920 160" 
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Glow filter for the line */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dark planet background - ellipse bottom half */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="black"
              opacity="1"
            />
            
            {/* Main bright white curved horizon line */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="none"
              stroke="white"
              strokeWidth="5"
              opacity={0.7}
              filter="url(#glow)"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.9)) drop-shadow(0 0 20px rgba(255,255,255,0.6))'
              }}
            />
            
            {/* Additional glow layer */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="7"
              style={{
                filter: 'blur(8px)'
              }}
            />
            
            {/* Outer glow layer */}
            <ellipse
              cx="960"
              cy="1000"
              rx="1800"
              ry="900"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="15"
              style={{
                filter: 'blur(15px)'
              }}
            />
          </svg>
        </div>
        </footer>
    </>
  )
}

export default Footer;