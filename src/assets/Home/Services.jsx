import React from 'react';

function Services() {
  return (
    <section className="services py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {/* Free WiFi Card */}
          <div className="col-md-4 mb-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-wifi" style={{ fontSize: '3rem', color: '#007bff' }}></i>
                <h5 className="card-title mt-3">Free WiFi</h5>
                <p className="card-text">Stay connected with high-speed internet during your stay.</p>
              </div>
            </div>
          </div>

          {/* Restaurant Card */}
          <div className="col-md-4 mb-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-cup" style={{ fontSize: '3rem', color: '#007bff' }}></i>
                <h5 className="card-title mt-3">Restaurant</h5>
                <p className="card-text">Enjoy delicious meals in our on-site restaurant.</p>
              </div>
            </div>
          </div>

          {/* Parking Card */}
          <div className="col-md-4 mb-4">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-car-front-fill" style={{ fontSize: '3rem', color: '#007bff' }}></i>
                <h5 className="card-title mt-3">Parking</h5>
                <p className="card-text">Safe and secure parking available for all guests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
