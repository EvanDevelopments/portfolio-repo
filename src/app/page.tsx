"use client";
import {motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import Navbar from '@/components/Navbar';
import Heading from '@/components/heading';
import Image from 'next/image';
import ProjectCard from "@/components/project";
import ExperienceCard from "@/components/experience";
import HobbyCard from "@/components/hobbies";

export default function Home() {
  const myExperience = [
    {
      company: "ARM",
      role: "Software Engineer",
      description: "Worked within a team of software engineers in a structured development process to design and implement a Python-based satellite telemetry system using micro: bits, collecting real-time position and speed data to determine optimal parachute deployment timing. Engineered efficient Python algorithms on micro: bit devices to process telemetry data with high accuracy, enabling reliable decisionmaking in critical mission scenarios. Collaborated cross-functionally to integrate micro: bit hardware with satellite systems, ensuring robust performance and system reliability under real-world conditions. ",
      date: "2 Month",
      image: "/arm.jpeg"
    },

  ];
  const myProjects = [
    {
      title: "Portfolio Site",
      description: "Built with Next.js and Tailwind.",
      tags: ["Next.js", "React", "Tailwind"],
      image: "/portfolio.png"
    },
  ];

  const myHobbies = [
    {
      title: "Scuba Diving",
      description: "Active member of Loughborough University Sub Aqua society (LUSAC). Currently working towards advanced certifications and exploring diverse marine ecosystems globally. Diving has taught me disciplined preparation, composure under pressure, and the importance of the buddy system. It is also something i thoroughly enjoy doing outside of my studies", 
      image: "/scuba.png"
    },
    {
      title: "Go-Karting",
      description: "Racing at top speeds.",
      image: "/karting.jpg"
    }
  ];
  return (
    <main>
      <Navbar /> 

      <div className="flex flex-row items-center justify-center pt-40  px-10 gap-20 text-white">

        <motion.div className="max-w-xl w-[500px]" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2.1, ease: "easeOut" }}><h1 className="font-bold text-7xl tracking-tighter"><Typewriter options={{strings:['Hey, im Evan,'], autoStart:true, loop:true, delay:75, cursor:"|"}}onInit={(typewriter) => {typewriter.typeString("Hey, im Evan,").pauseFor(20000).deleteAll().start();}}/></h1><p className="text-zinc-400 mt-4 text-xl">Lougborough University, Computer Science</p><p className="text-zinc-400 mt-4 text-xl leading-1">Software Engineer</p></motion.div>
        <div className="relative w-[400px] h-[500px]">
          <Image src="/evan.jpg" alt="Evan" fill className="rounded-xl object-cover border-2 border-white/10 shadow-2xl"/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-60 px-10 gap-20 text-white ">
          <Heading title="Experience" />
          <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-5xl">
          {myExperience.map((experience, index) => (<ExperienceCard key={index} company={experience.company} description={experience.description} role={experience.role} date={experience.date} image={experience.image}/>))}
          </div>
          <Heading title="Projects" />
          <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-5xl">
          {myProjects.map((project, index) => (<ProjectCard key={index} title={project.title} description={project.description} tags={project.tags} image={project.image}/>))}
          </div>
          <Heading title="Hobbies" />
          <div className="flex flex-row flex-wrap justify-center gap-8 w-full max-w-5xl">
          {myHobbies.map((hobby, index) => (<HobbyCard key={index} title={hobby.title} description={hobby.description} image={hobby.image}/>))}
          </div>
      </div>
    </main>
  );
}