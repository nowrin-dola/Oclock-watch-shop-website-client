import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink,useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import login from '../../../Images/login/login.png';


const Register = () => {
    const[loginData, setLoginData] = useState({});
    const {user,isLoading,authError,registerUser, signInWithGoogle} = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleOnBlur=e=>{


        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
      

    }


    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
      
        console.log(loginData)
    }

    const handleGoogleSignIn=()=>{

        signInWithGoogle(location,history)
    }
    

    
    return (
        <div className="container">
    <div className="row d-flex align-items-start m-5">
    <div className="col ">
        <h3 className="mt-3 text-primary fw-bold">Register </h3> 
    <div>
        <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Name</Form.Label>
                 <Form.Control 
                 type="text" 
                 name="name" 
                 onBlur={handleOnBlur}
                 placeholder="Your Name" />
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control 
                 type="email" 
                 name="email"
                 onBlur={handleOnBlur}
                 placeholder="Your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control
                  type="password" 
                  name="password" 
                  onBlur={handleOnBlur}
                  placeholder="Your Password" />
                 <Form.Text className="text-muted">
                 please provide your six digit password.
                 </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Retype Password</Form.Label>
                 <Form.Control 
                 type="password"
                 name="password2"
                 onBlur={handleOnBlur}
                 placeholder="re-type your Password" />
                 
            </Form.Group>
            <Button className="login-btn text-white fw-bold w-25 p-2"  type="submit">
            Register
           </Button>
           <br/>

           <NavLink   to='/login'>
             <Button className="w-75 mt-2 text-decoration-none" type="submit" variant="link">Already register?Please Login</Button>

        </NavLink>

           {isLoading && <Spinner animation="border" />}
                        {user?.email && <Alert variant={"success"}>Registration successful!</Alert>}
                        {authError && <Alert  variant={"danger"}>{authError}</Alert>}
       </Form>


        

        <br /> <br />
                    <Button onClick={handleGoogleSignIn}  className='btn btn-danger google'>Google signIn</Button>
   
    </div>
       
 </div>
       
     <div className="col"><img style={{ width: '100%', marginTop: '100px' }} src={login} alt="" /></div>
    
     </div>
 
 </div>
        
    );
};

export default Register;