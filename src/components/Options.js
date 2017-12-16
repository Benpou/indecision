import React from 'react';
import Option from './Option';
// Since Option is a subclass for Options we should call it here. No need to call that in app.js.
// CHange to statless functional component
const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>

      {props.options.length === 0 && <p className="widget__message">Add option to run the program</p>}
      {
        props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count = {index + 1}
            handleDeleteOption = {props.handleDeleteOption}
          />))
      }
    </div>
  );
}

export default Options;