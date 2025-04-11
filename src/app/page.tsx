'use client'

import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}


