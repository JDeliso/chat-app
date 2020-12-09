import React from 'react'

const CTX = React.createContext();

function reducer(state, action) {
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                
            }
        default:
            return state
    }
}

export default function Store(){

    const reducerHook = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value={}>
            {PaymentResponse.children}
        </CTX.Provider>
    )
}