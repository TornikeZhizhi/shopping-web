import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            i am home
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Home;