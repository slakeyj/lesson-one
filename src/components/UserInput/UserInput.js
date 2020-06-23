import React from 'react';

const UserInput = props => {
  return (
    <input onChange={props.changed} type="text" value={props.name} />
  )
}

export default UserInput;