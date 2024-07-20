/** @format */

import React, { Children } from "react";
import "./btn-style.css";

const Button = ({ className, children, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
