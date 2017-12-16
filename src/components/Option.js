import React from 'react';


// subclass Option for Options Component
// Change to statless functional component
const Option = (props) => {
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Option;