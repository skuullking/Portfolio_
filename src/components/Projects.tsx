
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      name: "Site de gestion des congés",
      description: "Gestion des congés avec Azure et Bootstrap.",
      technologies: ["HTML", "CSS", "JS", "Azure", "Bootstrap"],
    },
    {
      name: "Site e-commerce de vélos",
      description: "E-commerce de vélos avec PHP et MySQL.",
      technologies: ["PHP", "MySQL", "MVC"],
    },
    {
      name: "Jeu 3D Pong",
      description: "Pong en 3D avec Three.js.",
      technologies: ["JavaScript", "Three.js"],
    },
    {
      name: "Forum communautaire",
      description: "Forum communautaire avec PHP et PostgreSQL.",
      technologies: ["PHP", "PostgreSQL"],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-500 mb-4">{project.description}</p>
              <div>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 shadow-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

