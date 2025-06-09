import {
  FaJs,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaReact,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Project data for preview cards
  const featuredProjects = [
    {
      name: "Holidaze",
      url: "https://erik-holidaze.netlify.app/",
      description: "Website for booking and hosting accommodations.",
      tech: ["React", "TypeScript", "Sass"],
      image: "/holidaze.png",
      projectType: "Project Exam 2",
      slug: "holidaze",
    },
    {
      name: "Auksjonshuset",
      url: "https://auksjonshuset.netlify.app/",
      description:
        "Website where you can put out items for auctions and bid on items.",
      tech: ["JavaScript", "HTML", "Sass"],
      image: "/auksjonshuset.png",
      projectType: "Semesteroppgave 2",
      slug: "auksjonshuset",
    },
    {
      name: "Matboksen",
      url: "https://ca-agency-2-gul.netlify.app/",
      description: "Website for tracking calories and nutrients of food.",
      tech: ["React", "JavaScript", "TailwindCSS"],
      image: "/matboksen.png",
      projectType: "Agency 2",
      slug: "matboksen",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Sass", icon: <FaSass /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "React", icon: <FaReact /> },
  ];

  return (
    <div className="home-page">
      {" "}
      <section className="intro-section">
        {" "}
        <div className="intro-content">
          <div className="intro-text">
            <h1>Hi, I'm Erik Torkildsen 👋</h1>
            <p className="subtitle">21-year-old Front-End Developer.</p>
            <p className="location">
              <FaMapMarkerAlt className="location-icon" />
              Bergen, Norway
            </p>
          </div>
          <div className="intro-image">
            <img
              src="/profile-picture.jpg"
              alt="Erik Torkildsen"
              className="profile-picture"
            />
          </div>
        </div>
      </section>
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </section>{" "}
      <section className="projects-preview-section">
        <h2>My Projects</h2>
        <p>Take a look at some of the things I've built.</p>

        <div className="project-cards">
          {" "}
          {featuredProjects.map((project) => (
            <div key={project.name} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-img"
                />
              </div>{" "}
              <div className="project-content">
                <div className="project-header">
                  <span className="project-type">{project.projectType}</span>
                  <h3 className="project-title">{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>{" "}
                <Link to={`/projects/${project.slug}`} className="project-link">
                  View Project <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          ))}{" "}
        </div>

        <Link to="/projects" className="view-all-projects">
          View All Projects
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
