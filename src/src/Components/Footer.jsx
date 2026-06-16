import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaNetworkWired,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Aditya Varma</h3>
          <p>
            Network Engineer specializing in enterprise networking,
            industrial BHS systems, SCADA communication, and
            network troubleshooting with a passion for secure and
            reliable infrastructure.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Expertise</h4>

          <ul>
            <li>Routing & Switching</li>
            <li>TCP/IP & VLAN</li>
            <li>SCADA & HLC Networks</li>
            <li>Windows Server</li>
            <li>Network Troubleshooting</li>
            <li>Cisco CLI</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Follow Me</h4>

          <div className="footer-social">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a href="#skills">
              <FaNetworkWired />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Aditya Varma. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;