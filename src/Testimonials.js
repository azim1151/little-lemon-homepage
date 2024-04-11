import kayla from './images/KaylaPerson.jpg'
import ross from './images/ross.jpg'
import melissa from'./images/melissa.jpeg'
import PersonCard from './PersonCard'

export default function Testimonials(){
    return(
        <section className='flex_container'>
            <h1>Testimonials</h1>
        <section className='horizontal-flex'>
            <PersonCard
            img={{
                src:kayla,
                name:'Kayla'
            }}
            text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />
            <PersonCard
            img={{
                src:ross,
                name:'Ross'
            }}
            text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />
            <PersonCard
            img={{
                src:melissa,
                name:'Melissa'
            }}
            text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            />
            <article className='card'>
                
                <h3>Rating</h3>
                <img src={kayla} alt='Kayla' className='avatar'/>
               
                <h2>Kayla</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </article>
            <article className='card'>
                
                <h3>Rating</h3>
                <img src={ross} alt='Ross' className='avatar'/>
                
                <h2>Ross</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </article>
            <article className='card'>
                
                <h3>Rating</h3>
                <img src={melissa} alt='Melissa'className='avatar'/>
                
                <h2>Melissa</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </article>
        </section>
        </section>
    )
}