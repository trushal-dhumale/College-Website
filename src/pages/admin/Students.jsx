import React from "react";
import DataTable from "../../components/DataTable.jsx";
import "./Students.css";

const cols = [
  { key: "roll", title: "Roll No" },
  { key: "name", title: "Name" },
  { key: "dept", title: "Department" },
  { key: "cgpa", title: "CGPA" },
  { key: "status", title: "Status" },
];

const rows = [
  { roll: "CS2101", name: "Harsh", dept: "CSE", cgpa: 8.1, status: "Eligible" },
  { roll: "CS2102", name: "Mitali", dept: "CSE", cgpa: 7.2, status: "Eligible" },
  { roll: "EE2104", name: "Ajay", dept: "EEE", cgpa: 6.4, status: "Watch" },
];

export default function Students() {
  return (
    <div className="students-container">
      <div className="students-header">
        <h1 className="students-title">Manage Students</h1>
        <div className="students-buttons">
          <button className="btn btn-outline">Import CSV</button>
          <button className="btn btn-primary">Add Student</button>
        </div>
      </div>
      <DataTable columns={cols} data={rows} />
    </div>
  );
}
