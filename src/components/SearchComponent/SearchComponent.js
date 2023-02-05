import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProductDetails from '../Products/ProductDetails';
import "../Products/ProductsComponent.css";
import "./SearchComponent.css";
const SearchComponent = () => {


    const [searchData, setSearchData] = useState([])
    const params = useParams()
    const [searchLoading, setSearchLoading] = useState(true)

    useEffect(()=>{
        setSearchLoading(true)
        axios.get(`https://dummyjson.com/products/search?q=${params.id}`)
        .then(res => {
            setSearchLoading(false)
            return setSearchData(res.data.products)
        })
    },[params.id]);

    
    if(searchLoading){
        return (
            <div className="preloader">
                <div className="load-1"></div>
                <div className="load-2"></div>
                <div className="load-3"></div>
                <div className="load-4"></div>
                <div className="load-5"></div>
            </div>
        )
    }

    if(searchData.length < 1){
       return <h1 style={{color:"red", textAlign:"center",minHeight:"60vh",marginTop:"5%"}}>Nothing Found....</h1>
    }
   


    return (  

        <div className='search_wrapper'>

        
            <h2 className='search_res_title'>Search Results</h2>
            <div className='products_container'>

            
                {!searchLoading && searchData?.map((data,index)=>{
                    return <ProductDetails  data={data} key={index}/>
                })}
            </div>
        </div>
    );
};

export default SearchComponent;