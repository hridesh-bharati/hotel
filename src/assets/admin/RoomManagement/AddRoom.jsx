import React, { useState } from "react";

const AddRoom = ({ onAddRoom }) => {
  const [room, setRoom] = useState({
    title: "",
    location: "",
    type: "",
    price: "",
    date: "",
    description: "",
    imgSrc: "",
  });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!room.title || !room.location || !room.price) {
      alert("Please fill in all required fields!");
      return;
    }
    onAddRoom(room);
    setRoom({
      title: "",
      location: "",
      type: "",
      price: "",
      date: "",
      description: "",
      imgSrc: "",
    });
  };

  return (
    <form className="room-form" onSubmit={handleSubmit}>
      <h2>Add New Room</h2>

      <input type="text" name="title" value={room.title} onChange={handleChange} placeholder="Room Title" required />

      <input type="text" name="location" value={room.location} onChange={handleChange} placeholder="Location" required />

      <input type="text" name="type" value={room.type} onChange={handleChange} placeholder="Room Type" />

      <input type="text" name="price" value={room.price} onChange={handleChange} placeholder="Price (₹)" required />

      <input type="text" name="date" value={room.date} onChange={handleChange} placeholder="Available Dates" />

      <textarea name="description" value={room.description} onChange={handleChange} placeholder="Room Description"></textarea>

      <input type="text" name="imgSrc" value={room.imgSrc} onChange={handleChange} placeholder="Image URL" />

      <button type="submit" className="btn btn-success">➕ Add Room</button>

      {/* CSS Styles */}
      <style>{`
        .room-form {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .room-form input, .room-form textarea {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .btn-success {
          display: block;
          width: 100%;
          padding: 10px;
          background: #28a745;
          color: white;
          border: none;
          cursor: pointer;
        }

        .btn-success:hover {
          opacity: 0.8;
        }
      `}</style>
    </form>
  );
};

export default AddRoom;
