import React from "react";
import "./InterviewMonitor.css";

export default function InterviewMonitor() {
  const interviews = [
    { company: "Google", role: "SWE Intern", room: "A-101", time: "10:30 AM", status: "Running" },
    { company: "TCS", role: "QA", room: "A-203", time: "1:00 PM", status: "Upcoming" },
    { company: "Wipro", role: "DA", room: "Lab-2", time: "2:30 PM", status: "Upcoming" },
  ];

  return (
    <div className="interview-container">
      <h1 className="interview-title">Interview Monitor</h1>
      <div className="interview-grid">
        {interviews.map((i, idx) => (
          <div key={idx} className="interview-card">
            <div className="card-company-role">
              {i.company} — {i.role}
            </div>
            <div className="card-detail">Room: {i.room}</div>
            <div className="card-detail">Time: {i.time}</div>
            <span className={`status-badge ${i.status === "Running" ? "running" : "upcoming"}`}>
              {i.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
