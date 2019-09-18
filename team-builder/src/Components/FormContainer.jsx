import React, { useState } from "react";

const FormContainer = props => {
  console.log(props);
  const [user, setUser] = useState({ name: "", title: "", email: "" });

  const handleUpdate = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewUser(user);
    setUser({ name: "", title: "", email: "" });
  };

  return (
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
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default FormContainer;
