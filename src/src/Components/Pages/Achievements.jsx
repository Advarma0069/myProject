import React from "react";
import "../css/Achievements.css";

const Achievements = () => {
  const achievementsData = [
    {
      title: "MERN Stack Certificate",
      platform: "Sharda University",
      date: "2025",
      link: "#",
      image: "src/assets/education/mern.png",
      description:
        "Demonstrated proficiency in full-stack web development using MongoDB, Express.js, React.js, and Node.js, completing hands-on projects and real-world applications.",
    },
    {
      title: "Generative AI Certificate",
      platform: "LinkedIn Learning",
      date: "2025",
      link: "#",
      image: "src/assets/education/generativeAI.png",
      description:
        "Completed an advanced course on Generative AI techniques, learning to build AI models, generate content, and implement machine learning pipelines for real-world tasks.",
    },
    {
      title: "Java Developer Intern Certificate",
      platform: "CognoRise Infotech",
      date: "2024",
      link: "#",
      image: "src/assets/java.png",
      description:
        "Gained practical experience in Java application development, including core Java, Spring Boot, REST APIs, and database integration, contributing to enterprise-level projects.",
    },
    {
      title: "Java Developer Intern Certificate",
      platform: "CognoRise Infotech",
      date: "2024",
      link: "#",
      image: "src/assets/java.png",
      description:
        "Participated in software development projects focusing on Java backend development, microservices architecture, and collaborative Agile workflows, enhancing coding and problem-solving skills.",
    },
  ];

  return (
    <section className="achievements-section">
      <div className="achievements-header">
        <h2 className="achievements-title">Professional Achievements</h2>
        <p className="achievements-subtitle">
          Recognized certifications and milestones demonstrating expertise and continuous learning.
        </p>
      </div>

      <div className="achievements-container">
        {achievementsData.map((ach, index) => (
          <div
            key={index}
            className="achievement-card animate-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="achievement-image">
              <img src={ach.image} alt={ach.title} />
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">{ach.title}</h3>
              <p className="achievement-platform">{ach.platform}</p>
              <span className="achievement-date">{ach.date}</span>
              {/* Add description here */}
              <p className="achievement-description">{ach.description}</p>
              <a
                href={ach.link}
                target="_blank"
                rel="noreferrer"
                className="view-button"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
