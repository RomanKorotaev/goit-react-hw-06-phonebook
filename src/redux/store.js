import {combineReducers, createStore} from "redux";
import db from '../db.json'
import {reducer} from './reducer'


const store=  createStore (reducer);

console.log (' Лог store   после Свича: ', store );

console.log (' Лог store.getState()  после Свича: ', store.getState() );
export default store;