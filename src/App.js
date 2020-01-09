import React, { useState } from "react";
import {UserInput} from './components/UserInput'
import { UserOutput } from "./components/UserOutput";
import './App.css';

function App() {
  const [value, setValue] = useState("Petimko")
  return (
    <div className="App">
      <UserInput setValue={setValue} value={value} />
      <UserOutput value={value} />
    </div>
  );
}

export default App;
