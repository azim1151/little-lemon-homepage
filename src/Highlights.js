import bruschetta from'./images/Bruschetta.png'
import salad from './images/salad.jpeg'
import lemonPie from './images/lemon dessert.jpg'
import SpecialsCard from './SpecialsCard'

export default function Highlights(){
    return(
        <section className='flex_container'>
            <h1>Specials</h1>
            <button>Online Menu</button>
            <section className='horizontal-flex'>
                <SpecialsCard
                img={{src : bruschetta,
                      name:'Bruschetta'}}
                text={'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'} 
                /> 
                 <SpecialsCard
                img={{src : salad,
                      name:'Greek Salad'}}
                text={'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons'} 
                />
             <article className='card'>
                 <img src={salad} alt="Greek Salad"/>
                 <h2>Greek Salad</h2>
                <p>The famous greek salad of crispy 
                lettuce, peppers, olives and our Chicago style feta cheese, garnished
                 with crunchy garlic and rosemary croutons.  </p>
             </article>
             <article className='card'>
                 <img src={lemonPie} alt="Lemon Dessert"/>
                 <h2>Lemon Dessert</h2>
                <p>This comes straight from grandma’s recipe book,
                 every last ingredient has been sourced and is as 
                 authentic as can be imagined </p>
             </article>
            </section>
           
        </section>
    )
};