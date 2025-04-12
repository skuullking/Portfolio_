'use client';

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Mohamed-Yanis Slimani</h1>
        <p className="text-md md:text-lg mt-4">Etudiant en Développement Web & Application</p>
        {isClient && (
          <Button className="mt-8" onClick={() => window.open('../../public/cv_mohamed-yanis_slimani_2025.pdf', '_blank')}>
            Télécharger CV
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hero;
