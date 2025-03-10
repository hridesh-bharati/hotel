import React from 'react';
import { FaWifi, FaParking, FaWheelchair, FaConciergeBell, FaHome, FaShip, FaHotel } from 'react-icons/fa';

function Facility() {
  // Property Types
  const properties = [
    { icon: <FaShip size={40} />, title: 'Houseboat', description: 'Enjoy a unique stay on the water.', link: '/search-houseboats' },
    { icon: <FaHome size={40} />, title: 'Villa', description: 'Luxurious villas offering privacy & comfort.', link: '/search-villas' },
    { icon: <FaHotel size={40} />, title: 'All Inclusive', description: 'Stress-free vacation with everything included.', link: '/search-all-inclusive' },
    { icon: <FaHotel size={40} />, title: 'Resort', description: 'Beautiful resorts with premium services.', link: '/search-resorts' },
    { icon: <FaHome size={40} />, title: 'Apartment', description: 'Modern apartments with excellent amenities.', link: '/search-apartments' },
  ];

  return (
    <section className="facility container py-5">
      {/* Section Title */}
      <h1 className="fw-bold text-center mb-4 text-primary">Our Facilities</h1>

      {/* Dining Areas */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="text-dark fw-semibold">Dining Areas</h2>
          <p className="text-muted">
            At <strong>[Restaurant Name]</strong>, we offer a variety of dining options for every occasion.
            Choose from our cozy private booths, elegant indoor seating, or an outdoor patio with stunning views.
          </p>
          <p className="text-muted">
            Whether you're enjoying a romantic dinner, a family gathering, or a business meeting, our diverse dining areas provide the perfect ambiance. 
            Our chefs curate a menu featuring gourmet dishes, fresh ingredients, and international flavors to elevate your dining experience.
          </p>
          <p className="text-muted">
            Our well-trained staff ensures that every guest enjoys a warm and welcoming atmosphere, making your visit truly memorable. 
            Whether it's a casual lunch or a formal dinner, we cater to all your needs with impeccable service.
          </p>
        </div>
        <div className="col-md-6">
          <img src="img/about-4.jpg" className="img-fluid rounded shadow-lg" alt="Dining Area" />
        </div>
      </div>

      {/* Facilities List */}
      <div className="row align-items-center bg-light py-4 px-3 rounded shadow">
        <div className="col-md-6">
          <h2 className="text-dark fw-semibold">Available Facilities</h2>
          <ul className="list-unstyled">
            <li className="mb-2"><FaWifi className="text-success me-2" /> Free Wi-Fi</li>
            <li className="mb-2"><FaParking className="text-success me-2" /> Free Parking</li>
            <li className="mb-2"><FaWheelchair className="text-success me-2" /> Wheelchair Accessible</li>
            <li className="mb-2"><FaConciergeBell className="text-success me-2" /> Concierge Service</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="text-dark fw-semibold">Private Events</h2>
          <p className="text-muted">
            We host private events such as weddings, corporate functions, and special gatherings. 
            Our event spaces are designed to accommodate both intimate celebrations and grand occasions.
          </p>
          <p className="text-muted">
            Our dedicated event planners ensure that every aspect of your event is meticulously organized, from customized menus to themed decorations. 
            Let us create unforgettable moments tailored to your preferences.
          </p>
        </div>
      </div>

      {/* Property Search Section */}
      <div className="my-5">
        <h2 className="text-center text-primary fw-bold mb-4">Discover Your New Favorite Stay</h2>
        <div className="row">
          {properties.map(({ icon, title, description, link }, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-lg text-center p-4 hover-effect">
                <div className="text-danger mb-3">{icon}</div>
                <h5 className="fw-semibold">{title}</h5>
                <p className="text-muted">{description}</p>
                <a href={link} className="btn btn-primary btn-sm">Explore {title}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Testimonials */}
      <div className="bg-light py-4 px-3 rounded shadow my-5">
        <h2 className="text-center text-primary fw-bold">What Our Guests Say</h2>
        <div className="text-center mt-3">
          <p className="fst-italic text-muted">"The facilities at [Hotel Name] made our stay truly unforgettable!" - Guest A</p>
          <p className="fst-italic text-muted">"Best experience ever! The staff and amenities were beyond expectations." - Guest B</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="my-5 shadow py-5">
        <h2 className="text-center text-primary fw-bold">Get In Touch</h2>
        <p className="text-center text-muted">Have questions or want to book an event? Contact us today!</p>
        <div className="d-flex justify-content-center">
          <form className="w-75">
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
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Facility;
