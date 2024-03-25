import servers from './images/Serving starters.png'

export default function HeroSection(){
    return(
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We're a family owned<br/>
            Meditteranean restaurant,<br/>
            focused on traditional<br/>
            recipies served with<br/>
            a modern twist.</p>
            <img src={servers} alt='starters'/>
        </section>
    )
}