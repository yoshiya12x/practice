import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestButton from './TestButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <TestButton greet={'propsTest'} />
    , document.getElementById('button')
);

registerServiceWorker();
