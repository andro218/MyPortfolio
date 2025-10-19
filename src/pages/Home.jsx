// src/pages/Home.jsx
import "./Home.css";
import "../sectionAnimations.css";
import ravenImg from "../assets/images/raven1.jpeg";
import SideBar from "../components/SideBar";
import React, { useState } from "react";
import Jumpscare from "../components/Jumpscare";

const Home = () => {
  const [showJumpscare, setShowJumpscare] = useState(false);

  const handleGetStarted = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTitleClick = () => {
    setShowJumpscare(true);
    setTimeout(() => setShowJumpscare(false), 3000);
  };

  return (
    <>
      <SideBar />
      <section id="home-sec" className="home-section section-fade-in">
        <div
          className="home-container"
          style={{ backgroundImage: `url(${ravenImg})` }}
        >
          <div className="overlay" />
          <div className="home-content">
            <h1
              className="home-title"
              style={{ cursor: "pointer" }}
              onClick={handleTitleClick}
              title="Click for a surprise!"
            >
              RAVEN ANDREW
            </h1>
            <p className="home-subtitle">
              A Web Developer weaving tales of horror and the uncanny.
            </p>
          </div>
        </div>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </section>
      {showJumpscare && <Jumpscare />}
    </>
  );
};

export default Home;
