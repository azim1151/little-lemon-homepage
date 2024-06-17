
import logo from './images/Logo.png'
import hamburgerMenu from './images/🦆 icon _hamburger menu.png'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
    <section className='navbar'>
        <img src={logo} alt="Little Lemon logo"/>
        <ul className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/highlights'>Specials</Link>
                <Link to='/testimonials'>Testimonials</Link>
                <Link to='/reservations'>Reservations</Link>
        </ul>
        <img src={hamburgerMenu} alt='hamburger menu'/>
    </section>  
    ) 
}