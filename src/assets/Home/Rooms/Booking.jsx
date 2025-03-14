import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`

const Booking = () => {
  const { id } = useParams(); // Get room ID from URL
  const navigate = useNavigate(); // useNavigate to handle navigation
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [nights, setNights] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  
  // Fetch room details from the API
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/rooms/${id}`); // Fetch room details by ID
        if (!response.ok) {
          throw new Error("Room not found");
        }
        const data = await response.json();
        setRoom(data); // Set room data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false);
      }
    };

    fetchRoom();
  }, [id]); // Re-fetch if `id` changes

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">{error}</p>;
  if (!room) return <p className="text-center text-danger">Room not found</p>;

  // Calculate total price
  const totalPrice = room.price * nights;

  // Handle Booking Submission
  // Client-side booking handling
const handleBooking = async () => {
  if (!checkInDate) {
    alert('Please select a check-in date');
    return;
  }

  const bookingData = {
    roomId: room._id,
    checkInDate,
    nights,
    totalPrice,
  };

  try {
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Booking successful! Proceeding to payment...');
      // Redirect to a payment page or other appropriate action
    } else {
      alert(data.message || 'Failed to book the room.');
    }
  } catch (error) {
    console.error('Error processing the booking:', error);
    alert('Error processing the booking');
  }
};


  const handleCancelBooking = () => {
    // Optionally redirect back to the previous page or home
    navigate('/rooms'); // Redirect to rooms listing or home
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="row g-0">
              {/* Room Image */}
              <div className="col-md-5">
                <img
                  src={room.imgSrc}
                  alt={room.address}
                  className="img-fluid h-100 rounded-start object-fit-cover"
                />
              </div>

              {/* Booking Details */}
              <div className="col-md-7 p-4">
                <h2 className="fw-bold">{room.address}</h2>
                <h4 className="text-danger">
                  ₹{room.price} <small className="text-muted">/ per night</small>
                </h4>

                {/* Check-in Date */}
                <div className="mt-3">
                  <label className="form-label fw-semibold">Check-in Date</label>
                  <input
                    type="date"
                    className="form-control rounded-2"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                  />
                </div>

                {/* Nights Selection */}
                <div className="mt-3 d-flex align-items-center">
                  <label className="fw-semibold me-2">Nights:</label>
                  <button
                    className="btn btn-sm btn-primary-subtle border-primary"
                    onClick={() => setNights((n) => Math.max(1, n - 1))}
                  >
                    -
                  </button>
                  <span className="fw-bold fs-5 mx-3">{nights}</span>
                  <button
                    className="btn btn-sm btn-primary-subtle border-primary"
                    onClick={() => setNights((n) => n + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Total Price */}
                <h4 className="fw-bold mt-3">
                  Total Price: <span className="text-success">₹{totalPrice.toFixed(2)}</span>
                </h4>

                {/* Action Buttons */}
                <button
                  className="btn btn-primary w-100 mt-3 fw-bold py-2 rounded-2"
                  onClick={handleBooking}
                >
                  Proceed to Payment
                </button>
                <button
                  className="btn btn-outline-danger w-100 mt-2 fw-bold py-2 rounded-2"
                  onClick={handleCancelBooking}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
