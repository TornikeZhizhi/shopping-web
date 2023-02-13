import React from 'react';
import "./Loader.css";
const Loader = () => {
    return (
        <div className='preloader_wrapper min'>

        <div className="preloader ">
            <div className="load-1"></div>
            <div className="load-2"></div>
            <div className="load-3"></div>
            <div className="load-4"></div>
            <div className="load-5"></div>
        </div>
        </div>
    );
};

export default Loader;