import Image from "next/image";
import "../styles/about.css";

export default function About() {
  return (
    <div id="about">
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <Image
              className="image-style"
              alt="hero"
              src="/images/mypic.jpg"
              width={300}
              height={300}
            />
          </div>
          <div className="about-text">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              My name is Muhammad Arsalan. I completed my matriculation in
              Science, Intermediate in Commerce, and Graduation in Bachelor of
              Commerce (B.COM). Now I&#39;m on the way to learn Artificial
              Intelligence. I have completed a few steps in learning HTML, CSS, and
              JavaScript/TypeScript to become a Full-Stack Developer.
            </p>
            <p className="about-quote">
              <strong>I Believe:</strong> &quot;Exploring the future one algorithm at
              a time, because <strong>AI</strong> is the language of tomorrow.&quot;
            </p>
            <div className="about-button-container">
              <a href={"/cv/cv1.pdf"}>
                <button className="about-button" aria-label="View my CV">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
