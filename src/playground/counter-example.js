class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    
    // this state set up a default state option
    this.state = {
      count: 0
    }
  }
  
  componentDidMount() {
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10)
    
    if (!isNaN(count)) {
      this.setState(() => ({count}));
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.prevState) {
      localStorage.setItem('count', this.state.count);
    }
  }
  
  
  handleAddOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
    console.log('addOne');
  }
  
  handleMinusOne() {
    this.setState((previousState) => {
      return {
        count: previousState.count - 1
      };
    });
    console.log('minusOne');
  }
  
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
    console.log('reset');
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));


//
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
//
// const minus = () => {
//   count--;
//   renderCounterApp()
// };
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
//
// const appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minus}>-1</button>
//       <button onClick={reset}>Reset</button>
//
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();