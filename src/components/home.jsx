import React from "react";
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
                        <p style={{width: '35em'}} className='homeParagrapheText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cumque facere hic ab atque suscipit molestiae magnam laudantium ipsam, velit vero laboriosam, voluptates dolorum sint corporis nobis aliquam eaque nihil.</p>
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