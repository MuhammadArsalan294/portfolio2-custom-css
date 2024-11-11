import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "../styles/header.css"; // Import custom CSS

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-content">
          <a className="header-logo">
            <Image
              src="/images/logo.jpeg"
              alt="Logo Image"
              width={50}
              height={50}
            />
            <span className="header-title">Muhammad Arsalan</span>
          </a>
          <nav className="header-nav">
            <Link href={"#"} className="nav-link">
              Home
            </Link>
            <Link href={"#about"} className="nav-link">
              About
            </Link>
            <Link href={"#skills"} className="nav-link">
              Skills
            </Link>
            <Link href={"#projects"} className="nav-link">
              Projects
            </Link>
            <Link href={"#contact"} className="nav-link">
              Contact
            </Link>
          </nav>
          <a href="/cv/cv1.pdf" download className="header-btn">
            <button className="download-btn">
              Download CV
              <FaCloudDownloadAlt className="download-icon" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
