import React, { useState, useEffect, useRef } from "react";


function Hero() {
  const [metier, setMetier] = useState('');
  const [metierIndex, setMetierIndex] = useState(0);
  const metiers = ['Spécialiste en Marketing Digital', 'UI/UX Designer', 'Développeur Full-Stack'];
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetierIndex((prev) => (prev + 1) % metiers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMetier(metiers[metierIndex]);
  }, [metierIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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

  const socials = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61556969465924',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@tekalis',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/palene_code',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/gorgui-fall-25125828b',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1f2e] via-[#095055] to-[#0a1f2e] pt-24 pb-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className={`max-w-7xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Bonjour, je suis
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mt-2 text-5xl md:text-7xl lg:text-8xl animate-gradient">
                Gorgui Fall
              </span>
            </h1>
          </div>
          
          <div className="min-h-[80px] flex items-center justify-center md:justify-start">
            <p className="text-xl md:text-2xl lg:text-3xl text-white">
              Et je suis{' '}
              <span className="font-bold text-cyan-400 inline-block transition-all duration-500 relative">
                <span className="absolute inset-0 bg-cyan-400/20 blur-xl"></span>
                <span className="relative">{metier}</span>
              </span>
            </p>
          </div>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Développeur web full-stack passionné avec plus d'un an d'expérience. 
            Je crée des applications web modernes, performantes et intuitives en utilisant 
            React, Node.js et les dernières technologies. Mon objectif est de transformer 
            vos idées en solutions digitales innovantes qui font la différence.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-cyan-400 text-white hover:text-[#095055] transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:from-cyan-300 hover:to-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-400/30">
              Me Contacter
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-cyan-400 hover:text-white hover:scale-105 transition-all duration-300">
              Mes Projets
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-ping"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-blue-500 rounded-full blur-3xl opacity-20 animate-ping" style={{ animationDelay: '1s' }}></div>
            
            <div className="absolute inset-4 md:inset-6 rounded-[40%_60%_70%_30%] bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center overflow-hidden shadow-2xl shadow-cyan-400/50 animate-morph">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center text-white text-5xl md:text-6xl lg:text-7xl font-bold backdrop-blur-sm">
                GF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;