import React from "react";
import "./ExportStudents.css"; // External CSS file

export default function ExportStudents() {
  return (
    <div className="export-container">
      <h1 className="export-title">Export Student Data</h1>
      <div className="export-box">
        <div className="filter-grid">
          <select className="dropdown">
            <option>All Departments</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
          </select>
          <select className="dropdown">
            <option>All Batches</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
          <select className="dropdown">
            <option>All Status</option>
            <option>Eligible</option>
            <option>Watch</option>
          </select>
        </div>
        <button className="export-btn">Export CSV</button>
      </div>
    </div>
  );
}
