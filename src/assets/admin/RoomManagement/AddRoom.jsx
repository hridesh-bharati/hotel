import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddRoom = () => {
  const [room, setRoom] = useState({
    address: "",
    country: "",
    type: "",
    price: "",
    date: "",
    description: "",
    imgSrc: "",
  });

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!room.address || !room.country || !room.price) {
      toast.error("Please fill in all required fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(room),
      });

      if (!response.ok) {
        throw new Error("Failed to add room");
      }

      const data = await response.json();
      toast.success("Room added successfully!");

      // Reset form after successful submission
      setRoom({
        address: "",
        country: "",
        type: "",
        price: "",
        date: "",
        description: "",
        imgSrc: "",
      });

      console.log("Room added:", data);
    } catch (error) {
      toast.error("Failed to add room. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4 text-primary">🏠 Add New Room</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Left Column */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Room Address</label>
                  <input
                    type="text"
                    name="address"
                    value={room.address}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter room address"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={room.country}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter country"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Room Type</label>
                  <input
                    type="text"
                    name="type"
                    value={room.type}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter room type"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Price (₹)</label>
                  <input
                    type="text"
                    name="price"
                    value={room.price}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter price"
                    required
                  />
                </div>

                {/* Right Column */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Available Dates</label>
                  <input
                    type="date"
                    name="date"
                    value={room.date}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter available dates"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    name="imgSrc"
                    value={room.imgSrc}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter image URL"
                  />
                </div>

                <div className="col-12 mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    value={room.description}
                    onChange={handleChange}
                    className="form-control"
                    rows="3"
                    placeholder="Enter room description"
                  ></textarea>  
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100">
                    ➕ Add Room
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
