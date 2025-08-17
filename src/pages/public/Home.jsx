import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // external CSS file import

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Prestige Institute of Technology</h1>
      <p className="home-subtitle">
        Public marketing site yahan rahega (tumhara pehle wala Home.jsx).
      </p>
      <Link to="/institute" className="home-button">
        Go to Admin (Demo)
      </Link>
    </div>
  );
}
