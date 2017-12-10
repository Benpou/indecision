class IndecisionApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
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
        return;
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
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
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
    alert(option);
  }
  
  // On this we pass option in method
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    
    
    this.setState((prevState) => ({options: prevState.options.concat(option)}));
    // this.setState((prevState) => {
    //   return {
    //     // by concat you make a new array
    //     options: prevState.options.concat(option)
    //   };
    // })
  }
  
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          //handlePick = {this.state.optionss}
          handlePick = {this.handlePick}
        />
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
    );
  }
}

// Change to stateless functional component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// Change the Action component from state to stateless functional :

const Action = (props) => {
    return (
      <div>
        <button
          onClick = {props.handlePick}
          // when you want to access a props form parent class
          disabled = {!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
  );
}
// class Action extends React.Component {
//
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           // when you want to access a props form parent class
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }



// CHange to statless functional component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add option to run the program</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption = {props.handleDeleteOption}
          />))
      }
    </div>
  );
}

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }

// subclass Option for Options Component
// Change to statless functional component
const Option = (props) => {
  return (
    <div>
      Options: {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
}
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         Options: {this.props.optionText}
//       </div>
//     );
//   }
// }

// AddOption Component
class AddOption extends React.Component {
  
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
        {this.state.error && this.state.error}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        
        </form>
      </div>
    );
  }

}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));