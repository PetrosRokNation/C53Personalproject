import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Homepage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <Homepage />
    , document.getElementById('root'));
registerServiceWorker();
