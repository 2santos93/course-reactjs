import { useState } from "react";
import './index.css';

const CounterApp = () => {

    const [stateCounters, setStateCounters] = useState({counter1:0, counter2:0, counter3:0, counter4:0});
    const {counter1, counter2} = stateCounters;

    const buttonClickHandler = () => {
        setStateCounters({
            ...stateCounters,
            counter1: counter1+1
        });
    }

    return (
        <>
            <h1>Counter App</h1>
            <hr />

            <h2>Counter1 {counter1}</h2>  
            <h2>Counter2 {counter2}</h2>  

            <button 
                onClick={buttonClickHandler}
                className="btn btn-primary"
            >
                Increment +1
            </button>
        </>
    )
}

export default CounterApp;