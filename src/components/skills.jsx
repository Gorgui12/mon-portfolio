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