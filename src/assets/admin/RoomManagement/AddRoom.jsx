import React, { useState } from "react";
import { addRoom } from "../service/api.js"

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setRoomData({
      ...roomData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRoom(roomData).then(() => {
      // Redirect or notify success
      alert("Room added successfully!");
    });
  };

  return (
    <div>
      <h3>Add New Room</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={roomData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={roomData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
