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
            image="data:image/jpeg;base64,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"
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
