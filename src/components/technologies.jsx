import React, { useState, useEffect, useRef } from "react";

function Technologies() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const techs = [
    { name: 'React', color: '#61DAFB', level: 90, abbr: 'Re' },
    { name: 'Node.js', color: '#68A063', level: 85, abbr: 'Nd' },
    { name: 'JavaScript', color: '#F7DF1E', level: 95, abbr: 'JS' },
    { name: 'HTML5', color: '#E34F26', level: 98, abbr: 'H5' },
    { name: 'CSS3', color: '#1572B6', level: 95, abbr: 'C3' },
    { name: 'Tailwind', color: '#06B6D4', level: 92, abbr: 'TW' },
    { name: 'MongoDB', color: '#47A248', level: 80, abbr: 'Mg' },
    { name: 'Git', color: '#F05032', level: 88, abbr: 'Gt' }
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydjJoLTJ2LTJoMnptLTItMmgydi0yaC0ydjJ6bS0yIDJoMnYtMmgtMnYyem0yIDBoLTJ2Mmgydi0yem0wIDJ2LTJoMnYyaC0yem0yLTJ2Mmgydi0yaC0yem0wIDBoMnYtMmgtMnYyem0yLTJ2LTJoLTJ2Mmgyem0wLTJ2LTJoLTJ2Mmgyem0wLTJoLTJ2LTJoMnYyem0tMi0yaC0ydjJoMnYtMnptLTItMmgydi0yaC0ydjJ6bTAtMmgtMnYyaDJ2LTJ6bS0yIDJ2LTJoLTJ2Mmgyem0tMiAyaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className={`max-w-7xl mx-auto px-4 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">
          <span className="text-white">Technologies </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Maîtrisées</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 md:mb-16 text-base md:text-lg">Les outils que j'utilise pour créer des expériences exceptionnelles</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {techs.map((tech, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 50}ms`
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              
              {/* Icône avec initiales */}
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 text-xl md:text-2xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10"
                style={{ 
                  backgroundColor: tech.color, 
                  color: 'white',
                  boxShadow: `0 0 20px ${tech.color}40`
                }}
              >
                {tech.abbr}
              </div>
              
              <span className="text-white font-semibold text-sm md:text-base lg:text-lg mb-2 relative z-10">{tech.name}</span>
              
              {/* Barre de progression */}
              <div className="w-full bg-white/10 rounded-full h-1.5 md:h-2 mt-2 overflow-hidden relative z-10">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${tech.level}%` : '0%',
                    transitionDelay: `${index * 100 + 500}ms`
                  }}
                ></div>
              </div>
              <span className="text-cyan-400 text-xs md:text-sm mt-1 relative z-10 font-semibold">{tech.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;