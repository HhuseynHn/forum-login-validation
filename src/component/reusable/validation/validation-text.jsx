/** @format */

import React from "react";

const ValidatedText = ({ className, children }) => {
  return (
    <>
      <p className={className}>{children}</p>
    </>
  );
};

export default ValidatedText;
