import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartCountButton = ({ cartCount }) => {
  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartCountButton);
