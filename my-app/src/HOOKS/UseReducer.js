import React, { useReducer } from 'react'

function reducer(state, action) {
    console.log("Reducer function :-", state, action);
    if (action.type === "Incriment") {
        return state + 1;
    }
    if (action.type === "Decriment") {
        return state - 1;
    }
    throw Error('Unknown action: ' + action.type);

}
export default function UseReducer() {
    let initialValue = 0;
    const [state, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <h1>UseReducer hooks</h1>
            <button onClick={() => dispatch({ type: 'Incriment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'Decriment' })}>
                Decriment
            </button>
            <p>Hello! You are {state}.</p>
        </>
    )
}
