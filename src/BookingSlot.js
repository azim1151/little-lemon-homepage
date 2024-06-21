

export default function BookingSlot({isAvailable,timeSlot}){
    return(
        <div className={isAvailable?'available':'booked'}>
           
            <h3>{timeSlot}</h3>

            <h3>{isAvailable?'Available':'Booked'}</h3>
        </div>
    )
}