import React from 'react';
import ReactDOM from 'react-dom';
import Card from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker();
