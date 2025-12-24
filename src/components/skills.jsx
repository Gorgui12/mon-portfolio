import React, { useState, useEffect, useRef } from "react";

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { final: 1, suffix: '+', text: "année d'expérience", icon: '🎯' },
    { final: 5, suffix: '+', text: 'projets réalisés', icon: '🚀' },
    { final: 7, suffix: '+', text: 'technologies maîtrisées', icon: '💻' },
    { final: 4, suffix: '+', text: 'clients satisfaits', icon: '⭐' }
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

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.final / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.final) {
            current = stat.final;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#0a1f2e] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"></div>
      
      <div className={`max-w-7xl mx-auto px-4 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative text-center p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:from-cyan-400/10 hover:to-blue-500/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 md:mb-3">
                  {counts[index]}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">{stat.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;