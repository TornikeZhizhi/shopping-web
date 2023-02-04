import React, { useState } from 'react';
import  axios from "axios";
import SearchIcon from "../../assets/imgs/search_icon.svg";
import classes from "./HeaderSearch.module.css";

const HeaderSearch = () => { 
    const [focus, setFocus] = useState(false);


    const searchHandler =()=>{
        // alert("s")
        axios.get('https://dummyjson.com/products/search?q=bag')
            .then(res => console.log(res))
    }

    return (
        <div className={classes.header_search + " " + (focus ? classes.active : "")}>
        <img src={SearchIcon} alt="search_icon"/>

            <input onBlur={()=>{
            setFocus(false)
            }} onFocus={()=>{
                setFocus(true)
            }} onClick={searchHandler} type="text" placeholder="Search" />

        <div className='header_search_close'></div>
    </div>
    );
};

export default HeaderSearch;