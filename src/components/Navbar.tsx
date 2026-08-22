"use client";

import { useState } from 'react';
import Link from 'next/link'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 py-4 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-zinc-800 text-white w-full">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link href="/" className="font-bold text-sm sm:text-xl tracking-tight pr-2 sm:pr-4">
          EVAN DENHOLM-CHAPMAN
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 md:gap-6 items-center w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t border-zinc-800 md:border-none`}>
        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-slate-200 transition-colors py-1">HOME</Link>
        <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-slate-200 transition-colors py-1">ABOUT</a>
        <Link href="/resume" onClick={() => setIsOpen(false)} className="hover:bg-slate-200 hover:text-black text-white px-4 py-2 rounded-lg font-medium transition-all active:scale-95 w-full md:w-auto text-center">RESUME</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-white hover:bg-slate-200 text-black px-4 py-2 rounded-lg font-medium transition-all active:scale-95 w-full md:w-auto text-center">CONTACT ME</Link>
      </div>
    </nav>
  );
}