import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import AllWatches from './pages/Explore/AllWatches/AllWatches';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Purchase from './pages/Home/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation></Navigation>

        <Switch>
          <Route exact path='/'>
           <Home></Home>
           </Route>

          <Route exact path='/home'>
            <Home></Home>
            </Route>
            <Route exact path='/allWatches'>
            <AllWatches></AllWatches>
            </Route>
            <Route exact path='/login'>
            <Login></Login>
            </Route>
            <Route exact path='/register'>
            <Register></Register>
            </Route>

            <PrivateRoute path='/watchDetails/:watchId'>
              <Purchase></Purchase>

            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>

            </PrivateRoute>



          <Route path='*'>
             <NotFound></NotFound>
             </Route>
        </Switch>
        <Footer></Footer>
      
      
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
