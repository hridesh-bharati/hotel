import React, { useEffect, useState } from 'react';

function AllMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/contact/messages');
        if (!response.ok) {
          throw new Error('Failed to fetch messages');
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Function to handle message deletion
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        // Remove the deleted message from the UI
        setMessages(messages.filter((message) => message._id !== id));
        alert(data.message); // Show success message
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Error deleting the message');
    }
  };

  if (loading) {
    return <p>Loading messages...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="admin-messages">
      <h2>Admin Messages</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Action</th> {/* New column for delete button */}
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message._id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.subject}</td>
              <td>{message.message}</td>
              <td>
                {/* Delete Button */}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(message._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllMessages;
