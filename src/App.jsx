import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import HolidazePage from "./pages/projects/HolidazePage";
import AuksjonshsuetPage from "./pages/projects/AuksjonshsuetPage";
import MatboksenPage from "./pages/projects/MatboksenPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/holidaze" element={<HolidazePage />} />
          <Route
            path="projects/auksjonshuset"
            element={<AuksjonshsuetPage />}
          />
          <Route path="projects/matboksen" element={<MatboksenPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
