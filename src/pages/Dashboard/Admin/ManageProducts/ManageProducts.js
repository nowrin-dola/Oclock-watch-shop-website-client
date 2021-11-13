import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageProducts = () => {
    const [allWatches, setAllWatches] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch("https://fathomless-temple-68118.herokuapp.com/allCollection")
          .then((res) => res.json())
          .then((data) => setAllWatches(data));
      }, []);


      const handleDelete = (id) => {
        fetch(`https://fathomless-temple-68118.herokuapp.com/deleteProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) { 
                setControl(!control);
                swal({
                    title: "Are you sure?",
                    text: "Once delete, you will lost product permanently!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your product has been deleted!", {
                        icon: "success",
                        
                      });
                       window.location.reload(true);
                    } else {
                      swal("Your product  is safe!");
                    }
                  });
               
             
            }
          });
        console.log(id);
      };


    return (
    <div>
         <h3 className="text-center text-primary fw-bold m-3">All Products  {allWatches.length}</h3>
        <div className="table-responsive-sm">
            <Table striped bordered hover className="">
                <thead>
                <tr>
                <th>Watch ID</th>
                <th>Brand Name</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    allWatches.map(pd=>
                        <tr>
                <td>{pd._id}</td>
                <td>{pd.name}</td>
               <td>{pd.price}</td>
                <td><div>
                <Button type="button" class="btn btn-primary" onClick={()=>handleDelete(pd._id)} data-bs-toggle="modal" data-bs-target="#exampleModal">
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

export default ManageProducts;