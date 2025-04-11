
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Stagiaire Développeur Web",
      company: "Fnac-Darty",
      dates: "juin à juillet 2024",
      location: "Paris, France",
      missions: [
        "Redesign de l’interface d’un outil RH",
        "Étude d’hébergements, wireframing, programmation front et back",
      ],
    },
    {
      title: "Agent de Domiciliation",
      company: "SPADA Coallia",
      dates: "août 2023 à mai 2024",
      location: "Paris, France",
      missions: [
        "Aide aux démarches administratives pour les personnes sans domicile fixe",
        "Gestion des dossiers et relation avec les services sociaux",
      ],
    },
    {
      title: "Réceptionniste",
      company: "Hôtel Relais Bergson",
      dates: "Depuis juillet 2023",
      location: "Paris, France",
      missions: [
        "Accueil des clients, check-in/out",
        "Gestion des réservations et assistance clientèle",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Expériences professionnelles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="transition-transform hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{experience.title}</CardTitle>
                <CardDescription>
                  <em>{experience.company} – {experience.dates}</em>
                  <br />
                  {experience.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  {experience.missions.map((mission, missionIndex) => (
                    <li key={missionIndex}>• {mission}</li>
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

export default Experience;
