import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({singleService}) => {
    const {id,name,price,description,img} = singleService;
    return (
        <div className="singleService-container m-3 pb-4">
            <img className="w-100" src={img} alt="" />
            <h3 className="p-3">{name}</h3>
            <h5>Price: ${price}</h5>
            <p className="p-3">{description}</p>
           <Link to={`/booking/${id}`}> <button className="btn-warning p-2 ">Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default SingleService;