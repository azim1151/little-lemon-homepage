import mario from './images/Mario and Adrian A.jpg'
import adrian from './images/Mario and Adrian b.jpg'

export default function About(){
    return(
        <section className='horizontal-flex'>
        <p className='markazi-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        <article >
        <img src={mario} alt='Mario and Adrian' className='smaller_img'/>
        <img src={adrian} alt='Mario and Adrian'className='smaller_img'/>
        </article>
       
    </section>
    )
   
}