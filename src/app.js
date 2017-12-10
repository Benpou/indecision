import { square, add } from './utils';

import validator from 'validator';

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JS6</p>
ReactDOM.render(template, document.getElementById('app'));






console.log(validator.isEmail('test@gmail.com'));

console.log('app is running!');
console.log(square(3));
console.log(add(3, 8));