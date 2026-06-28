import React from "react";
import "../css/About.css";

const About = () => {
  const educationData = [
    {
      degree: "Master of Computer Application (M.C.A)",
      institute: "Sharda University",
      year: "2023-2025",
      image: "src/assets/education/MCA.jpg",
    },
    {
      degree: "B.S.c Mathematics",
      institute: "Td pg college Jaunpur (Purvanchal University)",
      year: "2021-2023",
      image: "src/assets/education/bse.png",
    },
    {
      degree: "Senior Secondary School",
      institute: "Adarsh Inter College Palhana Azamgarh (UP Board)",
      year: "2018-2020",
      image: "src/assets/education/image.png",
    },
    {
      degree: "Secondary School",
      institute: "Adarsh Inter College Palhana Azamgarh (UP Board)",
      year: "2017-2018",
      image: "src/assets/education/image.png",
    },
  ];

  return (
    <>
      <section className="about-section-dark">

        {/*  ABOUT ME CARD  */}
        <div className="about-card">
          <div className="card-grid">
            <div className="card-image">
              <img src="/ad.jpg" alt="Aditya Varma - Full Stack .NET Developer" />
            </div>

            <div className="card-content">
              <p className="about-tag">About Me</p>
              <h2 className="about-title">
                Network Engineer
              </h2>

              <p className="about-text">
                I am a Network Engineer with hands-on experience in
                managing and troubleshooting enterprise and industrial network infrastructure,
                including TCP/IP, Routing & Switching, VLANs, VPN, SCADA, HLC & BHS Networking.<br />
                 I have a
                broad understanding of network protocols, security, and performance optimization.
                I focus on network stability, system monitoring, security, and delivering
                reliable technical solutions in fast-paced environments.
              </p>

              <p className="about-text">
                Previously, I served as a <strong>Software Developer</strong> at <strong>Eagle Pvt. Ltd.</strong> (Aug 2025 – Feb 2026), contributing to the development of scalable enterprise applications and backend solutions.
              </p>

              <p className="about-text">
                I collaborate with teams to deliver clean, maintainable code
                following industry best practices and always aim for professional excellence.
              </p>

              <div className="about-info-grid">
                <div>
                  <span>Experience</span>
                  <p>1+ year</p>
                </div>
                <div>
                  <span>Projects</span>
                  <p>10+ Completed</p>
                </div>
                <div>
                  <span>Location</span>
                  <p>Navi Mumbai, India</p>
                </div>
                <div>
                  <span>Availability</span>
                  <p>Open to Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*  EDUCATION SECTION (OUTSIDE CARD)  */}
        <div className="education-section">
          <p className="about-tag"> Education</p>
          <div className="education-grid">
            {educationData.map((edu, index) => (
              <div className="education-card" key={index}>
                <img src={edu.image} alt={edu.degree} />
                <div className="education-info">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institute}</p>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </>
  );
};

export default About;
