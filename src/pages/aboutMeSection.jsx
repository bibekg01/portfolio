import Profile from '../assets/profile2.png'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import AOS from 'aos';
import { useEffect } from 'react'

const AboutMe = () => {
    const [text] = useTypewriter({
        words: ['FULL STACK DEVELOPER .', 'UI/UX DESIGNER .', 'GRAPHIC DESIGNER .' ],
        loop: 0,
    }) 
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration:500,
          easing:"ease-in-back",
          delay: 100,
        });
      });


    return(
        <>
            <span id='aboutme'></span>
            <div className='flex justify-center items-center h-[90vh] bg-white pt-[0vh]' >
                <div className='flex justify-center items-center gap-24 w-[1200px] bg-[#D1E5F4]'>
                    <div 
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    >
                        <img src={Profile} alt="" className=" w-[600px]"/>
                    </div>

                <div 
                data-aos="fade-right" 
                data-aos-delay="600"
                className='grid gap-5'>
                    <h1 className='text-4xl font-semibold'>
                        HI, I&apos;M <span className='text-[#f50b12]'>BIBEK</span> GAULI.
                    </h1>
                    <p className='text-4xl font-bold'>
                        I AM
                        <span className='ml-2'>
                            {text}
                        </span>
                        <span>
                        <Cursor/>
                        </span>                  
                    </p>
                    <p>
                        I’m a certified MERN Stack developer with hands-on experience in building full-stack applications. 
                    </p>
                    <div className='flex justify-center gap-24 text-xl'>
                        <button className='border bg-slate-950 text-white rounded-xl p-2 cursor-pointer hover:scale-105 duration-200'> Find Me</button>
                        <button className='border  bg-slate-950 text-white rounded-xl p-2 cursor-pointer hover:scale-105 duration-200'><a href="../assets/resume.pdf" download> Resume</a> </button>
                    </div>
                                            
                </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;