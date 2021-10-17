import React from 'react';
import './SingleExpert.css';

const SingleExpert = ({singleExpert}) => {
    const {id,name,description,img} = singleExpert;
    return (
        <div className="single-expert m-3">
          <img className="w-100" src={img} alt="" />
          <h3>{name}</h3>
          <h5 className="pb-3">{description}</h5>
        </div>
    );
};

export default SingleExpert;