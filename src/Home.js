import React from 'react'
import Product from './Product';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home_image" />
      <div className="home_row">
            <Product 
            id="123456" 
            title='The lean start up' 
            price={29.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
            rating={5} 
            />
            <Product 
            id="1287626" 
            title='Stylish Kitchen Mixer' 
            price={239.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
            />
      </div>
      <div className="home_row">
            <Product 
            id="7654366" 
            title='Samsung Watch' 
            price={199.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
            />
            <Product 
            id="2347654" 
            title='Amazon Echo' 
            price={98.99} 
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg"
            rating={5}
            />
            <Product 
            id="2546873" 
            title='New Apple iPad Pro' 
            price={598.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX386_.jpg"
            rating={4}
            />
        </div>
          <div className="home_row">
            <Product 
            id="123456" 
            title='Samsung Gaming Moniter' 
            price={1094.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
         />
          </div>
        </div>
    </div>
  )
}

export default Home
