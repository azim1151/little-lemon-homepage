import logo from './images/Asset 20@4x.png'


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
                   <li><a>Home</a></li>
                   <li><a>About</a></li>
                   <li><a>Menu</a></li>
                   <li><a>Reservations</a></li>
                   <li><a>Online Order</a></li>
                   <li><a>Login</a></li>
                </ul>
                </article>
                <article >
                <h2  className='markazi-text'>Contact</h2>
                <ul>
                    <li><a>Address</a></li>
                    <li><a>Phone number</a></li>
                    <li><a>Email</a></li>
                </ul>
                </article>
                <article >
                <h2  className='markazi-text'>Social Media Links</h2>
                <ul>
                    <li><a>Facebook</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>Twitter</a></li>
                </ul>
                </article>
             </ul>
        </section>
        
    )
}