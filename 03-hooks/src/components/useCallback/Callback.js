import {useCallback, useState} from 'react';
import {Header} from './Header';
import {CardCounter} from './CardCounter';

export const Callback = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    const memoizedIncrement1 = useCallback(
        () => setCounter1(counter1 + 1),
        [counter1]
    )

    const memoizedIncrement2 = useCallback(
        () => setCounter2(counter2 + 1),
        [counter2]
    )

    const memoizedIncrement3 = useCallback(
        () => setCounter3(counter3 + 1),
        [counter3]
    )

    return (
        <>
            <Header />
            <CardCounter counter={counter1} increment={memoizedIncrement1} name="Counter1" />   
            <CardCounter counter={counter2} increment={memoizedIncrement2} name="Counter2" />   
            <CardCounter counter={counter3} increment={memoizedIncrement3} name="Counter3" />   
        </>
    )
}
