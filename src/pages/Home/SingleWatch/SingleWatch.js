import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './SingleWatch.css'

const SingleWatch = ({watch}) => {
    const {_id,name,picture,price,description} = watch;
   
    return (
        <div>
            <div className="col">
                <div className="card card-style text-center">
                    <img src={picture}  className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary fw-bold">{name}</h5>
                        <p className="card-text">{description.split('').slice(0 ,250).toString().replace(/,/g,'')}</p>
                        <p className="card-text fw-bold">price:<span className="text-primary"> {price}
                        </span></p>


                        <Link to={`/watchDetails/${_id}`}>
                            <Button className='btn btn-warning fw-bold'>Buy Now</Button>
                           
                        </Link>
                        

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleWatch;