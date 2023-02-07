import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from "../../assets/imgs/cartIcon.svg";
import { CartTheme } from '../../Contexts/CartContext';
import "./HeaderCart.css";


const HeaderCart = () => {

    const [cartToggler, setCartToggler] = useState(false)

    const ctxCart = useContext(CartTheme);
    
    const style = {
        color:ctxCart.cartItem.length > 0 ? "green" : " "
    }

    return (
        <div className="cart" onClick={()=>{
            setCartToggler(!cartToggler)

        }}>
            <img src={CartIcon} alt=""/>
            <span style={style}>{ctxCart.cartItem.length}</span>
        
            {cartToggler && 
                <div className="favourite_data_container">
                <div className="favourite_data_title">your Cart</div>
                <div className="favourite_data_body_wrapper">

                    {ctxCart.cartItem.length < 1 && <p className="favError">Cart Data Not Found</p>}

                    {ctxCart.cartItem?.map((item)=>{
                        return (
                            
                            <div key={item.title} className="favourite_data_body">
                            <img src={item.thumbnail}/>
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