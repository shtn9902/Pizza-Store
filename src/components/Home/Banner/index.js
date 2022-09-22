import React from "react";
import "./styles.css";
import bannerImg from "./banner_1.png";
import Logo from "../../common/Logo";

function Banner({ handleScrollMenu }) {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Delicious pizzas for your cravings</h1>
          <p>We make fresh and tasty pizzas for you and your loved ones.</p>
          <button onClick={handleScrollMenu}>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img className="header-img" src={bannerImg} />
    </header>
  );
}

export default Banner;
