import React from 'react';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';

import './SingleReview.css';

const SingleReview = ({review}) => {
    const{user} = useAuth();
    const email=user.email;
    const{name,comment,rating} = review;

    return (
        <div>
        <div className="col">
            <div className="card review-card">
                <div className="card-body">
                    
                    <h3 className="card-text">Name: {name}</h3>
                    <h6 className="card-text">Email: {email}</h6>
                    <p className="card-text">{comment}</p>
                    <Rating
                    
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly>
                        

                    </Rating>
                   
                  
                    

                   
                </div>
          </div>
        </div>
                                
    </div>
    );
};

export default SingleReview;