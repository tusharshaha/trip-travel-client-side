import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';

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
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
