import React, { } from "react";
import classes from './App.scss';

function App() {
  console.log(classes)
  return (
    <div className="App">
      <button className={classes.Button} >Button</button>
    </div>
  );
}

export default App;
