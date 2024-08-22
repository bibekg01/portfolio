import ProjectComponent from '../components/projectComponent';
import mixmatch from '../assets/mixmatch.png'
import bmical from '../assets/bmical.png'
import Mugandbean from '../assets/Screenshot (37).png'
import signup from '../assets/signup.png'


const Projects = () => {

    return (
      <div className="bg-white pb-10 ">
      <div className=""> 
          <div className="grid justify-center mb-10">
            <h1 className="border-b-4 border-black border-double sm:text-[3rem] text-[1.5rem] mt-5 text-center font-bold tracking-widest text-gray-700">PROJECTS COMPLETED</h1>
          </div>
          <div className='grid justify-center'>
            <div className='grid grid-cols-2 gap-10'>
              <div data-aos="fade-down-right">
                <ProjectComponent
                title='Mix-Match E-com Store'
                image={mixmatch}
                description='The clothing store, built with the Fakestore API, features "Add to Cart," "View Details," and product samples. '
                hrefgit='https://github.com/bibekg01/mix-match-e-com-site'
                hrefpub='https://mixmatchstore.netlify.app/'
                />
              </div>
              <div data-aos="fade-down-left">
                <ProjectComponent
                title='BMI Calculator'
                image={bmical}
                description='The BMI Calculator provides an efficient way to calculate Body Mass Index.'
                imgClassName='h-[120px]'
                hrefgit='https://github.com/bibekg01/BMI-Calculator'
                />
              </div>
              <div data-aos="fade-up-right">
                <ProjectComponent
                title='Mug & Bean Coffee Shop'
                image={Mugandbean}
                description='Mug & Beans Website is a responsive coffee shop website using ReactJS and Tailwind CSS for modern, utility-first styling.'
                hrefgit='https://github.com/bibekg01/todo'
                />
              </div>
              <div data-aos="fade-up-left">
                <ProjectComponent
                title='LogIn/ SignUp Form'
                image={signup}
                description='React-based login/signup form with real-time validation, and secure handling for a seamless user experience. '
                />
              </div>
            </div>
          </div>
      </div>
      </div>

      



    )
  }
  
  export default Projects;