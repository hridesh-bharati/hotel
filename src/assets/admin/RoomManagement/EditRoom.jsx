import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRoom = ({ rooms = [], setRooms }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const roomId = parseInt(id);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    price: "",
    date: "",
    description: "",
    imgSrc: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch room details on mount
  useEffect(() => {
    const room = rooms?.find((r) => r.id === roomId);
    if (room) {
      setFormData(room);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [roomId, rooms]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return alert("Title is required!");

    setRooms((prevRooms) =>
      prevRooms.map((room) => (room.id === roomId ? { ...room, ...formData } : room))
    );

    alert("✅ Room updated successfully!");
    navigate("/admin/rooms"); // Redirect after update
  };

  if (loading) {
    return <h2 className="text-center text-primary">Loading room data...</h2>;
  }

  if (!formData.title) {
    return (
      <div className="text-center">
        <h2 className="text-danger">❌ Room not found!</h2>
        <button className="btn btn-warning" onClick={() => navigate("/admin/rooms")}>🔙 Back to Rooms</button>
      </div>
    );
  }

  return (
    <section className="container py-5">
      <h2 className="text-center">✏️ Edit Room</h2>
      <form onSubmit={handleSubmit} className="room-form">
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        <input type="text" name="type" value={formData.type} onChange={handleChange} required />
        <input type="text" name="price" value={formData.price} onChange={handleChange} required />
        <input type="text" name="date" value={formData.date} onChange={handleChange} required />
        <textarea name="description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="imgSrc" value={formData.imgSrc} onChange={handleChange} required />
        <button type="submit" className="btn btn-success">✅ Update Room</button>
      </form>
    </section>
  );
};

export default EditRoom;
