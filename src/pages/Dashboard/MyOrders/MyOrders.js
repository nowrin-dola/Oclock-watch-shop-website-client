import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    
    const [myOrders,setMyOrders] = useState([]);
    const [control, setControl] = useState(false);
    const email = user.email ;

    useEffect(()=>{
        fetch(`https://fathomless-temple-68118.herokuapp.com/orders/${email}`)
        .then((res) => res.json())
        .then((data) =>setMyOrders(data)
        );
      
    }, [email]);
    


    const handleDelete = (id) => {
        fetch(`https://fathomless-temple-68118.herokuapp.com/deleteOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) { 
                setControl(!control);
                swal({
                    title: "Are you sure?",
                    text: "Once cancel, you will not be able to place your order!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your order has been canceled!", {
                        icon: "success",
                        
                      });
                       window.location.reload(true);
                    } else {
                      swal("Your order is safe!");
                    }
                  });
               
             
            }
          });
        console.log(id);
      };



    return (
        <div>
            <h3>my order  {myOrders.length}</h3>
            <div className="table-responsive-sm">
            <Table striped bordered hover className="">
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
          myOrders.map(order=>
            <tr>
      <td>{order.watchName}</td>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.watchPrice}</td>
      <td>{order.status}</td>
      <td><div>
      <Button type="button" class="btn btn-primary" onClick={()=>handleDelete(order._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Delete
                            </Button>
          </div></td>
    </tr>
            
            
            
            
            
            )
      }
    
    
  </tbody>
</Table>
            </div>
            
        </div>
    );
};

export default MyOrders;