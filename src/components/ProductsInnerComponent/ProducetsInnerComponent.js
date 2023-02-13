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




const ProducetsInnerComponent = () => {

    const params = useParams()
    const ctx = useContext(FavouriteTheme);
    const ctxCart = useContext(CartTheme);
    const [heartAnime, setHeartAnime] = useState(false)
    const [sliderImages , setSliderImages]= useState([])
    const [innerData, setInnerData] = useState([])

    const [isLoading, setIsLoading] = useState(true) 

    useEffect(()=>{
        setIsLoading(true)
        axios.get(`https://dummyjson.com/products/${params.id}`)
        .then(response => {
            let newImages = []
            response.data.images.map((item)=>{
                newImages.push({original:item,thumbnail:item})
            })
            setSliderImages(newImages);
            setInnerData(response.data)

            setIsLoading(false)
        })

        window.scrollTo(0, 0)
         
  
    },[params.id])





    const addFvouriteHandler = ()=>{
        setHeartAnime(!heartAnime);
        ctx.addFavToLocalStorage(innerData)

    }

    const addCart = ()=>{
        ctxCart.addCartHandler(innerData)
    }
    

    useEffect(()=>{
        let favArray = JSON.parse(localStorage.getItem("favouriteData"));
        if(favArray?.some(elem => elem.title == innerData.title)){
            setHeartAnime(true)
        }else {
            setHeartAnime(false)

        }
    },[innerData,JSON.parse(localStorage.getItem("favouriteData"))])

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
                    <div className="p_inner_title">{innerData.title}</div>
                    <div className="p_inner_rating">
                         <span>
                            {innerData.rating}
                        </span> 
                          <img src={star} alt=""/>
                    </div>
                    <div className="p_inner_price">{innerData.price}$</div>
                    <div className="p_inner_description">{innerData.description}</div>


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