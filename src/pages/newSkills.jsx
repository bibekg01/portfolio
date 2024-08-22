import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { PiFigmaLogoBold } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const NewSkills = () => {

    return (
      <>
      <span id="myskills"></span>
      <div className="bg-[#F5F7F8] h-[70vh] sm: md:h-[80vh] lg:h-[88vh]">
          <div className="grid justify-center">
            <h1 className="border-b-4 border-black border-double sm:text-[3rem] text-[1.5rem] pt-6 text-center font-bold tracking-widest text-gray-700">MY SKILLSETS</h1>
          </div>
          <div className="grid justify-center gap-10 text-3xl mt-20">
            <div className="">
                <h1 className="text-center font-bold mb-9 underline">Front-end Skills</h1>
                <div className="grid grid-cols-5 gap-10 lg:text-9xl md:text-8xl text-7xl">
                    <FaHtml5 className="cursor-pointer hover:text-orange-600 transition-transform duration-500 transform hover:scale-125" title="HTML(HyperText MarkUp Language" />
                    <FaCss3Alt className="cursor-pointer hover:text-blue-600 transition-transform duration-500 transform hover:scale-125" title="CSS(Cascading Style Sheets)"/>
                    <FaJsSquare className="cursor-pointer hover:text-yellow-400 hover:bg-black rounded-xl transition-transform duration-500 transform hover:scale-125" title="JS(JavaScript)"/>
                    <FaReact className="cursor-pointer hover:text-cyan-500 hover:animate-spin " title="ReactJS"/>
                    <RiTailwindCssFill className="cursor-pointer hover:text-cyan-400 transition-transform duration-500 transform hover:scale-125" title="TailwindCSS"/>
                    <FaBootstrap className="cursor-pointer hover:text-purple-900 transition-transform duration-500 transform hover:scale-125" title="Bootstrap"/>
                    <SiRedux className="cursor-pointer hover:text-purple-600 transition-transform duration-500 transform hover:scale-125" title="Redux Toolkit"/>
                    <PiFigmaLogoBold className="cursor-pointer transition-transform duration-500 transform hover:scale-125" title="Figma"/>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="text-center font-bold mb-9 underline">Back-end Skills</h1>
                <div className="flex justify-center gap-10 lg:text-9xl md:text-8xl text-7xl">
                    <SiExpress className="cursor-pointer transition-transform duration-500 transform hover:scale-125" title="ExpressJS"/>
                    <SiMongodb className="cursor-pointer hover:text-green-700 transition-transform duration-500 transform hover:scale-125" title="MongoDB"/>
                    <FaNodeJs className="cursor-pointer hover:text-green-800 transition-transform duration-500 transform hover:scale-125" title="NodeJS"/>
                    <FaGitAlt className="cursor-pointer hover:text-red-500 transition-transform duration-500 transform hover:scale-125" title="Git"/>
                </div>
            </div>
        </div>

      </div>
      </>
    )
  }
  
  export default NewSkills;