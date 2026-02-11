"use client";
import {motion} from "framer-motion";
import Typewriter from 'typewriter-effect';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import Heading from '@/components/heading';
import Image from 'next/image';
import ProjectCard from "@/components/project";
import ExperienceCard from "@/components/experience";
import HobbyCard from "@/components/hobbies";
import AboutCard from "@/components/about"
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);


  const myAbout = [
    {
      description: "My name is Evan Denholm-Chapman and I'm a Full-Stack Developer based in the United Kingdom, currently studying Computer Science at Loughborough University. On the front-end, i specialize in the React, specifically Next.js and Tailwind CSS. My back-end specializations include Python, Java and C, alongside MySQL and Git Version Control.",
    },

  ];


  const myExperience = [
    {
      company: "ARM",
      role: "Software Engineer | Internship",
      description: "Worked within a team of software engineers in a structured development process to design and implement a Python-based satellite telemetry system using micro:bits, collecting real-time position and speed data to determine optimal parachute deployment timing. Engineered efficient Python algorithms on micro: bit devices to process telemetry data with high accuracy, enabling reliable decisionmaking in critical mission scenarios. Collaborated cross-functionally to integrate micro: bit hardware with satellite systems, ensuring robust performance and system reliability under real-world conditions. ",
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
    {
      title: "COVID-19 Cases In Realtime",
      description: "A specialized data processing tool developed to analyze the geographic and temporal spread of COVID-19 across the United States. Using Python and libraries such as GeoPandas and Mapclassify, I engineered a week-by-week aggregation engine to normalize daily reporting fluctuations, effectively revealing the underlying growth curves. The project transforms raw public health datasets into a series of clear, high-fidelity time-series visualizations, focusing on the velocity of infection rates and regional hotspot identification.To handle the computational load of processing millions of data points, I utilized Joblib for parallel processing, ultimately compiling the time-series maps into an animated visual narrative using ImageIO.",
      tags: ["Python", "GeoPandas", "Pandas", "Matplotlib", "Joblib", "ImageIO", "Mapclassify"],
      image: "/covid2.jpg"
    },
    {
      title: "F1 Race Predictor",
      description: "An end-to-end machine learning pipeline to forecast Formula 1 race results. By processing over 50,000 historical records from 1950–2020, I engineered a Random Forest Regression model that predicts finishing positions based on grid placement, constructor standings, and fastest lap telemetry. The model features custom hyperparameter optimization using RandomizedSearchCV and achieves high accuracy within a ±1 position margin.",
      tags: ["Python", "Scikit-Learn", "GeoPandas", "Pandas", "NumPy", "Random Forest"],
      image: "/f1.jpg"
    }
  ];

  const myHobbies = [
    {
      title: "Scuba Diving",
      description: "Active member of Loughborough University Sub Aqua society (LUSAC). Currently working towards advanced certifications and exploring diverse marine ecosystems globally. Diving has taught me disciplined preparation, composure under pressure, and the importance of the buddy system. It is also something i thoroughly enjoy doing outside of my studies", 
      image: "/scuba.png"
    },
    {
      title: "Go-Karting",
      description: "Active member of the University Karting society. Whether it's shaving tenths of a second off a lap time or competing in sprint races, I love the mix of high-speed strategy and mechanical precision. It’s my favorite way to reset and stay sharp outside of studying.",
      image: "/karting.jpg"
    },
    {
      title: "Gym",
      description: "Active member of the University gym with a usual commitment to a 5-day weekly training split, emphasizing discipline, consistency, and progressive overload. I find that regular strength training not only improves my physical health but also enhances my mental focus and resilience.",
      image: "/gym.jpg"
    }
  ];
  return (
    <main>
      <Navbar/> 

      <div className="flex flex-row items-center justify-center pt-40  px-10 gap-20 text-white">

        <motion.div className="max-w-xl w-[500px]" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2.1, ease: "easeOut" }}><h1 className="font-bold text-7xl tracking-tighter"><Typewriter options={{strings:['Hey, im Evan,'], autoStart:true, loop:true, delay:75, cursor:"|"}}onInit={(typewriter) => {typewriter.typeString("Hey, im Evan,").pauseFor(20000).deleteAll().start();}}/></h1><p className="text-zinc-400 mt-4 text-xl">Lougborough University, Computer Science</p><p className="text-zinc-400 mt-4 text-xl leading-1">Software Engineer</p></motion.div>
        <div className="relative w-[400px] h-[500px]">
          <Image src="/evan.jpg" alt="Evan" fill className="rounded-xl object-cover border-2 border-white/10 shadow-lg"/>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-60 px-10 gap-20 text-white ">
          <Heading title="About"/>
          <div id="about" className="scroll-mt-100">
          {myAbout.map((about, index) => (<AboutCard key={index} description={about.description}/>))}
          </div>
          <Heading title="Experience"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
          {myExperience.map((experience, index) => (<ExperienceCard key={index} company={experience.company} description={experience.description} role={experience.role} date={experience.date} image={experience.image}/>))}
          </div>
          <Heading title="Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
          {myProjects.map((project, index) => (<ProjectCard key={index} title={project.title} description={project.description} tags={project.tags} image={project.image}/>))}
          </div>
          <Heading title="Hobbies" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 mb-20">
          {myHobbies.map((hobby, index) => (<HobbyCard key={index} title={hobby.title} description={hobby.description} image={hobby.image}/>))}
          </div>
      </div>
      <Footer/> 
    </main>
  );
}