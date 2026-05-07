import React from 'react';
import logo from '../assets/Logo VA.png';
import resume from '../assets/Resume/Resume.pdf';
import { Home, User, Briefcase, Mail, Layers} from 'lucide-react';  
import Particles from '../ui/Particles.jsx';
import { NavBar } from '../Components/NavBar.jsx';
import CustomCursor from '../ui/CustomCursor.jsx';
import Hero from '../Components/Hero';
import Tools from '../Components/Tools.jsx';
import ProjectCard from '../Components/ProjectCard';
import { projects } from "../Components/ProjectData";
import AboutSection from '../Components/AboutSection';
import Expertise from '../Components/Expertise.jsx';
import Footer from '../Components/Footer.jsx';
import { LettersPullUp } from './../framer/LettersPullUp';


// Function to calculate sticky top position based on index and screen size
const getStickyTop = (index) => {
  if (window.innerWidth < 640) {
    // Mobile
    return 0 + index * 5;
  } else if (window.innerWidth < 1024) {
    // Tablet
    return 75 + index * 10;
  } else {
    // Desktop
    return 150 + index * 10;
  }
};

const navItems = [
  { name: 'Home', url: '#hero', icon: Home },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Skills', url: '#skills', icon: Layers},
  { name: 'About', url: '#about', icon: User },
  { name: 'Contact', url: '#contact', icon: Mail }
];

export default function HomePage() {
  return (
    <> 
    <CustomCursor />
    <main >
    <section id="hero">
    <div className="min-h-screen bg-[#010617]
  bg-[radial-gradient(circle_at_bottom,_rgba(14,165,233,0.15)_0,_rgba(15,23,42,1)_45%,_#020617_80%)] relative overflow-hidden">

    
      {/* Navbar at top */}
      <NavBar 
        items={navItems} 
        logoUrl={logo}
        resumeUrl={resume}
      />
      
      {/* Main Hero Content */}
      <Hero />

      {/* Tools marquee - Scrolling logos */}
      <Tools />
        
    </div>
</section> 



      {/* Project Section Scroll Stack */}
      
<section id='projects'
  className="project-section  bg-gradient-to-b from-[black] via-[#064e3b]/20 to-[black] px-4 "
>
  <div className="max-w-6xl mx-auto text-center pt-32 pb-8">
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="h-[1px] w-12 bg-sky-500/50"></div>
      <span className="text-sky-500 text-xs font-bold tracking-[0.4em] uppercase">SELECTED WORKS</span>
      <div className="h-[1px] w-12 bg-sky-500/50"></div>
    </div>

    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
      Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Future.</span>
    </h2>
  </div>

  <div className="relative flex flex-col h-full max-w-5xl mx-auto gap-6 mt-12">
  
  {projects.map((project, index) => (
    <div 
      key={index}
      className="w-full"
      style={{
        position: "sticky",
        top: `${getStickyTop(index)}px`,
      }}
    >
      <ProjectCard {...project} />
    </div>
  ))}
</div>
</section>
{/* Expertise Section */}
<section id="skills" className="bg-[black] px-4"> 
      <Expertise />
</section> 

      {/* About Section*/}   
    <section id="about" className="bg-black py-20 px-4">  
      <AboutSection />
    </section> 
 
    </main>
    <footer id='contact'>
      <Footer />
    </footer>
    </>
  );
}