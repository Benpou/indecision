import React from 'react';

export default class AddOption extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    
    this.state = {
      error: undefined
    };
  }
  
  handleAddOption(e) {
    // use to prevent default loading
    e.preventDefault();
    
    // target triger the element of option that set on submit
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => {
      return {
        error
      };
    });
    
    // This one check to see if there is no error, make the input box clear.
    if (!error) {
      e.target.elements.option.value = '';
    }
    
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form  className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Add Option</button>
        
        </form>
      </div>
    );
  }
  
}
