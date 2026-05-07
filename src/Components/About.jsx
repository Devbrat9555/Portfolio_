import ScrollTimeline from "../ui/ScrollTimeline";

const events = [
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science",
    subtitle: "Prasad Institute of Technology, Jaunpur",
    description: "Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow. Focus on Software Engineering and Core Algorithms.",
  },
  {
    year: "2024",
    title: "DSA Milestone",
    subtitle: "LeetCode Proficiency",
    description: "Solved 100+ challenges in C++ & DSA, mastering data structures and competitive programming patterns.",
  },
]

const AboutmeText = [
  {
  paragraph: `Hi there!
I'm Devbrat Yadav, a final-year B.Tech student at Prasad Institute of Technology, Jaunpur (affiliated with Dr. A.P.J. Abdul Kalam Technical University, Lucknow), batch 2022-2026. 

I am a passionate Full-Stack Developer and DSA enthusiast who loves building scalable web applications and solving complex algorithmic challenges. Currently, I'm mastering Data Structures & Algorithms in C++ and building real-world solutions using the MERN stack.

My focus is on architecting high-performance applications and optimizing code for efficiency. I'm always eager to collaborate and bring innovative ideas to life through clean, scalable code.`
}

]


export default function About() {
  return (
    <>  
  
    <div className="flex items-center justify-center gap-3 mb-6 mt-12">
      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>

      <span className="text-gray-500 text-sm font-medium tracking-[0.3em] uppercase">ABOUT</span>

      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
      </svg>
    </div>

    <ScrollTimeline 
      events={events}
      title="My Journey so far"
      subtitle="Scroll to explore the timeline"
      aboutTitle="About Me"
      aboutText={AboutmeText[0].paragraph}
      animationOrder="sequential"
      progressIndicator={true}
      cardAlignment="Right"
      revealAnimation="fade"
      darkMode={true}
    />
    </>
  )
}