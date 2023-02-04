import React, { useContext, useEffect, useState } from 'react';

import "./ProductsComponent.css";
import star from "../../assets/imgs/star.svg";
import { FavouriteTheme } from '../../Contexts/FavouritesContext';



const ProductDetails = (props) => {
   

    const ctx = useContext(FavouriteTheme)
    const [ heartAnime, setHeartAnime] = useState(false);

    

    const addFvouriteHandler = ()=>{
        setHeartAnime(!heartAnime);
        ctx.addFavToLocalStorage(props.data)

    }

    useEffect(()=>{
        // add hearAnime on load
        let favArray = JSON.parse(localStorage.getItem("favouriteData"));
        if(favArray?.some(elem => elem.title == props.data.title)){
            setHeartAnime(true)
        }
    },[])

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