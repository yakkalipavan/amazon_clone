import React from 'react';
import  './Home.css';
import Product from './product/Product';

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://www.w3schools.com/images/picture.jpg"
            alt="bluebackground"
            />
            
            <Product 
                title="Perfume PNG image image with transparent background"
                price={110}
                id="this is the id"
                rating={5}
                image="http://pngimg.com/uploads/perfume/perfume_PNG10323.png"
            />
        </div>
        
    )
}

export default Home
