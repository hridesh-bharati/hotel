import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Room_Set = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch rooms from backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/rooms"); // Update with actual backend URL
        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }
        const data = await response.json();
        setRooms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="container py-5">
      <h1 className="fw-bold text-center mb-4">🌟 Exclusive Hotel Deals Now</h1>

      {/* Show loading indicator */}
      {loading && <p className="text-center">Loading rooms...</p>}

      {/* Show error message if fetching fails */}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Show rooms only if fetched successfully */}
      {!loading && !error && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {rooms.map((room) => (
            <div className="col" key={room._id}>
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <img src={room.imgSrc} className="card-img-top" alt={room.address} />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold text-primary">{room.address}</h4>
                    <span className="badge bg-danger p-2">{room.type}</span>
                  </div>
                  <p className="text-muted">
                    <i className="bi bi-geo-alt-fill"></i> {room.country}
                  </p>
                  <h5 className="text-danger">
                    💰 {room.price} <small className="text-muted">/ per night</small>
                  </h5>
                  <h6 className="text-muted">📅 {room.date}</h6>
                  <p className="text-secondary">{room.description}</p>
                  <Link className="btn btn-success w-100 py-2 fw-bold" to={`/book/${room._id}`}>
                    🏨 Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Room_Set;
