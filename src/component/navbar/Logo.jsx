import React from "react";
import Styles from "./navbar.module.css";
import {SiYourtraveldottv} from 'react-icons/si'  //'react-icons/si' si is prefix 
const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <a href="#">
        <span className={Styles.icon}><SiYourtraveldottv/></span> <span>MakeMyTravel</span>
      </a>
    </div>
  );
};

export default Logo;
