import React, { useState, useEffect } from "react";
import { getBookings, deleteBooking } from "../service/api.js"

const AdminBookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((data) => setBookings(data));
  }, []);

  const handleDeleteBooking = (bookingId) => {
    deleteBooking(bookingId).then(() => {
      setBookings(bookings.filter((booking) => booking.id !== bookingId));
    });
  };

  return (
    <div>
      <h3>Manage Bookings</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <span>{booking.customerName} - {booking.roomName}</span>
            <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBookingManagement;
