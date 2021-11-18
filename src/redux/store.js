import {combineReducers, createStore} from "redux";

const initialState ={
     contacts: [
                    {id:"id-1", name: "Rosie Simpson", number: "459-12-56"},
                    {id:"id-2", name: "Hermione Kline", number: "443-89-12"},
                    {id:"id-3", name: "Eden Clements", number: "645-17-79"},
                    {id:"id-4", name: "Annie Copeland", number: "227-91-26"}
                ],
                filterValue:'+++',
            }
    


const reducer = ( state = initialState, action )=> {
console.log (' Лог action  в reducer: ', action)

    switch(action.type) {
        case  'contact/add':
            console.log ("Консоль из Свича [...state.contacts, action.payload]", [...state.contacts, action.payload])
            // return [...state, action.payload];

            console.log ('TEST: state ', state )
            return {...state,
                contacts: [...state.contacts, action.payload]
            }            
     
        case  'contact/delete':
                // console.log ("Консоль из Свича УДАЛЕНИЕ: state.contacts : ", state.contacts)

                    const tmpArr= state.contacts.filter (oneContact =>{
                                return oneContact.id !== action.payload
                            })
            return {...state,
                contacts: [...tmpArr]
            };

        case  'filter/value':
            console.log ('TEST: state  В - filter/value', state );
            console.log ('TEST: state.filterValue ', state.filterValue)

                        
             //Приводим значение фильтра к нижнему регистру (и в функции проверки имена тоже будем приводить к нижнему регистру)
        const  normalizedFilter = action.payload.toLowerCase ();
        console.log ('normalizedFilter = ', normalizedFilter)
    
              
        state.filterValue=action.payload; 
        const tmpArr2 = {...state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))};

        console.log ("tmpArr2 : ",  tmpArr2 );

        const tmpArr3 = { contacts:tmpArr2, filterValue:action.payload }

        console.log ('tmpArr3 = ', tmpArr3 )


    
            return tmpArr3;


    default: return state;

    }
    
}
   

// const contactsFilter = (state = '', action) => {
//     return state;
// }

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