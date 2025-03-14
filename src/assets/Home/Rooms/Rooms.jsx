import { Link } from 'react-router-dom';
import React from 'react';

const roomsData = [
  {
    id: 1,
    address: "Mumbai",
    country: "India",
    type: "Luxury Suite",
    imgSrc: "img/pic1.webp"
  },
  {
    id: 2,
    address: "Goa",
    country: "India",
    type: "Beachfront Villa",
    imgSrc: "img/pic2.webp"
  },
  {
    id: 3,
    address: "Jaipur",
    country: "India",
    type: "Heritage Room",
    imgSrc: "img/pic3.webp"
  },
  {
    id: 4,
    address: "Manali",
    country: "India",
    type: "Mountain Cabin",
    imgSrc: "img/room-1.jpg"
  },
  {
    id: 5,
    address: "Kerala",
    country: "India",
    type: "Houseboat Stay",
    imgSrc: "img/room-2.jpg"
  }
];

function Room() {
  return (
    <section className="container py-5">
      <h1 className="fw-bold text-center mb-4">🏨 Exclusive Hotel Deals</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {roomsData.map(room => (
          <div className="col" key={room.id}>
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <img src={room.imgSrc} className="card-img-top" alt={room.address} />
              <div className="card-body">
                <h4 className="fw-bold text-primary">{room.address}</h4>
                <p className="text-muted mb-1"><i className="bi bi-geo-alt-fill"></i> {room.country}</p>
                <span className="badge bg-danger p-2">{room.type}</span>
                <div className="d-flex justify-content-between mt-3">
                  <Link className="btn btn-primary w-100" to="/rooms/all">Check Availability</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link className='btn btn-warning rounded-4 px-4 py-2' to="/rooms">Explore More</Link>
      </div>
    </section>
  );
}

export default Room;
