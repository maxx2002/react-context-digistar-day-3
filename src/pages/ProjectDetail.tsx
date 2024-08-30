import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { FaArrowRight } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const techIcons: { [key: string]: React.ReactNode } = {
  "Next.js": <RiNextjsFill />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <RiTailwindCssFill />,
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const id = parseInt(projectId ?? "", 10);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="px-16 py-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-xl">The project with ID {id} could not be found.</p>
      </div>
    );
  }

  return (
    <div className="px-16 py-8 text-gray-900 bg-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">{project.name}</h1>
      <div className="flex items-center gap-x-12">
        <img
          src={`/images/projects/${project.image}`}
          alt={project.name}
          className="w-full h-72 object-cover rounded-md"
        />
        <div className="flex flex-col gap-y-8">
          <p className="text-lg">{project.description}</p>
          <div className="flex space-x-8 text-xl">
            {project.techStack.map((tech, index) => (
              <div key={index} className="flex items-center space-x-1">
                {techIcons[tech] || <span>{tech}</span>}
                <span>{tech}</span>
              </div>
            ))}
          </div>
          <Link
            to={project.link}
            className="text-blue-500 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Project
            <FaArrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
