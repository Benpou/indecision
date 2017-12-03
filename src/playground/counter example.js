
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

const minus = () => {
  count--;
  renderCounterApp()
};

const reset = () => {
  count = 0;
  renderCounterApp();
};


const appRoot = document.getElementById('app');
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minus}>-1</button>
      <button onClick={reset}>Reset</button>
    
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();