
export const addContact = value => {
    return {type: 'contact/add',
            payload: value
        };
}

export const deleteContactMY = id => {
    return {type: 'contact/delete',
            payload: id}
    };

