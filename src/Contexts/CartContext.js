
import React, {Component, createContext, useEffect, useState} from "react";

export const CartTheme = createContext();

const CartContext = (props)=> {

  
 const [cartQuantity, setCartQuantity] = useState(0);
 const [cartItem, setCartItem] = useState([])

    const [snackBar, setSnackBar] = useState(false)
    const [snackBar2, setSnackBar2] = useState(false)

 const addCartHandler = (data)=>{
    if(!checkArrayIsNew(cartItem,data.title)){
        setCartItem([...cartItem,data]);
        setSnackBar(true)
    }else {
        setSnackBar2(true)
    }
    setTimeout(function(){
        setSnackBar(false)
        setSnackBar2(false)
    },500)

    
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
        snackBar:snackBar,
        snackBar2:snackBar2
        }}>
        {props.children}
    </CartTheme.Provider>
    )
    
}
export default CartContext;