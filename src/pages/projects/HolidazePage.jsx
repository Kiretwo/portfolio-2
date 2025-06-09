import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const HolidazePage = () => {
  const project = {
    name: "Holidaze",
    projectType: "Project Exam 2",
    description:
      "A comprehensive accommodation booking platform that allows users to browse, book, and manage holiday accommodations. The platform features user authentication, booking management, and venue hosting capabilities.",
    longDescription: `Holidaze is a modern accommodation booking platform built as my Project Exam 2. The application provides a seamless experience for both travelers looking for accommodations and hosts wanting to list their properties.

Key features include user registration and authentication, comprehensive venue browsing with filtering capabilities, detailed venue pages with image galleries, secure booking system with date selection, user dashboard for managing bookings, and venue management system for hosts.

The application was built with a focus on user experience, responsive design, and modern web development practices. It demonstrates proficiency in React development, API integration, state management, and responsive design principles.`,
    tech: ["React", "TypeScript", "Sass"],
    image: "/holidaze.png",
    liveUrl: "https://erik-holidaze.netlify.app/",
    githubUrl: "#", // Add your GitHub URL
    features: [
      "User authentication and registration",
      "Venue browsing with search and filters",
      "Detailed venue pages with image galleries",
      "Booking system with calendar integration",
      "User dashboard for booking management",
      "Venue management for hosts",
      "Responsive design for all devices",
    ],
    challenges: [
      "Implementing complex booking logic with date validation",
      "Creating a responsive image gallery component",
      "Managing application state across multiple components",
      "Integrating with external APIs for data management",
    ],
  };

  return (
    <div className="project-detail-page">
      <div className="project-hero">
        <div className="project-hero-content">
          <span className="project-type">{project.projectType}</span>
          <h1>{project.name}</h1>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaExternalLinkAlt /> View Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
        <div className="project-hero-image">
          <img src={project.image} alt={project.name} />
        </div>
      </div>

      <div className="project-content">
        <section className="project-overview">
          <h2>Project Overview</h2>
          <div className="overview-content">
            <div className="tech-stack">
              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-details">
              <p>{project.longDescription}</p>
            </div>
          </div>
        </section>

        <section className="project-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-challenges">
          <h2>Challenges & Solutions</h2>
          <ul className="challenges-list">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HolidazePage;
