/** @format */

import React from "react";

const Input = ({ type, placeHolder, className, icon, refValue }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeHolder}
        className={className}
        ref={refValue}
      />
    </>
  );
};

export default Input;
