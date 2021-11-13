import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/banner/banner1.jpg';
import banner2 from '../../../Images/banner/banner2.jpg';
import banner3 from '../../../Images/banner/banner3.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div>
         <Carousel>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block img-fluid m-0"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='fw-bold text-dark'>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block img-fluid m-0"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='fw-bold text-dark'>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='banner'>
                    <img
                        className="d-block img-fluid m-0"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='fw-bold text-dark'>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;