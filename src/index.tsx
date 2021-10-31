import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Client } from './components/Client/Client';
import { config } from './overmind';
import reportWebVitals from './reportWebVitals';
import './index.css';

const overmind = createOvermind(config, {
  devtools: true
})

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <Client />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
