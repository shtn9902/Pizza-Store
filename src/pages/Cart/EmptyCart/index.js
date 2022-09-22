import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import emptyCartImg from "./emptyCart.png";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src={emptyCartImg} alt="empty" />
      <button onClick={() => navigate("/")}>
        <i className="fas fa-long-arrow-alt-left"></i>Shop Now !
      </button>
    </div>
  );
}

export default EmptyCart;
