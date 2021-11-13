
import React, { useState } from 'react';
import {  Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const[email,setEmail]= useState('');
   


    const handleOnBlur=e=>{
        setEmail(e.target.value);

    }

    const handleAdminSubmit=e=>{
        const user = {email}
        fetch('https://fathomless-temple-68118.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                
                'content-type' :'application/json'
            },
            body:JSON.stringify(user)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
            alert('added admin successFully')
            setEmail('')}
        
        })

        e.preventDefault();
    }
    return (
        <div className="m-5 text-center text-danger fw-bold">
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <input
             
            label="email"
            type='email' 
            onBlur={handleOnBlur}
            variant="standard" />
            <Button type="submit" className="m-2"  variant="success">Make Admin</Button>

            </form>
        
            
        </div>
    );
};

export default MakeAdmin;