import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppHooks from './AppHooks'
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {addContactsAction, deleteContactsAction}  from './redux/contacts/actions'

console.log (" store : ", store );

console.log (" store.dispatch(addContactsAction ) : ", store.dispatch(addContactsAction(5) ) );

console.log (" deleteContactsAction : ", deleteContactsAction(-10) );


ReactDOM.render(
  <React.StrictMode>
      <AppHooks/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
