import React from 'react'

export const Person = (props) => {
  const { name, age, index, deleteElement } = props;
  const style = {
    border: 'solid 1px',
    display: 'block',
    marginBottom: '12px'
  }
  return (
    <div style={style} onClick={(event) => deleteElement(index)}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
