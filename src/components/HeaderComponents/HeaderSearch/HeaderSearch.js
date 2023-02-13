import React, { useRef, useState } from 'react';
import  axios from "axios";
import SearchIcon from "../../../assets/imgs/search_icon.svg";
import classes from "./HeaderSearch.module.css";
import { useNavigate } from 'react-router-dom';

const HeaderSearch = () => { 
    const [focus, setFocus] = useState(false);
    const navigate = useNavigate()

    const inputValue = useRef()

    const searchHandler =(e)=>{
        e.preventDefault()
        navigate(`/search/${inputValue.current.value}`)
        
    }

    return (
        <div className={classes.header_search + " " + (focus ? classes.active : "")}>

        <form onSubmit={searchHandler}>
            <img src={SearchIcon} alt="search_icon"/>
            <input ref={inputValue} onBlur={()=>{
                setFocus(false)
            }} onFocus={()=>{
                setFocus(true)
            }} type="text" placeholder="Search" />
        </form>

    </div>
    );
};

export default HeaderSearch;