import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Globe } from 'lucide-react';

const skills = [
  {
    title: "DSA & Problem Solving",
    description: "Mastering Data Structures and Algorithms in C++ to solve complex problems efficiently and optimize code performance.",
    icon: <Cpu className="w-8 h-8 text-sky-400" />,
    gradient: "from-sky-500/20 to-transparent"
  },
  {
    title: "MERN Stack Development",
    description: "Designing and building dynamic web applications using MongoDB, Express, React, and Node.js for seamless user experiences.",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    title: "Scalable Web Architectures",
    description: "Building robust backend systems and integrating APIs to ensure applications are scalable, secure, and high-performing.",
    icon: <Terminal className="w-8 h-8 text-emerald-400" />,
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Algorithm Optimization",
    description: "Continuous testing and refinement of algorithms to reduce time complexity and improve overall system efficiency.",
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    gradient: "from-blue-500/20 to-transparent"
  }
];

export default function Expertise() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <span className="text-[10px] text-sky-500 font-bold tracking-[0.5em] uppercase mb-4">Core Competencies</span>
          <h2 className="text-4xl md:text-6xl font-black text-white text-center">EXPERTISE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-10 bg-white/[0.02] border border-white/5 rounded-[32px] overflow-hidden hover:border-white/20 transition-all duration-500`}
            >
              {/* Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  {skill.description}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <div className="w-12 h-12 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
