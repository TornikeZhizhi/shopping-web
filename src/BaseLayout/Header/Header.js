import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import "./Header.css";
import HeaderLogo from "../../assets/imgs/logo.svg";


import classes from "./header.module.css";


import HeaderFavourite from '../../components/HeaderComponents/HeaderFavourite/HeaderFavourite';
import HeaderSearch from '../../components/HeaderComponents/HeaderSearch/HeaderSearch';
import HeaderCart from '../../components/HeaderComponents/HeaderCart/HeaderCart';
import CustomizedSnackbars from '../../Helpers/SnackBar/SnackBar';





const Header = () => {

    
    return (
        <div className={classes.header}>
            <CustomizedSnackbars/>
            <div className={classes.header_up_wrapper}>
                <div className={classes.header_logo}>
                    <Link to="/">
                        <img src={HeaderLogo}/>
                    </Link>
                </div>
                <div className={classes.cart_wrapper}>
                        <HeaderSearch/>
                        <HeaderFavourite/>
                        <HeaderCart/>
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
                    <NavLink to="/all-products" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      All Products
                     </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Header;