import HTMLimg from '../assets/html.png'
import CSSJs from '../assets/css.png'
import JScript from '../assets/js.png'
import Tailwind from '../assets/tailwind.png'
import ReactJs from '../assets/react.png'
import NodeJs from '../assets/node.png'
import ExpressJs from '../assets/express.png'
import MongoDB from '../assets/mondodb.png'

const Skills = () => {

    return (
      <div className="bg-[#F5F7F8] sm:h-[100vh]">
          <div className="grid justify-center">
            <h1 className="border-b-4 border-black border-double sm:text-[3rem] text-[1.5rem] pt-6 text-center font-bold tracking-widest text-gray-700">MY SKILLSETS</h1>
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-32 sm:pl-[200px] sm:p-10 p-12 gap-11">
          <img src={HTMLimg} alt="" className="border bg-slate-300 rounded-xl w-[200px] sm:h-[200px] h-[150px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-red-400 cursor-pointer "/>
          <img src={CSSJs} alt="" className="border bg-slate-300 rounded-xl w-[200px] h-[150px] sm:h-[200px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-blue-500 cursor-pointer "/>
          <img src={JScript} alt="" className="border bg-slate-300 rounded-xl w-[200px] h-[150px] sm:h-[200px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400 cursor-pointer "/>
          <img src={Tailwind} alt="" className="border bg-slate-300 rounded-xl w-[200px] h-[150px] sm:h-[200px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400 cursor-pointer "/>
          <img src={ReactJs} alt="" className="border bg-slate-300 rounded-xl w-[200px] h-[150px] sm:h-[200px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500 cursor-pointer "/>
          <img src={NodeJs} alt="" className="border bg-slate-300 rounded-xl w-[200px] h-[150px] sm:h-[200px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-lime-400 cursor-pointer "/>
          <img src={ExpressJs} alt="" className="border bg-slate-300 rounded-xl w-[200px] h-[150px] sm:h-[200px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 cursor-pointer "/>
          <img src={MongoDB} alt="" className="border bg-slate-300 rounded-xl w-[200px] h-[150px] sm:h-[200px] shadow-xl hover:scale-105 hover:shadow-2xl hover:shadow-green-700 cursor-pointer "/>
        </div>

      </div>
    )
  }
  
  export default Skills;