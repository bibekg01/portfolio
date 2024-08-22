import Profile from '../assets/profile2.png'
import { useTypewriter, Cursor} from 'react-simple-typewriter'



const Home = () => {
    const [text] = useTypewriter({
        words: ['FULL STACK DEVELOPER .', 'UI/UX DESIGNER .', 'GRAPHIC DESIGNER .' ],
        loop: 0,
    }) 
  return (
    <>
    <span id="aboutme"></span>
    <div className="min-h-[550px] sm:min-h-[660px] bg-[#D1E5F4] flex justify-center items-end">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2" >
                {/* Image Section  */}
                <div data-aos="zoom-in">
                    <img src={Profile} alt="" className='[w-300px] sm:w-[450px]  mx-auto'/>
                </div>
                {/* text content section  */}
                <div 
                data-aos="fade-right" 
                data-aos-delay="600"
                className='grid gap-3'>
                    <h1 className='lg:text-7xl md:text-5xl text-4xl font-semibold'>
                        HI, I&apos;M <span className='text-[#f50b12]'>BIBEK</span> GAULI.
                    </h1>
                    <p className='text-xl lg:text-4xl md:text-3xl font-bold'>
                        I AM
                        <span className='ml-2'>
                            {text}
                        </span>
                        <span>
                        <Cursor/>
                        </span>                  
                    </p>
                    <p className='text:xl sm:text-2xl md:text:3xl'>
                        I’m a certified MERN Stack developer with hands-on experience in building full-stack applications. 
                    </p>
                    <div className='flex justify-center gap-24 text-xl mb-10'>
                        <button className='border w-[150px] bg-slate-950 text-white rounded-xl p-2 cursor-pointer hover:scale-105 duration-200'> Find Me</button>
                        <button className='border w-[160px]  bg-slate-950 text-white rounded-xl p-2 cursor-pointer hover:scale-105 duration-200'><a href="../assets/resume.pdf" download> Resume</a> </button>
                    </div>
                                            
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home