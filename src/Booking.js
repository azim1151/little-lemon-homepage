import fish from './images/Grilled fish.jpeg'

export default function Booking(){
    return(
        <section>
            <h1>Reserve a Table</h1>
            <article>
                <h3>Pick a date</h3>
                <input type="date">Date</input>
                <h3>Pick a time</h3>
                <img src={fish} alt='Grilled fish'/>
            </article>
            <article>
                <h3>Number of guests</h3>
                <ul>
                    <li>
                        <input type="radio"/>
                        2 guests
                    </li>
                    <li>
                        <input type="radio"/>
                        4 guests
                    </li>
                    <li>
                        <input type="radio"/>
                        6 guests
                    </li>
                    <li>
                        <input type="radio"/>
                        8 guests
                    </li>
                </ul>
            </article>
            <article>
                <h3>Your contact details</h3>
                <ul>
                    <li>
                        <span>First Name:</span>
                        <span aria-label="required">*</span>
                        <input type="text" required/>
                    </li>
                    <li>
                        <span>Last Name:</span>
                        <span aria-label="required">*</span>
                        <input type="text" required/>
                    </li>
                    <li>
                        <span>Phone Number:</span>
                        <span aria-label="required">*</span>
                        <input type="tel" required/>
                    </li>
                </ul>
            </article>
            <button type="submit">Reserve a Table</button>
        </section>
    )
}