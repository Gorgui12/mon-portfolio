import React, {useEffect, useState, useRef} from 'react';


const ServicesSection = ({children}) => {
const sectionRef = useRef(null);
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
    const observer = new IntersectionObserver(
        ([Entry]) => {
            if(Entry.isIntersecting){
                setIsVisible(true);
                observer.unobserve(Entry.target)
    
            }
        },
        {
          threshold: 0.1, // Seuil : 10% de la section doit être visible pour déclencher
        }
    );
        //observe
    if(sectionRef.current){
            observer.observe(sectionRef.current)
        }
      
    // ne plus observer
    return () => {
    if(sectionRef.current) {
        observer.unobserve(sectionRef.current)
    }
    }
}, [])
   
 return(
        <div
        ref={sectionRef}
        className={`flex flex-col items-center justify-between p-8 trasition-all duration-1000 ease-ou
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
        >
            {children}
        </div>
    )
}
export default ServicesSection;
