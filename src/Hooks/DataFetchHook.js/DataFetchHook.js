import React, { useEffect, useState } from 'react';
import axios from "axios";



const DataFetchHook = (url,params) => {

    const [data, setData]= useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        
        setIsLoading(true);
        axios.get(`${url}${params}`)
        .then(response => {
            setIsLoading(false)
            return setData(response.data)
        })
        window.scrollTo(0, 0)

    },[url,params])

    return {data,isLoading};
};

export default DataFetchHook;