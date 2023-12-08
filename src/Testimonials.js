import kayla from './images/KaylaPerson.jpg'
import drTanveer from './images/DrTanveerAhmed.jpg'
import oldLady from'./images/rockingLady.jpg'

export default function Testimonials(){
    return(
        <section>
            <article>
                <h3>Rating</h3>
                <img src={kayla} alt='Kayla'/>
                <h2>Kayla</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </article>
            <article>
                <h3>Rating</h3>
                <img src={drTanveer} alt='Dr Tanveer'/>
                <h2>Tanveer</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </article>
            <article>
                <h3>Rating</h3>
                <img src={oldLady} alt='Terrisa'/>
                <h2>Terrisa</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </article>
        </section>
    )
}