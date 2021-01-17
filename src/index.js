import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import App from './App';

// PWA
// import reportWebVitals from './reportWebVitals';

// STYLES
import './bootstrap.min.css';
import './styles/main.scss';

// REDUX CONFIGURATION
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
