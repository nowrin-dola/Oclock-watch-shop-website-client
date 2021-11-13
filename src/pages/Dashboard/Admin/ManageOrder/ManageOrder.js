import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import swal from 'sweetalert';

const ManageOrder = ({order}) => {

    const{_id} = order;
    const [update,setUpdate] = useState([]);
    const [control, setControl] = useState(false);
    console.log(update);



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
                      swal("Your orderis safe!");
                    }
                  });
               
             
            }
          });
        console.log(id);
      };

      const handleUpdate = id =>{
       

        order.status = "shipped";
             
            const url =`https://fathomless-temple-68118.herokuapp.com/orders/${_id}`;
        fetch(url,{
            method:"PUT",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
          setUpdate(data)

        })
        


        
        
    }

    return (
        <tr>
        <td>{order.watchName}</td>
        <td>{order.name}</td>
        <td>{order.email}</td>
        <td>{order.watchPrice}</td>
        <td>{order.status} </td>
  
        <td><div>
                      <Button type="button" 
                      className="btn btn-primary mb-1 bg-danger" onClick={()=>handleDelete(order._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                       Delete
                      </Button>
                      <br/>
                      <Button type="button" className="btn btn-primary" onClick={()=>handleUpdate(order._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                       Update Status
                      </Button>
                             
            </div></td>
      </tr>
    );
};

export default ManageOrder;