"use client";
import {motion} from "framer-motion";
import Image from 'next/image';


interface ProjectProps {
    image: string;
    title:string;
    description:string;
    tags:string[];
}



export default function ProjectCard({title,description,tags,image}:ProjectProps){
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full max-w-sm group bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
    <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover"/>
    </div>
    <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-zinc-400 mt-2 leading-relaxed text-sm">{description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
    </div> 
    </motion.div>
  );
}