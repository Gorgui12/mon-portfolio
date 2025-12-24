import React, { useState, useEffect } from "react";
import { Menu, X, Download } from 'lucide-react';

function Header({ scrollToSection, homeRef, skillsRef, servicesRef, portfolioRef, contactRef }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Déterminer la section active
      const sections = [homeRef, skillsRef, servicesRef, portfolioRef, contactRef];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((ref, index) => {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [homeRef, skillsRef, servicesRef, portfolioRef, contactRef]);

  const menuItems = [
    { name: 'Accueil', ref: homeRef },
    { name: 'Skills', ref: skillsRef },
    { name: 'Services', ref: servicesRef },
    { name: 'Portfolio', ref: portfolioRef },
    { name: 'Contact', ref: contactRef }
  ];

  const handleMenuClick = (ref) => {
    scrollToSection(ref);
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#095055]/95 backdrop-blur-md shadow-2xl shadow-cyan-400/10' : 'bg-[#095055]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold hover:text-cyan-400 transition-colors cursor-pointer group">
          <h2>
            <span className="text-2xl tracking-wider group-hover:tracking-widest transition-all">GORGUI</span>
            <br />
            <span className="text-sm tracking-[0.3em] text-cyan-400">FALL</span>
          </h2>
        </div>

        {/* Bouton mobile */}
        <button
          className="md:hidden text-white text-2xl z-50 hover:text-cyan-400 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav className={`${
          open ? 'flex' : 'hidden'
        } md:flex fixed md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-gradient-to-b from-[#095055] to-[#0a1f2e] md:bg-transparent flex-col md:flex-row items-center justify-center md:justify-end gap-8 transition-all duration-300`}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuClick(item.ref)}
              className={`text-lg md:text-base font-semibold transition-all duration-300 relative group ${
                activeSection === index ? 'text-cyan-400 scale-110' : 'text-white hover:text-cyan-400'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                activeSection === index ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </nav>

        {/* Bouton CV */}
        <a
          href="/cv-gorgui-fall.pdf"
          download="Gorgui_Fall_CV.pdf"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full hover:from-cyan-300 hover:to-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-400/30"
        >
          Mon CV <Download size={18} className="animate-bounce" />
        </a>
      </div>

      {/* Barre de progression */}
      <div className="h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
          style={{ width: `${(activeSection / (menuItems.length - 1)) * 100}%` }}
        ></div>
      </div>
    </header>
  );
}

export default Header;