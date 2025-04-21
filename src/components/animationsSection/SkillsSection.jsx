import React,{useEffect, useState, useRef} from 'react';



const SkillSectionAnimation = ({children}) =>{
  const sectionRef = useRef(null)

  const[isVisible, setIsVisible] = useState(false)

  useEffect(()=>{
    const observer = new IntersectionObserver(
       ([entry]) => {
        if(entry.isIntersecting){
            setIsVisible(true);
            observer.unobserve(entry.target)
        }
       },
       {
        threshold: 0.1,
       }
    )
    if(sectionRef.current){
        observer.observe(sectionRef.current)
    }
    return () => {
        if(sectionRef.current){
            observer.unobserve(sectionRef.current)
        }
    }
  },[])

    return(
      <div
      ref={sectionRef} className={`flex flex-wrap justify-between items-center gap-4 p-8 max-md:flex-col max-md:items-center trasition-all duration-1000 ease-in-out
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} `}
      >
      {children}
      </div>
    )
}
export default SkillSectionAnimation