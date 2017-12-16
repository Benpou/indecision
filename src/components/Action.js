import React from 'react';

// Change the Action component from state to stateless functional :
const Action = (props) => {
  return (
    <div>
      <button
        className="big-button"
        onClick = {props.handlePick}
        // when you want to access a props form parent class
        disabled = {!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
}

export default Action;