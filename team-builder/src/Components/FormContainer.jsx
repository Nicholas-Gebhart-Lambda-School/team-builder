import React, { useState } from "react";
import "./Form.scss";

const FormContainer = props => {
  const [user, setUser] = useState({ name: "", title: "", email: "" });

  const handleUpdate = e => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewUser(user);
    setUser({ name: "", title: "", email: "" });
  };

  return (
    <div className="form-div">
      <h2>Add new team member</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleUpdate}
          value={user.name}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleUpdate}
          value={user.title}
        />

        <label htmlFor="name">E-mail</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleUpdate}
          value={user.email}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormContainer;
