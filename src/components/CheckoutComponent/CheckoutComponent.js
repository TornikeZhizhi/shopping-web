import React, { useContext } from 'react';
import { CartTheme } from '../../Contexts/CartContext';

import "./CheckoutComponent.css";

const CheckoutComponent = () => {

    const ctxCart = useContext(CartTheme)


    const removeCart = (id)=>{
        ctxCart.removeCartHandler(id)
    }

 

    return (
        <div className='checkout_container'>
            
            {ctxCart.cartItem.length < 1 && <h2 className='error'>Cart Is Empty...</h2>}

            {ctxCart.cartItem.map((item,index)=>{

                return (
                    <div className='checkout_wrapper'>
                        <div className='checkout_img'>
                            <img src={item.thumbnail} alt="" />
                        </div>
                        <div className='checkout_body'>
                            <h4>{item.title}</h4>
                            <h3>{item.price}$</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className='remove_from_cart' onClick={()=>removeCart(item.id)}>
                            Remove From Cart
                        </div>
                    </div>
                )

            })}
            
            <div className='checkout_footer'>
                <div>Sum</div>
                <span>{ctxCart.sumPrice}$</span>
            </div>
        </div>
    );
};

export default CheckoutComponent;