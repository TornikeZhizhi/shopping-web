import React, { useContext, useEffect, useState } from "react";

import "./ProductsComponent.css";
import star from "../../assets/imgs/star.svg";
import { FavouriteTheme } from "../../Contexts/FavouritesContext";
import { NavLink } from "react-router-dom";
import { CartTheme } from "../../Contexts/CartContext";
import Rating from "@mui/material/Rating";

const ProductDetails = (props) => {
  const ctxFavourite = useContext(FavouriteTheme);
  const ctxCart = useContext(CartTheme);
  const [heartAnime, setHeartAnime] = useState(false);

  const addFavouriteHandler = () => {
    setHeartAnime(!heartAnime);
    ctxFavourite.addFavToLocalStorage(props.data);
  };

  const addCart = () => {
    ctxCart.addCartHandler(props.data);
  };

  useEffect(() => {
    // add hearAnime on load

    let favArray = JSON.parse(localStorage.getItem("favouriteData"));
    if (favArray?.some((elem) => elem.title == props.data.title)) {
      setHeartAnime(true);
    } else {
      setHeartAnime(false);
    }
  }, [JSON.parse(localStorage.getItem("favouriteData"))]);

  return (
    <div className="products_wrapper">
      <div className="products_img">
        <NavLink to={`/productsInner/${props.data.id}`}>
          <img src={props.data.thumbnail} alt="" />
        </NavLink>
        <div className="product_rating">
          <span className="rating_text">{props.data.rating}</span>
          <Rating
            name="half-rating-read"
            defaultValue={props.data.rating}
            precision={0.5}
            readOnly
            size="small"
          />
          {/* <img src={star} alt=""/> */}
        </div>
        <div className="product_favourite" onClick={addFavouriteHandler}>
          <div className={`m-favorite ` + (heartAnime ? " -active" : " ")}>
            <div className="m-favorite__icon"></div>

            <span className="m-favorite__smallIcon"></span>
            <span className="m-favorite__smallIcon"></span>
            <span className="m-favorite__smallIcon"></span>
          </div>
        </div>
      </div>
      <div className="product_body">
        <NavLink to={`/productsInner/${props.data.id}`}>
          <div className="product_title">{props.data.title}</div>
        </NavLink>
        <div className="product_text">
          <p>{props.data.description.slice(0, 50)}...</p>
        </div>
        <div className="product_footer_wrapper">
          <div className="product_price">{props.data.price} $</div>

          <div className="add_card" onClick={addCart}>
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
