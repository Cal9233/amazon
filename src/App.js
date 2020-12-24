import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51I1ekaEnsgwyUhRHLErl9Q7GlI6f3VhVYhuXHLmQrw0EAbDPQlQYi95YrPaWyhQ5bBqkmHSykjbvxuY56ZcnFMIE00sdLriIAA'
);

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
            <Route path='/payment'>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
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
