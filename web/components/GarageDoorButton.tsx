import React = require('react')

const GarageDoorButton = (props) => {
  let { sendDoor, buttonText, status, force } = props;

  const classNames = `${force ? "force" : ""} ${status ? "statusOn" : status === null ? "statusPending" : ""}`

  return (
    <button className={classNames} onClick={() => sendDoor(force)}>{buttonText}</button>
  )
};

export default GarageDoorButton
