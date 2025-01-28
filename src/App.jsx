import React from "react";
import { motion } from "motion/react";
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import Hannan from "../src/components/image/Hannan.jpg";
import bl from "../src/components/image/bl.jpg";
import ec from "../src/components/image/ec.webp";
import ta from "../src/components/image/task.webp";
import p1 from "./projectpic/pr1.png";
import p2 from "./projectpic/studenthelp.jpg";
import p3 from "./projectpic/bitebuddy.avif";
import p4 from "./projectpic/batman.jpg";
import p5 from "./projectpic/static.webp";
import p6 from "./projectpic/aircraft-63032.jpg";
import p7 from "./projectpic/chat.webp";

function App() {
  const Skills = [
    { name: "Java", },
    { name: "Python",  },
    { name: "C/C++",  },
    { name: "JavaScript",  },
    { name: "TypeScript", },
    { name: "Dart", },
    { name: "HTML",  },
    { name: "CSS", },
    { name: "React.js",  },
    { name: "Node.js",  },
    { name: "Express.js",  },
    { name: "Next.js", },
    { name: "Django", },
    { name: "Flask",  },
    { name: "Flutter",  },
    { name: "Tailwind",  },
    { name: "Git",  },
    { name: "Docker",  },
    { name: "Postman",  },
    { name: "Kubernetes", },
    { name: "Numpy",  },
    { name: "Pandas",  },
    { name: "AWS",  },
    { name: "MongoDB",  },
    { name: "Firebase",  },
    { name: "Linux",  },
    { name: "Redux",  },
    { name: "Zustand",  },
  ];
  
  // Function to generate random animation
  const getRandomAnimation = () => {
    const randomValue = Math.random();
    if (randomValue < 0.33) {
      return { initial: { opacity: 0, y: -200 }, whileInView: { opacity: 1, y: 0 } };
    } else if (randomValue < 0.66) {
      return { initial: { opacity: 0, x: -200 }, whileInView: { opacity: 1, x: 0 } };
    } else {
      return { initial: { opacity: 0, x: 200 }, whileInView: { opacity: 1, x: 0 } };
    }
  };

  const cardsData = [
    {
      img: p6,
      desc: "An E-commerce Web Application. Developed using React, Next.js, TypeScript, Tailwind CSS, featuring Stripe payment integration, CMS, and user authentication.",
      stack:[ "Next, TypeScript, MongoDB, Stripe, Tailwind"],
      title: "Hyper-Cart",
      link: "https://github.com/hannan-siddiqui/Hyper-Cart",
    },
    {
      img: p7,
      desc: "Chatify - A real-time chat app built with MERN, Socket.io, and TailwindCSS. Features JWT-based authentication, online user status, and global state management with Zustand.",
      stack: ["React, Node, Express, MongoDB, Tailwind, Socket.io"],
      title: "Chatify",
      link: "https://github.com/hannan-siddiqui/Chatify",
    },
    {
      img: p1,
      desc: "A blogging platform tailored specifically for the automobile industry. It incorporates React for the front-end, while the back-end is powered by Django framework.",
      stack: ["React, Redux, Django, MongoDB, Firebase, Tailwind"],
      title: "Cruise-Chronicles",
      link: "https://github.com/hannan-siddiqui/Cruise_Chronicles",
    },
    {
      img: p2,
      desc: "Student-Help is an e-learning platform designed to bridge the gap between students and recruiters. It provides a space for students to showcase their skills, projects, and work experience.",
      stack: ["React, Redux, Django, MongoDB, Firebase, Tailwind"],
      title: "Student-Help",
      link: "https://github.com/hannan-siddiqui/Student-Help",
    },
    {
      img: p3,
      desc: "BiteBuddy is a food ordering app built using ReactJS, Tailwind CSS, ReduxJS, and the Swiggy API.",
      stack: ["React, Redux, Firebase, Tailwind"],
      title: "Bite-Buddy",
      link: "https://github.com/hannan-siddiqui/BiteBuddy",
    },
    {
      img: p4,
      desc: "Netflix-GPT - OTT Platform developed using React, Redux, Firebase, Tailwind CSS, and offers a movie recommendation system using AI.",
      stack: ["React, OpenAI API, Firebase, Tailwind"],
      title: "Netflix GPT",
      link: "https://github.com/hannan-siddiqui/Netflix-Gpt",
    },
    {
      img: p5,
      desc: "Online Auction System - A dynamic auction platform using Django. The project incorporates HTML, CSS, and JavaScript for the frontend with the Django framework.",
      stack: ["HTML, CSS, JavaScript, Django, SQLite"],
      title: "Static",
      link: "https://github.com/hannan-siddiqui/Static",
    },
  ];
  

  return (
    <div className="overflow-hidden min-h-screen lg:pl-64   ">
      <Sidebar />

      {/* Main Content */}
      <main className="px-4 py-8">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[calc(100vh-2rem)] flex items-center justify-center relative"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-pink-500/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-rose-500/30 rounded-full filter blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8 relative">
              {/*  image ... */}
              <div className="w-[300px] h-[300px] mx-auto mb-6 rounded-full overflow-hidden glass-effect p-1">
                <motion.img
                  initial={{ opacity: 0.4, scale: 0.3 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                  src={Hannan}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm <span className="gradient-text">Hannan Siddiqui</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              className="text-xl md:text-3xl text-[#D8C9AE] mb-12 max-w-2xl mx-auto"
            >
              Full Stack Developer crafting beautiful digital experiences with
              modern technologies
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                href="#contact"
                className="px-8 py-4 rounded-full text-xl  bg-gradient-to-r from-red-500 to-violet-500 text-white font-medium hover:opacity-30 transition-opacity"
              >
                Get in touch
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                href="#projects"
                className="px-8 py-4 rounded-full glass-effect text-red-800 text-xl bg-neutral-700 font-medium hover:bg-gradient-to-r from-stone-800 to-neutral-500 transition-colors"
              >
                View my work
              </motion.a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              About Me
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="text-[#D8C9AE]  mb-6 md:text-2xl text-xl font-mono font-semibold leading-10 text-center"
              >
                I'm a passionate full-stack developer with 1 years of experience
                building web applications. I specialize 
                modern web technologies. When I'm not coding, you can find me
                exploring new technologies or contributing to open-source
                projects.
              </motion.p>
              <div className="my-6 md:my-20 w-[100%] h-[1px] bg-slate-800">

              </div>
              <motion.p
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="md:mt-10 text-[#D8C9AE] leading-9 font-mono text-center text-xl md:text-2xl"
              >
                My approach to development focuses on creating clean,
                maintainable code and delivering exceptional user experiences.
                I'm always eager to take on new challenges and learn from every
                project I work on.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {Skills.map((skill, index) => {
        const animation = getRandomAnimation();
        return (
          <motion.div
            key={index}
            initial={animation.initial}
            whileInView={animation.whileInView}
            viewport={{ once: false }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          >
            <SkillBadge name={skill.name} level={skill.level} />
          </motion.div>
        );
      })}
    </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">


<div className="max-w-4xl mx-auto">
  {/* Animated Heading */}
  <motion.h2
    className="text-4xl font-bold text-center mb-12 gradient-text"
    initial={{ opacity: 0, y: -200 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 1.2, ease: "easeOut" }}
  >
    Featured Projects
  </motion.h2>

  {/* Animated Project Cards */}
  <div className="grid md:grid-cols-2 gap-8">
      {cardsData.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 200 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1.3,
            ease: "easeOut",
            delay: index * 0.2, // Staggered animation
          }}
        >
          <ProjectCard
            title={project.title}
            description={project.desc}
            image={project.img}
            technologies={project.stack}
            githubUrl={project.link}
          />
        </motion.div>
      ))}
    </div>
</div>


        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
          initial={{ opacity: 0, scaleY:0 }}
          whileInView={{ opacity: 1, scaleY:1}}
          viewport={{ once: false }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          
          className="max-w-4xl mx-auto ">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Get in Touch
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
