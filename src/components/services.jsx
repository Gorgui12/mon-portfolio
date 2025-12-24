import React, { useState, useEffect, useRef } from "react";
import { Code, Palette, TrendingUp, CheckCircle } from 'lucide-react';

function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      Icon: Code,
      title: 'Développement Web',
      description: "Je conçois et développe des sites web modernes, performants et adaptés à tous les supports (responsive design). Que ce soit un site vitrine, un blog, un e-commerce ou une application web, je transforme vos idées en solutions fonctionnelles avec un code propre, sécurisé et optimisé pour le référencement.",
      features: ['React & Node.js', 'Responsive Design', 'SEO Optimisé', 'Performance']
    },
    {
      Icon: Palette,
      title: 'UI/UX Design',
      description: "J'imagine des interfaces intuitives et esthétiques centrées sur l'utilisateur. Grâce à une démarche UX approfondie et une approche UI soignée, je conçois des designs qui allient efficacité, clarté et attrait visuel. Chaque écran est pensé pour guider l'utilisateur avec fluidité.",
      features: ['Wireframing', 'Prototypage', 'Design System', 'User Testing']
    },
    {
      Icon: TrendingUp,
      title: 'Marketing Digital',
      description: "J'aide les entreprises à accroître leur visibilité et à convertir leur audience grâce à des stratégies digitales sur mesure. Je maîtrise les canaux clés : réseaux sociaux, publicité en ligne, email marketing, référencement naturel (SEO) et payant (SEA).",
      features: ['Social Media', 'SEO/SEA', 'Analytics', 'Content Strategy']
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#0a1f2e] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className={`max-w-7xl mx-auto px-4 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">
          <span className="text-white">Mes </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 md:mb-16 text-base md:text-lg">Des solutions complètes pour votre présence digitale</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:from-cyan-400/10 hover:to-blue-500/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-cyan-400/30">
                  <service.Icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4 md:mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm md:text-base text-gray-400">
                      <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 py-2.5 md:py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 hover:text-white hover:border-transparent transition-all duration-300 text-sm md:text-base">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;