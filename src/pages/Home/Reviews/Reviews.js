import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';


const Reviews = () => {
    
    
    const [reviews,setReviews] = useState([]);
   
    useEffect(()=>{
        fetch(`https://fathomless-temple-68118.herokuapp.com/allReviews`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    console.log(reviews);

    
    return (
        <div>
             <h3 className='fw-bold text-center text-primary mt-3'>All Reviews</h3>

<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-3'>
            

            {
                reviews.map(review=><SingleReview
                    // key= {Review._id}
                    review={review}></SingleReview>
                   
               
                        
                )
            }
            </div>
            
        
      </div>
        
    );
};

export default Reviews;