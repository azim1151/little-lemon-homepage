import logo from './images/Asset 20@4x.png'
import { Link } from 'react-router-dom'


export default function Footer() {
    return(
        <section className='footer'>
          
             <ul className='footer'>
                <div className='logo'>
                <img src={logo} alt='logo' className='logo'/>
                </div>
                <article >
                <h2  className='markazi-text'>Doormat Navigation</h2>
                <ul>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/about'>About</Link>
                    </li>
                    <li>
                    <Link to='/highlights'>Specials</Link>
                    </li>
                    <li>
                    <Link to='/testimonials'>Testimonials</Link>
                    </li>
                    <li>
                    <Link to='/reservations'>Reservations</Link>
                    </li>
                </ul>
                </article>
                <article >
                <h2  className='markazi-text'>Contact</h2>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
                </article>
                <article >
                <h2  className='markazi-text'>Social Media Links</h2>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
                </article>
             </ul>
        </section>
        
    )
}