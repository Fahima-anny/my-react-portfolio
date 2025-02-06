import About from "./About/About";
import Banner from "./Banner/Banner";
import Contacts from "./Contacts/Contacts";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";


const Home = () => {
    return (
        <div>
            <div id='home'>
            <Banner></Banner>
            </div>
            <div id="about" className="pt-10 pb-20">
            <About></About>
            </div>
            <div id="skills" className="pb-20 md:pb-24">
                <Skills></Skills>
            </div>
            <div id="projects" className="pb-20 md:pb-28">
                <Projects></Projects>
            </div>
            <div id="contacts">
            <Contacts></Contacts>
            </div>

        </div>
    );
};

export default Home;