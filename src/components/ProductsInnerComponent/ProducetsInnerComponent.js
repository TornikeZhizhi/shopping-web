import React, { useEffect, useState } from "react";
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import "./ProductsInner.css";
import axios from "axios";
import { useParams } from "react-router-dom";




const ProducetsInnerComponent = () => {

    const params = useParams()

    const [sliderImages , setSliderImages]= useState([])

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.id}`)
        .then(response => {
            let newImages = []
            response.data.images.map((item)=>{
                newImages.push({original:item,thumbnail:item})
            })
            setSliderImages(newImages)
        })
  
    },[])

    return (
        <div className="p_inner_wrapper">
            <div className="image_gallery">
                <ImageGallery items={sliderImages} />
            </div>
        </div>
    );
};

export default ProducetsInnerComponent;