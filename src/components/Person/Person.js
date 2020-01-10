import React from 'react'

export const Person = (props) => {
  const { name, age, index, deleteElement, changeName, id } = props;
  const style = {
    border: 'solid 1px',
    display: 'block',
    marginBottom: '12px'
  }
  return (
    <div style={style}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <input type="text" defaultValue={name} onChange={(event) => changeName(id, event)} />
      <button onClick={event => deleteElement(index)}>Close</button>
    </div>
  );
}
