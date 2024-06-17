import servers from './images/Serving starters.png'
import {useNavigate } from 'react-router-dom'

export default function HeroSection(){
    const navigate = useNavigate();
    const handleClick = ()=>{
            navigate('/reservations')
       
    }
    return(
        <section className='herosection'>
            <article className='main-name' >
            <h1 className='markazi-text-name-title' >Little Lemon</h1>
            <h2 >Chicago</h2>
            <p>We're a family owned<br/>
            Meditteranean restaurant,<br/>
            focused on traditional<br/>
            recipies served with<br/>
            a modern twist.</p>
            <button onClick={handleClick}> Book Now! </button>
            </article>
            <img src={servers} alt="starters" className='servers'/>
        </section>
    )
}