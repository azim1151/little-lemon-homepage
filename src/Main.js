import Testimonials from "./Testimonials";
import About from "./About";
import Highlights from "./Highlights"

export default function Main (){
    return(
        <section className="main">
              <Highlights/>
           <Testimonials/>
           <About/>
        </section>
    )
}