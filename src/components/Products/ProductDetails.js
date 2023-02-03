import React, { useState } from 'react';

import "./ProductsComponent.css";
import star from "../../assets/imgs/star.svg";
const ProductDetails = (props) => {
    console.log(props.data)


    const [ heartAnime, setHeartAnime] = useState(false)

    return (
    <div className='products_wrapper'>
        <div className='products_img'>
            <img src={props.data.thumbnail} alt=''/>
            <div className='product_rating'>
                <span>
                    {props.data.rating} 
                </span>
                <img src={star} alt=""/>
            </div>
            <div className='product_favourite'>
            <div onClick={()=>{
                setHeartAnime(!heartAnime)
            }} class={`m-favorite ` + (heartAnime ? " -active" : " ")}>
                <div class="m-favorite__icon"></div>

                <span class="m-favorite__smallIcon"></span>
                <span class="m-favorite__smallIcon"></span>
                <span class="m-favorite__smallIcon"></span>
            </div>
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