import React from "react";
import StatCard from "../../components/StatCard.jsx";
import { Users2, Briefcase, ClipboardList, GraduationCap } from "lucide-react";
import "./InstituteHome.css"; // Add this CSS file

export default function InstituteHome() {
  return (
    <div className="institute-container">
      <h1 className="institute-title">Institute Home</h1>

      <div className="stat-grid">
        <StatCard title="Active Students" value="5,124" right={<Users2 className="icon-brand" />} />
        <StatCard title="Open Positions" value="128" right={<Briefcase className="icon-brand" />} />
        <StatCard title="Applications Today" value="342" right={<ClipboardList className="icon-brand" />} />
        <StatCard title="Placed (YTD)" value="1,106" right={<GraduationCap className="icon-brand" />} />
      </div>

      <div className="section-grid">
        <div className="card">
          <div className="card-title">Recent Applications</div>
          <ul className="list">
            {["Saurabh • React Intern • Amazon", "Nisha • QA • TCS", "Rahul • Data Analyst • Wipro"].map((t, i) => (
              <li key={i} className="list-item">
                <span>{t}</span>
                <span className="text-muted">Just now</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <div className="card-title">Upcoming Interviews</div>
          <ul className="list">
            {["Google • 10:30 AM", "Infosys • 2:00 PM", "Flipkart • 4:15 PM"].map((t, i) => (
              <li key={i} className="list-item">
                <span>{t}</span>
                <span className="text-muted">Today</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
