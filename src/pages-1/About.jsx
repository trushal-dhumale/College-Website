import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>About Prestige Institute of Technology</h2>
      <p>
        Established in 1970, Prestige Institute of Technology has been dedicated to providing quality education to thousands of students. We focus on shaping future leaders with strong ethical values and technical skills.
      </p>

      <div className="about-section">
        <h3>Our Vision</h3>
        <p>To be a premier institute fostering innovation, research, and excellence in technical education.</p>
      </div>

      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          Provide industry-aligned education, nurture creativity, and empower students to contribute to society responsibly.
        </p>
      </div>

      <div className="about-section">
        <h3>Core Values</h3>
        <ul>
          <li>Integrity and Ethics</li>
          <li>Excellence in Education</li>
          <li>Innovation and Research</li>
          <li>Community and Collaboration</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>Facilities</h3>
        <p>
          Our campus offers state-of-the-art labs, modern classrooms, a well-stocked library, and comfortable hostels to support holistic student growth.
        </p>
      </div>

      <div className="about-image-container">
        <img 
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
          alt="Prestige Institute Campus" 
        />
      </div>
    </div>
  );
}
