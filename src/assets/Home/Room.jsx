import React from 'react';
import { Link } from 'react-router-dom';
function Room() {
    return (
        <section className="services container bg-light py-5">
            <h1 className="fw-bold">Hot hotel deals right now</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src="img/pic1.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title text-primary fw-bolder">Maharajgnj</h4>
                                <button className='btn btn-light'> <i class="bi bi-geo-alt-fill"></i> India</button>
                            </div>
                            <div className='bg-light p-3'>
                                <h5 className="card-subtitle mb-2 text-danger">Deluxe Room</h5>
                                <h5  >₹3,474</h5   >
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title"> per night</h5>
                                    <span>8 Mar - 9 Mar</span>
                                </div>
                                <p>Spacious and luxurious room with a king-size bed.</p>
                            </div>
                            <button className="btn btn-primary btn-lg w-100">Check Availability</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="img/pic2.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title text-primary fw-bolder">Maharajgnj</h4>
                                <button className='btn btn-light'> <i class="bi bi-geo-alt-fill"></i> India</button>
                            </div>
                            <div className='bg-light p-3'>
                                <h5 className="card-subtitle mb-2 text-danger">Deluxe Room</h5>
                                <h5  >₹3,474</h5   >
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title"> per night</h5>
                                    <span>8 Mar - 9 Mar</span>
                                </div>
                                <p>Spacious and luxurious room with a king-size bed.</p>
                            </div>
                            <button className="btn btn-primary btn-lg w-100">Check Availability</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="img/pic3.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title text-primary fw-bolder">Maharajgnj</h4>
                                <button className='btn btn-light'> <i class="bi bi-geo-alt-fill"></i> India</button>
                            </div>
                            <div className='bg-light p-3'>
                                <h5 className="card-subtitle mb-2 text-danger">Deluxe Room</h5>
                                <h5  >₹3,474</h5   >
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title"> per night</h5>
                                    <span>8 Mar - 9 Mar</span>
                                </div>
                                <p>Spacious and luxurious room with a king-size bed.</p>
                            </div>
                            <button className="btn btn-primary btn-lg w-100">Check Availability</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-12 text-end">
                    <Link className='btn btn-primary' to="/rooms">Explore More</Link>
                </div>
            </div>
        </section>
    );
}

export default Room;
