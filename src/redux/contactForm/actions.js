////////////////

export const addContact = value => {
    return {type: 'contactForm/add',
            payload: 
            {id: "id-0", name :"Bob Dilan", number :"479-77-56"},
    };
}


// export const setNumber = value =>  {
//     return { type: 'contactForm/setNumber',
//         payload: value
//     }
// }