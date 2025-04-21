import React, { useEffect, useState, useRef } from 'react';

const PortfolioSection = ({ children }) => {
  const sectionRef = useRef(null); // Référence à la section DOM
  const [isVisible, setIsVisible] = useState(false); // État de visibilité

  useEffect(() => {
    // Création de l'observateur
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Rendre visible
          observer.unobserve(entry.target); // Une seule fois
        }
      },
      {
        threshold: 0.1, // 10% doit être visible
      }
    );

    // Observer l'élément si présent
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Nettoyage à la destruction du composant
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full min-h-[80vh] flex flex-col justify-center items-center gap-12 p-8 transition ease-in duration-1000
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
      `}
    >
      {children}
    </div>
  );
};

export default PortfolioSection;
