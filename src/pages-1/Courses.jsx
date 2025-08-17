import React from 'react';
import './Courses.css'; // Assuming you have a CSS file for styling

const sampleCourses = [
  { id: 1, name: 'B.Tech Computer Science', duration: '4 years', description: 'Cutting-edge technology, software development, AI, and more.' },
  { id: 2, name: 'B.Com', duration: '3 years', description: 'Commerce fundamentals, accounting, finance, and business studies.' },
  { id: 3, name: 'MCA', duration: '2 years', description: 'Advanced computer applications, software engineering, and project management.' },
  { id: 4, name: 'MBA', duration: '2 years', description: 'Business management, leadership, marketing, and entrepreneurship.' },
  { id: 5, name: 'Diploma in Mechanical Engineering', duration: '3 years', description: 'Hands-on training in mechanical design and manufacturing.' },
  { id: 6, name: 'PhD in Computer Science', duration: '5 years', description: 'Research-focused doctoral program in advanced computing topics.' },
  { id: 7, name: 'Certificate in Data Science', duration: '6 months', description: 'Intensive course on data analysis, visualization, and ML basics.' }
];

export default function Courses() {
  return (
    <div className="courses-container">
      <h2 className="courses-heading">Our Courses</h2>
      <div className="courses-grid">
        {sampleCourses.map(course => (
          <div key={course.id} className="course-card">
            <h3 className="course-title">{course.name}</h3>
            <p className="course-duration">Duration: {course.duration}</p>
            <p className="course-desc">{course.description}</p>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
