import React, { useState, useEffect } from 'react';

const AllRoomOrdered = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings');
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleProcess = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/process`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error('Failed to process booking');
      }
      alert('Booking processed successfully');
      // Refresh bookings list after processing
      setBookings((prevBookings) => prevBookings.filter((b) => b._id !== bookingId));
    } catch (error) {
      alert('Error processing booking');
    }
  };

  const handleCancel = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/cancel`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }
      alert('Booking canceled successfully');
      // Refresh bookings list after cancellation
      setBookings((prevBookings) => prevBookings.filter((b) => b._id !== bookingId));
    } catch (error) {
      alert('Error canceling booking');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="admin-bookings">
      <h2>Admin Bookings</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Room</th>
            <th>Check-in Date</th>
            <th>Nights</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.nights}</td>
              <td>{booking.totalPrice}</td>
              <td>{booking.status}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleProcess(booking._id)}
                >
                  Mark as Processed
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleCancel(booking._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllRoomOrdered;
