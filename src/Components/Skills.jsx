import React from 'react'
import SpotlightCard from '../ui/Cards/SpotlightCard';
import analysisImg from '../assets/Skills/Business Plan.png';
import uiuxImg from '../assets/Skills/UI-UX design.png';
import developmentImg from '../assets/Skills/Development.png';
import testingImg from '../assets/Skills/Usability testing.png';
import { LettersPullUp } from './../framer/LettersPullUp';

function Skills() {
  return (
    <>  
    <div className="max-w-6xl mx-auto text-center pt-32 pb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-sky-500/50"></div>
              <span className="text-sky-500 text-xs font-bold tracking-[0.4em] uppercase">EXPERTISE</span>
              <div className="h-[1px] w-12 bg-sky-500/50"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Toolkit.</span>
            </h2>
        </div>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      
      {/* Card 1 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(16, 185, 129, 0.2)"
      >
        <img
          src={analysisImg}
          alt="DSA & Problem Solving"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          DSA & Problem Solving
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Mastering Data Structures and Algorithms in C++ to solve complex problems 
          efficiently and optimize code performance.
        </p>
      </SpotlightCard>

      {/* Card 2 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(6, 182, 212, 0.2)"
      >
        <img
          src={uiuxImg}
          alt="MERN Stack Development"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          MERN Stack Development
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Designing and building dynamic web applications using MongoDB, Express, 
          React, and Node.js for seamless user experiences.
        </p>
      </SpotlightCard>

      {/* Card 3 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(139, 92, 246, 0.2)"
      >
        <img
          src={developmentImg}
          alt="Scalable Web Architectures"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          Scalable Web Architectures
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Building robust backend systems and integrating APIs to ensure 
          applications are scalable, secure, and high-performing.
        </p>
      </SpotlightCard>

      {/* Card 4 */}
      <SpotlightCard
        className="custom-spotlight-card p-6 rounded-2xl flex flex-col gap-4"
        spotlightColor="rgba(244, 63, 94, 0.2)"
      >
        <img
          src={testingImg}
          alt="Algorithm Optimization"
          className="w-full h-40 object-cover rounded-xl"
        />

        <h3 className="text-lg font-semibold text-white">
          Algorithm Optimization
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Continuous testing and refinement of algorithms to reduce time 
          complexity and improve overall system efficiency.
        </p>
      </SpotlightCard>

    </div>
    </>
  )
}

export default Skills;