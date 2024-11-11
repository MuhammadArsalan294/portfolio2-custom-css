import React from "react";
import "../styles/contact.css"; // Import the custom CSS

export default function Contact() {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="container">
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6945895745207!2d67.15797008068763!3d24.874278520989158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3398b07b17235%3A0xf7be329e3fe8529d!2sAzeem%20Pura%20Azeempura%20Shah%20Faisal%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730381711402!5m2!1sen!2s"
            />
            <div className="contact-info">
              <div className="info-item">
                <h2>ADDRESS</h2>
                <p>MC-1364b Azeem Pura, Shah Faisal Town, Karachi.</p>
              </div>
              <div className="info-item">
                <h2>EMAIL</h2>
                <a href="mailto:princearslan294@gmail.com">
                  princearslan294@gmail.com
                </a>
                <h2>PHONE</h2>
                <p>03021210812</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2 className="contacts">Contact</h2>
            <form >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
