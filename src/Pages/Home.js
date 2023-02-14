import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categories from '../components/categories/Categories';
import HomeSlider from '../components/HomeSlider/HomeSlider';



const Home = () => {

    const navigate = useNavigate()

    return (
        <div>

            <HomeSlider/>
           <Categories/>
        </div>
    );
};

export default Home;