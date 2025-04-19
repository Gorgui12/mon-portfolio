import React, { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

function Header({ scrollToSection, homeRef, skillsRef, servicesRef, portfolioRef, contactRef }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleMenuClick = (ref) => {
    scrollToSection(ref);
    setOpen(false);
  };

  return (
    <div className="w-full bg-[#095055] flex flex-wrap items-center justify-between px-4 py-4 relative">
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        <h2>
          <span>GORGUI</span>
          <br />
          <span>FALL</span>
        </h2>
      </div>

      {/* Bouton mobile */}
      <button
        className="md:hidden text-white text-2xl absolute top-5 right-4"
        onClick={toggleMenu}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <nav
        className={`w-full md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[300px] mt-4" : "max-h-0 md:max-h-full"
        } md:mt-0`}
      >
        <ul
          className={`flex flex-col md:flex-row items-center justify-evenly md:gap-8 gap-4 text-white font-bold ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <button onClick={() => handleMenuClick(homeRef)} className="hover:text-[#00e6e6]">
              Accueil
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuClick(skillsRef)} className="hover:text-[#00e6e6]">
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuClick(servicesRef)} className="hover:text-[#00e6e6]">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuClick(portfolioRef)} className="hover:text-[#00e6e6]">
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuClick(contactRef)} className="hover:text-[#00e6e6]">
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* Télécharger CV */}
      <div className="hidden md:block">
        <a
          href="/cv-gorgui-fall.pdf"
          download="Gorgui_Fall_CV.pdf"
          className="bg-[#00e6e6] text-[#095055] font-bold py-2 px-4 rounded hover:bg-[#008c8c] hover:text-white transition-colors"
        >
          Télécharger CV <FaDownload className="inline ml-2" />
        </a>
      </div>
    </div>
  );
}

export default Header;


/*import React, { useState } from "react";
import "./header.css";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

function Header({ scrollToSection, homeRef, skillsRef, servicesRef, portfolioRef, contactRef }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Fonction pour défiler et fermer le menu
  const handleMenuClick = (ref) => {
    scrollToSection(ref);
    setOpen(false); // Ferme le menu après le clic
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <h2>
          <span>GORGUI</span>
          <br />
          <span>FALL</span>
        </h2>
      </div>

      <nav className={`nav ${open ? "open" : ""}`} id="menu-container">
        <ul className="menu-items">
          <li className="menu-item">
            <button onClick={() => handleMenuClick(homeRef)}>Accueil</button>
          </li>
          <li className="menu-item">
            <button onClick={() => handleMenuClick(skillsRef)}>Skills</button>
          </li>
          <li className="menu-item">
            <button onClick={() => handleMenuClick(servicesRef)}>Services</button>
          </li>
          <li className="menu-item">
            <button onClick={() => handleMenuClick(portfolioRef)}>Portfolio</button>
          </li>
          <li className="menu-item">
            <button onClick={() => handleMenuClick(contactRef)}>Contact</button>
          </li>
        </ul>
      </nav>

      <div className="theme-cv-container">
         <a href="/cv-gorgui-fall.pdf" download="Gorgui_Fall_CV.pdf">
           Télécharger CV <FaDownload/>
         </a>
    </div>


      <button className="menu-toggle" onClick={toggleMenu}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
  );
}

export default Header;
*/