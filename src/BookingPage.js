import fish from './images/Grilled fish.jpeg'
import BookingForm from './BookingForm'
import BookingSlot from './BookingSlot'
import { useState, useReducer} from 'react'
import { submitAPI,fetchAPI } from './APi'
import { useNavigate } from 'react-router-dom'
import { initialTimings } from './AvailableTimes'


const prevDate = new Date();
const today =prevDate.toISOString().split('T')[0];

export default function BookingPage(){
    
     const [booking, setBooking] = useState({
        date: today,
        time: '',
        guests: 1,
        occasion: '',
        firstName: '',
        lastName:''
     });

     const [req, setReq] = useState({
      firstName:'',
      lastName:''
     })
 
     const navigate = useNavigate();
     const [temp,setTemp] = useState([])
     
     const reducer = (state,action)=>{
        switch (action.type){
            case 'update':{
               let newBookings = [];
              if(temp.length === 0){
               setTemp([action.day,action.time]);
               newBookings =  state.map((d)=> d.day === action.day && d.time === action.time ?{...d, isAvailable : false}:d)
              }else{
               newBookings = state.map((d)=>{
                  if( d.day === action.day && d.time === action.time){return{...d, isAvailable : false}}
                  else if(temp[0] === d.day && temp[1] === d.time){ setTemp([action.day, action.time]); return {...d, isAvailable :true}}
                  else return d;
                  
               })
              }
              return newBookings;
              
            }
            case 'initialize':{
               const statelen = state.length;
               let hasDate = false;

               for(let i = 0; i < statelen; i++){
                if (state[i].day === action.day) hasDate = true
               }
            return hasDate ? state : [...state,...fetchAPI(action.day)]
            }
            default: {
                throw Error('unkown action: '+ action.type);
            }
        }
     };

     const [state, dispatch] = useReducer(reducer,today, initialTimings);

     const handleAvailableTimes = (e)=>{
        setBooking({...booking, time:e.target.value})
        // updateTimes(e);
        dispatch({
            type:'update',
            time : e.target.value,
            day : booking.date
        })
        console.log(state, booking)
     }

     const handleSubmit =(e)=>{
        e.preventDefault();
        window.localStorage.setItem('availableTimes', JSON.stringify(state))
      if(submitAPI(booking)) navigate('/confirmedbooking',{state:booking});
        
        console.log(booking, state);
        setBooking({firstName:'',
                    lastName:'',
                    date:today,
                    time:'',
                    guests:1,
                    occasion:''
        })
       
     };

     const handleDate =(e)=>{
        e.preventDefault();
        setBooking({...booking, date:e.target.value})
        // initializeTimes(booking.date);};
        dispatch({
            type:'initialize',
            day: e.target.value
        })
        console.log(state)
    };

     const handleGuests =(e)=>setBooking({...booking, guests:e.target.value})
     
     const handleOccasion =(e)=>{
        setBooking({...booking,occasion:e.target.value})}

     const handleFirstName =(e)=> {
      setBooking({...booking,firstName:e.target.value});
      e.target.value.length < 3 ? setReq({...req,firstName:'Name should be atleast 3 characters long'}):setReq({...req,firstName:''})}
     
      const handleLastName =(e)=> {setBooking({...booking,lastName:e.target.value});
      e.target.value.length < 3 ? setReq({...req,lastName:'Name should be atleast 3 characters long'}):setReq({...req,lastName:''})};
     
     const month = new Date(booking.date).getMonth() +1;
     const dayOfMonth = new Date(booking.date).getDate()+1;
     
     
     return(
        <section className='flex_container' style={{backgroundColor:'#EDEFEE'}}>
            <h1 className='markazi-text-name-title '>Book a Table</h1>
            <img src={fish} alt='Grilled Fish'/>
            <h1>Booking times available for {month}/{dayOfMonth}</h1>
            <div className='slots'>
                {state.map((t) => t.day === booking.date ?<BookingSlot key={t.time} isAvailable={t.isAvailable} timeSlot={t.time} /> : null) }
            </div>
           <BookingForm
           booking = {booking}
           handleFirstName={handleFirstName} 
           handleLastName={handleLastName}
           handleAvailableTimes={handleAvailableTimes}
           handleDate={handleDate}
           availableTimes={state}
           handleGuests={handleGuests}
           handleOccasion={handleOccasion}
           handleSubmit={handleSubmit} 
           req ={req}/>
           
        </section>
    )
}