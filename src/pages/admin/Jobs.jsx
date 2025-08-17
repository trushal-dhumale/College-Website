import React from "react";
import "./Jobs.css";

const jobs = [
  { id: "JOB-001", company: "Amazon", title: "React Intern", applicants: 124, status: "Open" },
  { id: "JOB-002", company: "Infosys", title: "QA", applicants: 78, status: "Screening" },
  { id: "JOB-003", company: "Google", title: "SWE Intern", applicants: 202, status: "Closed" },
];

export default function Jobs() {
  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h1 className="jobs-title">Posted Jobs</h1>
        <a href="/institute/post-job" className="post-btn">Post New</a>
      </div>
      <div className="jobs-grid">
        {jobs.map((j) => (
          <div key={j.id} className="job-card">
            <div className="job-company">{j.company}</div>
            <div className="job-title">{j.title}</div>
            <div className="job-applicants">Applicants: <b>{j.applicants}</b></div>
            <span className={`status-badge ${
              j.status === "Open" ? "open" :
              j.status === "Screening" ? "screening" : "closed"
            }`}>
              {j.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
