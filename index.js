import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.js';
import {Provider} from "react-redux";
import store from "./src/store";
import 'babel-polyfill'
import "babel-core/register"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));