import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div id="services">
            <h1 className="mt-5 text-primary fw-bold">Our Services</h1>
            <div className="services-container container ">
            
            {
               services.map(singleService=><SingleService
               key={singleService.id}
               singleService={singleService}></SingleService>)
            }
         </div>
        </div>
    );
};

export default Services;