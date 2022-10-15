import React from "react";
import styles from "./Card.module.css";
function Card({ name, type, address, age, phone, id, deleteFun }) {
  return (
    <div
      className={styles.cardWrapper}
      style={{ background: type === "man" ? "blue" : "red" }}
    >
      <p>Name :{name}</p>
      <p>age :{age}</p>
      <p>Address :{address}</p>
      <p>Phone :{phone}</p>
      <button
        className={styles.deleteBtn}
        onClick={() => {
          deleteFun(id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Card;
