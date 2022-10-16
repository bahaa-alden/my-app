import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
function Adduser({ add, length, close }) {
  const [user, setUser] = useState({
    id: length,
    name: "",
    age: "",
    address: "",
    phone: "",
    gender: "man",
  });
  function inputChange(e) {
    let key = e.target.id;
    let value = e.target.value;
    setUser((pervState) => {
      return { ...pervState, [key]: value };
    });
  }
  function reset() {
    setUser({
      id: length,
      name: "",
      age: "",
      address: "",
      phone: "",
      gender: "man",
    });
  }
  function handler(e) {
    e.preventDefault();
    length++;
    setUser({ ...user, id: length });
    add(user);
    reset();
    close();
  }
  return (
    <Form onSubmit={handler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Enter name"
          value={user.name}
          onChange={inputChange}
          required={true}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="age">age</label>
        <input
          id="age"
          placeholder="Enter age"
          value={user.age}
          onChange={inputChange}
          required={true}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          placeholder="Enter address"
          value={user.address}
          onChange={inputChange}
          required={true}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          placeholder="Enter phone"
          value={user.phone}
          onChange={inputChange}
          required={true}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          placeholder="Enter gender"
          value={user.gender}
          onChange={inputChange}
          required={true}
        >
          <option>man</option>
          <option>girl</option>
        </select>
      </Form.Controller>
      <div style={{ marginTop: "20px" }}>
        <Button type="submit" style={{ marginRight: "20px" }}>
          Save
        </Button>
        <Button type="reset" onClick={reset}>
          Reset
        </Button>
      </div>
    </Form>
  );
}

export default Adduser;
