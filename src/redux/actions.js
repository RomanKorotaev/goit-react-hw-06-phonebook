
export const addContact = value => {
    return {type: 'contact/add',
            payload: value
        };
}

export const deleteContactMY = id => {
    return {type: 'contact/delete',
            payload: id}
    };

    export const setFilter = value => {
        return {type: 'filter/value',
                payload: value}
        };

