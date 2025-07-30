import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

// Import your logo images (replace with actual imports)
import Logo1 from "../../assets/logo.png";
import Logo2 from "../../assets/gold.png";

const Footer = () => {
  const logos = [Logo1, Logo2];
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Rotate logos every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <footer className="footer-container">
      {/* Ready to make an impact section */}
      <div className="impact-section">
        <h2 className="impact-footer-title">Ready to make an impact</h2>

        <p className="impact-description">
          Let's collaborate to bring your vision to life through creative
          design, strategic planning, and impactful execution.
        </p>
        <button
          className="impact-button group"
          onClick={() => (window.location.href = "/contact")} // Redirect to Contact Us page
        >
          <span className="impact-button-overlay"></span>
          <span className="impact-button-gradient"></span>
          <div className="impact-button-content">
            <span className="impact-button-text">Contact Us</span>{" "}
            {/* Updated button text */}
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="impact-button-icon"
            >
              <path
                clipRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="divider"></div>
      </div>

      {/* Main footer content */}
      <div className="footer-content">
        {/* Start your project section */}
        <div className="project-section">
          <h3>START YOUR PROJECT</h3>
          <div className="logo-container">
            <img
              src={logos[currentLogoIndex]}
              alt="Impact Production Logo"
              className="rotating-logo"
            />
          </div>
          <p>
            Transforming ideas into impactful experiences through design,
            events, and digital innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="links-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="services-section">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/services/event-organizing">Event Organizing</a>
            </li>
            <li>
              <a href="/services/graphic-design">Graphic Design</a>
            </li>
            <li>
              <a href="/services/digital-marketing">Digital Marketing</a>
            </li>
            <li>
              <a href="/services/web-development">Web Development</a>
            </li>
            <li>
              <a href="/services/architectural-design">Architectural Design</a>
            </li>
            <li>
              <a href="/services/community-partnerships">
                Community Partnerships
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="contact-section">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <a
                href="https://maps.google.com?q=Bole+Road,+Addis+Ababa,+Ethiopia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bole Road, Addis Ababa, Ethiopia
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <a href="#" target="_blank" rel="noopener noreferrer">
                POST bet, Adama, Ethiopia
              </a>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <a href="tel:+251911234567">+251 911 234 567</a>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@impactproduction.et">
                info@impactproduction.et
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Impact Production. All rights reserved.
        </p>
        <div className="legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
