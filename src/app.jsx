import React, {useRef} from 'react';
import './app.css'
import Header from "./components/header";
import Home from "./components/home";
import Skills from './components/skills';
//import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from './components/contact';
import Footer from './components/footer';

function App(){
//reference pour chaque section
const homeRef = useRef(null);
const skillsRef = useRef(null);
const servicesRef = useRef(null);
const portfolioRef = useRef(null);
const contactRef = useRef(null);

//fonction pour defiler vers une section
const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
};
    return(
        <>
            <div className='appContainer'>
                    <header className="header"><Header scrollToSection={scrollToSection} homeRef={homeRef} skillsRef={skillsRef} servicesRef={servicesRef} portfolioRef={portfolioRef} contactRef={contactRef} /></header>
                    <section ref = {homeRef}><Home/></section>
                    <section ref = {skillsRef}><Skills/></section>
                    <section ref = {servicesRef}><Services/></section>
                    <section ref = {portfolioRef}><Portfolio/></section>
                    <section ref = {contactRef}><Contact/></section>
                    <section ><Footer/></section>
            </div>
        </>
    )
}
export default App;
