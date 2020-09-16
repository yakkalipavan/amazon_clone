import React from 'react'
import  './Product.css';

function Product({id,title,image,price,rating}) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="prodcut__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                Array(rating)
                .fill()
                .map(()=>(
                    <p>star</p>
                ))
                }
            </div>
            <img 
                src={image} 
                alt=""
            />
            <button>Add to Backet</button>
        </div>
    )
}

export default Product
