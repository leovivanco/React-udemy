import React, { useState } from "react";
import { ValidationComponent } from "./ValidationComponent";
import {CharComponent} from "./CharComponent";
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const deleteElement = (index) => {
    console.log(index)
    let text = value.split("")
    text.splice(index, 1);
    setValue(text.join(""));
  }
  return (
    <div className="App">
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <ValidationComponent text={value} />
      {value.split("").map((char, index) => (
        <CharComponent
          key={char + index}
          click={deleteElement}
          char={char}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
