import React from 'react'

export const UserInput = (props) => {
  const { setValue, value } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Text"
        defaultValue={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}
