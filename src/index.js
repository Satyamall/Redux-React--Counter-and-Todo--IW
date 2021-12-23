import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContextProvider from "./Redux/AppContextProvider";
import {store} from "./Redux/store";
import {Store} from "./Redux1/store"
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider store={store}>
    <Provider store={Store}>
       <App />
    </Provider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

