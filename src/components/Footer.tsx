import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"; // Import the custom CSS

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <a className="footer-logo">
            <Image
              src="/images/logo.jpeg"
              alt="Logo Image"
              width={50}
              height={50}
            />
            <span className="footer-title">Developer</span>
          </a>
          <p className="footer-text">
            © 2024 MA —
          </p>
          <span className="social-icons">
            <Link
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=100077733514114"}
              className="social-link"
            >
              <FaFacebookF className="social-icon" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.instagram.com/muhammadarslan012/"}
              className="social-link"
            >
              <FaInstagramSquare className="social-icon" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/muhammad-arsalan-623179243/"}
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
