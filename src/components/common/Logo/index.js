import React from "react";
import "./styles.css";
import logoImg from "./logo.png";

function Logo() {
  return (
    <div className="logo">
      <div>
        <img src={logoImg} alt="" />
        <span>
          <b>Firehouse</b>
        </span>
      </div>

      <p>
        <b>Seek the unique</b>
      </p>
    </div>
  );
}

export default Logo;
