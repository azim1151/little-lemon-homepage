import Navbar from './Navbar'
import HeroSection from "./HeroSection"


export default function Header(){
    return(
        <section className='header'>
            <Navbar/>
            <HeroSection/>
        </section>
    )
}