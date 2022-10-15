import React, { Fragment, useState } from "react";
import styles from "./Modal.module.css";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
const Backdrop = ({ close, show }) => {
  return (
    <div
      className={`${styles.backDrop} ${show ? styles.showBack : null}`}
      onClick={close}
    ></div>
  );
};
const Overly = ({ show, children }) => {
  return (
    <div className={`${styles.overly} ${show ? styles.showOverly : null}`}>
      {children}
    </div>
  );
};
const Modal = ({ show, close, children }) => {
  return (
    <Fragment>
      <Backdrop close={close} show={show} />
      <Overly show={show}>{children}</Overly>
    </Fragment>
  );
};

export default Modal;
