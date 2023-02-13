import React, { useContext, useState ,useEffect} from 'react';
import classes from "./HeaderFavourite.module.css";
import heart from "../../assets/imgs/heart.svg";
import { FavouriteTheme } from '../../Contexts/FavouritesContext';
import { useNavigate } from 'react-router-dom';
const HeaderFavourite = () => {

    const [favToggler, setFavToggler] = useState(false)

    const ctx = useContext(FavouriteTheme)
    const navigate = useNavigate()


    const removefavHandler = (data)=>{
    
        ctx.addFavToLocalStorage(data)

    }

    const favLinkHandler = (id)=>{

        navigate(`/productsInner/${id}`);
        setFavToggler(false);

    }
   
    useEffect(() => {

        // window click
        var closeMenu = () => {
            setFavToggler(false);
        };
        window.addEventListener("click", closeMenu);
        return () => window.removeEventListener("click", closeMenu);
      }, []);


    return (
    <div className={classes.favourite_box} onClick={(e)=>{
        e.stopPropagation();
        setFavToggler(!favToggler)
        }}>
        <img  src={heart}/>
        <span>{ctx.favItemQuantity}</span>
        {favToggler && 
           <div className={classes.favourite_data_container} onClick={(e)=>{
            e.stopPropagation()
           }}>
           <div className={classes.favourite_data_title}>your Favourites</div>
           <div className={classes.favourite_data_body_wrapper}>

               {ctx.favItem.length < 1 && <p className={classes.favError}>Favourite Data Not Found</p>}

               {ctx.favItem?.map((item)=>{
                   return (
                       
                       <div key={item.title} className={classes.favourite_data_body}>
                          <img onClick={ ()=>favLinkHandler(item.id)} src={item.thumbnail}/>
                            <div className={classes.favourite_data_text}>

                                <h4>{item.title}</h4>
                                <span>{item.price}$</span>
                            </div>
                            <div className={classes.remove} onClick={()=>removefavHandler(item)}>
                                Remove
                            </div>
                       </div>
                       )
                       
                   })}
           </div>
       </div>
        }
     
    </div>
    );
};

export default HeaderFavourite;