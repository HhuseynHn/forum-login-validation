/** @format */

import React from "react";
import styles from "./icon-style.css";

const FontAwesomeIcon = ({ icon, onClick }) => {
  return (
    <>
      <i className={icon} onClick={onClick}></i>
    </>
  );
};

export default FontAwesomeIcon;
