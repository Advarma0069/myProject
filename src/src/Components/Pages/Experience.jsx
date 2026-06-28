import React from "react";
import "../css/Experience.css";

const experiences = [
{
role: "Network Engineer",
company: "Beumer Group India Pvt. Ltd.",
duration: "Apr 2026 - Present",
location: "Navi Mumbai International Airport, Ulwe",
technologies: [
"Cisco",
"Routing & Switching",
"VLAN",
"STP",
"BGP",
"OSPF",
"VPN",
"TCP/IP",
"Network Security"
],
responsibilities: [
"Manage enterprise-grade network infrastructure supporting airport operations.",
"Configure and troubleshoot Layer 2 and Layer 3 networking technologies.",
"Implement VLANs, STP, routing protocols, and security policies.",
"Monitor network performance and ensure maximum uptime.",
"Perform root cause analysis and incident resolution.",
"Support mission-critical baggage handling and automation systems."
]
},
{
role: "Software Developer",
company: "Eagle Pvt. Ltd.",
duration: "Aug 2025 - Feb 2026",
location: "Gurugram, Haryana",
technologies: [
"C#",
".NET",
"ASP.NET MVC",
"LINQ & Entity Framework",
"React",
"SQL Server",
"REST API",
"JavaScript",
"Git"
],
responsibilities: [
"Developed enterprise web applications using C# and .NET.",
"Designed and implemented RESTful APIs.",
"Worked with Entity Framework and SQL Server.",
"Optimized application performance and database queries.",
"Participated in Agile development and code reviews."
]
},
{
role: "Java Development Intern",
company: "CognoRise Info Tech",
duration: "Oct 2024 - Nov 2024",
location: "Remote",
technologies: [
"Core Java",
"OOP",
"JDBC",
"MySQL",
"Git"
],
responsibilities: [
"Developed Java applications using OOP concepts.",
"Worked with JDBC and MySQL databases.",
"Performed debugging and testing activities.",
"Collaborated on internship project assignments."
]
}
];

function Experience() {
return ( <section className="experience-section" id="experience"> <div className="experience-container">

    <div className="section-header">
      <span className="section-tag">
        Career Journey
      </span>

      <h2 className="section-title">
        Work <span>Experience</span>
      </h2>

      <p className="section-subtitle">
        Experienced in Enterprise Networking, Software Development,
        and IT Infrastructure with expertise in Cisco Networking,
        Network Security, Routing & Switching, and Full-Stack Development.
      </p>
    </div>

    <div className="timeline">

      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index}>

          <div className="timeline-marker"></div>

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-info">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>

                <div className="experience-location">
                  📍 {exp.location}
                </div>
              </div>

              <div className="experience-duration">
                {exp.duration}
              </div>

            </div>

            <div className="tech-stack">
              {exp.technologies.map((tech, idx) => (
                <span key={idx}>{tech}</span>
              ))}
            </div>

            <ul className="responsibility-list">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>

);
}

export default Experience;
