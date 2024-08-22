import { BiLogoGmail } from "react-icons/bi";
import { GoRocket } from "react-icons/go";
import { FaHandPeace } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const ContactMe = () => {
  const notify =()=>{ toast.success('Message Sent Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })};
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    console.log(obj);
  }
  
    return (
      <>
        <span id="contactme"></span>
        <div className="bg-white">
        <div className=" p-10">  
            <div className="grid justify-center mb-10">
              <h1 className="border-b-4 border-black border-double sm:text-[3rem] text-[1.5rem] text-center font-bold tracking-widest text-gray-700">CONTACT ME</h1>
            </div> 
            <div className="md:flex justify-center grid gap-10 md:pt-20 md:gap-52">
              <div data-aos="fade-right">
                <div className="grid md:gap-7 gap-4 md:mt-14 justify-center">
                  <h1 className="md:text-4xl text-3xl font-bold">Let&apos;s Chat.</h1>
                  <h2 className="md:text-5xl text-3xl font-semibold">Tell me about your Project.</h2>
                  <h3 className="flex gap-3 text-xl">Let&apos;s create something together. <FaHandPeace className="text-orange-400"/>
                  </h3>
                  <a className="flex gap-4 text-xl bg-slate-300 p-2 w-[300px] rounded-xl" href="mailto:bibekgauli11@gmail.com" title="click to send e-mail"><BiLogoGmail className="text-red-700" /> bibekgauli11@gmail.com</a>
                  <a className="flex gap-4 text-xl bg-slate-300 p-2 w-[300px] rounded-xl" href="tel:9746975880" title="Call Bibek Gauli"><FaPhoneAlt className="text-blue-700" /> (+977) 974-6975880</a>
                </div>
              </div>
              
              <div data-aos="fade-left">
                  <div className="grid justify-center">
                  <h1 className="flex gap-3 text-3xl font-semibold mb-5">Send me a Message. <GoRocket className="text-orange-600"/></h1>
                  </div>
                <form action="" className="grid gap-2 text-lg font-semibold bg-[#F5F7F8] px-9 py-7 rounded-xl " onSubmit={handleSubmit}>
                  <label htmlFor="fullname"> Full Name : </label>
                  <input type="text" name="fullname" className="border rounded-xl sm:ml-5 h-10 p-2 bg-slate-300" id="fullname"/>
                  <label htmlFor="email"> Email Address :</label>
                  <input type="text" name="email" className="border rounded-xl sm:ml-5 h-10 p-2 bg-slate-300" id="email"/>
                  <label htmlFor="message"> Your Message :</label>
                  <textarea name="message" id="message" rows={5} className="sm:ml-5 rounded-xl sm:w-[400px] w-[300px] p-2 bg-slate-300"></textarea>
                  <button className="border w-[150px] rounded-2xl bg-[#2a2ab5] text-white font-semibold sm:ml-[35%] ml-[25%] mt-5 h-10" type="submit" onClick={notify}>Submit</button>
                </form>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
              {/* Same as */}
            <ToastContainer />
        </div>
        </div>
      </>
    )
  }
  
  export default ContactMe;