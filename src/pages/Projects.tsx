import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="px-16 py-8 text-gray-900 bg-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className=" flex gap-x-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
