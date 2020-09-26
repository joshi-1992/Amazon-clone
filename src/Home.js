import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321351"
            title="Purpal T-Shirt for Man."
            price={79.99}
            image="/bbc.png"
            rating={3}
          />

          <Product
            id="12321381"
            title="The Lean Startup: Successful Businesses Paperback"
            price={49.99}
            image="/bb2.png"
            rating={4}
          />

          <Product
            id="12321391"
            title="AeroCool - Be Cool. Save Money, Sit Better."
            price={139.99}
            image="/aero1.jpg"
            rating={5}
          />
          <Product
            id="12321311"
            title="2,400MG Max Ptency CBD Oil Tincture.."
            price={240.99}
            image="/bk4.png"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            id="12321321"
            title="Professional Audio Interfaces, Microphones and Plugins for Mac, Windows and IOS... "
            price={999.99}
            image="/bk5.png"
            rating={4}
          />

          <Product
            id="12321359"
            title="Consumer | D-Link - offers wifi range extenders that eliminate dead spots"
            price={125.99}
            image="/bk6.png"
            rating={2}
          />
          <Product
            id="12321341"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={345.99}
            image="x.png"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12321349"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1145.99}
            image="led.png"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
