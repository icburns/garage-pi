import React = require('react')

const GarageLightButton = (props) => {
  let { sendLight, buttonText, status } = props;

  return (
    <button className={status ? "statusOn" : ""} onClick={() => sendLight()}>{buttonText}</button>
  )
};

export default GarageLightButton
