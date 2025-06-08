import { Outlet, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Layout = () => {
  return (
    <>
      <header className="site-header">
        <nav>
          <div className="nav-logo">
            <NavLink to="/">Erik T.</NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Projects
              </NavLink>
            </li>
          </ul>
          <div className="contact-icons">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </header>
      <main className="main-container app-content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <p>
            &copy; 2025 Erik Torkildsen. Front-End Developer based in Bergen,
            Norway.
          </p>
          <div className="footer-contact">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-icon"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-icon"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
