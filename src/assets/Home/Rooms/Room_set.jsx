import { Link } from 'react-router-dom';
import React from 'react';

const roomsData = [
  {
    id: 1,
    title: "Mumbai",
    location: "India",
    type: "Luxury Suite",
    price: "₹5,999",
    date: "12 Mar - 13 Mar",
    description: "An elegant suite with a stunning city view and premium amenities.",
    imgSrc: "/img/pic1.webp"
  },
  {
    id: 2,
    title: "Goa",
    location: "India",
    type: "Beachfront Villa",
    price: "₹8,499",
    date: "15 Mar - 16 Mar",
    description: "A beautiful villa by the beach with private pool and sunset view.",
    imgSrc: "/img/pic2.webp"
  },
  {
    id: 3,
    title: "Jaipur",
    location: "India",
    type: "Heritage Room",
    price: "₹4,250",
    date: "18 Mar - 19 Mar",
    description: "A royal-themed room with antique decor and regal ambiance.",
    imgSrc: "/img/pic3.webp"
  },
  {
    id: 4,
    title: "Manali",
    location: "India",
    type: "Mountain Cabin",
    price: "₹6,799",
    date: "20 Mar - 21 Mar",
    description: "Cozy wooden cabin in the mountains with a breathtaking valley view.",
    imgSrc: "/img/room-1.jpg"
  },
  {
    id: 5,
    title: "Kerala",
    location: "India",
    type: "Houseboat Stay",
    price: "₹7,999",
    date: "22 Mar - 23 Mar",
    description: "Experience a stay on a luxurious houseboat in the serene backwaters.",
    imgSrc: "/img/room-2.jpg"
  }
];

function Room_Set() {
  return (
    <section className="container py-5">
      <h1 className="fw-bold text-center mb-4">🌟 Exclusive Hotel Deals Now</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {roomsData.map(room => (
          <div className="col" key={room.id}>
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <img src={room.imgSrc} className="card-img-top" alt={room.title} />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-bold text-primary">{room.title}</h4>
                  <span className="badge bg-danger p-2">{room.type}</span>
                </div>
                <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> {room.location}</p>
                <h5 className="text-danger">💰 {room.price} <small className="text-muted">/ per night</small></h5>
                <h6 className="text-muted">📅 {room.date}</h6>
                <p className="text-secondary">{room.description}</p>
                <Link className="btn btn-success w-100 py-2 fw-bold" to={`/book/${room.id}`}>
                  🏨 Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Room_Set;
