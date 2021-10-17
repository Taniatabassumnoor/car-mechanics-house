
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Booking from './Components/Booking/Booking/Booking';
import Login from './Components/Shared/Login/Login/Login';
import Header from './Components/Shared/Header/Header';
import initializeAuthentication from './Components/Shared/Login/Firebase/firebase.initialize';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
initializeAuthentication();
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>          
          <Route path="/login"><Login></Login></Route>          
          <PrivateRoute path="/booking/:servicesId"><Booking></Booking></PrivateRoute>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
