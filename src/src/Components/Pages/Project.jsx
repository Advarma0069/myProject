// Projects.jsx
import React from "react";
import "../css/Projects.css";

// Projects Data (4 projects added with ad.jpg)
const projects = [
  {
    title: "Ayurveda E-Commerce & Order Management",
    image: "src/assets/Ayurveda.png",
    points: [
      "Built backend APIs for products, categories, cart, orders, and customers",
      "Implemented JWT authentication and role-based access (Admin / Customer)",
      "Designed optimized SQL Server database and order workflows",
      "Supported checkout, order tracking, and admin management features",
    ],
    link: "https://github.com/Advarma0069",
  },
  {
    title: "ERP & CRM Management System",
    image: "/src/assets/lead.png",
    points: [
      "Developed APIs for customers, leads, orders, reports, and user management",
      "Implemented secure authentication and optimized database operations",
      "Created dashboards for real-time reporting and insights",
    ],
    link: "https://github.com/Advarma0069",
  },
  {
    title: "Social Media API System",
    image: "/src/assets/social.png",
    points: [
      "Created REST APIs for posts, likes, comments, follow/unfollow, and chat",
      "Designed normalized database schema and optimized query performance",
      "Implemented JWT authentication and secure endpoints",
    ],
    link: "https://github.com/Advarma0069",
  },
  {
    title: "Logistics & Order Tracking System",
    image: "/src/assets/logistics.png",
    points: [
      "Developed APIs for order creation, shipment tracking, and delivery status",
      "Implemented validation, error handling, and secure endpoints",
      "Integrated notifications for real-time updates",
    ],
    link: "https://github.com/Advarma0069",
  },
  {
    title: "Logistics & Order Tracking System",
    image: "/src/assets/react.svg",
    points: [
      "Developed APIs for order creation, shipment tracking, and delivery status",
      "Implemented validation, error handling, and secure endpoints",
      "Integrated notifications for real-time updates",
    ],
    link: "https://github.com/Advarma0069",
  },
  {
    title: "Logistics & Order Tracking System",
    image: "/src/assets/lead.png",
    points: [
      "Developed APIs for order creation, shipment tracking, and delivery status",
      "Implemented validation, error handling, and secure endpoints",
      "Integrated notifications for real-time updates",
    ],
    link: "https://github.com/Advarma0069",
  },
  {
    title: "Logistics & Order Tracking System",
    image: "/src/assets/social.png",
    points: [
      "Developed APIs for order creation, shipment tracking, and delivery status",
      "Implemented validation, error handling, and secure endpoints",
      "Integrated notifications for real-time updates",
    ],
    link: "https://github.com/Advarma0069",
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={project.link}
                className="view-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
