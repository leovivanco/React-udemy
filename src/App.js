import React, { useState } from "react";
import { Person } from './components/Person'
import './App.css';

function App() {
  const [listName, setListName] = useState([
    {
      id: 123,
      name: "Julia",
      age: 26,
    },
    {
      id: 124,
      name: "Katlin",
      age: 28,
    },
    {
      id: 225,
      name: "Athena",
      age: 29,
    },
  ]);

  const deleteElement = (index) => {
    const newList = [...listName];
    newList.splice(index, 1)
    setListName(newList);
  };

  const changeName = (id, event) => {
    const findIndex = listName.findIndex(currentValue => currentValue.id === id);
    const newList = [...listName];
    newList[findIndex].name = event.target.value;    
    setListName(newList);
  }

  return (
    <div className="App">
    {console.log(listName)}
      {listName.map((value, index) => (
        <Person
          id={value.id}
          key={value.id}
          name={value.name}
          age={value.age}
          index={index}
          deleteElement={deleteElement}
          changeName={changeName}
        />
      ))}
    </div>
  );
}

export default App;
