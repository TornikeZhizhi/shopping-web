import React, { useState } from 'react';

import "./ProductsComponent.css";
import star from "../../assets/imgs/star.svg";



const ProductDetails = (props) => {
   
    const [ heartAnime, setHeartAnime] = useState(false);

    // const [favArray, setFavArray ] = useState(localStorage.getItem("favouriteData"))

  
    
    const addFvouriteHandler = ()=>{
        setHeartAnime(!heartAnime);


        let favArray = JSON.parse(localStorage.getItem("favouriteData"));


        if (favArray == null){
            localStorage.setItem('favouriteData', JSON.stringify([props.data]));
        }else {
            if(!checkArrayIsNew(favArray,props.data.id)){
                favArray.push(props.data)
                localStorage.setItem('favouriteData', JSON.stringify(favArray));
            }else {
                const delData =favArray.filter((item)=>{
                    return item.id !== props.data.id;
                })
                localStorage.setItem('favouriteData', JSON.stringify(delData));

            }
        }
    }

    const checkArrayIsNew = (favArray, id)=>{
        return favArray.some(elem => elem.id == id)
    }

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
            <div className='product_favourite' onClick={addFvouriteHandler}>
            <div  className={`m-favorite ` + (heartAnime ? " -active" : " ")}>
                <div className="m-favorite__icon"></div>

                <span className="m-favorite__smallIcon"></span>
                <span className="m-favorite__smallIcon"></span>
                <span className="m-favorite__smallIcon"></span>
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