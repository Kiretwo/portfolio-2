import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = [
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

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>
      <div className="project-cards">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-image">
              <img
                src={project.image}
                alt={project.name}
                className="project-img"
              />
            </div>
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
              </div>
              <div className="project-actions">
                <Link to={`/projects/${project.slug}`} className="project-link">
                  View Details <FaExternalLinkAlt />
                </Link>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link external"
                >
                  Live Site <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
