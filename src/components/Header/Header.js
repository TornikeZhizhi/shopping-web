import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <ul className='header_nav'>
                <li>
                    <NavLink to="/" 
                        className={({isActive})=>
                        isActive ? "active" : undefined
                     }
                     end 
                     >
                      Home
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" 
                        className={({isActive})=>
                        isActive ? "active" : undefined
                     }
                   
                     >
                      contact
                     </NavLink>
                </li>

            </ul>
        </div>
    );
};

export default Header;