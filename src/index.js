import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

{/* <a href="https://github.com/rj-tinajero" target="_blank"><i class="fab fa-github"></i></a>
<a href="https://linkedin.com/in/richard-tinajero" target="_blank"><i class="fab fa-linkedin-in"></i></a> */}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
