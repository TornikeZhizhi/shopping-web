import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import ProductDetails from '../Products/ProductDetails';
import "../Products/ProductsComponent.css";
import "./SearchComponent.css";
import Loader from '../../Helpers/Loader/Loader';
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
          <Loader/>
        )
    }

    if(searchData.length < 1){

       return(
           <div className='search_error min'>
            <h1>Nothing Found....</h1>
           </div>
       ) 
       
    }
   


    return (  

        <div className='search_wrapper min'>

        
            <h2 className='search_res_title'>Search Results</h2>
            <div className='products_container'>

            <div className='products_parent'>

                {!searchLoading && searchData?.map((data,index)=>{
                    return <ProductDetails  data={data} key={index}/>
                })}
            </div>
        </div>
        </div>
    );
};

export default SearchComponent;