import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import UserStore from './userstore';
import "./style.css"

ReactDOM.render(<App store={new UserStore()} />, document.getElementById('root'));
registerServiceWorker();
