
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import Booking from './Booking';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/highlights' element ={<Highlights/>}/>
        <Route path='/testimonials' element ={<Testimonials/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/reservations' element={<Booking/>}/>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
