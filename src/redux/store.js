import {combineReducers, createStore} from "redux";

const initialState = [
                    {id:"id-1", name: "Rosie Simpson", number: "459-12-56"},
                    {id:"id-2", name: "Hermione Kline", number: "443-89-12"},
                    {id:"id-3", name: "Eden Clements", number: "645-17-79"},
                    {id:"id-4", name: "Annie Copeland", number: "227-91-26"}
                ]
    


const reducer = ( state = initialState, action )=> {
console.log (' Лог action  в reducer: ', action)

    switch(action.type) {
        case  'contact/add':
            console.log ("Консоль из Свича [...state.contacts, action.payload]", [...state, action.payload])
            return [...state, action.payload];

            case  'contact/delete':
            return state.filter (oneContact =>oneContact.id !== action.payload);


    default: return state;

    }
}
   

const contactsFilter = (state = '', action) => {
    return state;
}

// export const contacsreducer = combineReducers (
//     {
//         contacts: reducer,
//         filter: contactsFilter
//     }
// )



const store=  createStore (reducer);

console.log (' Лог store   после Свича: ', store );

console.log (' Лог store.getState()  после Свича: ', store.getState() );
export default store;