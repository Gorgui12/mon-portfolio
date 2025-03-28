import React, { useState } from "react";
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
