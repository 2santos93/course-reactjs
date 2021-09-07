import {useMemo, useState} from 'react';

export const ComponentUseMemo = () => {

    const [counter, setCounter] = useState(100)
    const [flag, setflag] = useState(true)

    const heavyProcess = (iterations) => {
        for(let i = 0; i < iterations; i++){
            console.log('Executing...');
        }

        return iterations;
    }

    const heavyProcessMemoized = useMemo(() => heavyProcess(counter), [counter]);
    console.log(heavyProcessMemoized);

    return (
        <>
            <h1>Proceso pesado: {heavyProcessMemoized}</h1>
            <button
                className='btn btn-primary'
                onClick={() => {setCounter(counter+1)}}
            >
                Click me!
            </button>

            <button
                className='btn btn-danger'
                onClick={() => {setflag(!flag)}}
            >
                I dont do anything
            </button>
        </>
    )
}
