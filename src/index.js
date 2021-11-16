import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppHooks from './AppHooks'
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {addContactAction, deleteContactAction}  from './redux/contact/actions'
import {Provider} from 'react-redux'

console.log (" store : ", store );

console.log (" store.dispatch(addContactAction ) : ", store.dispatch(addContactAction(5) ) );

console.log (" deleteContactAction : ", deleteContactAction(-10) );


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppHooks/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
