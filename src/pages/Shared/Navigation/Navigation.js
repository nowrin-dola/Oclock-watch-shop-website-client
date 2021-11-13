import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/About/logo.jpg';
import './Navigation.css';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className='color-nav' variant="dark" sticky="top">
            <Container>
                <Navbar.Brand className='text-warning' href="#home">
                <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />  OClock
                    
                    </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end ">
                    <Nav.Link as={HashLink} to="/home#home"><span className='text-white'>Home</span></Nav.Link>
                    <Nav.Link as={HashLink} to="/home#watches"><span className='text-white'>Watches</span></Nav.Link>
                    <Nav.Link as={HashLink} to="/home#about"><span className='text-white'>About</span></Nav.Link>
                    <Nav.Link as={Link} to="/allWatches"><span className='text-white'>Explore</span></Nav.Link>
                    {
           user?.email ?
           <>
             <Nav.Link as={Link} to="/dashboard"><span className='text-white'>DashBoard</span></Nav.Link>
           <Button onClick={logOut} variant="danger">Logout</Button>
           </>
          
           :
           <Nav.Link as={Link} to='/login'><span className='text-white'>Login</span></Nav.Link>
         }
                     <Navbar.Text>
                            Signed in as: <a href="#login"> {user?.displayName} </a>
                        </Navbar.Text>



</Navbar.Collapse>

            </Container>
        </Navbar>



    </>
    );
};

export default Navigation;