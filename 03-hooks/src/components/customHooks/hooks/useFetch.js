import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    
    const [state, setState] = useState({loading: true, data: null});

    useEffect(() => {
        const getQuotes = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setState({loading: false, data});
        }
        setState({...state, loading:true})
        getQuotes();

    }, [url]);

    return state;
}
