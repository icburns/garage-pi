import React = require('react')

const ForceDoorButton = (props) => {
  let { sendDoor, buttonText } = props;

  return (
    <button onClick={() => sendDoor(true)}>{buttonText}</button>
  )
};

export default ForceDoorButton
