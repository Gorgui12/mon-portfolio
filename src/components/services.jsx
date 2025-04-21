import React from "react";
import { FaCode, FaPalette, FaChartLine } from 'react-icons/fa';
import ServicesSection from "./animationsSection/servicesSection";

function Services() {
    const services = [
        {
            image: <FaCode />,
            title: 'Développement web',
            description: "Je conçois et développe des sites web modernes, performants et adaptés à tous les supports (responsive design). Que ce soit un site vitrine, un blog, un e-commerce ou une application web, je transforme vos idées en solutions fonctionnelles avec un code propre, sécurisé et optimisé pour le référencement. Mon objectif est de créer une expérience fluide et rapide pour l'utilisateur, tout en répondant aux besoins spécifiques de chaque projet."
        },
        {
            image: <FaPalette />,
            title: 'Graphic Design',
            description: "J’imagine des interfaces intuitives et esthétiques centrées sur l’utilisateur. Grâce à une démarche UX approfondie (analyse des besoins, parcours utilisateur, wireframes) et une approche UI soignée (charte graphique, couleurs, typographie, iconographie), je conçois des designs qui allient efficacité, clarté et attrait visuel. Chaque écran est pensé pour guider l’utilisateur avec fluidité et renforcer l'identité de votre marque."
        },
        {
            image: <FaChartLine />,
            title: 'Marketing digital',
            description: "J’aide les entreprises à accroître leur visibilité et à convertir leur audience grâce à des stratégies digitales sur mesure. Je maîtrise les canaux clés : réseaux sociaux, publicité en ligne (Meta Ads, Google Ads), email marketing, référencement naturel (SEO) et payant (SEA). Mon approche est basée sur l’analyse de données, l’optimisation des campagnes et une communication ciblée pour atteindre les bons clients au bon moment."
        },
    ];

    return (
        //<div className="flex flex-col items-center justify-between p-8">
        <ServicesSection>
            <h2 className="text-3xl font-bold mb-8">
                Mes <span className="text-cyan-400">Services</span>
            </h2>
            <div className="flex flex-wrap justify-evenly items-center gap-8 w-full">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="bg-blue-400 w-60 p-8 rounded-2xl text-white flex flex-col items-center justify-around text-justify hover:shadow-lg transition-shadow duration-300 max-md:w-11/12"
                    >
                        <span className="text-3xl mb-4">{item.image}</span>
                        <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
                        <p className="mb-4 text-sm">{item.description}</p>
                        <button className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 transition duration-300 text-white">
                            Voir plus
                        </button>
                    </div>
                ))}
            </div>
            </ServicesSection>
        //</div>
    );
}

export default Services;


/* import React from "react";
import './services.css'
import { FaCode, FaPalette, FaChartLine } from 'react-icons/fa';



function Services(){


const services = [
    {
        image: <FaCode/>,
        title: 'developpement web',     
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum libero, vero est hic obcaecati illum inventore ducimus!'
    },
    {
        image: <FaPalette/>,
        title: 'graphic disign',     
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum libero, vero est hic obcaecati illum inventore ducimus!'
    },
    {
        image: <FaChartLine/>,
        title: 'Marketing digital',     
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum libero, vero est hic obcaecati illum inventore ducimus!'
    },
];
    return(
        <div className='main'>
            <h2> Mes <span style={{color: 'cyan'}}>Services</span> </h2>
            <div className='cardContainer'>
                {
                    services.map((item, index) => (
                        <div key={index} className = 'servicesCard'>
                          <span className='servicesCardImage'>{item.image}</span>
                            <h3 className='servicesCardTitle'>{item.title}</h3>
                            <p className='servicesCardText'>{item.description}</p>
                        <button className='btn-voir-plus'>Voir plus</button>
                       </div>
                    ))
                }

            </div>
       </div> 
    )
}
export default Services;

*/