import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import  axios from "axios";
import ProductDetails from './ProductDetails';
import "./ProductsComponent.css";
import Loader from '../../Helpers/Loader/Loader';

import DataFetchHook from '../../Hooks/DataFetchHook.js/DataFetchHook';

const ProductsComponent = () => {
   
    const params = useParams()
    const {data,isLoading} = DataFetchHook("https://dummyjson.com/products/category/",params.id)
    console.log(data)

    if(isLoading){
        return (
            <Loader/>
        )
    }

    return (
        <>
        <div className='products_fluid'>

        <div className='products_container min'>
            
            <h2 className='products_category'>{params.id}</h2>
            <div className='products_parent'>
            {data.products?.map((data,index)=>{
                return <ProductDetails  data={data} key={index}/>
            })}
            </div>
            </div>
        </div>
        </>

    );
};

export default ProductsComponent;