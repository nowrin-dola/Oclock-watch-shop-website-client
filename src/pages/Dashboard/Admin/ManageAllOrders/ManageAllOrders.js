import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';






const ManageAllOrders = () => {
    
    const [allOrders,setAllOrders] = useState([]);
    
   





    useEffect(()=>{
        fetch(`https://fathomless-temple-68118.herokuapp.com/orders`)
        .then((res) => res.json())
        .then((data) =>setAllOrders(data)
        );
      
    }, []);


      

    return (
        <div>
            <h3 className="text-center text-primary fw-bold m-3">All order  {allOrders.length}</h3>
            <div className="table-responsive-sm">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Watch Name</th>
      <th>name</th>
      <th>email</th>
      <th>price</th>
      <th>status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          allOrders.map(order=><ManageOrder
          order= {order}
          >

          </ManageOrder>
            
    
            
            
            
            
            
            )
      }
    
    
  </tbody>
</Table>
            </div>
            
        </div>
        
    );
};

export default ManageAllOrders;