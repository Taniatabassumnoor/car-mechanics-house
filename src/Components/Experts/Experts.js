import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleExpert from '../SingleExpert/SingleExpert';
import './Experts.css';

const Experts = () => {
    const [experts,setExperts] = useState([]);
    useEffect(()=>{
        fetch('experts.json')
        .then(res=>res.json())
        .then(data=>setExperts(data))
    },[])
    return (
        <div id="expert">
            <h1 className="text-primary fw-bold mt-5">Our Experts</h1>
           <div className="experts-container container ">
               {
                   experts.map(singleExpert=><SingleExpert
                   key={singleExpert.id}
                   singleExpert={singleExpert}></SingleExpert>)
               }
            </div> 
        </div>
    );
};

export default Experts;