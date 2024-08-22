import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MERNimage from '../assets/Mern.png'
import UIUX from '../assets/uiux.png'


const Experience = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration:200,
      easing:"ease-in",
      delay: 100,
    });
  });
  return (
    <div>
        <div className=" bg-[#F5F7F8] p-8 ">
          <div className="grid justify-center mb-5">
            <h1 className="border-b-4 border-black border-double sm:text-[3rem] text-[1.5rem] text-center font-bold tracking-widest text-gray-700 mb-5">MY EXPERIENCES</h1>
          </div>
          <div className='grid justify-center gap-10'>
            <div data-aos="fade-left">
              <div className='bg-[#D1E5F4] w-[1000px] py-3 px-2'>
                <div className="flex">
                <div className='border-r-4 border-gray-500'>
                  <img src={MERNimage} alt="MERNimage" className="sm:w-[300px] w-[200px] p-2 pr-5" />
                </div>
                  <div className="sm:w-[800px] font-semibold sm:text-xl px-20 text-left grid">
                      <h1 className='font-bold tracking-wider text-2xl'>MERN STACK DEVELOPMENT</h1>
                      <p>Name of Institute: Dursikshya Education Network</p>
                      <p>Address: Above Mandala Book Point, Kanti Path</p>
                      <p>Date: 2081/02 - present</p>
                      <p>Link: <a href="https://www.durshikshya.com/">https://www.durshikshya.com/ </a></p>
                      <p>Reference: Krishna Panday (M.D.)</p>
                      <p>Contact URL: <a href="mailto:info@dursikshya.com">info@dursikshya.com</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
            <div className="bg-[#D1E5F4] w-[1000px] py-3 px-2">
              <div className='flex justify-center'>
                <div className='border-r-4 border-gray-500'>
                  <img src={UIUX} alt="UI/UXDesign" className="sm:w-[300px] w-[200px] p-2 pr-5" />
                </div>
                <div className="sm:w-[800px] font-semibold sm:text-xl px-20  text-left grid">
                <h1 className='font-bold tracking-wider text-2xl'>7-Days UI/UX Design Training</h1>
                    <p>Name of Institute: Ecommerce Sathi Pvt. Ltd.</p>
                    <p>Date: 2024/7/15 - 2024/07/22</p>
                    <p>Link: <a href="https://ecommercesathi.com/ui-ux-design-career-guide/">https://ecommercesathi.com/ui-ux-design-career-guide/ </a></p>
                    <p>Reference: Mamata Shah (Moderator)</p>
                    <p>Contact : <a href="callto:9826602111">982-6602111</a></p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

    </div>
  )
}


export default Experience;