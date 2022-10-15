import React from "react";
import Card from "../Card/Card";
import Styles from "./CardList.module.css";
// eslint-disable-next-line react/prop-types
function CardList({ nameList, deleteF }) {
  // eslint-disable-next-line react/prop-types
  const cards = nameList.map(({ id, ...other }) => (
    <Card key={id} {...other} id={id}  deleteFun={deleteF} />
  ));

  return <div className={Styles.card}>{cards}</div>;
}

export default CardList;
