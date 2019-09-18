import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";

function App() {
  const [userState, setUserState] = useState({});
  return (
    <div className="App">
      <header className="App-header">
        <h1>Placeholder Text</h1>

        <Form />
      </header>
    </div>
  );
}

export default App;
