import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';
const NotFound = () => {
    return (
        <div>
            <div>
                <img className="w-25 mt-5" src={notFound} alt="" />
            </div>
            <br />
            <br />
            <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
        </div>
    );
};

export default NotFound;