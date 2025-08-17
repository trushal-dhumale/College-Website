import React from 'react';
import './Faculty.css'; // Assuming you have a CSS file for styling

const facultyData = [
  {
    id: 1,
    name: "Prof. Arjun Singh",
    department: "Computer Science",
    qualification: "Ph.D. in Artificial Intelligence",
    experience: "15 years",
    specialization: "Machine Learning, Data Mining",
    email: "arjun.singh@prestige.edu",
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Dr. Meera Patel",
    department: "Mechanical Engineering",
    qualification: "Ph.D. in Thermodynamics",
    experience: "12 years",
    specialization: "Energy Systems, Fluid Mechanics",
    email: "meera.patel@prestige.edu",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Prof. Rahul Deshmukh",
    department: "Electronics & Communication",
    qualification: "M.Tech",
    experience: "10 years",
    specialization: "Embedded Systems, IoT",
    email: "rahul.deshmukh@prestige.edu",
    photo: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 4,
    name: "Dr. Sneha Kulkarni",
    department: "Civil Engineering",
    qualification: "Ph.D. in Structural Engineering",
    experience: "14 years",
    specialization: "Earthquake Engineering, Concrete Technology",
    email: "sneha.kulkarni@prestige.edu",
    photo: "https://randomuser.me/api/portraits/women/48.jpg"
  },
  {
    id: 5,
    name: "Prof. Amit Joshi",
    department: "Business Administration",
    qualification: "MBA, Ph.D.",
    experience: "18 years",
    specialization: "Marketing, Strategic Management",
    email: "amit.joshi@prestige.edu",
    photo: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    id: 6,
    name: "Dr. Kavita Sharma",
    department: "Mathematics",
    qualification: "Ph.D.",
    experience: "20 years",
    specialization: "Applied Mathematics, Statistics",
    email: "kavita.sharma@prestige.edu",
    photo: "https://randomuser.me/api/portraits/women/53.jpg"
  },
  // Extra new cards added
  {
    id: 7,
    name: "Prof. Rajesh Verma",
    department: "Physics",
    qualification: "Ph.D. in Quantum Mechanics",
    experience: "16 years",
    specialization: "Nanotechnology, Photonics",
    email: "rajesh.verma@prestige.edu",
    photo: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 8,
    name: "Dr. Anjali Mehta",
    department: "Chemistry",
    qualification: "Ph.D. in Organic Chemistry",
    experience: "13 years",
    specialization: "Green Chemistry, Polymers",
    email: "anjali.mehta@prestige.edu",
    photo: "https://randomuser.me/api/portraits/women/66.jpg"
  },
  {
    id: 9,
    name: "Prof. Suresh Nair",
    department: "Electrical Engineering",
    qualification: "M.Tech",
    experience: "11 years",
    specialization: "Power Systems, Renewable Energy",
    email: "suresh.nair@prestige.edu",
    photo: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 10,
    name: "Dr. Pooja Reddy",
    department: "Environmental Science",
    qualification: "Ph.D.",
    experience: "15 years",
    specialization: "Sustainability, Waste Management",
    email: "pooja.reddy@prestige.edu",
    photo: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Faculty() {
  return (
    <div className="faculty-container">
      <h2 className="faculty-title">Our Esteemed Faculty</h2>
      <div className="faculty-grid">
        {facultyData.map(faculty => (
          <div key={faculty.id} className="faculty-card">
            <img src={faculty.photo} alt={faculty.name} className="faculty-photo" />
            <h3 className="faculty-name">{faculty.name}</h3>
            <p><strong>Department:</strong> {faculty.department}</p>
            <p><strong>Qualification:</strong> {faculty.qualification}</p>
            <p><strong>Experience:</strong> {faculty.experience}</p>
            <p><strong>Specialization:</strong> {faculty.specialization}</p>
            <p><strong>Email:</strong> <a href={`mailto:${faculty.email}`}>{faculty.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}
