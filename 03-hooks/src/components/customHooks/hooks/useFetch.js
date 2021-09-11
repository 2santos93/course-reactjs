import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({loading: true, data: null, error:false});

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, []);
    
    useEffect(() => {
        if(!isMounted) return;

        const getData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            if(!isMounted) return;
            setState({loading: false, data, error:false});
        }
        setState({...state, loading:true})
        try{
            getData();
        }catch(e){
            if(!isMounted) return;
            setState({
                loading: false, 
                data: null,
                error: true
            })
        }


    }, [url]);

    return state;
}
