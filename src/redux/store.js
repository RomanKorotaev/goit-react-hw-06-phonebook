import {reducer} from './reducer'
// import {createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit';



// const store=  createStore (reducer);


const store = configureStore ({
    reducer: reducer,
    devTools: process.env.NODE_ENV === 'development',
});

console.log (' Лог store   после Свича: ', store );
console.log (' Лог store.getState()  после Свича: ', store.getState() );

export default store;