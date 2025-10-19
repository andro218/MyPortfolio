import React, { useEffect, useRef } from "react";
import "./MySkills.css";
import "../sectionAnimations.css";

const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "Java", level: "85%" },
  { name: "React.js", level: "80%" },
  { name: "SQL", level: "75%" },
  { name: "JavaScript", level: "70%" },
  { name: "Node.js", level: "65%" },
];

const MySkills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const bars = containerRef.current.querySelectorAll(".skill-progress");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
            observer.unobserve(bar); // animate once only
          }
        });
      },
      {
        threshold: 0.5, // triggers when 50% visible
      }
    );

    bars.forEach((bar) => {
      observer.observe(bar);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="skills-section section-fade-in" id="skills">
      <div className="skills-container" ref={containerRef}>
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-subtitle">
          A blend of logic, creativity, and code — crafting functional designs
          that speak louder than words.
        </p>

        <div className="skills-chart">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span className="skill-percent">{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  data-width={skill.level}
                  style={{ width: 0 }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
