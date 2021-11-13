import React from 'react';
import about from '../../../Images/About/about.jpg';


import './About.css'

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row mt-5 mb-5">
                    
                    <div className="col-12 col-lg-6 about-div">
                        <h5 className='text-center fw-bold'><span className='text-warning '>Get To Know </span> Us</h5>
                        <h3 className='text-primary fw-bold' >PREMIER STORE
                       FOR WRIST WATCHES</h3>
                        <p className="mt-5">
                        We do our part by purchasing luxury watches directly from all around the world to make sure we are providing you the lowest cost possible, but still with the best service quality for all of our customers. We guarantee that all of our watches for sale online are authentic. Every watch is guaranteed to be from one of our 100% authorized dealers or wholesalers. Each brand new watch comes with our in-house warranty.</p>
                        

                    </div>
                    <div className="col-12 col-lg-6 mb-3  ">
                       
                        <img src={about}  className='d-block about-img2 img-fluid' alt="" srcset="" />
                       
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;