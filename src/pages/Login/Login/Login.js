
import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../Images/login/login.png';
import './Login.css';


const Login = () => {
    const[loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError,  signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange=e=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);

    }

    const  handleLoginSubmit=e=>{
        loginUser(loginData.email, loginData.password, location, history);
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
        <h3 className="mt-3 text-primary fw-bold">Login </h3> 
        <div>
        <Form onSubmit={handleLoginSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email"  onChange={handleOnChange} placeholder="Enter email" />
    
  </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"  onChange={handleOnChange} placeholder="Password" />
        <Form.Text className="text-muted">
        please provide your six digit password.
                </Form.Text>
        </Form.Group>
        <Button className="login-btn text-white fw-bold w-25 p-2"  type="submit">
            Login
        </Button>
        <br/>

             <NavLink   to='/register'>
             <Button className="w-75 mt-2 text-decoration-none" type="submit" variant="link">New User?Please Register</Button>

             </NavLink>
               {isLoading && <Spinner animation="border" />}
                        {user?.email && <Alert variant={"success"}>Login successfully!</Alert>}
                        {authError && <Alert  variant={"danger"}>{authError}</Alert>}
  </Form>


     

             <br /> <br />
                    <Button onClick={handleGoogleSignIn}  className='btn btn-danger google'>Google signIn</Button>
   
        </div>
       
     </div>
       
    <div className="col"><img style={{ width: '100%' }} src={login} alt="" /></div>
    
     </div>
 
</div>
    );
};

export default Login;