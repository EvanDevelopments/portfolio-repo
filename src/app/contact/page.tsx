import Navbar from '@/app/resume/Navbar';
import Heading from '@/components/heading';
import Footer from '@/components/footer';



export default function ContactPage() {
  return (
    <main>
        <Navbar/> 

        <div className="flex flex-col items-center justify-center pt-30 px-10 gap-10 text-white ">
            <form className="flex flex-col items-center space-y-4">
            
                <Heading title="Contact Me"/>

                    
                <div className="mt-2.5 w-full max-w-2xl">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-white-900">Email<span className="text-red-400">*</span></label>
                    <input id="email" name="email" placeholder="email@example.com" required type="email" autoComplete="email" className="block w-full rounded-md bg-zinc-900/50 px-3.5 py-2 text-base text-white-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white-600"/>
                </div>

                <div className="w-full max-w-2xl">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-white-900">Message<span className="text-red-400">*</span></label>
                    <textarea id="message" name="message" placeholder="Example message here..." required rows={4} defaultValue={""} className="block w-full rounded-md bg-zinc-900/50 px-3.5 py-2 text-base text-white-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white-600 hover:border-white/20 transition-colors"/>
                </div>

                <button type="submit" className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                    <span>Submit</span>
                </button>

            </form>
        </div>
        

        
        
        <Footer/> 
    </main>
  );
}



// git hub logo     M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z