import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, BarChart3, Users2, FileText, Briefcase,
  ClipboardList, Download, Settings, Video
} from "lucide-react";
import "./Sidebar.css"; // external CSS file import

const linkCls = ({ isActive }) =>
  `sidebar-link ${isActive ? "active" : ""}`;

export default function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="logo" className="sidebar-logo"
        />
        <div className="sidebar-title">Institute Admin</div>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/institute" className={linkCls}><LayoutDashboard size={18}/> Home</NavLink>
        <NavLink to="/institute/analytics" className={linkCls}><BarChart3 size={18}/> Analytics</NavLink>
        <NavLink to="/institute/applications" className={linkCls}><ClipboardList size={18}/> Applications</NavLink>
        <NavLink to="/institute/students" className={linkCls}><Users2 size={18}/> Manage Students</NavLink>
        <NavLink to="/institute/students/export" className={linkCls}><Download size={18}/> Export Data</NavLink>
        <NavLink to="/institute/interviews" className={linkCls}><Video size={18}/> Interview Monitor</NavLink>
        <NavLink to="/institute/jobs" className={linkCls}><Briefcase size={18}/> Posted Jobs</NavLink>
        <NavLink to="/institute/post-job" className={linkCls}><FileText size={18}/> Post Job</NavLink>
        <NavLink to="/institute/reports" className={linkCls}><BarChart3 size={18}/> Reports</NavLink>
        <NavLink to="/institute/settings" className={linkCls}><Settings size={18}/> Settings</NavLink>
      </nav>
    </aside>
  );
}
