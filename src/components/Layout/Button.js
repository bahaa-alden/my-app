import React from "react";
import styles from "./Form.module.css";
function Button(props) {
  return (
    <button
      className={styles.button}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
