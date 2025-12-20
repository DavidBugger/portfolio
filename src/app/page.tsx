import Hero from '@/app/components/sections/Hero';
import About from '@/app/components/sections/About';
import Projects from '@/app/components/sections/Projects';
import Contact from '@/app/components/sections/Contact';
import Services from '@/app/components/sections/services';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      
    </>
  );
}