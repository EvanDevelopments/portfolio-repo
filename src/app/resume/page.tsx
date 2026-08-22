import Navbar from '@/components/Navbar';
import Heading from '@/components/heading';
import Footer from '@/components/footer';

export default function ResumePage() {
  return (
    <main className="w-full max-w-full overflow-x-hidden min-h-screen bg-[#0f0f0f]">
      <Navbar /> 

      <div className="flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 px-4 sm:px-8 text-white max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <Heading title="Resume"/>
          
          <a 
            href="/CV Evan Denholm-Chapman.pdf" 
            download 
            className="bg-white hover:bg-zinc-200 text-black font-bold py-2.5 px-5 rounded-lg inline-flex items-center active:scale-95 transition-all shadow-lg"
          >
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            <span>Download PDF</span>
          </a>
        </div>
        <div className="w-full max-w-3xl flex justify-center items-center">
          <iframe 
            className="w-full h-[500px] sm:h-[650px] lg:h-[800px] rounded-xl border border-zinc-800 shadow-2xl bg-zinc-900" 
            src="/CV Evan Denholm-Chapman.pdf#view=FitH"
            title="Evan Denholm-Chapman Resume"
          />
        </div>

      </div>
      
      <Footer /> 
    </main>
  );
}



