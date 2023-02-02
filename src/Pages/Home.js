import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeSlider from '../components/HomeSlider/HomeSlider';



const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
{/*        
            <button onClick={()=>{
                navigate("/contact")
            }}>
             to contact

            </button> */}

            <HomeSlider/>
        </div>
    );
};

export default Home;