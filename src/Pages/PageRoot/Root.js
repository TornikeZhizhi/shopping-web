import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../BaseLayout/Footer/Footer';
import Header from '../../BaseLayout/Header/Header';


const Root = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

    );
};

export default Root;