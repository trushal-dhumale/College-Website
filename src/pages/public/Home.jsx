import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const images = [
    "https://wallpaperaccess.com/full/5772441.jpg",
    "https://wallpaperaccess.com/full/1912160.jpg",
    "https://wallpaperaccess.com/full/1209573.jpg",
    "https://wallpapercrafter.com/desktop/227974-a-person-standing-on-a-baseball-field-near-a-large.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="overlay"></div> {/* Dark overlay for readability */}

      <h1 className="home-title">Prestige Institute of Technology</h1>
      <p className="home-subtitle">
        Welcome to the official portal of Prestige Institute of Technology.
      </p>

      <Link to="/Institute" className="home-button">
        ONLY STUDENTS CAN ENTER
      </Link>

      <footer className="home-footer">
        <p>
          Need help?{" "}
          <a href="mailto:contact@prestigeinstitute.edu">Contact the Institute</a>
        </p>
      </footer>
    </div>
  );
}
