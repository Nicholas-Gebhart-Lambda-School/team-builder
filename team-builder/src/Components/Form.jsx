import React from "react";

const Form = props => {
  console.log(props);
  return (
    <div>
      {props.userState.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.title}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Form;
