////////////////

export const setName = value => {
    return {type: 'contactForm/setName',
            payload: value
    };
}


export const setNumber = value =>  {
    return { type: 'contactForm/setNumber',
        payload: value
    }
}