import React, { useState, useEffect, useRef } from "react";

function Portfolio() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const projets = [
    {
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      title: 'EcoShop',
      description: 'Plateforme e-commerce écologique avec système de paiement sécurisé et gestion de stock en temps réel',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2024',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'Paradise Nursery',
      description: 'Site vitrine moderne pour pépinière avec galerie interactive et système de réservation en ligne',
      tags: ['React', 'Tailwind', 'Framer Motion'],
      year: '2024',
      link: '#'
    },
    {
      image: 'https://betterbet.site/images/parieur.jpg',
      title: 'BETTER BET',
      description: 'Plateforme de paris sportifs en temps réel avec analytics avancés et système de notifications',
      tags: ['Full-Stack', 'WebSocket', 'API', 'Real-time'],
      link: 'https://www.betterbet.site',
      year: '2024'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-br from-[#095055] to-[#0a1f2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className={`max-w-7xl mx-auto px-4 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">
          <span className="text-white">Derniers </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projets</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 md:mb-16 text-base md:text-lg">Une sélection de mes réalisations récentes</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projets.map((projet, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge année */}
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400 text-xs md:text-sm font-semibold">
                {projet.year}
              </div>
              
              {/* Image du projet */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f2e] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={projet.image} 
                  alt={projet.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              {/* Contenu */}
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {projet.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 line-clamp-2">
                  {projet.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs md:text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Bouton */}
                <a 
                  href={projet.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2.5 md:py-3 rounded-xl font-semibold hover:from-cyan-300 hover:to-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-400/20"
                >
                  Voir le projet →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;