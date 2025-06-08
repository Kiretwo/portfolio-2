import {
  FaJs,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaReact,
  FaExternalLinkAlt,
} from "react-icons/fa";

const HomePage = () => {
  // Project data for preview cards
  const featuredProjects = [
    {
      name: "Holidaze",
      url: "https://erik-holidaze.netlify.app/",
      description: "Website for booking and hosting accommodations.",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      name: "Auksjonshuset",
      url: "https://auksjonshuset.netlify.app/",
      description:
        "Website where you can put out items for auctions and bid on items.",
      tech: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Matboksen",
      url: "https://ca-agency-2-gul.netlify.app/",
      description: "Website for tracking calories and nutrients of food.",
      tech: ["React", "JavaScript", "Sass"],
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
      <section className="intro-section">
        <h1>Erik Torkildsen</h1>
        <p className="subtitle">21-year-old Front-End Developer.</p>
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
      </section>

      <section className="projects-preview-section">
        <h2>My Projects</h2>
        <p>Take a look at some of the things I've built.</p>

        <div className="project-cards">
          {featuredProjects.map((project) => (
            <div key={project.name} className="project-card">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>

        <a href="/projects" className="view-all-projects">
          View All Projects
        </a>
      </section>
    </div>
  );
};

export default HomePage;
