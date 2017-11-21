console.log("App.js is running.");


// JSX
let app = {
  title: 'React',
  subtitle: 'React app',
  option: ['One', 'Two']
};

let templateOne = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.option && app.option.length > 0 ? app.option : 'No Option'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let user = {
  name: 'Ben',
  age: 29,
  location: 'usa'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Unkown'}</h1>
    <p>{user.age}</p>
    {getLocation(user.location)}
  </div>
);




let appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);