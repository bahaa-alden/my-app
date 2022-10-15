import React from "react";
import styles from "./Form.module.css";
function Form(props) {
  return (
    <div>

      { props.children}
      <button
        className={styles.button}
        style={{
          fontSize: "17px",
          padding: "10px 20px",
          marginTop: "20px",
          marginLeft: "45%",
        }}
        onClick={props.onClick}
      >
        Add
      </button>
    </div>
  );
}
const Controller = (props) => {
  return <div className={styles.control}>{props.children}</div>;
};
Form.Controller = Controller;
export default Form;
