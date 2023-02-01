import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            i am home
            <button onClick={()=>{
                navigate("/contact")
            }}>
             to contact

            </button>
        </div>
    );
};

export default Home;