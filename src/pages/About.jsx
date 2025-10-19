import React from "react";
import "./About.css";
import "../sectionAnimations.css";
import ravenImg from "../assets/images/raven.jpg";
import HorrorImageCard from "../components/ImageCard";
import AnimatedContent from "../components/AnimatedContent";
import CircularGallery from "../components/CircularGallery";

const About = () => {
  return (
    <section className="about-section section-fade-in" id="about-sec">
      <AnimatedContent distance={80} duration={1.1} ease="power3.out">
        <div className="about-container">
          {/* Left Image */}
          <div className="about-image">
            <img src={ravenImg} alt="Raven playing guitar" />
          </div>

          {/* Right Text Content */}
          <div className="about-text">
            <h1>SO, WHO IS RAVEN?</h1>

            <p>
              Hi, I'm <strong>Raben “Raven” Andro Lagumen</strong>.
            </p>

            <p>
              I'm a 22-year-old Web Designer, Backend Developer,Graphic Artist,
              and Musician. I specialize in crafting clean, responsive, and
              user-focused web experiences while also building the robust
              backend systems that power them.
            </p>

            {/* Animate this list */}
            <AnimatedContent
              distance={50}
              duration={1}
              delay={0.3}
              ease="power3.out"
              direction="vertical"
              initialOpacity={0}
            >
              <ul className="about-list">
                <li>
                  <strong>🎓 Educational Milestone:</strong> Currently studying
                  BS in Information System, where I am exploring wonderful UI
                  concepts and interactive storytelling through code.
                </li>
                <li>
                  <strong>💼 Professional Experience:</strong>
                  <ul>
                    <li>
                      I’ve developed a variety of immersive projects—from
                      dynamic websites and interactive systems to full-fledged
                      applications—using technologies like React, Java, and
                      animation libraries to bring each experience to life.
                    </li>
                    <li>Built scalable backend systems with Java and SQL.</li>
                    <li>
                      Collaborated on enterprise-level projects with a focus on
                      UI/UX polish and thematic branding.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>🎸 Outside the Code:</strong> I’m a musician who loves
                  playing bass guitar, performing, and composing music. I’m also
                  a graphic artist who enjoys visualizing ideas and turning them
                  into expressive artwork.
                </li>
              </ul>
            </AnimatedContent>

            <p>
              Whether it's a scary and dark landing page or a spectral glow
              behind a button, I believe every detail should tell a story. My
              goal? To make users feel something—even if it's a chill down their
              spine.
            </p>
          </div>
        </div>

        <AnimatedContent
          distance={50}
          duration={1}
          delay={0.3}
          ease="ease.out"
          reverse={true}
          direction="horizontal"
          initialOpacity={0}
        >
          <div className="artwork-section">
            <h2>Artworks</h2>
            <div className="gallery-wrapper">
              <CircularGallery
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.02}
              />
            </div>
          </div>
        </AnimatedContent>
      </AnimatedContent>
    </section>
  );
};

export default About;
