import React, { useState } from "react";
import { useParams } from "react-router-dom";

const roomsData = [
  { id: 1, title: "Mumbai", price: 5999, imgSrc: "/img/pic1.webp" },
  { id: 2, title: "Goa", price: 8499, imgSrc: "/img/pic2.webp" },
  { id: 3, title: "Jaipur", price: 4250, imgSrc: "/img/pic3.webp" },
  { id: 4, title: "Manali", price: 6799, imgSrc: "/img/room-1.jpg" },
  { id: 5, title: "Kerala", price: 7999, imgSrc: "/img/room-2.jpg" }
];

const Booking = () => {
  const { id } = useParams();
  const room = roomsData.find((room) => room.id === parseInt(id));

  const [nights, setNights] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");

  if (!room) {
    return <h2 className="text-danger text-center mt-5">Room Not Found</h2>;
  }

  // Calculate total price
  const totalPrice = room.price * nights;

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
                  alt={room.title}
                  className="img-fluid h-100 rounded-start object-fit-cover"
                />
              </div>

              {/* Booking Details */}
              <div className="col-md-7 p-4">
                <h2 className="fw-bold">{room.title}</h2>
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
                <button className="btn btn-primary w-100 mt-3 fw-bold py-2 rounded-2">
                  Proceed to Payment
                </button>
                <button className="btn btn-outline-danger w-100 mt-2 fw-bold py-2 rounded-2">
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