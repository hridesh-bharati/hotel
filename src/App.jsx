import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Home/Home';
import About from './assets/About/About';
import Header from './assets/Header/Header';
import Room from './assets/Home/Rooms/Rooms';
import Room_set from './assets/Home/Rooms/Room_set.jsx';
import Footer from './assets/Footer/Footer';
import Facility from './assets/Facility/Facility.jsx';
import Contact from './assets/Contact/Contact.jsx';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/all" element={<Room_set />} />
        <Route path="/facility" element={<Facility />} />    
        <Route path="/contact" element={<Contact />} />    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
