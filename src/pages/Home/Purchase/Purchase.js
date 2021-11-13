import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import './Purchase.css';
import swal from 'sweetalert';

const Purchase = () => {
    const {user} = useAuth();
    const {watchId} = useParams();
    const [watch, setWatch] = useState ([]);
    useEffect(()=>{
        fetch(`https://fathomless-temple-68118.herokuapp.com/allCollection/${watchId}`)
        .then(res=>res.json())
        .then(data=>{
            setWatch(data)
           
        })
    },[watchId])


    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      data.status= "pending";
      data.watchName = watch.name;
      data.watchPrice = watch.price;
      fetch('https://fathomless-temple-68118.herokuapp.com/orders', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(data)
    })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
               swal("Congratulations!", "Your Order has been placed!", "success")
                reset();
              


            }
        })
        
        
  }
    
    return (
        <div className='container'>
          <div className="row row-cols-1 row-cols-lg-2 m-2">     
            <div className="col-lg-5  col-sm-12 col-md-12 mt-5 ">
                <div className="card crd card-style mx-auto">
                    <img src={watch?.picture} className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{watch?.name}</h5>
                        <p className="card-text">{watch?.description}</p>
                        <p className="card-text">Price: {watch?.price}</p>


                    </div>
                </div>
            </div>
           
    
            <div className='add-service col-lg-7 col-sm-12 mt-5  col-md-12 '>
                <h3 className="text-danger text-center mb-3 ">Order Details</h3>
               <form onSubmit={handleSubmit(onSubmit)} >
               <input
                        className="p-2 m-2"
                        defaultValue={watchId}
                        {...register("watchId")}
                        required
                    />
                    <input
                        className="p-2 m-2"
                        defaultValue={user.displayName}
                        {...register("name")}
                        required
                    />
                     <input
                        className="p-2 m-2"
                        defaultValue={user.email}
                        {...register("email")}
                        required
                    />
                    <input type="number" {...register("age", { min: 18, max: 99 })}  placeholder="Age"/>
                    <textarea className="p-4" {...register("address")} placeholder="Address" />
                    <input type="number" {...register("phone")} placeholder=" Phone Number" />
                    
                    <input className="bg-danger text-white fw-bold p-2" type="submit" value="Place Order" />
                </form>
          </div>
       </div>

      </div>
    );
};

export default Purchase;