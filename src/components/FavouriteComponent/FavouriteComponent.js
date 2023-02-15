import React, { useContext, useEffect } from 'react';
import { CartTheme } from '../../Contexts/CartContext';
import { FavouriteTheme } from '../../Contexts/FavouritesContext';
import "./FavouriteComponent.css";


const FavouriteComponent = () => {

    const ctxFavourite = useContext(FavouriteTheme);
    const ctxCart = useContext(CartTheme)

    const removeCart = (data)=>{
        ctxFavourite.addFavToLocalStorage(data)
    }

    // useEffect(()=>{
    //     if(ctxCart.snackBar2){
    //         console.log("waishala")
    //         // removeCart();
    //     }

    // },[ctxCart.snackBar2])

    const moveCard=(data)=>{
        
        ctxCart.addCartHandler(data)
    }

    return (
        <div className='checkout_container min'>
            
        {ctxFavourite.favItem.length < 1 && <h2 className='error'>Favourite Is Empty...</h2>}

        {ctxFavourite.favItem.map((item,index)=>{

            return (
                <div className='checkout_wrapper' key={index}>
                    <div className='checkout_img'>
                        <img src={item.thumbnail} alt="" />
                    </div>
                    <div className='checkout_body'>
                        <h4>{item.title}</h4>
                        <h3>{item.price}$</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className='remove_from_cart' onClick={()=>removeCart(item)}>
                        Remove From Favourite
                    </div>
                    <div className='move_cart' onClick={()=>moveCard(item)}>
                        Move to Card
                    </div>
                </div>
            )

        })}
        
    </div>
    );
};

export default FavouriteComponent;