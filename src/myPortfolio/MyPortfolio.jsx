
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const MyPortfolio = () => {
    return (
        <div>     
           <section>
            <Navbar></Navbar>
           </section>
          
           <section>
            <HeroSection></HeroSection>
           </section>
           <div className="border-t border-gray-300 my-4"></div>
           <section>
            <About></About>
           </section>
           <div className="border-t border-gray-300 my-4"></div>
           <section>
            <Skills></Skills>
           </section>
           <div className="border-t border-gray-300 my-4"></div>
           <section>
            <Projects></Projects>
           </section>
           <div className="border-t border-gray-300 my-4"></div>
           <section>
            <Contact></Contact>
           </section>
           <div className="border-t border-gray-300 my-4"></div>
           <section>
            <Footer></Footer>
           </section>
        </div>
    );
};

export default MyPortfolio;