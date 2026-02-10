import Link from 'next/link'; 



export default function Navbar({}) {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#0f0f0f] border-b border-zinc-800 text-white w-full">
      <div className="font-bold text-xl tracking-tight">EVAN DENHOLM-CHAPMAN</div>

      <div className="flex gap-6 items-center">
          <Link href="/" className="hover:text-slate-200 transition-colors">HOME</Link>
          <a href="#about" className="hover:text-slate-200 transition-colors">ABOUT</a>
          <Link href="/resume" className=" hover:bg-slate-200 hover:text-black text-white px-4 py-2 rounded-lg font-medium transition-all active:scale-95">RESUME</Link>
          <Link href="/contact" className="bg-white hover:bg-slate-200 text-black px-4 py-2 rounded-lg font-medium transition-all active:scale-95">CONTACT ME</Link>
      </div>
   
    </nav>
  );
}