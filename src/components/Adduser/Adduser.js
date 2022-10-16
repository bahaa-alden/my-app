import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
function Adduser({ add, length }) {
  const [user, setUser] = useState({
    id: length,
    name: "",
    age: "",
    address: "",
    phone: "",
    gender: "",
  });
  function inputChange(e) {
    let key = e.target.id;

    let value = e.target.value;
    setUser((pervState) => {
      return { ...pervState, [key]: value };
    });
  }
  function handler(e) {
    e.preventDefault();
    length++;
    setUser({ ...user, id: length });
    add(user);
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
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="age">age</label>
        <input
          id="age"
          placeholder="Enter age"
          value={user.age}
          onChange={inputChange}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          placeholder="Enter address"
          value={user.address}
          onChange={inputChange}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          placeholder="Enter phone"
          value={user.phone}
          onChange={inputChange}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="gender">Gender</label>
        <input
          id="gender"
          placeholder="Enter gender"
          value={user.gender}
          onChange={inputChange}
        />
      </Form.Controller>
      <div style={{ marginTop: "20px" }}>
        <Button type="submit" style={{ marginRight: "20px" }}>
          Save
        </Button>
        <Button type="reset">Reset</Button>
      </div>
    </Form>
  );
}

export default Adduser;
