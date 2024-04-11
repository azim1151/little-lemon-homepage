import servers from './images/Serving starters.png'

export default function HeroSection(){
    return(
        <section className='herosection'>
            <article className='main-name' >
            <h1 className='markazi-text-name-title' >Little Lemon</h1>
            <h2 className='markazi-text'>Chicago</h2>
            <p className='markazi-text'>We're a family owned<br/>
            Meditteranean restaurant,<br/>
            focused on traditional<br/>
            recipies served with<br/>
            a modern twist.</p>
            <button className='karla'>Reserve a table</button>
            </article>
            <img src={servers} alt="starters" className='servers'/>
        </section>
    )
}