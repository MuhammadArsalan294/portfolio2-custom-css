import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/skills.css";  // Import custom CSS

export default function Skills() {
  return (
    <div id="skills">
      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h1 className="skills-title">
              Skills
            </h1>
          </div>
          <div className="skills-grid">
            {/* HTML Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-title">
                  <div className="skill-icon">
                    <FaCheckCircle className="icon" />
                  </div>
                  <h2 className="skill-name">HTML</h2>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div className="skill-progress html-progress"></div>
                  </div>
                  <p className="skill-percentage">100%</p>
                </div>
              </div>
            </div>
            {/* CSS Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-title">
                  <div className="skill-icon">
                    <FaCheckCircle className="icon" />
                  </div>
                  <h2 className="skill-name">CSS</h2>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div className="skill-progress css-progress"></div>
                  </div>
                  <p className="skill-percentage">90%</p>
                </div>
              </div>
            </div>
            {/* JavaScript/TypeScript Skill */}
            <div className="skill-card">
              <div className="skill-content">
                <div className="skill-icon-title">
                  <div className="skill-icon">
                    <FaCheckCircle className="icon" />
                  </div>
                  <h2 className="skill-name">JavaScript/TypeScript</h2>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar">
                    <div className="skill-progress js-progress"></div>
                  </div>
                  <p className="skill-percentage">80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}