import React from "react";
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