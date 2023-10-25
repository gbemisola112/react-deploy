import React from 'react'

const Button = (props) => {
  console.log(props);
  return (
    <div>
        <button className={props.style} onClick={props.handleEdit}>{props.name}</button>
    </div>
  )
}

export default Button