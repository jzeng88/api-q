import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.js';
import LoginWrapper from './components/LoginWrapper';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-calendar/dist/Calendar.css';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <LoginWrapper />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();