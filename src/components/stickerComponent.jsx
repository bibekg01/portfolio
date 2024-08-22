import { RiGithubLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const StickerComponent = () => {
    return(
        <>
        <div className=" top-[50%] fixed">
            <div className="grid text-4xl gap-6">
                <a href="https://www.linkedin.com/in/bibek-gauli/" target="_blank"><FaLinkedinIn className="bg-blue-900 text-white w-16 pl-5"/></a>
                <a href="https://x.com/B_for_bibek" target="_blank"><FaTwitter  className="bg-white text-blue-600 w-16 pl-5"/></a>
                <a href="https://github.com/bibekg01" target="_blank"><RiGithubLine className="bg-black text-white w-16 pl-5"/></a>
                <a href="https://www.instagram.com/bibek_gouli?igsh=OHdlejJoaGQ4d2l4" target="_blank"><FaInstagram className="bg-gradient-to-bl from-purple-900 via-red-600 to-orange-500 text-white w-16 pl-5"/></a>
            </div>
        </div>
        </>
    )
}

export default StickerComponent;