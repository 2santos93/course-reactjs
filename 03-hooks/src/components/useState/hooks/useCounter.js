import { useState } from "react";

const useCounter = (initialState = 10) => {

    const [state, setstate] = useState(initialState)

    const increment = (factor = 1) => {
        setstate(state + factor);
    }
    const decrement = (factor = 1) => {
        setstate(state - factor);
    }
    const reset = () => {
        setstate(initialState);
    }

    return {decrement, increment, reset, state};
}

export {useCounter};
