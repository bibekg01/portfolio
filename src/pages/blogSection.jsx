import { FaRegArrowAltCircleUp } from "react-icons/fa";



const Blogs = () => {
  const handleClick = () => {
    
  }
    return (
      <>
        <span id="myblogs" ></span>
        <div className="bg-[#F5F7F8]">
          <div className="p-10 pb-14 grid gap-16">  
            <div className="grid justify-center">
                <h1 className="border-b-4 border-black border-double sm:text-[3rem] text-[1.5rem] text-center font-bold tracking-widest text-gray-700">MY BLOGS</h1>
            </div> 
            <div>
              <h1 className="text-5xl font-extrabold text-center text-slate-300 tracking-widest">COMING SOON ... </h1>
            </div>
          </div>
          <div className=''>
            <div className="right-0 absolute animate-bounce cursor-pointer" onClick={handleClick}>
                <a href="/#aboutme"><FaRegArrowAltCircleUp className='text-5xl'/></a>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Blogs;