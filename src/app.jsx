import React, { useRef } from 'react';
import Header from "./components/header";
import Hero from "./components/Hero";
import Skills from './components/skills';
import Technologies from './components/technologies';
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  // Références pour chaque section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Fonction pour défiler vers une section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a1f2e]">
      {/* Header fixe */}
      <Header 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        skillsRef={skillsRef} 
        servicesRef={servicesRef} 
        portfolioRef={portfolioRef} 
        contactRef={contactRef} 
      />

      {/* Sections principales */}
      <main>
        <section ref={homeRef}>
          <Hero />
        </section>
        
        <section ref={skillsRef}>
          <Skills />
        </section>
        
        <section>
          <Technologies />
        </section>
        
        <section ref={servicesRef}>
          <Services />
        </section>
        
        <section ref={portfolioRef}>
          <Portfolio />
        </section>
        
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

