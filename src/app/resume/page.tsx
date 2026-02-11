import Navbar from '@/components/Navbar';
import Heading from '@/components/heading';



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
        

    </main>
  );
}