import React from "react";
import logo from "../../assets/img/burger-logo.png";
import style from "./Logo.module.scss";

const Logo = () => (
  <div className={style.Logo}>
    <img src={logo} alt="Logo" />
  </div>
);

export default Logo;