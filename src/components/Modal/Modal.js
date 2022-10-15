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
const Overly = ({ show, add }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className={`${styles.overly} ${show ? styles.showOverly : null}`}>
      <Form
        onClick={() => {
          add(name, age, address, phone);
        }}
      >
        <Form.Controller>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="age">age</label>
          <input
            id="age"
            placeholder="Enter age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Form.Controller>
        <Form.Controller>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Form.Controller>
        <div>
          <Button type="butto">Save</Button>
          <Button type={"reset"}>Reset</Button>
        </div>
      </Form>
    </div>
  );
};
const Modal = ({ show, close, add }) => {
  return (
    <Fragment>
      <Backdrop close={close} show={show} />
      <Overly show={show} add={add} />
    </Fragment>
  );
};

export default Modal;
