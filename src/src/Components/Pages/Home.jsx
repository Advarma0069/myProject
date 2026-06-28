import React from "react";
import "../css/Home.css";

import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Icons from "./Icons";
import bgVideo from "../../assets/bg.mp4";
import homeImage from "../../assets/home.jpg";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-section">

        {/* Background Video */}
        <video
          className="home-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="home-overlay"></div>

        <div className="home-container">

          {/* LEFT SIDE */}
          <div className="home-content">

            <span className="hero-badge">
              🚀 Available for Network, Cloud & Security Roles
            </span>

            <h1 className="home-title">
              Aditya <span>Varma</span>
            </h1>

            <h2 className="home-role">
              Network Engineer | Infrastructure Specialist
            </h2>

            <p className="home-description">
              Experienced Network Engineer at Beumer Group India Pvt. Ltd.
              specializing in Routing & Switching, VLANs, STP, OSPF, BGP,
              VPN Technologies, Network Security, VMware Infrastructure,
              Industrial Networks, and Enterprise IT Operations.

              Passionate about Cloud Computing, Cybersecurity, Network
              Automation, and building highly available, scalable,
              and secure enterprise infrastructure.
            </p>

            {/* TECH STACK */}
            <div className="hero-tech">

              <span>CCNA</span>
              <span>Routing</span>
              <span>Switching</span>
              <span>BGP</span>
              <span>OSPF</span>
              <span>VMware</span>
              {/* <span>Cloud</span> */}
              <span>Cyber Security</span>

            </div>

            {/* STATS */}
            <div className="hero-stats">

              <div className="stat-card">
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-card">
                <h3>20+</h3>
                <p>Technologies</p>
              </div>

              <div className="stat-card">
                <h3>10+</h3>
                <p>Projects</p>
              </div>

              <div className="stat-card">
                <h3>24/7</h3>
                <p>Learning</p>
              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="social-icons">

              <a
                href="https://www.linkedin.com/in/aditya-varma-5866972ab/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Advarma0069"
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

            </div>

            {/* BUTTONS */}
            <div className="home-buttons">

              <a href="https://advarma0069.github.io/Portfolio-Responsive" className="btn hire-btn">
                Let's Connect
                <FaArrowRight />
              </a>
              

              {/* <a href="/projects" className="btn project-btn">
                View Projects
              </a> */}
              <Link to="/projects"className="btn project-btn">Projects</Link>

              <a
                href="/skills"
                target="_blank"
                rel="noreferrer"
                className="btn resume-btn"
              >
                <FaDownload />
                Resume
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="home-image">

            <div className="profile-card">

              <div className="profile-image-wrapper">
                <img
                  src={homeImage}
                  alt="Aditya Varma"
                />
              </div>

              <div className="profile-info">

                <h3>Aditya Varma</h3>

                <p>Network Engineer</p>

                <div className="status">
                  <span className="online-dot"></span>
                  Open to Opportunities
                </div>

                <div className="profile-tags">
                  <span>CCNA</span>
                  <span>Cloud Networking</span>
                  <span>Cyber Security</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <About />
      <Skills />
      <Experience />
      <Project />
      <Achievements />
      <Contact />
      <Icons />
    </>
  );
};

export default Home;

