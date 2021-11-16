import {createStore} from "redux";

const initialState =  {
    id: '',
    name: 'n1',
    number: 'num1',
    
    contacts:  [
                    {id:"id-1", name: "Rosie Simpson", number: "459-12-56"},
                    {id:"id-2", name: "Hermione Kline", number: "443-89-12"},
                    {id:"id-3", name: "Eden Clements", number: "645-17-79"},
                    {id:"id-4", name: "Annie Copeland", number: "227-91-26"}
                ],
    
    filter: []
}

//   const a5 =  {id:"id-5", name: "555Annie Copeland", number: "555-91-26"}
console.log ( " initialState ", initialState)

// let tmbArr = [...initialState, a5];

// console.log ( " tmbArr = ", tmbArr)



const reducer = ( state = initialState, action )=> {
console.log (' Лог action  в reducer: ', action)

    switch(action.type) {
        case  'contactForm/add':
            return [...state.contacts, action];

            case  'contact/delete':
            return ' Result: contact/delete ';

    default: return state;

    }
}
   

const store=  createStore (reducer);

export default store;