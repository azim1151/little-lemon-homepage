import Testimonials from "./Testimonials";
import About from "./About";
import Highlights from "./Highlights"
import HeroSection from "./HeroSection";

export default function Main (){
    return(
        <section className="main">
            <HeroSection/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </section>
    )
}