import Navbar from '@/app/resume/Navbar';
import Heading from '@/components/heading';
import Footer from '@/components/footer';



export default function ResumePage() {
  return (
    <main>
        <Navbar/> 

        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-start pl-60 items-center h-[calc(100vh-80px)]">
                <iframe className="h-[90%] aspect-[1/1.41] rounded-lg" src="/Evan Denholm-Chapman Resume.pdf#view=FitV"></iframe>
            </div>


            <div className="py-70 px-55 text-white flex flex-col items-center gap-5">
                <Heading title="Resume"/>
                <a href="/Evan Denholm-Chapman Resume.pdf" download>
                    <button className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Download</span>
                    </button>
                </a>
            </div>

        </div>
        
        <Footer/> 
    </main>
  );
}



// git hub logo     M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z