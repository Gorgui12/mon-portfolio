import React from "react";
import { ArrowUp, Heart } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#095055] py-8 md:py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 text-sm md:text-base">
              © 2025 <span className="text-cyan-400 font-semibold">Gorgui Fall</span>. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              Fait avec <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" /> à Dakar, Sénégal
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Accueil</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Bouton scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center hover:from-cyan-300 hover:to-blue-400 hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-400/30 group"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} className="text-white group-hover:animate-bounce" />
          </button>
        </div>

        {/* Ligne de séparation */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            Développé avec React, Tailwind CSS et beaucoup de ☕
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;