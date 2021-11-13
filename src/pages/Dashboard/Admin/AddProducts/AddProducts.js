import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const AddProducts = () => {
    const{user} = useAuth();
    const {
        register,
        handleSubmit,
        reset
       
      } = useForm();

      const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://fathomless-temple-68118.herokuapp.com/addWatches", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
              alert('Review Added successfully');
                reset();
                console.log(result);
            
            });
        console.log(data);
      };
    return (
        <div className="text-center">
        <h1 className="mt-5 text-center text-danger">Add Watches</h1>
        <div className="login-box w-75 mx-auto mt-5">
    <div className="event-box border border d-flex justify-content-center align-items-center m-3">
      <div className="login-form ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="Name"
            className="p-2 m-2 w-100"
          />
          <br />
          
          <textarea className="p-4 m-2 w-100" {...register("description")} 
          placeholder="description"
           />
          <br />
          <input type="number" className="p-2 m-2 w-100" {...register("price")} placeholder=" price" />
          <br/>

          <input
            {...register("picture", { required: true })}
            placeholder="Image Link"
            className="p-2 m-2 w-100"
            
          />
          <br />
          
    
          <input type="submit" value="Add"  className="btn btn-danger mx-5 mb-2 w-50" />
        </form>
      </div>
    </div>
  </div>
        
    </div>
    );
};

export default AddProducts;