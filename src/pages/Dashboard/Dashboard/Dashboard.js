import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProducts from '../Admin/AddProducts/AddProducts';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

import "./Dashboard.css"


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin, logOut} =  useAuth();
    return (
        
        <div className="dashboard-container container">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-12">
              <div className="dashboard">
                <h5>Dashboard</h5>
                {!admin && <>

                  <Nav.Link as={Link} to={`${url}`}><span className='text-white'>Home</span></Nav.Link>
                  <Nav.Link as={Link} to={`${url}/pay`}><span className='text-white'>Pay</span></Nav.Link>
                  <Nav.Link as={Link} to={`${url}/myOrders`}><span className='text-white'>My Orders</span></Nav.Link>
                  <Nav.Link as={Link} to={`${url}/review`}><span className='text-white'>Review</span></Nav.Link>
                  
                </>}
                <div className="admin-dashboard">
                
                {admin && <>

                  <Nav.Link as={Link} to={`${url}`}><span className='text-white'>Home</span></Nav.Link>
                  <Nav.Link as={Link} to={`${url}/makeAdmin`}><span className='text-white'>Make Admin</span></Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageAllOrders`}><span className='text-white'>Manage All Orders</span></Nav.Link>
                  <Nav.Link as={Link} to={`${url}/manageProducts`}><span className='text-white'>Manage Products</span></Nav.Link>
                  <Nav.Link as={Link} to={`${url}/addProduct`}><span className='text-white'>Add Product</span></Nav.Link>
                  
                </>}

                <Button className="mt-5" onClick={logOut} variant="danger">Logout</Button>




                 

                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9 col-12">
              <Switch>
                <Route exact path={path}>
                  <DashboardHome></DashboardHome>
                
                </Route>
                <Route  path={`${path}/pay`}>
                <Pay></Pay>
                </Route>

                <Route  path={`${path}/myOrders`}>
                <MyOrders></MyOrders>
                </Route>

                <Route  path={`${path}/review`}>
                <Review></Review>
                </Route>
                <AdminRoute  path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute  path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute  path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute  path={`${path}/addProduct`}>
                  <AddProducts></AddProducts>
                </AdminRoute>
                
               
             
              
              </Switch>
            </div>
          </div>
        </div>
      
    );
};

export default Dashboard;