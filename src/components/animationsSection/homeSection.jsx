import { useEffect, useRef, useState } from 'react';

// Composant qui applique une animation d'apparition au scroll
const HomeSection = ({ children }) => {
  // Référence vers la section HTML pour l'observer avec IntersectionObserver
  const sectionRef = useRef(null);

  // État pour savoir si la section est visible à l'écran
  const [isVisible, setIsVisible] = useState(false);

  // useEffect s'exécute au montage du composant
  useEffect(() => {
    // Création de l'observateur pour détecter si la section entre dans la vue
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry représente l'observation de l'élément
        if (entry.isIntersecting) {
          // Si l'élément entre dans le viewport, on change l'état à "visible"
          setIsVisible(true);
          // On arrête d'observer l'élément (animation déclenchée une seule fois)
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Seuil : 10% de la section doit être visible pour déclencher
      }
    );

    // Si la section est bien présente dans le DOM, on commence à l'observer
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Nettoyage : on arrête l'observation au démontage du composant
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Tableau vide = effet déclenché une seule fois au montage

  return (
    // <div className="flex flex-col md:flex-row items-center justify-around gap-8 p-6 >
    <div
      // Référence liée à l'élément DOM pour l'observer
      ref={sectionRef}
      // Classes Tailwind : styles généraux + animation conditionnelle
      className={`flex flex-col md:flex-row items-center justify-around gap-8 p-6 transition-all duration-1000 ease-in
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Contenu dynamique passé en tant qu'enfant du composant */}
      {children}
    </div>
  );
};

export default HomeSection;
