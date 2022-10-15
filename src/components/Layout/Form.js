import React from "react";
import styles from "./Form.module.css";
function Form(props) {
  return <form>{props.children}</form>;
}
const Controller = (props) => {
  return <div className={styles.control}>{props.children}</div>;
};
Form.Controller = Controller;
export default Form;
