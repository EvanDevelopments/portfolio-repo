"use client";
import {motion} from "framer-motion";
import Image from 'next/image';


interface ExperienceProps {
    image: string;
    company:string;
    role:string;
    description:string;
    date:string;
}



export default function ExperienceCard({image,company,role,description,date}:ExperienceProps){
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full max-w-sm group bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
    <div className="relative h-48 w-full">
        <Image src={image} alt={company} fill className="object-cover"/>
    </div>
    <div className="p-6">
        <h3 className="text-2xl font-bold">{company}</h3>
        <p className="text-white mt-2 leading-relaxed font-bold">{role} | {date}</p>
        <p className="text-zinc-400 text-sm t-2 leading-relaxed">{description}</p>
    </div> 
    </motion.div>
  );
}