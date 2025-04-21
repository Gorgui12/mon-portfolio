import React, {useEffect, useState, useRef, Children} from 'react';
import { useFetcher } from 'react-router-dom';

  
 const ContactSection = ({children}) =>{
    const sectionRef = useRef(null);
    const[isVisible, setIsVisible] = useState(false)

     useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },{
                threshold: 0.1,
            }
            )
            // observer
            if(sectionRef.current){
                observer.observe(sectionRef.current)
            }
            // ne plus obserevr
            return() => {
                if(sectionRef.current){
                    observer.unobserve(sectionRef.current)
                }
            }
        
     },[])
    return(
        <div
        ref={sectionRef} className={`bg-[#1b445c] w-full min-h-[80vh] flex flex-col items-center justify-around p-8 transition ease-in-out duration-1000 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {children}
        </div>
    )
 }
 export default ContactSection;