import Navbar from './Navbar'
import HeroSection from "./HeroSection"


export default function Header(){
    return(
        <section className='flex_container'>
            <Navbar/>
            <HeroSection/>
        </section>
    )
}