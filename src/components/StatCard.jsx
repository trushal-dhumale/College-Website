import React from "react";
import "./StatCard.css"; // external CSS import

export default function StatCard({ title, value, sub, right }) {
  return (
    <div className="statcard-container">
      <div className="statcard-left">
        <div className="statcard-title">{title}</div>
        <div className="statcard-value">{value}</div>
        {sub && <div className="statcard-sub">{sub}</div>}
      </div>
      <div className="statcard-right">
        {right}
      </div>
    </div>
  );
}
