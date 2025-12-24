import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin } from "react-icons/fa";


function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simuler l'envoi
    setStatus('Envoi en cours...');
    
    setTimeout(() => {
      setStatus('✅ Message envoyé avec succès !');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    { Icon: Mail, text: 'gorguipresit@gmail.com', label: 'Email' },
    { Icon: Phone, text: '+221 76 214 50 37', label: 'Téléphone' },
    { Icon: MapPin, text: 'Dakar, Sénégal', label: 'Localisation' }
  ];
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#0a1f2e] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className={`max-w-7xl mx-auto px-4 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">
          <span className="text-white">Me </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contacter</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 md:mb-16 text-base md:text-lg">Discutons de votre prochain projet</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Informations de contact */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                Restons en contact
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Vous avez un projet en tête ? N'hésitez pas à me contacter. 
                Je serai ravi de discuter de vos besoins et de voir comment je peux vous aider 
                à concrétiser vos idées.
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                    <item.Icon size={20} className="text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 mb-1">{item.label}</p>
                    <span className="text-sm md:text-base text-white font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-400 mb-4">Suivez-moi sur les réseaux</p>
              <div className="flex gap-3">
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
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Votre nom" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="votre@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Sujet de votre message" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  placeholder="Décrivez votre projet..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:from-cyan-300 hover:to-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-400/30"
              >
                Envoyer le message
              </button>

              {status && (
                <div className={`text-center p-3 rounded-lg ${
                  status.includes('✅') 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                }`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;