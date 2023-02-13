import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from "../../assets/imgs/cartIcon.svg";
import { CartTheme } from '../../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import "./HeaderCart.css";


const HeaderCart = () => {

    const [cartToggler, setCartToggler] = useState(false)

    const ctxCart = useContext(CartTheme);
    const navigate = useNavigate()

    // style 
    const style = {
        color:ctxCart.cartItem.length > 0 ? "green" : " "
    }

    const cartLinkHandler = (id)=>{

        navigate(`/productsInner/${id}`);
        setCartToggler(false)

    }



    useEffect(() => {

        // window click
        var closeMenu = () => {
            setCartToggler(false);
        };
        window.addEventListener("click", closeMenu);
        return () => window.removeEventListener("click", closeMenu);
      }, []);

    return (
        <div className="cart" > 
            <div className='cartimg_box' onClick={(e)=>{
                e.stopPropagation()
            setCartToggler(!cartToggler)

        }}>

            <img src={CartIcon} alt=""/>
            <span style={style}>{ctxCart.cartItem.length}</span>
            </div>
        
            {cartToggler && 
                <div className="favourite_data_container" onClick={(e)=>[
                    e.stopPropagation()
                ]}>
                <div className="favourite_data_title">your Cart</div>
                <div className="favourite_data_body_wrapper">

                    {ctxCart.cartItem.length < 1 && <p className="favError">Cart Data Not Found</p>}

                    {ctxCart.cartItem?.map((item)=>{
                        return (
                            
                            <div key={item.title} className="favourite_data_body">
                            <img onClick={(e)=>{
                                e.stopPropagation()
                                cartLinkHandler(item.id)

                            }} src={item.thumbnail}/>
                            <div className="favourite_data_text">

                                <h4>{item.title}</h4>
                                <span>{item.price}$</span>
                            </div>
                            </div>
                            )
                            
                        })}
                       
                        
                </div>

                {ctxCart.cartItem.length >0 &&
                <div className='checkout_link'>
                            <Link to="/checkout">Go Checkout</Link>
                        </div> }
            </div>
        }
        </div>
    );
};

export default HeaderCart;