import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import "./Header.css";
import HeaderLogo from "../../assets/imgs/logo.svg";
import SearchIcon from "../../assets/imgs/search_icon.svg";
import CartIcon from "../../assets/imgs/cartIcon.svg";

import classes from "./header.module.css";

import  axios from "axios";
import HeaderFavourite from '../../components/HeaderFavourite/HeaderFavourite';

const Header = () => {



const [focus, setFocus] = useState(false);


const searchHandler =()=>{
    // alert("s")
    axios.get('https://dummyjson.com/products/search?q=bag')
        .then(res => console.log(res))
}
    
    return (
        <div className={classes.header}>
            
            <div className={classes.header_up_wrapper}>
                <div className={classes.header_logo}>
                    <Link to="/">
                        <img src={HeaderLogo}/>
                    </Link>
                </div>
                <div className={classes.cart_wrapper}>
                    <div className={classes.header_search + " " + (focus ? classes.active : "")}>
                        <img src={SearchIcon} alt="search_icon"/>

                        <input onBlur={()=>{
                           setFocus(false)
                        }} onFocus={()=>{
                            setFocus(true)
                        }} onClick={searchHandler} type="text" placeholder="Search" />

                        <div className='header_search_close'></div>
                    </div>
                        <HeaderFavourite/>
                    <div className={classes.cart}>
                        <img src={CartIcon} alt=""/>
                        <span>0</span>
                    </div>
                </div>
            </div>

            <ul className={classes.header_nav}>
                <li>
                    <NavLink to="/" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                     end 
                     >
                      Home
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/products/smartphones" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Smartphones
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/products/home-decoration" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Home Decoration
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/products/womens-dresses" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Dresses
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/products/mens-shoes" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Men Shoes
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/products/motorcycle" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Motorcycle
                     </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Header;