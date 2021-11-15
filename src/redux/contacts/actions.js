
export const addContactsAction = value => {
    return {type: "contacts/add",
            payload: value
    };
}


export const deleteContactsAction = value =>  {
    return { type: "contacts/delete",
        payload: value
    }
}