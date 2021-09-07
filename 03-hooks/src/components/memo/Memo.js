import {useState} from 'react';
import Small from "./Small"

export const Memo = () => {

    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(true);

    return (
        <>
            <Small counterValue={counter} />
            <button
                className="btn btn-primary"
                onClick={() => setCounter(counter + 1)}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Hide/Show
            </button>
        </>
    )
}
