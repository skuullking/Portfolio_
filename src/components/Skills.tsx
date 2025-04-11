import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useTheme from "@/hooks/use-theme";

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
            <Card variant="ghost" key={category} className={`transition-transform hover:scale-105 shadow-md hover:shadow-lg ${isDark ? 'shadow-white/20' : 'shadow-md hover:shadow-lg'} card card-inner`}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {skillList.map((skill, index) => (
                    <li key={index} className="mb-2">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
