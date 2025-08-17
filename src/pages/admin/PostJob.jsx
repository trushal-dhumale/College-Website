import React, { useState } from "react";
import "./PostJob.css";

export default function PostJob() {
  const [form, setForm] = useState({
    company: "",
    title: "",
    type: "Internship",
    stipend: "",
    ctc: "",
    deadline: "",
    desc: "",
  });

  const set = (k, v) => setForm({ ...form, [k]: v });

  const submit = (e) => {
    e.preventDefault();
    alert("Job posted (demo)!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="postjob-container">
      <h1 className="postjob-title">Post Job / Internship</h1>
      <form onSubmit={submit} className="postjob-form">
        <div className="postjob-grid">
          <input
            className="form-input"
            placeholder="Company"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
          />
          <input
            className="form-input"
            placeholder="Title"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
          />
          <select
            className="form-input"
            value={form.type}
            onChange={(e) => set("type", e.target.value)}
          >
            <option>Internship</option>
            <option>Full-time</option>
            <option>Part-time</option>
          </select>
          <input
            className="form-input"
            placeholder="Stipend (if intern)"
            value={form.stipend}
            onChange={(e) => set("stipend", e.target.value)}
          />
          <input
            className="form-input"
            placeholder="CTC (if full-time)"
            value={form.ctc}
            onChange={(e) => set("ctc", e.target.value)}
          />
          <input
            type="date"
            className="form-input"
            value={form.deadline}
            onChange={(e) => set("deadline", e.target.value)}
          />
        </div>
        <textarea
          className="form-textarea"
          placeholder="Job Description"
          value={form.desc}
          onChange={(e) => set("desc", e.target.value)}
        />
        <button className="submit-btn">Post</button>
      </form>
    </div>
  );
}
