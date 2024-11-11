"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import "../styles/hero.css";  // Import custom CSS file

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            I'm a
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "Full-Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="hero-description">
            I believe, "Exploring the future one algorithm at a time, because{" "}
            <em>AI</em> and <em>WEB DEVELOPMENT</em> is the language of
            tomorrow".
          </p>
          <div className="hero-button-container">
            <Link href={"#contact"}>
              <button className="hero-button">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image"
            src="/images/mypic.jpg"
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
