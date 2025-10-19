import React from "react";
import "./MySkills.css";

const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "75%" },
  { name: "Node.js", level: "70%" },
  { name: "MySQL", level: "75%" },
  { name: "Git & GitHub", level: "80%" },
  { name: "Photoshop", level: "65%" },
];

const MySkills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">MY SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
