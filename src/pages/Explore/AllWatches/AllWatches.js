import React, { useEffect, useState } from 'react';
import AllWatch from '../AllWatch/AllWatch';

const AllWatches = () => {
    const [allWatches, setAllWatches] = useState([]);
    useEffect(() => {
        fetch("https://fathomless-temple-68118.herokuapp.com/allCollection")
          .then((res) => res.json())
          .then((data) => setAllWatches(data));
      }, []);
    return (
        <div>

        
        <h3 className='fw-bold text-center text-primary mt-3'>Our Watches</h3>
        


        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 m-3'>



            {
                allWatches.map((allWatch => <AllWatch
                    key={allWatch._id}
                    allWatch={allWatch}
                ></AllWatch>))

            }
        </div>




    </div>
    
     
    );
};

export default AllWatches;