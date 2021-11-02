import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import MyOrder from './Components/MyOrder/MyOrder';
import AddPlace from './Components/AddPlace/AddPlace';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/myOrders'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path='/addPlace'>
              <AddPlace></AddPlace>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
