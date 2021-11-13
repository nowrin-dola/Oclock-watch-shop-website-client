import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const AllWatch = ({allWatch}) => {
    const {_id,name,picture,price,description} = allWatch;

    return (
        <div>
            <div className="col">
                <div className="card card-style text-center">
                    <img src={picture}  className="card-img-top img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-primary">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">price: {price}</p>


                        <Link to={`/watchDetails/${_id}`}>
                            <Button className='btn btn-warning fw-bold'>Buy Now</Button>
                        </Link>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllWatch;