import React from 'react';
import { MdHotel, MdOutlineRoomService } from 'react-icons/md';
import { FaRegStar, FaUsers, FaAward } from 'react-icons/fa';

function About() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'General Manager',
      image: 'img/team-1.jpg',
      description: 'With 20+ years of experience, John ensures the highest standards of hospitality and guest satisfaction.'
    },
    {
      name: 'Sophia Williams',
      role: 'Executive Chef',
      image: 'img/team-2.jpg',
      description: 'Sophia crafts world-class culinary experiences using the freshest ingredients and innovative techniques.'
    },
    {
      name: 'Michael Smith',
      role: 'Front Desk Manager',
      image: 'img/team-3.jpg',
      description: 'Michael provides a seamless check-in experience, ensuring every guest receives a warm welcome.'
    }
  ];

  const rooms = [
    {
      name: 'Deluxe Suite',
      image: 'img/room-2.jpg',
      description: 'Spacious, elegant, and equipped with modern amenities for a luxurious stay.'
    },
    {
      name: 'Executive Room',
      image: 'img/room-2.jpg',
      description: 'A perfect blend of comfort and convenience, ideal for business travelers.'
    },
    {
      name: 'Presidential Suite',
      image: 'img/room-2.jpg',
      description: 'An exclusive suite offering breathtaking views and top-tier services.'
    }
  ];
  const aboutcaption = {
    width: "150px",
    height: '140px',
    borderRadius: "100%"
  }
  return (
    <section className="container py-5">
      {/* Banner */}
      <div className="text-center mb-5">
        {/* <img src="img/room-2.jpg" className="img-fluid shadow-lg" alt="Hotel" style={aboutcaption} /> */}
        <h1 className="text-primary fw-bold mt-3">About Our Hotel</h1>
        <p className="text-muted">Experience world-class hospitality and luxury at [Hotel Name].</p>
      </div>

      {/* Our Story */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="text-primary"><MdHotel size={32} /> Our Story</h2>
          <p>
            Welcome to <strong>[Hotel Name]</strong>, where elegance meets comfort. Established in [Year], we have been redefining luxury with our impeccable service, modern amenities, and breathtaking ambiance.
          </p>
          <p>
            Nestled in the heart of [Location], our hotel offers an oasis of relaxation and sophistication, ensuring a memorable stay for every guest.
          </p>
        </div>
        <div className="col-md-6">
          <img src="img/room-1.jpg" className="img-fluid rounded shadow" alt="Hotel Lobby" />
        </div>
      </div>

      {/* Mission & Values */}
      <div className="row my-5">
        <div className="col-md-6">
          <h2 className="text-primary"><MdOutlineRoomService size={32} /> Our Mission</h2>
          <p>
            Our mission is to deliver unparalleled hospitality experiences that leave a lasting impression. We strive to provide our guests with luxury, comfort, and world-class service.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="text-primary"><FaRegStar size={32} /> Our Values</h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> Excellence: We exceed expectations in every detail.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Integrity: Honesty and transparency define our service.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Guest-Centric: We put our guests at the heart of everything we do.</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> Sustainability: We are committed to eco-friendly practices.</li>
          </ul>
        </div>
      </div>

      {/* Meet Our Team */}
      <h2 className="text-center text-primary fw-bold mb-4"><FaUsers size={28} /> Meet Our Team</h2>
      <div className="row text-center">
        {teamMembers.map(({ name, role, image, description }) => (
          <div key={name} className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <img src={image} alt={role} className="card-img-top rounded-circle p-5" />
              <div className="card-body">
                <h5 className="card-title text-danger">{name}</h5>
                <p className="card-text"><strong>{role}</strong></p>
                <p className="text-muted">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Room Showcase */}
      <h2 className="text-center text-primary fw-bold my-5">Our Luxurious Rooms</h2>
      <div className="row">
        {rooms.map(({ name, image, description }) => (
          <div key={name} className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <img src={image} alt={name} className="card-img-top rounded" />
              <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="text-muted">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="bg-light p-4 rounded shadow my-5">
        <h2 className="text-center text-primary fw-bold">Guest Reviews</h2>
        <div className="text-center mt-3">
          <p className="fst-italic">"An unforgettable stay! The service, the rooms, and the ambiance were simply amazing." - Guest A</p>
          <p className="fst-italic">"One of the best hotels I’ve ever stayed in. Highly recommended!" - Guest B</p>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="row my-5 text-center">
        <h2 className="text-primary fw-bold mb-3"><FaAward size={28} /> Awards & Recognition</h2>
        <div className="col-md-12">
          <p className="text-muted">We are proud to be recognized for our excellence in hospitality.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><i className="bi bi-trophy-fill text-warning"></i> Best Luxury Hotel - 2023</li>
            <li className="list-inline-item"><i className="bi bi-trophy-fill text-warning"></i> Top 10 Hotels in [Location]</li>
            <li className="list-inline-item"><i className="bi bi-trophy-fill text-warning"></i> Traveler’s Choice Award</li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default About;
