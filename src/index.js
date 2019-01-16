import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/base/base.css';
import data from './data/data.js';

const airline = 'nk';
const airlineData = data[airline];


ReactDOM.render(<App airlineData={airlineData} />, document.getElementById('root'));
