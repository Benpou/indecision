import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
    
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }
  
  componentDidMount() {
    
    // This try and catch check to see if we have a valid json or not
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      //console.log(options);
      
      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      // Do nothing
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }
  
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  
  
  
  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }
  
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
      }
    })
  }
  
  
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    //alert(option);
    this.setState(() => ({
      selectedOption: option
    }));
  };
  
  // On this we pass option in method
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }
  
  // 1 make handler
  handleClearSelectedOption() {
    this.setState((prevState) => {
      return {
        selectedOption: undefined
      };
    });
  }
  
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <div className="container">
          <Header title={title} subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            //handlePick = {this.state.optionss}
            handlePick = {this.handlePick}
          />
          <div className="widget">
            <Options
              // prop name options and handleDeleteOptions
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal
            selectedOption = {this.state.selectedOption}
            // 2  , go to optionModal for number 3
            handleClearSelectedOption = {this.handleClearSelectedOption}
          />

        </div>
      </div>
    );
  }
}