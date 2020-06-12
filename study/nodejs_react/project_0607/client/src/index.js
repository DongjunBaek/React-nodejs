import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provier} from 'react-redux';
import 'antd/dist/antd.css';
import { applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddelware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
  
  <Provider 
    store = {createStoreWithMiddleware()}
  >
  
    <App />
  </Provider>
  
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();