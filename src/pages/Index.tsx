import { MatrixRain } from "@/components/MatrixRain";
import { FloatingParticles } from "@/components/FloatingParticles";
import { EasterEggs } from "@/components/EasterEggs";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <MatrixRain />
      <FloatingParticles />
      <EasterEggs />
      <Navigation />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />

      <footer className="py-8 border-t border-primary/20 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 Zane Goat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
