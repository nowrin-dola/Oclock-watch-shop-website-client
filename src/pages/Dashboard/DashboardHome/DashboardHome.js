import React from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div className='text-center m-5'>
            <h3 className="mb-3 text-primary">If You Want to purchase watch please go to Home Page.</h3>
                <Link to='/home'><button className='btn btn-warning'>Go Home</button></Link>
            </div>
    );
};

export default DashboardHome;