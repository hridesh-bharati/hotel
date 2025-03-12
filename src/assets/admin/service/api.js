// admin/services/api.js
const API_URL = "https://api.yourhotel.com";

// Rooms API
export const getRooms = async () => {
  const response = await fetch(`${API_URL}/admin/rooms`);
  return await response.json();
};

export const addRoom = async (roomData) => {
  const response = await fetch(`${API_URL}/admin/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomData),
  });
  return await response.json();
};

export const deleteRoom = async (roomId) => {
  const response = await fetch(`${API_URL}/admin/rooms/${roomId}`, {
    method: "DELETE",
  });
  return await response.json();
};

// Bookings API
export const getBookings = async () => {
  const response = await fetch(`${API_URL}/admin/bookings`);
  return await response.json();
};

export const deleteBooking = async (bookingId) => {
  const response = await fetch(`${API_URL}/admin/bookings/${bookingId}`, {
    method: "DELETE",
  });
  return await response.json();
};
