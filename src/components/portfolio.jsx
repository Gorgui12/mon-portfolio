import React from "react";
import './portfolio.css'

function Portfolio(){
const projets = [
    {
        image: '',
        title: 'EcoShop',
        link: ''
    },
    {
        image: '',
        title: 'Paradise Nursery',
        link: ''
    },
    {
        image: 'https://betterbet.site/images/parieur.jpg',
        title: 'BETTER BET',
        link: 'https://www.betterbet.site'
    },
];
    return(
        <div className="main-portfolio">
            <h2>Derniers <span style={{color: 'cyan'}}> Projets</span></h2>
            <div className="projetsContainer">
                {
                    projets.map((projet, index) => (
                        <div key={index} className="projetCard" style={{ backgroundImage: `url(${projet.image})` }}>
                           <span className="projetTitle">{projet.title}</span>
                           <button className="projetAction"><a href={projet.link}>voir le projet</a> </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Portfolio;