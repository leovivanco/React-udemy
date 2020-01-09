import React, { useState } from "react";
import { Person } from './components/Person'
import './App.css';

function App() {
  const [listName, setListName] = useState([
    {
      name: "Julia",
      age: 26,
    },
    {
      name: "Katlin",
      age: 28,
    },
    {
      name: "Athena",
      age: 29,
    },
  ]);

  const deleteElement = (index) => {
    const newList = [...listName];
    newList.splice(index, 1)
    setListName(newList);
  }

  return (
    <div className="App">
      {listName.map((value, index) => (
        <Person
          key={value + index}
          name={value.name}
          age={value.age}
          index={index}
          deleteElement={deleteElement}
        />
      ))}
    </div>
  );
}

export default App;
