
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Mohamed-Yanis Slimani</h1>
        <p className="text-md md:text-lg mt-4">Etudiant en Développement Web & Application</p>
        <Button className="mt-8">Télécharger CV</Button>
      </div>
    </section>
  );
};

export default Hero;
