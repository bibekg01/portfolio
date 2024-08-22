import logo from '../assets/Black White Modern Handwritten Square Studio Logo (1).png'
import "aos/dist/aos.css";


const Links = [
    {
        id:1,
        name: "portfolio",
        link: "/",
    },
    {
        id:2,
        name: "my skills",
        link: "/#myskills",
    },
    {
        id:3,
        name: "my blogs",
        link: "/#myblogs",
    },
    {
        id:4,
        name: "reviews",
        link: "/#reviews",
    },
]


const Header = () => {

    return(
        <>
        <div 
        data-aos="fade-down" 
        data-aos-delay="400"
        className='fixed w-[100%] bg-white '>
            <div className=" flex text-black text-2xl font-semibold ">
                <div className='sm:w-[100%] w-[100vh]'>
                        <ul className="flex justify-evenly items-center h-[150px]">
                        <h1 className='hover:scale-105 duration-200'><a href="/#aboutme"><img src={logo} alt="logo" className='w-52 -rotate-12 cursor-pointer'/></a></h1>
                        {
                            Links.map((link,index)=>(
                                <li key={index}> 
                                <a href={link.link} className='cursor-pointer hover:border-b-[6px] border-red-500 pb-1 px-1'>
                                    {link.name}
                                </a>
                                </li>
                            ))
                        }
                        <li className='hover:scale-105 duration-200'><a href='/#contactme' className='bg-gradient-to-r from-red-400  to-blue-300 p-3 rounded-xl text-white cursor-pointer '>contact me</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Header;