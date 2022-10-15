import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
function Adduser() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
  });

  function inputChange(e) {
    let key = e.target.id;
    let value = e.target.value;
    setUser({ ...user, [key]: value });
  }
  return (
    <div>
      <Form>
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
        <div style={{ marginTop: "20px" }}>
          <Button type="butto" style={{ marginRight: "20px" }}>
            Save
          </Button>
          <Button type="reset">Reset</Button>
        </div>
      </Form>
    </div>
  );
}

export default Adduser;
