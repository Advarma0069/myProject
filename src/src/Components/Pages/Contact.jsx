import React, { useState } from "react";
import "../css/Contact.css";
import MapPage from "./MapPage";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaCommentDots
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you for contacting us.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="portfolio-contact-section">
        <div className="portfolio-contact-container">

          {/* LEFT INFO PANEL */}
          <div className="contact-info animate-left">
            <h2>Contact Information</h2>

            <p>
              Kindly leave your name and a short message regarding your inquiry.
              I’ll get back to you as soon as possible. Thank you for visiting my portfolio!
            </p>

            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <span>+91 9161126257</span>
            </div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>veraditya9161@gmail.com</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Greater Noida, Uttar Pradesh, India</span>
            </div>

            <div className="social-icons">
              <a
                href="https://github.com/Advarma0069"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-varma-5866972ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>

            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="contact-form-panel animate-right">
            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="input-group icon-input">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                  />
                </div>

                <div className="input-group icon-input">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group icon-input">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                  />
                </div>

                <div className="input-group icon-input">
                  <FaPhoneAlt className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="input-group icon-input textarea-group">
                <FaCommentDots className="input-icon textarea-icon" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
      <MapPage />

    </>
  );
};

export default Contact;
