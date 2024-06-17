import bruschetta from'./images/Bruschetta.png'
import salad from './images/salad.jpeg'
import lemonPie from './images/lemon dessert.jpg'
import pasta from './images/Penne pasta.png'
import fish from './images/Grilled fish.jpeg'
import SpecialsCard from './SpecialsCard'

const specials =[
    {
        id: 0,
        img:{
            src: bruschetta,
            name: 'Bruschetta'
        },
        text: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        id: 1,
        img:{
            src: salad,
            name: 'Greek Salad'
        },
        text: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons'
    },
    {
        id: 2,
        img:{
            src: lemonPie,
            name: 'Lemon Dessert'
        },
        text: 'This comes straight from grandma’s recipe book every last ingredient has been sourced and is as authentic as can be imagined'
    },
    {
        id: 3,
        img:{
            src: pasta,
            name: 'Penne Pasta'
        },
        text: 'A classic favorite served in a house-made marinara, sure to please the most discerning palete. Pasta perfected!'
    },
    {
        id: 4,
        img:{
            src: fish,
            name: 'Grilled Fish'
        },
        text: 'Grilled to perfection, our mackerel is smoky goodness served with roasted baby potatoes and grilled cherry tomatoes.'
    }

]

export default function Highlights(){

    const listItems = specials.map(item=>
                                                <SpecialsCard
                                                key = {item.id}
                                                img={item.img}
                                                text={item.text}/>
                                            )
    return(
        <section className='confirmation'>
            <h1 style={{fontSize:'3em'}}>Specials</h1>
            <button style={{backgroundColor: '#495E57', color:'#EDEFEE'}}>Online Menu</button>
            <section className='horizontal-flex'>
                {listItems}
            </section>
        </section>
    )
};