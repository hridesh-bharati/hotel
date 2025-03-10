import React from 'react';

const roomsData = [
  {
    id: 1,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic1.webp"
  },
  {
    id: 2,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic2.webp"
  },
  {
    id: 3,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic3.webp"
  },
  {
    id: 4,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic4.webp"
  },
  {
    id: 5,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic5.webp"
  },
  {
    id: 6,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic6.webp"
  },
  {
    id: 7,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic7.webp"
  },
  {
    id: 8,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic8.webp"
  },
  {
    id: 9,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic9.webp"
  },
  {
    id: 10,
    title: "Maharajgnj",
    location: "India",
    type: "Deluxe Room",
    price: "₹3,474",
    date: "8 Mar - 9 Mar",
    description: "Spacious and luxurious room with a king-size bed.",
    imgSrc: "img/pic10.webp"
  }
];

function Room_set() {
  return (
    <div>
      <section className="services container bg-light py-5">
        <h1 className="fw-bold">Hot hotel deals right now</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {roomsData.map(room => (
            <div className="col" key={room.id}>
              <div className="card">
                <img src={room.imgSrc} className="card-img-top" alt={room.title} />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h4 className="card-title text-primary fw-bolder">{room.title}</h4>
                    <button className="btn btn-light"> <i className="bi bi-geo-alt-fill"></i> {room.location}</button>
                  </div>
                  <div className="bg-light p-3">
                    <h5 className="card-subtitle mb-2 text-danger">{room.type}</h5>
                    <h5>{room.price}</h5>
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title"> per night</h5>
                      <span>{room.date}</span>
                    </div>
                    <p>{room.description}</p>
                  </div>
                  <button className="btn btn-primary btn-lg w-100">Check Availability</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section py-5 bg-primary text-white text-center">
        <h2 className="fw-bold mb-4">Book Your Dream Stay Today!</h2>
        <p className="mb-4">Don't miss out on these amazing deals. Book now and enjoy a luxurious stay.</p>
        <button className="btn btn-light btn-lg">Book Now</button>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2025 Your Hotel Name. All Rights Reserved.</p>
          <p>
            <a href="/terms" className="text-white">Terms & Conditions</a> | 
            <a href="/privacy" className="text-white"> Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Room_set;
