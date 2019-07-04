import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux imports:
// The Provider is a wrapper component from React Redux that wraps your React app. 
// This wrapper then allows you to access the Redux store and dispatch functions throughout your component tree. 
import { Provider } from 'react-redux';
import {store} from './redux/store'


ReactDOM.render(
    //Provider => to provide store to its child component
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
