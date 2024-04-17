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
        </section>
        </section>
    )
}