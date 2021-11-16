
export const addContact = value => {
    return {type: 'contact/add',
            payload: value
        };
}

export const deleteContact = id => {
    return {type: 'contact/delete',
            payload: id}
    };

