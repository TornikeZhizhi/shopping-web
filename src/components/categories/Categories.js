import React from 'react';
import "./category.css";

import smarthphones from "../../assets/imgs/smarthphones.jpg";
import homeDecoration from "../../assets/imgs/home_decoration.jpg";
import dress from "../../assets/imgs/dress.jpg";
import manShoes from "../../assets/imgs/man-shoes.jpg";
import { useNavigate } from 'react-router-dom';



const Categories = () => {

    const navigate = useNavigate();

    return (
        <div className='category_container'>
            <div className='categories_title'>
                <h2>All Categories</h2>
            </div>
            <div className='categories_wrapper'>
                <div className='category_box_wrapper' 
                onClick={()=>{
                    navigate("/products/smartphones")
                }}
                >
                    <div className='category_box'>
                        <img src={smarthphones} alt=""/>
                    </div>
                    <h3 className='car_title'>Smartphones</h3>
                </div>
                <div className='category_box_wrapper'
                  onClick={()=>{
                    navigate("/products/home-decoration")
                }}
                >
                    <div className='category_box'>
                        <img src={homeDecoration} alt=""/>
                    </div>
                    <h3 className='car_title'>Home Decoration</h3>
                </div>
                <div className='category_box_wrapper'
                  onClick={()=>{
                    navigate("/products/womens-dresses")
                }}
                >
                    <div className='category_box' 
                     
                    >
                        <img src={dress} alt=""/>
                    </div>
                    <h3 className='car_title'>Dresses</h3>
                </div>
                <div className='category_box_wrapper' 
                 onClick={()=>{
                    navigate("/products/mens-shoes")
                }}
                >
                    <div className='category_box'>
                        <img src={manShoes} alt=""/>
                    </div>
                    <h3 className='car_title'>Man Shoes</h3>
                </div>
            </div>
        </div>
    );
};

export default Categories;