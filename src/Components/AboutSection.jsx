import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science",
    institution: "Prasad Institute of Technology, Jaunpur",
    description: "Affiliated with AKTU, Lucknow. Deep diving into Software Engineering, Core Algorithms, and Full-Stack development.",
    status: "In Progress"
  },
  {
    year: "2024",
    title: "DSA Milestone",
    institution: "LeetCode Proficiency",
    description: "Solved 100+ algorithmic challenges in C++, mastering complex data structures and competitive patterns.",
    status: "Achieved"
  },
  {
    year: "Present",
    title: "MERN Specialization",
    institution: "Full-Stack Development",
    description: "Architecting high-performance web applications and optimizing backend systems for scalability.",
    status: "Current"
  }
];

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Intro Grid - Reduced Gap */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] text-sky-500 font-bold tracking-[0.5em] uppercase mb-4 block">My Narrative</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">About Me</h2>
            <div className="w-16 h-1.5 bg-sky-500 rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Hi, I'm <span className="text-white font-bold">Devbrat Yadav</span>. I transform complex challenges into <span className="text-white italic">elegant digital solutions</span>. 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-white/[0.03] border border-white/5 rounded-[32px] backdrop-blur-3xl relative"
          >
             <p className="text-lg text-slate-400 leading-relaxed font-light">
                Currently a final-year CS student at <span className="text-white font-medium">Prasad Institute of Technology, Jaunpur</span>. 
                I focus on the <span className="text-sky-400">MERN stack</span> and <span className="text-sky-400">DSA</span>, 
                building applications that are as scalable as they are performant.
             </p>
             <div className="mt-6 flex flex-wrap gap-3">
                <div className="px-3 py-1.5 bg-sky-500/10 rounded-lg border border-sky-500/20 text-sky-400 text-[10px] font-bold uppercase tracking-widest">AKTU, Lucknow</div>
                <div className="px-3 py-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Batch 2022-26</div>
             </div>
          </motion.div>
        </div>

        {/* Cinematic Timeline */}
        <div className="relative">
          {/* Enhanced Neon Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 w-full bg-gradient-to-b from-sky-400 via-blue-500 to-transparent shadow-[0_0_20px_rgba(14,165,233,0.8)]"
            ></motion.div>
          </div>
          
          <div className="space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Node with Icon */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-[#020617] border-2 border-sky-500/50 rounded-xl shadow-[0_0_15px_rgba(14,165,233,0.3)] z-20 flex items-center justify-center backdrop-blur-3xl group">
                   {index === 0 ? <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg> : 
                    index === 1 ? <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> :
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className="text-sky-400 font-black tracking-widest text-xs mb-1">{item.year}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-1 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-sky-500/60 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{item.institution}</p>
                    <div className={`p-6 bg-white/[0.02] border border-white/5 rounded-2xl max-w-lg ${index % 2 === 0 ? '' : 'text-right'}`}>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
