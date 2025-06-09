import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const AuksjonshsuetPage = () => {
  const project = {
    name: "Auksjonshuset",
    projectType: "Semesteroppgave 2",
    description:
      "An auction platform where users can create listings for items to be auctioned and place bids on items listed by other users.",
    longDescription: `Auksjonshuset is a comprehensive auction platform developed as my Semesteroppgave 2. The application allows users to participate in online auctions by both listing items for sale and bidding on items posted by other users.

The platform features a complete user authentication system, item listing functionality with image uploads, real-time bidding system, auction management, and user profile pages. Users can track their active bids, manage their listings, and view auction history.

This project demonstrates proficiency in JavaScript development, DOM manipulation, API integration, and responsive web design. The application was built with vanilla JavaScript to showcase fundamental web development skills without framework dependencies.`,
    tech: ["JavaScript", "HTML", "Sass"],
    image: "/auksjonshuset.png",
    liveUrl: "https://auksjonshuset.netlify.app/",
    githubUrl: "#", // Add your GitHub URL
    features: [
      "User registration and authentication",
      "Create auction listings with images",
      "Real-time bidding system",
      "Search and filter auctions",
      "User profile and bid history",
      "Auction countdown timers",
      "Responsive design across devices",
    ],
    challenges: [
      "Implementing real-time bid updates",
      "Creating dynamic countdown timers",
      "Managing complex state with vanilla JavaScript",
      "Handling image uploads and validation",
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

export default AuksjonshsuetPage;
