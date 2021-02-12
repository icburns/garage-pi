import React = require('react')

const GarageDoorButton = (props) => {
  let { sendDoor, buttonText, status, force } = props;

  const getSubtext = () => {
    if (status === null || status === undefined) {
      return '...';
    }
    return (force ? 'force ' : '') + (status ? 'close' : 'open');
  }

  const classNames = `${force ? "force" : ""} ${status ? "statusOn" : status === null ? "statusPending" : ""}`;

  return (
    <button className={classNames} onClick={() => sendDoor(force)}>{buttonText}<p>{getSubtext()}</p></button>
  )
};

export default GarageDoorButton
