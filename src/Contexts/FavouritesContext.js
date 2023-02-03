
import React, {Component, createContext, useState} from "react";

export const FavouriteTheme = createContext();

const FavouriteContext = (props)=> {

 const [isDarkMode, setisDarkMode] = useState(true)


  const addFavToLocalStorage = (data)=>{
        console.log(data)

          
        let favArray = JSON.parse(localStorage.getItem("favouriteData"));


        if (favArray == null){
            localStorage.setItem('favouriteData', JSON.stringify([data]));
        }else {
            if(!checkArrayIsNew(favArray,data.id)){
                favArray.push(data)
                localStorage.setItem('favouriteData', JSON.stringify(favArray));
            }else {
                const delData =favArray.filter((item)=>{
                    return item.id !== data.id;
                })
                localStorage.setItem('favouriteData', JSON.stringify(delData));

            }
        }
    }

    const checkArrayIsNew = (favArray, id)=>{
        return favArray.some(elem => elem.id == id)
    }

return(
    <FavouriteTheme.Provider value={{isDarkMode:isDarkMode,
        addFavToLocalStorage:addFavToLocalStorage}}>
        {props.children}
    </FavouriteTheme.Provider>
    )
    
}
export default FavouriteContext;