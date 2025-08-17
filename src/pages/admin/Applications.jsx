import React from "react";
import DataTable from "../../components/DataTable.jsx";
import { Link } from "react-router-dom";
import "./Applications.css"; // External CSS file

const data = [
  { id: "APP-1001", name: "Aditi Sharma", role: "Frontend Intern", company: "Amazon", status: "Under Review" },
  { id: "APP-1002", name: "Rohit Kumar", role: "QA", company: "TCS", status: "Shortlisted" },
  { id: "APP-1003", name: "Neha Singh", role: "Data Analyst", company: "Wipro", status: "Interview" },
];

const columns = [
  { key: "id", title: "App ID" },
  { key: "name", title: "Student" },
  { key: "role", title: "Role" },
  { key: "company", title: "Company" },
  { key: "status", title: "Status" },
  {
    key: "actions",
    title: "Actions",
    render: (_, row) => (
      <Link to={`/institute/applications/${row.id}`} className="view-link">
        View
      </Link>
    ),
  },
];

export default function Applications() {
  return (
    <div className="applications-container">
      <div className="applications-header">
        <h1 className="applications-title">Applications</h1>
        <div className="filter-container">
          <input className="search-input" placeholder="Search…" />
          <select className="filter-select">
            <option>All Status</option>
            <option>Under Review</option>
            <option>Shortlisted</option>
            <option>Interview</option>
          </select>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
