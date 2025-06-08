import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="site-header">
        <nav>
          <div className="nav-logo">
            <NavLink to="/">Erik T.</NavLink> {/* Or your full name */}
          </div>
          <ul>
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
        </nav>
      </header>
      <main className="main-container app-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
