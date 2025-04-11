
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">À propos</h2>
        <Card className="transition-transform hover:scale-105 shadow-md hover:shadow-lg">
          <CardContent>
            <p className="text-justify">
              Développeur passionné par la création d’applications modernes,
              accessibles et bien conçues, je combine curiosité, créativité et
              rigueur pour proposer des solutions techniques solides.
            </p>
            <p className="mt-4 text-justify">
              Toujours en quête d’apprentissage, je m’investis pleinement dans
              chaque projet, qu’il s’agisse de conception, développement ou
              optimisation. J’aime explorer différentes technologies pour élargir
              mes compétences et enrichir ma pratique du développement web, tant
              côté front-end que back-end.
            </p>
            <p className="mt-4 text-justify">
              Ce portfolio présente une sélection de mes réalisations ainsi que mes
              compétences actuelles. D'autres projets sont en cours et viendront
              enrichir cette vitrine au fil du temps.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
