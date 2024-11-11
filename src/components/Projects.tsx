import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import "../styles/projects.css";

export default function Projects() {
  return (
    <div id="projects">
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h1 className="projects-title">My Projects</h1>
          </div>
          <div className="projects-grid">
            {/* Project 1 - Facebook */}
            <div className="project-card">
              <div className="project-content">
                <Image
                  src="/projects/facebook.jpg"
                  alt="Facebook Project"
                  width={500}
                  height={300}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h1 className="project-name">Facebook</h1>
                  <p className="project-description">
                    This project is for those who own a Facebook business.
                  </p>
                  <Link href="https://clone-facebook-brown.vercel.app/">
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 2 - ID Card */}
            <div className="project-card">
              <div className="project-content">
                <Image
                  src="/projects/id-card.jpg"
                  alt="ID Card Project"
                  width={500}
                  height={300}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h1 className="project-name">ID Card</h1>
                  <p className="project-description">
                    This project is for those who own an ID card business.
                  </p>
                  <Link href="https://id-card-governor-house.vercel.app/">
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 3 - Resume */}
            <div className="project-card">
              <div className="project-content">
                <Image
                  src="/projects/resume.jpg"
                  alt="Resume Project"
                  width={500}
                  height={300}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h1 className="project-name">Resume</h1>
                  <p className="project-description">
                    This project is for those who own a resume business.
                  </p>
                  <Link href="https://hackathon-milestones-sigma.vercel.app/">
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
