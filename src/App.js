
import './App.css';
import Navbar from './components/Header/Navbar';
import { Routes, Route } from "react-router-dom";

import Home from './components/MainPage/Home';
import About from './components/MainPage/About';
import Work from './components/MainPage/Work';
import Services from './components/MainPage/Services';
import Features from './components/MainPage/Features';
import Contact from './components/MainPage/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>

     
     <Navbar />
     <Routes>

     
        
        <Route path='/' element={ <Home />} />
        <Route path='about' element={<About />} />
        <Route path='work' element={<Work />} />
        <Route path='services' element={<Services />} /> 
        <Route path='/features' element={<Features />} />
        <Route path='/contact'  element={<Contact />} />
     </Routes>
     <Footer />
    </>
  );
}

export default App;
