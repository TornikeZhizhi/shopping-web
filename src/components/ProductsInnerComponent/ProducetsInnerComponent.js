import React, { useContext, useEffect, useState } from "react";
import star from "../../assets/imgs/star.svg";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import "./ProductsInner.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FavouriteTheme } from "../../Contexts/FavouritesContext";
import { CartTheme } from "../../Contexts/CartContext";
import Loader from "../../Helpers/Loader/Loader";
import DataFetchHook from "../../Hooks/DataFetchHook.js/DataFetchHook";



const ProducetsInnerComponent = () => {

    const params = useParams()
    const ctx = useContext(FavouriteTheme);
    const ctxCart = useContext(CartTheme);
    const [heartAnime, setHeartAnime] = useState(false)
    const [sliderImages , setSliderImages]= useState([])



    const {data, isLoading} = DataFetchHook("https://dummyjson.com/products/",params.id);

    useEffect(()=>{
 
            let newImages = []
                data.images?.map((item)=>{
                    newImages.push({original:item,thumbnail:item})
                })
              setSliderImages(newImages);
       
    },[data])

    

    const addFvouriteHandler = ()=>{
        setHeartAnime(!heartAnime);
        ctx.addFavToLocalStorage(data)

    }

    const addCart = ()=>{
        ctxCart.addCartHandler(data)
    }
    

    useEffect(()=>{
        let favArray = JSON.parse(localStorage.getItem("favouriteData"));
        if(favArray?.some(elem => elem.title == data.title)){
            setHeartAnime(true)
        }else {
            setHeartAnime(false)

        }
    },[data,JSON.parse(localStorage.getItem("favouriteData"))])

    return (

        <>
           {isLoading && 
            <Loader/>
            }
         
        {!isLoading && 
            <div className="p_inner_wrapper min">

         
            <div className="image_gallery">
                <ImageGallery items={sliderImages} />

            </div>
            
            <div className="p_inner_body">
                    <div className="p_inner_title">{data.title}</div>
                    <div className="p_inner_rating">
                         <span>
                            {data.rating}
                        </span> 
                          <img src={star} alt=""/>
                    </div>
                    <div className="p_inner_price">{data.price}$</div>
                    <div className="p_inner_description">{data.description}</div>


                    <div className="p_inner_checkout_button">
                      <button className="fav_button" onClick={addFvouriteHandler}>
                        <span>Favourite</span>
                        <div  className={`m-favorite ` + (heartAnime ? " -active" : " ")}>
                            <div className="m-favorite__icon"></div>

                            <span className="m-favorite__smallIcon"></span>
                            <span className="m-favorite__smallIcon"></span>
                            <span className="m-favorite__smallIcon"></span>
                      </div>
                        </button> 
                       <button className="card_button" onClick={addCart}>Add TO Cart</button>
                    </div>
                </div>
        </div>
        }
        
        </>
    );
};

export default ProducetsInnerComponent;