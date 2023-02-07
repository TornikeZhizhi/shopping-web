
import React, {Component, createContext, useEffect, useState} from "react";

export const CartTheme = createContext();

const CartContext = (props)=> {

  
 const [cartQuantity, setCartQuantity] = useState(0);
 const [cartItem, setCartItem] = useState([])



 const addCartHandler = (data)=>{
    if(!checkArrayIsNew(cartItem,data.title)){
        setCartItem([...cartItem,data]);

    }
 }




 const checkArrayIsNew = (favArray, title)=>{
    return favArray.some(elem => elem.title == title)
}
 const removeCartHandler = (id)=>{
    const delCartData = cartItem.filter((item)=>{
        return item.id !== id
    })
    setCartItem(delCartData);


}


return(
    <CartTheme.Provider value={{
        cartQuantity:cartQuantity,
        cartItem:cartItem,
        addCartHandler:addCartHandler,
        removeCartHandler:removeCartHandler,
 
        }}>
        {props.children}
    </CartTheme.Provider>
    )
    
}
export default CartContext;