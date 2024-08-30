import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import { ThemeProvider } from "./providers/ThemeProvider";
import ThemeSwitch from "./components/ThemeSwitch";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <nav className="bg-gray-900 px-16 py-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img src="/images/logo.png" alt="Logo" className="h-6 mr-4" />
            <div className="flex space-x-8">
              <Link to="/" className="text-white text-lg">
                Home
              </Link>
              <Link to="/projects" className="text-white text-lg">
                Projects
              </Link>
            </div>
          </div>
          <ThemeSwitch />
        </nav>
        <main className="bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
