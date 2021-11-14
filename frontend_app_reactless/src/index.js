// /src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM has a render() function that takes 2 arguments: 1. A single JSX element from which all of our other JSX elements will extend, and 2. a single HTML element within which our JSX element will be inserted. 
  ReactDOM.render(<App />, document.getElementById('root'));
});
