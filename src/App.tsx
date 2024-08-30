import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const App: React.FC = () => {
  return (
    <Router>
      <nav className="bg-gray-900 px-16 py-6 flex justify-between items-center">
        <img src="/images/logo.png" alt="Logo" className="h-6 mr-4" />
        <nav className="flex space-x-8">
          <Link to="/" className="text-white text-lg">
            Home
          </Link>
          <Link to="/projects" className="text-white text-lg">
            Projects
          </Link>
        </nav>
      </nav>
      <main className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
