import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import "./Layout.css"; // external CSS file import

export default function Layout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-content">
        <Topbar />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
