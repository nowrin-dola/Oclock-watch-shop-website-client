import React, { useEffect, useState } from 'react';
import SingleWatch from '../SingleWatch/SingleWatch';

const Watches = () => {
    const [watches, setWatches] = useState([]);

    useEffect(()=>{
        fetch('https://fathomless-temple-68118.herokuapp.com/collection')
        .then(res=>res.json())
        .then(data=>{
            setWatches(data)
        })
    },[])
    return (
        <div id='watches'>

        
        <h3 className='fw-bold text-center text-primary mt-3'>Best Seller</h3>
        


        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-3'>



            {
                watches.map((watch => <SingleWatch
                    key={watch._id}
                    watch={watch}
                ></SingleWatch>))

            }
        </div>




    </div>
    );
};

export default Watches;