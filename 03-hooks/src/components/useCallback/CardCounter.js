import {memo} from 'react';

export const CardCounter = memo(({counter, increment, name}) => {
    console.log(name);
    return (
        <div style={{border:"1px solid blue", display: "inline-block", "borderRadius": "5px", padding: "20px", margin: "10px"}}>
            <h1>Counter: {counter}</h1>   
            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Increment
            </button>   
        </div>
    )
})
