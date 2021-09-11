import {useState} from 'react';

export const useCounter = (initialCounter=1) => {
    const [counter, setCounter] = useState(initialCounter);

    const increment = (e) => {
        setCounter(cPrev => cPrev + 1);
    }

    return [counter, increment];
}
