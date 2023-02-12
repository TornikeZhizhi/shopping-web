import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import  axios from "axios";
import ProductDetails from './ProductDetails';
import "./ProductsComponent.css";


const ProductsComponent = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    useEffect(()=>{
        setIsLoading(true)
        axios.get(`https://dummyjson.com/products/category/${params.id}`)
        .then((response)=>{
                console.log(response, "dd")
                 setIsLoading(false)
                return setData(response.data)
        })
          
    },[params])

    if(isLoading){
        return (
            <div className='preloader_wrapper min'>
                <div className="preloader">
                    <div className="load-1"></div>
                    <div className="load-2"></div>
                    <div className="load-3"></div>
                    <div className="load-4"></div>
                    <div className="load-5"></div>
                </div>
            </div>
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