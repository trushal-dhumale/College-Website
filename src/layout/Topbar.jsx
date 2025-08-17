import React from "react";
import { Search, Bell } from "lucide-react";
import "./Topbar.css"; // Import external CSS file

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} className="icon-gray" />
        <input
          className="search-input"
          placeholder="Search students, jobs, applications…"
        />
      </div>
      <div className="topbar-actions">
        <button className="notification-btn">
          <Bell size={20} className="icon-dark" />
          <span className="notification-badge">3</span>
        </button>
        <div className="user-info">
          <img className="user-avatar" src="https://i.pravatar.cc/80?img=5" alt="user" />
          <div className="user-details">
            <div className="user-name">Admin</div>
            <div className="user-role">Placement Cell</div>
          </div>
        </div>
      </div>
    </header>
  );
}
