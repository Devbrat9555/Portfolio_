import aktuPrep from "../assets/projects/AktuPrep.png";
import fixit from "../assets/projects/Fixit.png";
import passwordGen from "../assets/projects/Random-Password-Generator.png";
import portfolioNew from "../assets/projects/Portfolio_new.png";

  export const projects = [
    {
      title: "AKTU Prep",
      description: "Digital repository for AKTU students providing 9GB+ study materials, curated video lectures, and expert-verified solutions.",
      techStack: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
        { name: "Express ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Clerk", logo: "https://clerk.com/favicon.ico" }
      ],
      gradientFrom: "from-transparent",
      gradientVia: "via-emerald-500/10",
      gradientTo: "to-transparent",
      borderGlow: "#10b981",
      imageUrl: aktuPrep,
      liveLink: "https://aktu-prep.onrender.com",
      githubLink: "https://github.com/Devbrat9555/aktu-prep"
    },
    {
      title: "Fixit",
      description: "A full-stack MERN home service marketplace platform where users can book services and providers can manage bookings.",
      techStack: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ],
      gradientFrom: "from-transparent",
      gradientVia: "via-cyan-500/10",
      gradientTo: "to-transparent",
      borderGlow: "#06b6d4",
      imageUrl: fixit,
      liveLink: "https://fixit-app-dev.vercel.app",
      githubLink: "https://github.com/Devbrat9555/fixit-app"
    },
    {
      title: "Password Generator",
      description: "A sleek and modern password generator web app with customizable length, character types, and a one-click copy feature with glowing neon UI.",
      techStack: [
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
      ],
      gradientFrom: "from-transparent",
      gradientVia: "via-emerald-400/10",
      gradientTo: "to-transparent",
      borderGlow: "#34d399",
      imageUrl: passwordGen,
      liveLink: "https://devbrat9555.github.io/Random-Password-Generator/",
      githubLink: "https://github.com/Devbrat9555/Random-Password-Generator"
    },
    {
      title: "Portfolio",
      description: "My personal portfolio website showcasing my projects, skills, and experience as a web developer, built with modern technologies.",
      techStack: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://www.svgrepo.com/show/374118/tailwind.svg" },
        { name: "Vite", logo: "https://vitejs.dev/logo.svg" },
        { name: "Framer Motion", logo: "https://www.framer.com/favicon.ico" }
      ],
      gradientFrom: "from-transparent",
      gradientVia: "via-cyan-400/10",
      gradientTo: "to-transparent",
      borderGlow: "#22d3ee",
      imageUrl: portfolioNew,
      liveLink: "http://localhost:5173",
      githubLink: "https://github.com/Devbrat9555/Portfolio_"
    }
  ];


