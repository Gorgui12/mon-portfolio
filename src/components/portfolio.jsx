import React from "react";
import PortfolioSection from "./animationsSection/portfoliosection";

function Portfolio() {
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

    return (
        //<div className="w-full min-h-[80vh] flex flex-col justify-center items-center gap-12 p-8 transition ease-in duration-1000">
            <PortfolioSection>
            <h2 className="text-3xl font-bold">
                Derniers <span className="text-cyan-400">Projets</span>
            </h2>

            <div className="flex flex-wrap justify-around gap-8 px-20 max-md:flex-col max-md:items-center max-md:px-6">
                {projets.map((projet, index) => (
                    <div
                        key={index}
                        className="w-80 h-auto flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-100 p-6 text-center shadow-md"
                        style={{ backgroundImage: projet.image ? `url(${projet.image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <span className="text-xl font-semibold text-gray-800 bg-white/80 px-2 py-1 rounded">
                            {projet.title}
                        </span>
                        <a
                            href={projet.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300"
                        >
                            Voir le projet
                        </a>
                    </div>
                ))}
            </div>
            </PortfolioSection>
       // </div>
    );
}

export default Portfolio;



/*import React from "react";
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
*/