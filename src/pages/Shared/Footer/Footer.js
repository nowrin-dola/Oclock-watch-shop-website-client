import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <div>
            <div className="footer-container">
                <div className="container footer1">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="left-container text-center">
                               
                                <h1 className='fw-bold text-warning mt-2'>OClock</h1>


                                

                                <div className="mt-5">
                                <h3 className=''>Contact Us</h3>
                                <h5>+1 7 986 45 677 345</h5>
                                <div>
                                        <p>
                                         wari rankin street
                                            <br /> Dhaka, Bangladesh
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="footer-menu-container text-center">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Watches</li>
                                    <li className="footer-menu">Explore</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu">Subscribe</li>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <div className="right-footer-container">
                                <h3 className='text-center m-3 text-warning'>Subscribe Us</h3>
                            <div class="container ">
                            <Form> 
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Daily Update" />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Subscribe
                            </Button>
                            </Form>
                              
                            </div>
                               

                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center footer2'>
                    <hr />
                    <h4>Follow Us on:</h4>
                    <div className="icons-container d-flex text-center justify-content-center">
                        <div className="icon">
                            <i class="fab fa-facebook-square"></i>
                        </div>
                        <div className="icon">
                            <i class="fab fa-instagram"></i>
                        </div>
                        <div className="icon">
                            <i class="fab fa-youtube"></i>
                        </div>

                    </div>
                    <small>Nowrin © . All rights reserved.</small>
                </div>

            </div>
        </div>

    </div>
    );
};

export default Footer;