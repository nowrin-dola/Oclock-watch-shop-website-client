import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../Images/Page Not Found/page not found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className=' m-5'>
            <div className='error-pic d-block mx-auto d-flex justify-content-center'>
                <img src={error} alt="" className='img-fluid' srcset="" />
            </div>

            <div className='d-flex justify-content-center'>
                <Link to='/home'><button className='btn btn-warning'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;