import { useLocation } from "react-router-dom";
import lemonCake from './images/lemon dessert.jpg'
   
    const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','Decembert']
    const weekdays =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    let oclock='';
  
    export default function ConfirmedBooking (){
        const location = useLocation();
        const booking = location.state;
    const day = new Date(booking.date).getDay();
    const month = new Date(booking.date).getMonth();
    const dayOfMonth = new Date(booking.date).getDate()+1;
    switch(booking.time){
        case '17:00':{
            oclock = '5:00 p.m.'
            break;}
        case '18:00':{
            oclock ='6:00 p.m.'
            break;    }
        case '19:00':{
                oclock = '7:00 p.m.'
                break;}
        case '20:00':{
                oclock ='8:00 p.m.'
                break; }
        case '21:00':{
                oclock = '9:00 p.m.'
                break;}
        case '22:00':{
                oclock ='10:00 p.m.'
                break;  }
        default:{
            oclock = booking.time;   }                      
    }

    return(
        <div className="confirmation">
           
            <h1>Thank you {booking.firstName},</h1>
            <div style={{minHeight:400}}>
            <img src={lemonCake} alt="Lemon Cake"/>
            <h1>Your table for {''+ booking.guests} has been confirmed for </h1>
            <h1> {weekdays[day]}, {''+ months[month]} {''+ dayOfMonth +''} at {oclock} </h1>
            <h1>You're going to have a great {booking.occasion}!</h1>
            </div>
          
        </div>
       
    )
}
