import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [formData, setFormData] = useState({
    address: "",
    country: "",
    type: "",
    price: "",
    date: "",
    description: "",
    imgSrc: "",
  });

  // Fetch Room Details and Pre-fill Inputs
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/rooms/${id}`);
        if (!response.ok) throw new Error("Failed to fetch room details");

        const data = await response.json();
        setRoom(data); // Store previous data for display
        setFormData({
          address: data.address || "",
          country: data.country || "",
          type: data.type || "",
          price: data.price || "",
          date: data.date ? data.date.split("T")[0] : "", // Ensure correct date format
          description: data.description || "",
          imgSrc: data.imgSrc || "",
        });
      } catch (error) {
        console.error("Error fetching room:", error);
        toast.error("⚠️ Error loading room details");
      }
    };

    fetchRoom();
  }, [id]);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission (Update Room)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/rooms/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update room");

      toast.success("✅ Room updated successfully!");
      navigate("/admin/rooms"); // Redirect after update
    } catch (error) {
      console.error("Update Error:", error);
      toast.error("⚠️ Error updating room. Please try again.");
    }
  };

  return (
    <div className="container-fluid row mt-5">
      <h2 className="text-center mb-4">✏️ Edit Room</h2>
      <div className="col-md-4">
        {/* Show Previous Room Data */}
        {room && (
          <div className="card shadow-lg mb-4">
            <img src={room.imgSrc} className="card-img-top" alt={room.address} />
            <div className="card-body">
              <h4 className="fw-bold text-primary">{room.address}</h4>
              <span className="badge bg-danger p-2">{room.type}</span>
              <p className="text-muted"><i className="bi bi-geo-alt-fill"></i> {room.country}</p>
              <h5 className="text-danger">💰 {room.price} <small className="text-muted">/ per night</small></h5>
              <h6 className="text-muted">📅 {room.date}</h6>
              <p className="text-secondary">{room.description}</p>
            </div>
          </div>
        )}
      </div>
      <div className="col-md-8">
        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="shadow p-4 rounded">
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Type</label>
            <input
              type="text"
              name="type"
              className="form-control"
              value={formData.type}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              name="imgSrc"
              className="form-control"
              value={formData.imgSrc}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            💾 Update Room
          </button>
        </form>
      </div>



    </div>
  );
};

export default EditRoom;
