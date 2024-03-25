import logo from './images/Logo.png'

export default function Navbar(){
    return(
    <section>
        <img src={logo} alt="Little Lemon logo"/>
        <ul className="nav-links">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Online Order</a></li>
            <li><a>Login</a></li>
        </ul>
    </section>  
    ) 
}