
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import BookingPage from './Booking';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/highlights' element ={<Highlights/>}/>
        <Route path='/testimonials' element ={<Testimonials/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/reservations' element={<BookingPage/>}/>
       <Route path='/confirmedbooking' element={<ConfirmedBooking/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
