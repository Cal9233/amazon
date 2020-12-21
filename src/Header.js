import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <img className="header_logo" 
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
         alt="amazon logo"/>
      <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon"/>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option1">
          Hello
          </span>
          <span className="header_option2">
            Sign In
          </span>
        </div>
        <div className="header_option">
        <span className="header_option1">
          Returns
          </span>
          <span className="header_option2">
            Orders
          </span>
        </div>
        <div className="header_option">
        <span className="header_option1">
          Your
          </span>
          <span className="header_option2">
           Prime
          </span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_option2 
          header_basketCount">0</span>
        </div>
      </div>

    </div>
  
  )
}

export default Header
