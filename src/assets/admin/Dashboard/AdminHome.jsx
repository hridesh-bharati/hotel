import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { FaBed, FaRegUser, FaCalendarCheck, FaDollarSign } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';

// Registering the chart elements
ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

export default function AdminHome() {
  const [loading, setLoading] = useState(true);
  const [occupancyData, setOccupancyData] = useState({
    labels: ['Occupied', 'Available'],
    datasets: [
      {
        data: [25, 15],
        backgroundColor: ['#FF5733', '#4CAF50'],
        hoverBackgroundColor: ['#FF2D00', '#388E3C'],
      },
    ],
  });

  const [bookingTrends, setBookingTrends] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Bookings',
        data: [120, 200, 250, 300, 350],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.1,
      },
    ],
  });

  const [totalRooms, setTotalRooms] = useState(45);
  const [totalUsers, setTotalUsers] = useState(1200);
  const [upcomingBookings, setUpcomingBookings] = useState(85);
  const [totalBookings, setTotalBookings] = useState(320);
  const [totalRevenue, setTotalRevenue] = useState(125000);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Data is loaded
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h1 className="text-center p-3 fw-bolder text-body-secondary">Hotel Overview</h1>
      <div className="row">
        <div className="col-12 col-md-6 my-2">
          <div className="card shadow-sm">
            <div className="card-header bg-danger text-white">
              <h5 className="card-title">Hotel Status</h5>
            </div>
            <div className="card-body d-flex">
              <p className="display-4 me-3">{totalUsers} <FaRegUser className="text-success" /></p>
              <div>
                <h5 className="text-muted">Users who have booked or registered in the system.</h5>
                <p>The hotel is currently running at full capacity with all rooms booked for the next 7 days.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12  col-md-6 my-2">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title">Total Bookings</h5>
            </div>
            <div className="card-body d-flex">
              <p className="display-4 me-3">{upcomingBookings} <FaCalendarCheck className="text-danger" /></p>
              <div>
                <h5 className="text-muted">Bookings that are scheduled for the coming days.</h5>
                <p>Total bookings made this month: <strong>{totalBookings}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-info text-white">
              <h5 className="card-title">Occupancy Status</h5>
            </div>
            <div className="card-body text-center">
              <Pie data={occupancyData} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-warning text-dark">
              <h5 className="card-title">Booking Trends</h5>
            </div>
            <div className="card-body">
              <Pie data={bookingTrends} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h5 className="card-title">Total Revenue</h5>
            </div>
            <div className="card-body text-center">
              <h6>Total Revenue</h6>
              <p className="display-4">${totalRevenue} <FaDollarSign className="text-warning" /></p>
              <p className="text-muted">Revenue generated from bookings and services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
