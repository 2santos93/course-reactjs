import {Loading} from './Loading';
import {Loading2} from './Loading2';
import { useCounter } from './hooks/useCounter';
import { useFetch } from './hooks/useFetch';
import { Blockquote } from './Blockquote';

export const Quotes = () => {
    const [counter, increment] = useCounter();

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    return (
        <>
            <h1>Breaking Bad</h1>
            <hr />

            {
                loading && <Loading />
            }

            {
                loading && <Loading2 />
            }

            {
                !!data && data.map( ({author, quote}) => (
                    <Blockquote key={Math.random()} author={author} quote={quote}/>
                ))
            }

            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Next Quote
            </button>
        </>
    )
}
