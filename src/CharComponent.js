import React from 'react'

export const CharComponent = (props) => {
  const style = {
    border: "solid 1px black",
    marginBottom: "10px",
    padding: 10,
    float: "left"
  }
  const {char, click, index} = props;
  return (
    <div style={style} onClick={() => click(index)}>
      {char}
    </div>
  );
}
