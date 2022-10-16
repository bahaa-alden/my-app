import React, { useState, Fragment } from "react";
import styles from "./App.module.css";
import CardList from "../components/CardList/CardList";
import Filter from "../components/Filter/Filter";
import Modal from "../components/Modal/Modal";
import Row from "./Row";
import Button from "../components/Layout/Button";
import Adduser from "../components/Adduser/Adduser";
function App() {
  const [state, setState] = useState([
    {
      id: 0,
      name: "kareem",
      age: 31,
      address: "aleppo",
      phone: "0932840695",
      gender: "man",
    },
    {
      id: 1,
      name: "bahaa",
      age: 21,
      address: "aleppo",
      phone: "0950513746",
      gender: "man",
    },
    {
      id: 2,
      name: "Nour",
      age: 21,
      address: "aleppo",
      phone: "0950513746",
      gender: "girl",
    },
    {
      id: 3,
      name: "keem",
      age: 31,
      address: "aleppo",
      phone: "0932840695",
      gender: "man",
    },
  ]);

  const [show, setShow] = useState(true);
  const [filter, setFilter] = useState("");
  const [ShowRec, setShowRec] = useState(false);
  function deleteFun(id) {
    setState((pervState) => {
      return pervState.filter((el) => id !== el.id);
    });
  }
  function getValue(name) {
    setFilter(name);
  }
  function Handelr() {
    if (filter.length !== 0) {
      return state.filter((e) => e.name.includes(filter));
    }
    return state;
  }
  function closePop() {
    setShowRec(!ShowRec);
  }

  function add(data) {
    setState((pervState) => [...pervState, data]);
  }

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h1>List of data</h1>
        <Row>
          <Button
            style={{ marginRight: "20px" }}
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "Hide Names" : "Show Names"}
          </Button>
          <Button className={styles.button} onClick={closePop}>
            New Record
          </Button>
        </Row>
        <Filter getValue={getValue} />
        <div className={show ? styles.show : styles.hide}>
          <CardList nameList={Handelr()} deleteF={deleteFun} />
        </div>
      </div>
      <Modal show={ShowRec} close={closePop} add={add}>
        <Adduser add={add} length={state.length} close={closePop} />
      </Modal>
      ;
    </Fragment>
  );
}

export default App;
