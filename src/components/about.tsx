"use client";
import {motion} from "framer-motion";


interface AboutProps {
    description:string;
}



export default function AboutCard({description}:AboutProps){
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full max-w-3xl ">
    <div className="p-6">
        <p className="text-zinc-400 text-lg t-2 leading-relaxed text-center">{description}</p>
    </div> 
    </motion.div>
  );
}