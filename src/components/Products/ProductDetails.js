import React from 'react';

import "./ProductsComponent.css";

const ProductDetails = (props) => {
    console.log(props.data)

    return (
    <div className='products_wrapper'>
        <div className='products_img'>
            <img src={props.data.thumbnail} alt=''/>
            <div className='product_rating'>{props.data.rating}</div>
            <div className='product_favourite'>

            </div>
        </div>
        <div className='product_body'>
            <div className='product_title'>{props.data.title}</div>
            <div className='product_text'><p>{props.data.description.slice(0,50)}...</p></div>
            <div className='product_price'>{props.data.price} $</div>
        </div>
    </div>
    );
};

export default ProductDetails;