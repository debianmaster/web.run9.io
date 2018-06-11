import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CustomRouter from '../src/router/index';

ReactDOM.render(<CustomRouter />, document.getElementById('root'));
registerServiceWorker();
