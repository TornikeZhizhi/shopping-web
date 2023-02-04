import React from 'react';
import Footer from '../BaseLayout/Footer/Footer';
import Header from '../BaseLayout/Header/Header';

const Error = () => {
    return (
        <>
            <Header/>
            <div className='erro_data' style={{textAlign:"center",marginTop:"5%", color:"red",minHeight:"55vh"}}>
                <h1> An Error Occured</h1>
                <p> Can`t Find This Page</p>
            </div>
            <Footer/>
        </>
    );
};

export default Error;