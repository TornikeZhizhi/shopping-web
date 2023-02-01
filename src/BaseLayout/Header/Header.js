import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import "./Header.css";
import HeaderLogo from "../../assets/imgs/logo.svg";
import SearchIcon from "../../assets/imgs/search_icon.svg";
import CartIcon from "../../assets/imgs/cartIcon.svg";
import classes from "./header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            
            <div className={classes.header_up_wrapper}>
                <div className={classes.header_logo}>
                    <img src={HeaderLogo}/>
                </div>
                <div className={classes.cart_wrapper}>
                    <div className={classes.header_search}>
                        <img src={SearchIcon} alt="search_icon"/>
                        <input type="text" placeholder="Search" />
                        <div className='header_search_close'></div>
                    </div>
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
                    <NavLink to="/contact" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Women
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Man
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Technics
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Shoes
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" 
                        className={({isActive})=>
                        isActive ? classes.active : undefined
                     }
                   
                     >
                      Jevelery
                     </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Header;