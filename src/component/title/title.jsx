/** @format */

import React from "react";
import styles from "./title.module.css";

const Title = ({ children }) => {
  return (
    <>
      <h2 className={styles["text-title"]}>{children}</h2>
    </>
  );
};

export default Title;
