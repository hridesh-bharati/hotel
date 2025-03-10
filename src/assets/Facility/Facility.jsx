import React from 'react';
import { FaWifi, FaParking, FaWheelchair, FaConciergeBell } from 'react-icons/fa';
import Facility_Card from './Facility_card';

function Facility() {
  return (
    <section className="facility container py-5">
      {/* Section Heading */}
      <h1 className="fw-bold text-center mb-4">Our Facilities</h1>

      {/* Dining Areas */}
      <div className="row my-4">
        <div className="col-md-6">
          <h2 className="text-primary">Dining Areas</h2>
          <p>
            At [Restaurant Name], we offer a variety of dining options to suit any occasion. From intimate settings for two to large spaces for group gatherings, we have the perfect environment to complement your dining experience. Whether you prefer an indoor dining room, a cozy private booth, or our outdoor patio with a view, we cater to your preferences.
          </p>
        </div>
        <div className="col-md-6">
          <img src="img/dining-area.jpg" className="img-fluid rounded shadow-lg" alt="Dining Area" />
        </div>
      </div>

      {/* Available Facilities */}
      <div className="row my-2">
        <div className="col-md-6">
          <h2 className="text-primary">Our Facilities</h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle-fill text-success"></i> <FaWifi /> Free Wi-Fi</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> <FaParking /> Free Parking</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> <FaWheelchair /> Wheelchair Accessible</li>
            <li><i className="bi bi-check-circle-fill text-success"></i> <FaConciergeBell /> Concierge Service</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="text-primary">Private Events</h2>
          <p>
            We offer private event hosting for weddings, corporate functions, and other special occasions. Our dedicated events team will assist you in planning every detail, from the menu to the décor, ensuring a flawless experience for you and your guests.
          </p>
        </div>
      </div>
      <Facility_Card />

      {/* Contact Us */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="text-primary text-center">Contact Us for More Information</h2>
          <p>
            Interested in learning more about our facilities or booking an event? Contact us today, and our team will be happy to assist you.
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Facility;
