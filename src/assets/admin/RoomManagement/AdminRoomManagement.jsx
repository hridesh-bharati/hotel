import React, { useState, useEffect } from "react";
import { getRooms, deleteRoom } from "../service/api.js"
import { Link } from "react-router-dom";

const AdminRoomManagement = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms().then((data) => setRooms(data));
  }, []);           

  const handleDeleteRoom = (roomId) => {
    deleteRoom(roomId).then(() => {
      setRooms(rooms.filter((room) => room.id !== roomId));
    });
  };

  return (
    <div>
      <h3>Manage Rooms</h3>
      <Link to="/admin/rooms/add">Add New Room</Link>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <span>{room.name}</span>
            <button onClick={() => handleDeleteRoom(room.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminRoomManagement;
