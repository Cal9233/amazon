import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'
import './Header.css';


const Header = () => {

  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to ='/'>
      <img className="header_logo" 
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
         alt="amazon logo"/>
      </Link>
       
      <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header_option">
          <span className="header_option1">
          Hello
          </span>
          <span className="header_option2">
            {user ? 'Sign Out' : 'Sign In'}
          </span>
        </div>
        </Link>

      
          <Link to='/orders'>
        <div className="header_option">
        <span className="header_option1">
          Returns
          </span>
          <span className="header_option2">
            & Orders
          </span>
        </div>
        </Link>

        <div className="header_option">
        <span className="header_option1">
          Your
          </span>
          <span className="header_option2">
           Prime
          </span>
        </div>
        <Link to='/checkout'>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_option2 
          header_basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>

    </div>
  
  )
}

export default Header
