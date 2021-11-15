import {createStore} from "redux";

const initialState =  [
    {id:"id-1", name: "Rosie Simpson", number: "459-12-56"},
    {id:"id-2", name: "Hermione Kline", number: "443-89-12"},
    {id:"id-3", name: "Eden Clements", number: "645-17-79"},
    {id:"id-4", name: "Annie Copeland", number: "227-91-26"}
  ]

console.log ( " initialState ", initialState)

const reducer = ( state = {}, action )=> {
console.log (' Лог action  в reducer: ', action)

switch(action.type) {
    case  'contactForm/setName':
        return 1;

        case  'contactForm/setNumber':
        return 1;

}
    return state;
};

const store=  createStore (reducer);

export default store;