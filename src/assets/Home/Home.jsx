import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Room from './Room';

function Home() {

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section text-white text-center py-5 mainbg" style={{ backgroundImage: 'url("img/carousel1.jpg")' }}>
                <div className="head-title">
                    <h1>Welcome to Our Hotel</h1>
                    <p className='mb-4'>Your perfect place for relaxation and comfort</p>
                    <Link to="/rooms" className="animated-border m-3 btn-lg">
                        Rooms
                    </Link>
                    <Link to="/facilities" className="animated-border m-3 btn-lg">
                        Facilities
                    </Link>

                </div>
            </section>

            {/* Featured Rooms */}
            <section className="featured-rooms py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Featured Rooms</h2>
                    <div className="row">
                        {/* Example Room Card 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="img/room-1.jpg" className="card-img-top" alt="Room 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Deluxe Room</h5>
                                    <p className="card-text">Spacious and luxurious room with a king-size bed.</p>
                                    <Link to="/rooms" className="btn btn-primary">
                                        View Room
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Example Room Card 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="img/room-2.jpg" className="card-img-top" alt="Room 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Standard Room</h5>
                                    <p className="card-text">Comfortable room with modern amenities.</p>
                                    <Link to="/rooms" className="btn btn-primary">
                                        View Room
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Example Room Card 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card">
                                <img src="img/room-3.jpg" className="card-img-top" alt="Room 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Premium Suite</h5>
                                    <p className="card-text">Elegant suite with a stunning city view.</p>
                                    <Link to="/rooms" className="btn btn-primary">
                                        View Room
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            {/* <Services /> */}
            <Room />
            
            {/* Call to Action */}
            <section className="cta bg-primary-subtle text-center py-5">
                <div className="container">
                    <h2>Book Your Stay Today!</h2>
                    <p>Experience the best comfort and service at our hotel. Book now and enjoy special offers.</p>
                    <Link to="/contact" className="btn btn-light btn-lg">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
