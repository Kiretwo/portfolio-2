const ProjectsPage = () => {
  const projects = [
    {
      name: "Holidaze - Project exam 2",
      url: "https://erik-holidaze.netlify.app/",
      description: "Website for booking and hosting accommodations.",
    },
    {
      name: "Auksjonshuset - Semesteroppgave 2",
      url: "https://auksjonshuset.netlify.app/",
      description:
        "Website where you can put out items for auctions and bid on items.",
    },
    {
      name: "Matboksen - Agency 2",
      url: "https://ca-agency-2-gul.netlify.app/",
      description: "Website for tracking calories and nutrients of food.",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="page-title">My Projects</h1>
      <ul className="projects-list">
        {projects.map((project) => (
          <li key={project.name} className="project-item">
            <h2>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
