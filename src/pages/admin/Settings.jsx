import React from "react";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings</h1>
      <div className="settings-card">
        <div className="settings-field">
          <div className="settings-label">Institute Name</div>
          <input className="settings-input" defaultValue="Prestige Institute of Technology" />
        </div>
        <div className="settings-field">
          <div className="settings-label">Email</div>
          <input className="settings-input" defaultValue="placement@pit.ac.in" />
        </div>
        <div className="settings-checkbox">
          <input id="noti" type="checkbox" defaultChecked className="checkbox-input" />
          <label htmlFor="noti" className="checkbox-label">Enable notifications</label>
        </div>
        <button className="settings-button">Save Changes</button>
      </div>
    </div>
  );
}
