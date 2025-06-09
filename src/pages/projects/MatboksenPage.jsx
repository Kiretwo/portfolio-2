import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const MatboksenPage = () => {
  const project = {
    name: "Matboksen",
    projectType: "Agency 2",
    description: "A nutrition tracking application that helps users monitor their daily calorie intake and nutritional values of various foods.",
    longDescription: `Matboksen is a comprehensive nutrition tracking application developed as my Agency 2 project. The application helps users maintain a healthy lifestyle by tracking their daily food intake, calories, and nutritional information.

The platform features a searchable food database, nutrition fact tracking, daily intake monitoring, meal planning capabilities, and personalized nutrition goals. Users can log their meals, view detailed nutritional breakdowns, and track their progress over time.

This project showcases modern React development practices, integration with nutrition APIs, state management, and responsive design. The application was styled with TailwindCSS to demonstrate utility-first CSS methodology and rapid UI development.`,
    tech: ["React", "JavaScript", "TailwindCSS"],
    image: "/matboksen.png",
    liveUrl: "https://ca-agency-2-gul.netlify.app/",
    githubUrl: "#", // Add your GitHub URL
    features: [
      "Comprehensive food database search",
      "Nutrition facts and calorie tracking",
      "Daily meal logging",
      "Progress tracking and analytics",
      "Personalized nutrition goals",
      "Meal planning and suggestions",
      "Mobile-responsive design"
    ],
    challenges: [
      "Integrating with nutrition APIs",
      "Implementing complex data visualization",
      "Managing large datasets efficiently",
      "Creating intuitive user experience for food logging"
    ]
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

export default MatboksenPage;
