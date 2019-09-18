import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import FormContainer from "./Components/FormContainer";

function App() {
  const [userState, setUserState] = useState([]);

  const addNewUser = user => {
    const newUser = {
      id: Date.now(),
      name: user.name,
      title: user.title,
      email: user.email
    };
    setUserState([...userState, newUser]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Team</h1>
        <FormContainer addNewUser={addNewUser} />
        <Form userState={userState} />
      </header>
    </div>
  );
}

export default App;
