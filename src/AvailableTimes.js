
import { fetchAPI } from "./APi";

export function initialTimings (date){

   let availableTimes =[]

      const getPrev = window.localStorage.getItem('availableTimes');
      const parsePrev = JSON.parse(localStorage.getItem('availableTimes'));
      
      if(!getPrev){availableTimes = fetchAPI(date)}else{
         const statelen = parsePrev.length;
         let hasDate = false;

         for(let i = 0; i < statelen; i++){
          if (parsePrev[i].day === date) hasDate = true
         }
         hasDate? availableTimes =parsePrev : availableTimes=[...parsePrev, ...fetchAPI(date)]
      }
      console.log(parsePrev)
      
     return availableTimes;
}