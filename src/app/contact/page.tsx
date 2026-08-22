import Navbar from '@/components/Navbar';
import Heading from '@/components/heading';
import Footer from '@/components/footer';



export default function ContactPage() {
  return (
    <main>
        <Navbar/> 

        <div className="flex flex-col items-center justify-center pt-40 px-10 gap-10 text-white">
            <form className="flex flex-col items-center space-y-4" method="POST" action="https://formspree.io/f/xdalpdyb">
            
                <Heading title="Contact Me"/>

                <input type="text" name="_gotcha" style={{ display: 'none' }} />


                <div className="flex flex-col-1 mt-2.5 w-full max-w-2xl gap-2">

                    <div className="flex-1">

                        <label htmlFor="first_name" className="block text-sm/6 font-semibold text-white-900">First Name<span className="text-white-400">*</span></label>
                        <input id="first_name" name="first_name" placeholder="John" required type="text" autoComplete="given-name" className="block w-full rounded-md bg-zinc-900/50 px-3.5 py-2 text-base text-white-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white-600"/>
                    
                    </div>

                    <div className="flex-1">
                   
                        <label htmlFor="last_name" className="block text-sm/6 font-semibold text-white-900">Last Name<span className="text-white-400">*</span></label>
                        <input id="last_name" name="last_name" placeholder="Doe" required type="text" autoComplete="family-name" className="block w-full rounded-md bg-zinc-900/50 px-3.5 py-2 text-base text-white-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white-600"/>

                    </div>

                </div>

                    
                <div className="mt-2.5 w-full max-w-2xl">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-white-900">Email<span className="text-white-400">*</span></label>
                    <input id="email" name="email" placeholder="email@example.com" required type="email" autoComplete="email" className="block w-full rounded-md bg-zinc-900/50 px-3.5 py-2 text-base text-white-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white-600"/>
                </div>

                <div className="w-full max-w-2xl">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-white-900">Message<span className="text-white-400">*</span></label>
                    <textarea id="message" name="message" placeholder="Example message here..." required rows={4} defaultValue={""} className="block w-full rounded-md bg-zinc-900/50 px-3.5 py-2 text-base text-white-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white-600 hover:border-white/20 transition-colors"/>
                </div>

                <button type="submit" className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4 mb-5">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                    <span>Submit</span>
                </button>

            </form>
        </div>
        

        
        
        <Footer/> 
    </main>
  );
}



