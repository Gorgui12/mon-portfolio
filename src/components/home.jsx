import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import HomeSection from "./animationsSection/homeSection";
import Profil from '../assets/profile.jpg'


function Home() {
  const [metier, setMetier] = useState('');
  const metiers = ['specialiste en Marketing digital', 'UI/UX Designer', 'Developer full-stack'];
  
  useEffect(() => {
    let index = 0;
  
    const interval = setInterval(() => {
      setMetier(metiers[index]);
      index = (index + 1) % metiers.length; // pour que ça boucle
    }, 4000);
  
    // nettoyage
    return () => clearInterval(interval);
  }, []);
  

  return (
   // <div className="flex flex-col md:flex-row items-center justify-around gap-8 p-6 transition ease-out duration-1000">
   <HomeSection>
      <div className="w-[250px] h-[300px] md:w-[250px] md:h-[300px] bg-blue-400 shadow-[0_0_15px_rgb(46,224,236)] rounded-[20%_40%_20%_40%] rotate-[10deg] flex items-center justify-center overflow-hidden">
        <img src={Profil} alt="Profil" className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <p className="text-cyan-100 text-4xl font-bold drop-shadow-[4px_4px_10px_aqua]">Bonjour, je suis
          <span className="block text-5xl mt-2 text-cyan-100"> Gorgui Fall</span>
        </p>
        <p className="text-2xl text-cyan-100 mt-2 drop-shadow-[4px_4px_10px_aqua] transition duration-1000">
          Et je suis <span className="font-semibold"> {metier} </span>
        </p>

        <p className="mt-4 text-white max-w-md">
          Développeur web full-stack avec un an d'expérience en React et Node.js, spécialisé dans la création d’applications web responsives.
          Passionné par le développement d’interfaces intuitives et ergonomiques, je prends plaisir à résoudre des problèmes et à apprendre en continu
          pour enrichir mes compétences et découvrir de nouvelles technologies.
        </p>

        <ul className="flex justify-center md:justify-start gap-6 mt-4">
          <li><a href="https://www.facebook.com/profile.php?id=61556969465924&mibextid=LQQJ4d"><FaFacebook size={30} className="text-white hover:text-cyan-300 transition" /></a></li>
          <li><a href="https://www.tiktok.com/@tekalis?_t=ZM-8vffWG1HL6r&_r=1"><FaTiktok size={30} className="text-white hover:text-cyan-300 transition" /></a></li>
          <li><a href="https://www.instagram.com/palene_code?igsh=MWE3OWxuNG9wNXU0dg%3D%3D&utm_source=qr"><FaInstagram size={30} className="text-white hover:text-cyan-300 transition" /></a></li>
          <li><a href="https://www.linkedin.com/in/gorgui-fall-25125828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin size={30} className="text-white hover:text-cyan-300 transition" /></a></li>
        </ul>

        <div className="mt-6">
          <button className="w-60 py-3 rounded-lg bg-cyan-300 text-gray-900 font-semibold hover:bg-cyan-600 hover:text-white transition">
            Me Contacter
          </button>
        </div>
      </div>
      
  </HomeSection>
  //</div> 
  );
}

export default Home;


/*import React from "react";
import { useState, useEffect } from "react";
import './home.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

function Home(){
    const [metier, setMetier] = useState('');

    useEffect(() => {
        const timeouts = [
            setTimeout(() => setMetier('Developer Web'), 0),
            setTimeout(() => setMetier('UI/UX Designer'), 4000),
            setTimeout(() => setMetier('Spécialiste en marketing digital'), 8000),
        ];

        return () => {
            // Nettoyer les timeouts pour éviter des effets indésirables
            timeouts.forEach(clearTimeout);
        };
    }, []); // Exécute une seule fois après le premier rendu

    return(
       
        


        //<div className="homeContainer">
        <>
            <div className="homeTopContainer">
                <div className="imageProfilContainer">
                <img src="" alt="Profil" />
                </div>
                <div className="homeParagrapheContainer">
                    <p className="homeParagraphe">
                        bonjour, je suis
                        <span className="homeParagrapheName"> Gorgui Fall</span><br />
                        Et je suis<span className="homeParagrapheMetier" > {metier} </span><br />
                        <p style={{width: '35em'}} className='homeParagrapheText'>Développeur web full-stack avec un an d'expérience en
React et Node.js, spécialisé dans la création d’applications
web responsives. Passionné par le développement
d’interfaces intuitives et ergonomiques, je prends plaisir à
résoudre des problèmes et à apprendre en continu pour
enrichir mes compétences et découvrir de nouvelles
technologies.</p>
                    </p>
                    <ul className="reseauxSociauxContainer" >
                        <li className="reseauxSociauxitem"><a href=""><FaFacebook size={30}/></a></li>
                        <li className="reseauxSociauxitem"><a href=""><FaTiktok size={30}/></a></li>
                        <li className="reseauxSociauxitem"><a href=""><FaInstagram size={30}/></a></li>
                        <li className="reseauxSociauxitem"><a href=""><FaLinkedin size={30}/></a></li>
                    </ul>
                    <div className='btnContactContainer'>
                        <button className="contactMoi">Me Contacter</button>
                    </div>
                </div>
            </div>
            </>
        //</div>
    )
}
export default Home;
*/