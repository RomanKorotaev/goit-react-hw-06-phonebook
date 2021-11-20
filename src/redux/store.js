import {reducer} from './reducer'
// import {createStore} from "redux";
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
    key: 'hello',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
//   const persistedReducer = persistReducer(persistConfig, combineReducers(reducer))
 


// const store=  createStore (reducer);

const store = configureStore ({
    reducer:  persistedReducer,
    // reducer: reducer,
    devTools: process.env.NODE_ENV === 'development',
});

console.log (' Лог store   после Свича: ', store );
console.log (' Лог store.getState()  после Свича: ', store.getState() );

let persistor = persistStore(store);

// export default store;

export default { store, persistor};
