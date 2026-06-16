import React, { useEffect, useRef } from "react";
import {
  FaJava,
  FaReact,
  FaShieldAlt,
  FaDatabase,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaChartBar,
  FaNetworkWired,
  FaServer,
  FaTools
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiDotnet,
  SiMysql,
  SiApachehadoop,
  SiApachespark
} from "react-icons/si";

import "../css/Skills.css";

export default function Skills() {
  const skillsRef = useRef(null);

  const iconPool = [
    <FaJava />,
    <SiSpringboot />,
    <SiDotnet />,
    <FaReact />,
    <FaDatabase />,
    <SiMysql />,
    <SiMongodb />,
    <SiApachehadoop />,
    <SiApachespark />,
    <FaDocker />,
    <FaAws />,
    <FaGitAlt />,
    <FaChartBar />,
    <FaNetworkWired />
  ];

  const skillsData = [
    {
      category: "Backend Development",
      icon: <FaJava />,
      skills: [
        { name: "Java & C#", level: 88 },
        { name: "Spring Boot", level: 80 },
        { name: "Hibernate & JPA", level: 75 },
        { name: "Restful Api", level: 85 },
        { name: "Entity framework / Linq", level: 80 },
        { name: "Asp.NET Core", level: 85 },
      ],
    },
    {
      category: "Frontend & Databases",
    
      icon: <FaReact />,
      skills: [
        { name: "HTML5", level: 90 },
        { name: "Css3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "Sql Server", level: 85 },
      ],
    },
    {
      category: "Security & Monitoring",
      icon: <FaShieldAlt />,
      skills: [
        { name: "Firewall Security", level: 82 },
        { name: "VPN Configuration", level: 75 },
        { name: "Authentication & Access Control", level: 80 },
        { name: "Network Monitoring", level: 88 },
        { name: "System Troubleshooting", level: 90 },
        { name: "Network Security", level: 80 },
        { name: "Incident Handling", level: 76 },
      ],
    },
    {
      category: "Networking",
      icon: <FaNetworkWired />,
      skills: [
        { name: "TCP/IP", level: 90 },
        { name: "Routing & Switching", level: 88 },
        { name: "Cisco CLI", level: 90 },
        { name: "VLAN Configuration", level: 85 },
        { name: "Subnetting", level: 87 },
        { name: "DNS & DHCP", level: 84 },
        { name: "SCADA/BHS Network", level: 82 },
        { name: "LAN/WAN", level: 86 },
      ],
    },
    {
      category: "Server Management",
      icon: <FaServer />,
      skills: [
        { name: "Windows Server", level: 78 },
        { name: "Linux Networking", level: 72 },
        { name: "Active Directory", level: 74 },
        { name: "Server Configuration", level: 80 },
        { name: "Backup & Recovery", level: 70 },
        { name: "Remote Server Support", level: 82 },
        { name: "System Maintenance", level: 84 },
        { name: "VMware Basics", level: 50 },
      ],
    },
    {
      category: "Tools & Utilities",
      icon: <FaTools />,
      skills: [
        { name: "Putty", level: 92 },
        { name: "Cisco Packet Tracer", level: 80 },
        // { name: "SolarWinds", level: 72 },
        { name: "Postman", level: 70 },
        { name: "Git & GitHub", level: 65 },
        { name: "VS Code", level: 85 },
        { name: "Docker Basics", level: 55 },
        { name: "Power BI", level: 65 },
      ],
    },
  ];

  useEffect(() => {
    const bars = skillsRef.current.querySelectorAll(".progress-fill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const level = entry.target.dataset.level;
            entry.target.style.width = level;
          }
        });
      },
      { threshold: 0.4 }
    );

    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={skillsRef}>
      <div className="skills-wrapper">

        <div className="skills-header">
          <h2 className="skills-title">
            Technical Proficiencies
          </h2>
          <p className="skills-subtitle">
            Enterprise-level backend, frontend and data engineering expertise
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((section, index) => (
            <div className="skills-card" key={index}>

              {/* Animated Random Bubbles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`bubble bubble-${i}`}
                  style={{
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  {iconPool[Math.floor(Math.random() * iconPool.length)]}
                </div>
              ))}

              <div className="card-header">
                <div className="card-icon">{section.icon}</div>
                <h3 className="category-title">
                  {section.category}
                </h3>
              </div>

              {section.skills.map((skill, i) => (
                <div className="skill" key={i}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      data-level={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              ))}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
