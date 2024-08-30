import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  name: string;
  image: string;
  techStack: string[];
}

const techIcons: { [key: string]: React.ReactNode } = {
  "Next.js": <RiNextjsFill />,
  TypeScript: <SiTypescript />,
  "Tailwind CSS": <RiTailwindCssFill />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  image,
  techStack,
}) => {
  return (
    <Link
      to={`/projects/${id}`}
      className="border rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={`/images/projects/${image}`}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex space-x-4 mt-2">
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center space-x-1">
              {techIcons[tech] || <span>{tech}</span>}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
