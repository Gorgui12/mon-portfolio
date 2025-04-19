import React from "react";

function Skills() {
    const stats = [
        { chiffre: '+1', texte: 'année d’expérience' },
        { chiffre: '+5', texte: 'projets réalisés' },
        { chiffre: '+7', texte: 'technologies maîtrisées' },
        { chiffre: '+4', texte: 'clients satisfaits' },
    ];

    return (
        <div className="flex flex-wrap justify-between items-center gap-4 p-8 max-md:flex-col max-md:items-center">
            {stats.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center justify-center gap-2 pr-8 h-12 border-r-2 border-[#0c92e0] max-md:border-r-0 max-md:border-b-2 max-md:pb-4 max-md:w-4/5 max-md:text-center`}
                >
                    <span className="text-[30px] font-bold text-[#0c92e0]">
                        {item.chiffre}
                    </span>
                    <span className="text-[20px] text-white" style={{ textShadow: '2px 4px 8px cyan' }}>
                        {item.texte}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Skills;


/*
import React from "react";
import './skills.css'

function Skills(){

    return(
        <div className = "homeBasContainer">
                <div className="homeBasItem">
                    <span className="homeBasChiffre">+1</span>
                    <span className="homeBasText">année d’expérience</span>
                </div>
                <div className="homeBasItem">
                    <span className="homeBasChiffre">+5</span>
                    <span className="homeBasText">projets réalisés</span>
                </div>
                <div className="homeBasItem">
                    <span className="homeBasChiffre">+7</span>
                    <span className="homeBasText">technologies maîtrisées</span>
                </div>
                <div className="homeBasItem">
                    <span className="homeBasChiffre">+4</span>
                    <span className="homeBasText">clients satisfaits</span>
                </div>
            </div>
    )
}
export default Skills;
*/