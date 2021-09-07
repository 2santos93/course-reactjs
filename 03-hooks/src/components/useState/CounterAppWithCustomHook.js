import { useCounter } from "./hooks/useCounter"
import './index.css';

const CounterAppWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter App With Custom Hook</h1>
            <hr />

            <h2>Counter {state}</h2>

            <button className="btn btn-primary" onClick={ () => {increment(2)} }>Increment</button>
            <button className="btn btn-secondary" onClick={ () => {reset()} }>Reset</button>
            <button className="btn btn-danger" onClick={ () => {decrement(2)} }>Decrement</button>
        </>
    )
}

export default CounterAppWithCustomHook;