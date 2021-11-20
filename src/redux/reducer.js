import db from '../db.json'
import { createReducer } from '@reduxjs/toolkit'
import {combineReducers} from "redux";


// Записываем стартовые значения контактов в localStorage
localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...db] ) );
 

const initialState ={
    contacts: JSON.parse(localStorage.getItem('contactsLocalSt_db')),
    filterValue:'',
}



// export const reducer = ( state = initialState, action )=> {
//     console.log (' Лог action  в reducer: ', action)
    
//     // Добавление нового контакта
//         switch(action.type) {
//             case  'contact/add':
//                 console.log ("Консоль из Свича [...state.contacts, action.payload]", [...state.contacts, action.payload])
//                 console.log ('TEST: state ', state );
    
//                 //Дописываем новый контакт в localStorage
//                 localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...state.contacts, action.payload] ) );
    
//                 return {...state,
//                     contacts: [...state.contacts, action.payload]
//                 }            
         
//     // Удаление контакта
//             case  'contact/delete':
//                     const tmpArr= state.contacts.filter (oneContact =>{
//                         return oneContact.id !== action.payload
//                     })
    
//                     //Удаляем в localStorage выбранный контакт 
//                 localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...tmpArr] ) );
    
//                 return {...state,
//                     contacts: [...tmpArr]
//                 };
    
//     // Фильтрация контактов по заданному поисковому слову
//             case  'filter/value':
//                 console.log ('TEST: state  in   filter/value', state );
//                 console.log ('TEST: state.filterValue ', state.filterValue);
//                 console.log ('TEST:  state.filteredContacts = ', state.filteredContacts)
    
//                 return {...state,
//                     filterValue: action.payload
//                 }  
    
//         default: return state;
    
//         } 
//     }
       

let state = initialState;

    export const reducer = createReducer ( state, {
    'contact/add': (state, action) => {
                        return {...state, contacts: [...state.contacts, action.payload] } 
                    },
    'contact/delete': (state, action) => {
                        return {...state,
                            contacts: [...state.contacts.filter (oneContact =>{ return oneContact.id !== action.payload })]
                        };
                    },
    'filter/value': (state, action) => {
                    return {...state,
                        filterValue: action.payload
                    } 
     }
} )


    /////-----------------

//     const contactsReducer = ( state = initialState, action )=> {
//         console.log (' Лог action  в reducer: ', action)
        
//         // Добавление нового контакта
//             switch(action.type) {
//                 case  'contact/add':
//                     console.log ("Консоль из Свича [...state.contacts, action.payload]", [...state.contacts, action.payload])
                    
//                     console.log ('TEST: state ', state );
        
//                     //Дописываем новый контакт в localStorage
//                     localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...state.contacts, action.payload] ) );
        
//                     return {...state,
//                         contacts: [...state.contacts, action.payload]
//                     }            
             
//         // Удаление контакта
//                 case  'contact/delete':
//                         const tmpArr= state.contacts.filter (oneContact =>{
//                             return oneContact.id !== action.payload
//                         })
        
//                         //Удаляем в localStorage выбранный контакт 
//                     localStorage.setItem('contactsLocalSt_db',   JSON.stringify( [...tmpArr] ) );
        
//                     return {...state,
//                         contacts: [...tmpArr]
//                     };
        
//             default: return state;
        
//             } 
//         }


//         const filterReducer = ( state = '', action )=> {
//             return state;
//         }

// export const rootReducer = combineReducers ({
//     contacts: reducer
// })

