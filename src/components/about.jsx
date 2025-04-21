 /*import React from "react";
import './about.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import profil from '../assets/profil.jpeg'

function About(){

    return(
       
        <div className="homeContainer">
            <div className="homeTopContainer">
                
                <div className="homeParagrapheContainer">
                    <p className="homeParagraphe">
                        
                        <span className="homeParagrapheName">About Me</span><br />
                        <span className="homeParagrapheMetier" >  Developpeur Web</span><br />
                        <p style={{width: '35em'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cumque facere hic ab atque suscipit molestiae magnam laudantium ipsam, velit vero laboriosam, voluptates dolorum sint corporis nobis aliquam eaque nihil.</p>
                    </p>
                    <ul className="reseauxSociauxContainer" >
                        <li className="reseauxSociauxitem"><a href=""><FaFacebook size={30}/></a></li>
                        <li className="reseauxSociauxitem"><a href=""><FaTiktok size={30}/></a></li>
                        <li className="reseauxSociauxitem"><a href=""><FaInstagram size={30}/></a></li>
                        <li className="reseauxSociauxitem"><a href=""><FaLinkedin size={30}/></a></li>
                    </ul>
                    <div className='btnContactContainer'>
                        <button className="contactMoi">Mon CV</button>
                    </div>
                </div>
                <div className="imageProfilContainer">
                <img src={profil} alt="Profil" className='profil'/>
                </div>
            </div>
            
        </div>
    )
}
export default About;

*/
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import profil from '../assets/profil.jpeg';

function About() {
  return (
    <div className="w-full h-auto p-8 grid grid-rows-[90%_10%] transition ease-in duration-500">
      <div className="flex flex-row items-center justify-around gap-4 flex-wrap">
        {/* Texte */}
        <div className="flex flex-col max-w-xl">
          <p className="text-[40px] text-cyan-100 drop-shadow-[4px_4px_10px_aqua] p-1">About Me</p>
          <p className="text-[30px] text-cyan-100 drop-shadow-[4px_4px_10px_aqua] p-1">Développeur Web</p>
          <p className="text-gray-700 mt-2 mb-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cumque
            facere hic ab atque suscipit molestiae magnam laudantium ipsam, velit vero
            laboriosam, voluptates dolorum sint corporis nobis aliquam eaque nihil.
          </p>

          {/* Réseaux sociaux */}
          <ul className="flex w-60 justify-around my-4">
            <li><a href=""><FaFacebook size={30} /></a></li>
            <li><a href=""><FaTiktok size={30} /></a></li>
            <li><a href=""><FaInstagram size={30} /></a></li>
            <li><a href=""><FaLinkedin size={30} /></a></li>
          </ul>

          {/* Bouton */}
          <div className="w-60">
            <button className="p-4 w-full rounded-lg bg-cyan-400 text-lg hover:bg-cyan-500 transition">Mon CV</button>
          </div>
        </div>

        {/* Image de profil */}
        <div className="w-[15vw] h-[200px] bg-indigo-400 rounded-[20%_40%_20%_40%] shadow-[2rem_2rem_0_rgb(46,224,236)] rotate-[10deg] flex items-center justify-center">
          <img src={profil} alt="Profil" className="w-40 h-60 rounded-[0%_40%]" />
        </div>
      </div>
    </div>
  );
}

export default About;
