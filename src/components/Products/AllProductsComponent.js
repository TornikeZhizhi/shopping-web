import React, { useState, useEffect } from 'react';
import "./ProductsComponent.css";

import axios from 'axios';
import ProductDetails from './ProductDetails';



const AllProductsComponent = () => {


    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        axios.get(`https://dummyjson.com/products`)
        .then((response)=>{
            if(response.status == 200){
                setIsLoading(false)
                return setData(response.data)
            }
        }).catch((error)=>{
            setError(error.message)
        })
        window.scrollTo(0, 0)
          
    },[])

    return (
     <div className='products_container'>
            <h2 className='products_category'>All Products</h2>

            {error && <p className='error'>{error}</p>}
        <div className="products_parent min">
            {data.products?.map((data,index)=>{
                return <ProductDetails  data={data} key={index}/>
            })}
        </div>
    </div>
    );
};

export default AllProductsComponent;