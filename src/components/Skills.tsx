
const Skills = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "Vue.js", "Alpine.js", "Three.js", "Bootstrap"],
    Backend: ["PHP", "Node.js", "Python"],
    "Base de données": ["PostgreSQL", "MySQL", "MongoDB"],
    "Outils & divers": ["Figma", "GitHub", "Composer", "Symfony (maker)", "OWASP"],
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul>
                {skillList.map((skill, index) => (
                  <li key={index} className="mb-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
