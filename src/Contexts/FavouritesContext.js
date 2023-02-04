
import React, {Component, createContext, useEffect, useState} from "react";

export const FavouriteTheme = createContext();

const FavouriteContext = (props)=> {

  
 const [favItemQuantity, setFavItemQuantity] = useState(0);
 const [favItem, setFavItem] = useState([])

    // check on load quantity
    useEffect(()=>{
        if(!JSON.parse(localStorage.getItem("favouriteData"))){
            setFavItemQuantity(0)
        }else {
            setFavItemQuantity(JSON.parse(localStorage.getItem("favouriteData")).length);
            setFavItem(JSON.parse(localStorage.getItem("favouriteData")))
        }
    },[])

  const addFavToLocalStorage = (data)=>{
          
  


    let favArray = JSON.parse(localStorage.getItem("favouriteData"));
        if (favArray == null){
            localStorage.setItem('favouriteData', JSON.stringify([data]));

            // local storage item quantity add
            setFavItemQuantity(prev => prev + 1);
        }else {

            // check if element is already in array
            if(!checkArrayIsNew(favArray,data.title)){

                // add element in local storage
                favArray.push(data)
                localStorage.setItem('favouriteData', JSON.stringify(favArray));

                  // local storage item quantity add
                setFavItemQuantity(prev => prev + 1);
            }else {

                // delete element in local storage
                const delData =favArray.filter((item)=>{
                    return item.title !== data.title;
                })
                localStorage.setItem('favouriteData', JSON.stringify(delData));

                // local storage item quantity delete
                setFavItemQuantity(prev => prev - 1);
            }
        }
        
  
        setFavItem(JSON.parse(localStorage.getItem("favouriteData")))

    }

    const checkArrayIsNew = (favArray, title)=>{
        return favArray.some(elem => elem.title == title)
    }

return(
    <FavouriteTheme.Provider value={{
        favItem:favItem,
        favItemQuantity:favItemQuantity,
        addFavToLocalStorage:addFavToLocalStorage}}>
        {props.children}
    </FavouriteTheme.Provider>
    )
    
}
export default FavouriteContext;