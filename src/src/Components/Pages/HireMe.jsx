import React from "react";
import "../css/Hireme.css";

const HireMe = () => {
  return (
    <section className="hire-section" id="hire-network">
      <div className="hire-container">

        {/* LEFT CONTENT */}
        <div className="hire-content">
          <h2>Hire Me</h2>

          <h3>
            Network <span>Engineer</span>
          </h3>

          <p>
            I am a motivated and dedicated <strong>Network Engineer</strong>
            with hands-on experience in managing, monitoring, and troubleshooting
            enterprise and industrial network environments.
          </p>

          <p>
            I work with <strong>TCP/IP, Routing & Switching, VLANs, DNS, DHCP</strong>,
            and network security concepts while supporting
            <strong> Airport BHS, SCADA, and PLC communication systems</strong>.
          </p>

          <p>
            I have practical experience using <strong>Cisco CLI, Putty, Wireshark</strong>,
            and monitoring tools to maintain stable and secure network operations.
            I focus on quick troubleshooting, system reliability, and effective teamwork.
          </p>

          {/* CTA BUTTONS */}
          <div className="hire-buttons">
            <a href="/skills" className="btn-primary">
              Technical Skills
            </a>

            <a
              href="https://drive.google.com/file/d/YOUR_CV_LINK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="hire-card">
          <h4>Professional Snapshot</h4>

          <div className="hire-info">
            <p><span>Role:</span> Network Engineer</p>
            <p><span>Experience:</span> 6+ Months</p>
            <p><span>Projects:</span> Airport BHS & Network Support</p>
            <p><span>Networking:</span> TCP/IP, Routing & Switching, VLAN</p>
            <p><span>Industrial Systems:</span> SCADA, PLC, BHS Network</p>
            <p><span>Server Management:</span> Windows Server, Active Directory</p>
            <p><span>Tools:</span> Cisco CLI, Putty, Wireshark</p>
            <p><span>Monitoring:</span> Network Troubleshooting & Incident Handling</p>
            <p><span>Location:</span> India</p>
            <p><span>Availability:</span> Open to Work</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HireMe;