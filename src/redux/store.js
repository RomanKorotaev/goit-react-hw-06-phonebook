import {combineReducers, createStore} from "redux";

const initialState ={
     contacts: [
                    {id:"id-1", name: "Rosie Simpson", number: "459-12-56"},
                    {id:"id-2", name: "Hermione Kline", number: "443-89-12"},
                    {id:"id-3", name: "Eden Clements", number: "645-17-79"},
                    {id:"id-4", name: "Annie Copeland", number: "227-91-26"}
                ],
                filterValue:'',
            }
    


const reducer = ( state = initialState, action )=> {
console.log (' Лог action  в reducer: ', action)


// Добавление нового контакта
    switch(action.type) {
        case  'contact/add':
            console.log ("Консоль из Свича [...state.contacts, action.payload]", [...state.contacts, action.payload])
            
            console.log ('TEST: state ', state )
            return {...state,
                contacts: [...state.contacts, action.payload]
            }            
     
// Удаление контакта
        case  'contact/delete':
                                const tmpArr= state.contacts.filter (oneContact =>{
                                return oneContact.id !== action.payload
                            })
            return {...state,
                contacts: [...tmpArr]
            };

// Фильтрация контактов по заданному поисковому слову
        case  'filter/value':
            console.log ('TEST: state  in   filter/value', state );
            console.log ('TEST: state.filterValue ', state.filterValue);
            console.log ('TEST:  state.filteredContacts = ', state.filteredContacts)

            return {...state,
                filterValue: action.payload
            }  

    default: return state;

    }
    
}
   

const store=  createStore (reducer);

console.log (' Лог store   после Свича: ', store );

console.log (' Лог store.getState()  после Свича: ', store.getState() );
export default store;