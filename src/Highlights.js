import bruschetta from'./images/Bruschetta.png'
import salad from './images/salad.jpeg'
import lemonPie from './images/lemon dessert.jpg'

export default function Highlights(){
    return(
        <section>
            <h1>Specials</h1>
            <button>Online Menu</button>
             <article>
                 <img src={bruschetta} alt="Bruschetta"/>
                 <h2>Bruschetta</h2>
                <p>Our Bruschetta is made from grilled 
                 bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
             </article>
             <article>
                 <img src={salad} alt="Greek Salad"/>
                 <h2>Greek Salad</h2>
                <p>The famous greek salad of crispy 
                lettuce, peppers, olives and our Chicago style feta cheese, garnished
                 with crunchy garlic and rosemary croutons.  </p>
             </article>
             <article>
                 <img src={lemonPie} alt="Lemon Dessert"/>
                 <h2>Lemon Dessert</h2>
                <p>This comes straight from grandma’s recipe book,
                 every last ingredient has been sourced and is as 
                 authentic as can be imagined </p>
             </article>
        </section>
    )
};