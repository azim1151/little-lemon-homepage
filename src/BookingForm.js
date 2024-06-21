


export default function BookingForm({booking,availableTimes,handleFirstName,handleLastName,handleDate,handleAvailableTimes,handleGuests,handleOccasion,handleSubmit, validation}){

   
  

    return(
        <div>
        <form className ='form' onSubmit={handleSubmit}>
            <fieldset>
            <div className="field">
                    <label htmlFor="firstName">First Name *</label>
                    <p>{validation}</p>
                    <input type="text" id="firstName"
                    autoFocus
                    minLength={3} maxLength={15}
                    value={booking.firstName}
                     onChange={handleFirstName}
                     />
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName"
                    value={booking.lastName}
                     onChange={handleLastName}/>
                </div>
                <div className="field">
                    <label htmlFor="res-date">Choose date</label>
               
                    <input type="date" id="res-date"
                    value={booking.date}
                     onChange={handleDate}/>
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose time</label>
                 
                    <select id="res-time" value={availableTimes} placeholder="time" onChange={handleAvailableTimes}>
                      <option key={1}>Pick one</option>
                      {availableTimes.map((t) => t.day === booking.date && t.isAvailable ? <option key={t.time}>{t.time}</option>:null)}
                    </select>
                </div>
                <div className="field">
                <label htmlFor="guests">Number of Guests</label>
              
                    <input type="number" 
                            id="guests" 
                            min={1} max={10}
                            value={booking.guests}
                            onChange={handleGuests}/>
                </div>
                <div className="field">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" 
                        onChange={handleOccasion}>
                        <option>Pick one</option>    
                        <option >Birthday</option>
                        <option >Anniversary</option>
                    </select>
                </div>
                <button type="submit" >Reserve a Table</button>
            </fieldset>
        </form>
       
       
        </div>
        
    )
}