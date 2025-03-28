 import React from "react";
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