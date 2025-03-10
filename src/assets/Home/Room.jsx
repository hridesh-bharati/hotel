import React from 'react';
import { Link } from 'react-router-dom';

function Room() {
    const rooms = [
        {
            location: "Mumbai",
            country: 'India',
            type: "Luxury Suite",
            price: "5,999",
            schedule: 'per night',
            timing: '12 Mar - 13 Mar',
            description: 'An elegant suite with a stunning city view and premium amenities.',
            image: 'img/room-1.jpg'
        },
        {
            location: "Goa",
            country: 'India',
            type: "Beachfront Villa",
            price: "8,499",
            schedule: 'per night',
            timing: '15 Mar - 16 Mar',
            description: 'A beautiful villa by the beach with private pool and sunset view.',
            image: 'img/room-2.jpg'
        },
        {
            location: "Jaipur",
            country: 'India',
            type: "Heritage Room",
            price: "4,250",
            schedule: 'per night',
            timing: '18 Mar - 19 Mar',
            description: 'A royal-themed room with antique decor and regal ambiance.',
            image: 'img/room-3.jpg'
        }
    ];
    
    return (
        <section className="services container bg-light py-5">
            <h1 className="fw-medium text-center">Exclusive Hotel Deals</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {rooms.map((room, index) => (
                    <div className="col" key={index}>
                        <div className="card shadow-sm">
                            <img src={room.image} className="card-img-top" alt={room.type} />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title text-primary fw-bold">{room.location}</h4>
                                    <button className='btn btn-light'>
                                        <i className="bi bi-geo-alt-fill"></i> {room.country}
                                    </button>
                                </div>
                                <div className='bg-light p-3 rounded'>
                                    <h5 className="card-subtitle mb-2 text-danger">{room.type}</h5>
                                    <h5 className="text-dark">₹ {room.price}</h5>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="card-title text-muted">{room.schedule}</h6>
                                        <span className="text-muted">{room.timing}</span>
                                    </div>
                                    <p className="text-secondary">{room.description}</p>
                                </div>
                                {/* <button className="btn btn-primary btn-lg w-100 mt-2">Check Availability</button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row my-4">
                <div className="col-12 text-center">
                    <Link className='btn btn-primary rounded-1 btn-lg' to="/rooms/all">Explore More & Book</Link>
                </div>
            </div>
        </section>
    );
}

export default Room;