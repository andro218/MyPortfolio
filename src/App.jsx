// src/App.jsx
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import MySkills from "./pages/MySkills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CursorSpotlight from "./components/CursorSpotlight";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <>
      <CursorSpotlight />
      <NavBar />
      <BackgroundMusic />
      <div className="app-container">
        <main className="main-content">
          <Home />
          <section id="about">
            <About />
            <MySkills />
          </section>
          <section id="projects">
            <Project />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
