import React from 'react'

export const ValidationComponent = (props) => {

  return (
    <div>
      {props.text.length >= 5 ? "To long" : "to short" }
    </div>
  )
}
