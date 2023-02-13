import React, { useState, useEffect } from 'react';
import "./ProductsComponent.css";

import axios from 'axios';
import ProductDetails from './ProductDetails';

import DataFetchHook from '../../Hooks/DataFetchHook.js/DataFetchHook';
import Loader from '../../Helpers/Loader/Loader';


const AllProductsComponent = () => {


    const { data, isLoading} = DataFetchHook(`https://dummyjson.com/product`,"")

    

    return (
    
    <>
        {isLoading 
        ? 
        <Loader/> 
        : 
        <div className='products_container'>
                <h2 className='products_category'>All Products</h2>

            <div className="products_parent min">
                {data.products?.map((data,index)=>{
                    return <ProductDetails  data={data} key={index}/>
                })}
            </div>
        </div> }
    </>
    );
};

export default AllProductsComponent;