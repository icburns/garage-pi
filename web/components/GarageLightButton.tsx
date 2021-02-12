import React = require('react')

const GarageLightButton = (props) => {
  let { sendLight, buttonText, status, disabled } = props;

  const getSubtext = () => {
    return disabled ? 'disabled' : status ? 'turn off' : 'turn on';
  }

  return (
    <button disabled={disabled} className={status ? "statusOn" : ""} onClick={() => sendLight()}>{buttonText}<p>{getSubtext()}</p></button>
  )
};


export default GarageLightButton
