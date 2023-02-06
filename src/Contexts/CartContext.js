
import React, {Component, createContext, useEffect, useState} from "react";

export const CartTheme = createContext();

const CartContext = (props)=> {

  
 const [cartQuantity, setCartQuantity] = useState(0);
 const [cartItem, setCartItem] = useState([])



 const addCartHandler = ()=>{


 }
 


return(
    <FavouriteTheme.Provider value={{
        cartQuantity:cartQuantity,
        cartItem:cartItem,
        addCartHandler:addCartHandler
        }}>
        {props.children}
    </FavouriteTheme.Provider>
    )
    
}
export default CartContext;