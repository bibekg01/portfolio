import StickerComponent from '../components/stickerComponent'
import Header from '../components/headerComponent'
// import AboutMe from './aboutMeSection'
import Experience from './experienceSection'
// import EducationSection from './educationSection'
import Projects from './projectSection'
import Blogs from './blogSection'
import ContactMe from './contactMeSection'
import NewSkills from './newSkills'
import Education from './education'
import Home from './Home'
import Footer from './Footer'



const HomePage = () => {
    return(
        <>
            <StickerComponent/>
            <Header/>
            <Home/>
            {/* <AboutMe/> */}
            <Experience/>
            {/* <EducationSection/> */}
            <Education/>
            <NewSkills/>
            <Projects/>
            <Blogs/>
            <ContactMe/>
            <Footer/>
        </>
    )
}
export default HomePage;