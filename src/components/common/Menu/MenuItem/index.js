import React from "react";
import StarRatings from "react-star-ratings";
import { connect } from "react-redux";
import vegImg from "./veg.png";
import nonVegImg from "./non-veg.png";
import { createStructuredSelector } from "reselect";
import {
  cartAddItem,
  cartRemoveItem,
} from "../../../../redux/cart/cart.action";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../../../../redux/cart/cart.selector";
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
import "./styles.css";

const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {
  const { id, name, description, price, img_url, isVeg, rating } = item;
  var Rating = require("react-star-rating-lite");

  const handleItemQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);

      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }

    return quantity;
  };

  return (
    <div className="item">
      <img src={img_url} alt="item" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <div className="food-type">
          {isVeg ? (
            <img src={vegImg} alt="Veg" />
          ) : (
            <img src={nonVegImg} alt="Non-Veg" />
          )}
        </div>
        <StarRatings rating={rating} starDimension="12px" starSpacing="5px" />
        <p className="head_desc-info">
          <small>{description}</small>
        </p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">Rs. {price} </span>
        <ButtonAddRemoveItem
          quantity={handleItemQuantity()}
          handleAddItem={() => cartAddItem(item)}
          handleRemoveItem={() => cartRemoveItem(item)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
