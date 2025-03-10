import React from 'react';
import { FaWifi, FaParking, FaWheelchair, FaConciergeBell, FaHome, FaShip, FaHotel } from 'react-icons/fa';

function Facility() {
  // Array of property types with their details
  const properties = [
    {
      icon: <FaShip size={40} />,
      title: 'Houseboat',
      description: 'Search for houseboats and enjoy a unique stay on the water.',
      link: '/search-houseboats',
    },
    {
      icon: <FaHome size={40} />,
      title: 'Villa',
      description: 'Search for luxurious villas offering privacy and comfort.',
      link: '/search-villas',
    },
    {
      icon: <FaHotel size={40} />,
      title: 'All Inclusive',
      description: 'Search for all-inclusive properties for a stress-free vacation.',
      link: '/search-all-inclusive',
    },
    {
      icon: <FaHotel size={40} />,
      title: 'Resort',
      description: 'Search for resorts with beautiful landscapes and premium services.',
      link: '/search-resorts',
    },
    {
      icon: <FaHome size={40} />,
      title: 'Apartment',
      description: 'Search for apartments with modern amenities for your stay.',
      link: '/search-apartments',
    },
  ];

  return (
    <section className="facility container py-5">
      {/* Property Search Section */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="text-primary text-center">Discover Your New Favourite Stay</h2>
          <div className="row">
            {properties.map((property, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card shadow-sm border-0 text-center">
                  <div className="card-body">
                    <span className='text-danger'>{property.icon}</span>
                    <h5 className="card-title text-body-secondary">{property.title}</h5>
                    <p className="card-text">{property.description}</p>
                    <a href={property.link} className="btn btn-primary">Search for {property.title}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="row my-4">
        <div className="col-12">
          <h2 className="text-primary text-center">What Our Guests Are Saying</h2>
          <div className="testimonial d-flex flex-column align-items-center">
            <p>"The facilities at [Restaurant Name] made our event unforgettable. The staff were amazing and the setting was perfect!" - Customer A</p>
          </div>
          <div className="testimonial d-flex flex-column align-items-center">
            <p>"We had our wedding reception here, and everything was seamless. Highly recommend for anyone looking to host a special event." - Customer B</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facility;
