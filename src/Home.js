import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img
            className="home_image"
             src="/banner_img.jpg" alt=""
            />

                <div className="home_row">
                     <Product
                     id="12321351"
                     title="The lean startup"
                     price={29.99}
                     image="/book1.jpg"
                     rating={3} 
                     />

                     <Product 
                     id="12321381"
                     title="Book of year"
                     price={19.99}
                     image="/book2.jpg"
                     rating={4}
                     />

                     <Product 
                     id="12321391"
                     title="Next Goal"
                     price={39.99}
                     image="/book3.jpg"
                     rating={5}
                     />
                     <Product 
                     id="12321311"
                     title="Look at this workbook"
                     price={15.99}
                     image="/book4.jpg"
                     rating={3}
                     />
                </div>

                <div className="home_row">
                <Product 
                id="12321321"
                title="Holy book"
                price={9.99}
                image="/book5.jpg"
                rating={4}
                />

                <Product 
                id="12321359"
                title="special gift"
                price={25.99}
                image="/book1.jpg"
                rating={2}
                />
                <Product 
                id="12321341"
                title="gift poket"
                price={45.99}
                image="/book2.jpg"
                rating={4}
                />
                </div>

                <div className="home_row">
                <Product 
                id="12321349"
                title="Feature product"
                price={145.99}
                image="/book6.png"
                rating={5}
                />
            </div>
        </div>
        </div>
    );
}

export default Home;
