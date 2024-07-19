


export default function BookingForm({booking,availableTimes,handleFirstName,handleLastName,handleDate,handleAvailableTimes,handleGuests,handleOccasion,handleSubmit,req}){

    const prevDate = new Date();
    const today =prevDate.toISOString().split('T')[0];
    let endDate = new Date(prevDate.setDate(prevDate.getDate() + 28));

    endDate = endDate.toISOString().split('T')[0];
    let ans = ''
    if(booking.guests < 1){ ans ='Need atleast 1 guest to book'}
    if(booking.guests > 15){ans ='Sorry, no more than 10 guests'};

    return(
        <div>
        <form className ='form' onSubmit={handleSubmit}>
            <fieldset>
            <div className="field">
                    <label htmlFor="firstName">First Name *</label>
                    <p className="corrector">{req.firstName}</p>
                    <input type="text" id="firstName"
                    autoFocus
                    minLength={3} maxLength={15}
                    value={booking.firstName}
                     onChange={handleFirstName}
                     required
                     />
                </div>
                <div className="field">
                    <label htmlFor="lastName">Last Name *</label>
                    <p className="corrector">{req.lastName}</p>
                    <input type="text" id="lastName"
                    value={booking.lastName}
                     onChange={handleLastName}
                     required/>
                </div>
                <div className="field">
                    <label htmlFor="res-date">Choose date</label>
               
                    <input type="date" id="res-date"
                    value={booking.date}
                    min={today}
                    max={endDate}
                     onChange={handleDate}
                     required/>
                </div>
                <div className="field">
                    <label htmlFor="res-time">Choose time</label>
                 
                    <select id="res-time" value={availableTimes} placeholder="time" onChange={handleAvailableTimes} required>
                      <option key={1}>Pick one</option>
                      {availableTimes.map((t) => t.day === booking.date && t.isAvailable ? <option key={t.time}>{t.time}</option>:null)}
                    </select>
                </div>
                <div className="field">
                <label htmlFor="guests">Number of Guests </label>
                <p className="corrector">{ans}</p>
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
                    </select><span></span>
                </div>
                <button aria-label='on click reserve table' type="submit" disabled ={booking.firstName.length < 3 || booking.lastName < 3 || booking.time.length < 3 || booking.guests > 10 || booking.guests < 0}>Reserve a Table</button>
            </fieldset>
        </form>
       
       
        </div>
        
    )
}