import { useState } from "react";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome.jsx";
import AllRoom from "../RoomManagement/AllRoom.jsx";
import AddRoom from "../RoomManagement/AddRoom.jsx";
import EditRoom from "../RoomManagement/EditRoom.jsx";
import AllMessages from "../Messages/AllMessages.jsx";
import AllRoomOrdered from "../BookingManagement/AllRoomOrdered.jsx";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  const tabComponents = {
    home: <AdminHome />,
    rooms: <AllRoom />,
    AddRoom: <AddRoom />,
    editRoom: <EditRoom />,
    AllMessages: <AllMessages />,
    Bokking: <AllRoomOrdered />,
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      {!isSidebarHidden && (
        <div className="admin-sidebar">
          <div className="sidebar-header">
            <h3>Admin Panel</h3>
            {/* Sidebar Toggle Button (Moves with Sidebar) */}
            <button
              className="toggle-sidebar-btn"
              onClick={() => setIsSidebarHidden(!isSidebarHidden)}
              aria-label={isSidebarHidden ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isSidebarHidden ? "☰" : "X"}
            </button>

          </div>
          <nav className="sidebar-nav">
            <ul>
              {[
                { key: "home", icon: "fa-tachometer-alt", label: "Overview" },
                { key: "AddRoom", icon: "fa-plus-square", label: "Add Room" },
                { key: "rooms", icon: "fa-bed", label: "All Rooms" },
                // { key: "editRoom", icon: "fa-edit", label: "Edit Room" },
                { key: "AllMessages", icon: "fa-users", label: "Manage messages" },
                { key: "Bokking", icon: "fa-cogs", label: "Booking" },
              ].map(({ key, icon, label }) => (
                <li key={key}>
                  <button
                    className={`nav-link ${activeTab === key ? "active" : ""}`}
                    onClick={() => setActiveTab(key)}
                    aria-label={label}
                  >
                    <i className={`fas ${icon}`}></i> {label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/logout" className="nav-link">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar Toggle Button (Only when collapsed) */}
      {isSidebarHidden && (
        <button
          className="toggle-sidebar-btn fw-bolder open-btn"
          onClick={() => setIsSidebarHidden(false)}
          aria-label="Expand Sidebar"
        >
          ☰
        </button>
      )}

      {/* Main Content */}
      <div className={`admin-main-content ${isSidebarHidden ? "full-width" : ""}`}>
        {tabComponents[activeTab] || <h3>Page Not Found</h3>}
      </div>
    </div>
  );
};

export default AdminDashboard;
