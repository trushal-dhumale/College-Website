import React from "react";
import StatCard from "../../components/StatCard.jsx";
import "./Analytics.css"; // External CSS file

export default function Analytics() {
  return (
    <div className="analytics-container">
      <h1 className="analytics-title">Analytics Dashboard</h1>

      <div className="stats-grid">
        <StatCard title="Avg. Package" value="₹5.8 LPA" sub="+12% vs last year" />
        <StatCard title="Highest Package" value="₹18 LPA" sub="+8% vs last year" />
        <StatCard title="Offer Rate" value="72%" sub="+5% vs last year" />
      </div>

      <div className="charts-grid">
        <div className="chart-box">(Area/Bar chart placeholder)</div>
        <div className="chart-box">(Department-wise placement pie)</div>
      </div>
    </div>
  );
}
