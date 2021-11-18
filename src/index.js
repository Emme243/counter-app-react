import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp';

import './index.css';

const root = document.querySelector('#root');
ReactDOM.render(<CounterApp value={5} />, root);
// ReactDOM.render(<PrimeraApp saludo="Hola, Soy Goku" />, root);
