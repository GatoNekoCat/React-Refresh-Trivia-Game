import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Img from './img';
import Trivia from './Trivia';
import Timer from './Timer';

ReactDOM.render(
  <React.StrictMode>
    <Trivia />
    <Img />
    <Timer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
