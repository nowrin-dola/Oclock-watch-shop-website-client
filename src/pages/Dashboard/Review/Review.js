import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const{user} = useAuth();
    const {
        register,
        handleSubmit,
        reset
       
      } = useForm();

      const onSubmit = (data) => {
        data.email = user?.email;
        fetch("https://fathomless-temple-68118.herokuapp.com/addReviews", {
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
        <div>
            <h1 className="mt-5 text-center text-danger">Review</h1>
            <div className="login-box w-75 m-auto mt-2">
        <div className="event-box border border d-flex justify-content-center align-items-center m-3">
          <div className="login-form ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2 w-100"
              />
              <br />
              
              <textarea className="p-4 m-2 w-100" {...register("comment")} 
              placeholder="Comments"
               />
               <input type="number"  className="p-2 m-2 w-100" {...register("rating")} placeholder="Input Rating" />
              <br />

              
             
        

              <input type="submit" value="Add" className="btn btn-danger mb-2 mx-5   w-50" />
            </form>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default Review;