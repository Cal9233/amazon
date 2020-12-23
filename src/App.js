import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app components load
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>', authUser);

      if (authUser) {
        // The user just logged in // the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // The user is logged out 

        dispatch({
          type: 'SET_USER',
          user: null
        })
        
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
