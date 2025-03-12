import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./assets/Header/Header";
import Footer from "./assets/Footer/Footer";
import Home from "./assets/Home/Home";
import About from "./assets/About/About";
import RoomSet from "./assets/Home/Rooms/Room_set";
import Facility from "./assets/Facility/Facility";
import Contact from "./assets/Contact/Contact";
import Booking from "./assets/Home/Rooms/Booking";

// Admin Pages

import AdminDashboard from "./assets/admin/Dashboard/AdminDashboard";
import AdminRoomManagement from "./assets/admin/RoomManagement/AdminRoomManagement";
import AddRoom from "./assets/admin/RoomManagement/AddRoom";
import AdminBookingManagement from "./assets/admin/BookingManagement/AdminBookingManagement";

const App = () => (
  <Router>
    <Header />
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms/all" element={<RoomSet />} />
      <Route path="/facility" element={<Facility />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book/:id" element={<Booking />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/rooms" element={<AdminRoomManagement />} />
      <Route path="/admin/rooms/add" element={<AddRoom />} />
      <Route path="/admin/bookings" element={<AdminBookingManagement />} />
    </Routes>
    {/* <Footer /> */}
  </Router>
);

export default App;
