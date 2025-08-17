import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const heroImages = [
    "https://wallpaperaccess.com/full/5772441.jpg",
    "https://wallpaperaccess.com/full/1912160.jpg",
    "https://wallpaperaccess.com/full/1209573.jpg",
    "https://wallpapercrafter.com/desktop/227974-a-person-standing-on-a-baseball-field-near-a-large.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content fade-in">
            <h1>Welcome to <span>Prestige Institute of Technology</span></h1>
            <p>Shaping Futures. Building Careers. Empowering Innovation.</p>
            <a href="/admissions" className="hero-btn">Explore Now</a>
          </div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="placement-stats">
        {[
          { num: "₹12 LPA", text: "Highest Package" },
          { num: "₹5.5 LPA", text: "Average Package" },
          { num: "50+", text: "Top Recruiters" },
          { num: "95%", text: "Placement Rate" }
        ].map((item, index) => (
          <div key={index} className="stat">
            <h2>{item.num}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Recruiters */}
      <section className="recruiters">
        <h2>Our Top Recruiters</h2>
        <div className="recruiters-logos">
          {[
            "https://tse4.mm.bing.net/th/id/OIP.iz0l2PLYQDTZgy32ELt1UAHaEa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://tse1.mm.bing.net/th/id/OIP.LCNgAL5L174Punk-ntgy4gHaD3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://static.vecteezy.com/system/resources/previews/013/956/069/original/trendy-hotel-key-vector.jpg",
            "https://tse1.mm.bing.net/th/id/OIP.bvZGKlD5OFiiOJNNfo5YwAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            "https://tse3.mm.bing.net/th/id/OIP.-xy8_PdZvv_w6fQEti6ruwHaHa?r=0&w=4096&h=4096&rs=1&pid=ImgDetMain&o=7&rm=3"
          ].map((logo, i) => (
            <img key={i} src={logo} alt={`Recruiter ${i}`} />
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        {[
          { num: "50+", text: "Years of Excellence" },
          { num: "200+", text: "Qualified Faculty" },
          { num: "5000+", text: "Students Enrolled" },
          { num: "100+", text: "Courses Offered" }
        ].map((item, index) => (
          <div key={index} className="highlight">
            <h2>{item.num}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Cards */}
      <section className="cards">
        {[
          {
            img: "https://www.globalcareercounsellor.com/blog/wp-content/uploads/2022/02/College-admission-process-that-fits-you.jpg",
            title: "Admissions",
            desc: "Check eligibility, deadlines, and application process for new students."
          },
          {
            img: "https://stepp.ecu.edu/wp-content/pv-uploads/sites/315/Main_Campus_Student_Center_Map_uncropped_ch_0001-scaled.jpg",
            title: "Departments",
            desc: "Explore our academic streams and research opportunities."
          },
          {
            img: "https://ehs.washington.edu/sites/default/files/iStock-458098931.jpg",
            title: "Events",
            desc: "Participate in seminars, workshops, and cultural activities."
          }
        ].map((card, i) => (
          <div key={i} className="card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-list">
          {[
            { text: "The faculty here is amazing and supportive. My experience has been wonderful!", name: "Priya Sharma" },
            { text: "Great infrastructure and placement opportunities. Highly recommended!", name: "Rohit Verma" },
            { text: "The environment motivates you to do your best every day.", name: "Anjali Singh" }
          ].map((t, idx) => (
            <div key={idx} className="testimonial">
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h2>Campus Life</h2>
        <div className="gallery-images">
          {[
            "https://tse4.mm.bing.net/th/id/OIP.PcLDFCfNf4iVe9lZwBrSYAHaE8",
            "https://cloudinary.hbs.edu/hbsit/image/fetch/q_auto,c_fill,ar_2400:1256/f_webp/https://images.ctfassets.net/beh2ph2tgbqk/601897GbpNqmLDWLO3Ig2/094fc95c88206f7e611c4db56f4ecb71/4.3.35.1-classroom-131204-NK-2400x1256.jpg",
            "https://esoft.lk/wp-content/uploads/2023/12/R5A1906-scaled.jpg",
            "https://www.durham.ac.uk/media/durham-university/wider-student-experience-/78548.jpg"
          ].map((src, i) => (
            <img key={i} src={src} alt={`Gallery ${i}`} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Join Us?</h2>
        <p>Start your journey towards excellence today. Admissions are now open!</p>
        <a href="/admissions" className="cta-btn">Apply Now</a>
      </section>
    </div>
  );
}
