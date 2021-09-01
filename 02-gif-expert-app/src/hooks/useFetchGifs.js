import { useEffect, useState } from "react";

import { getGifs } from "../Services/gifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({gifs:[], loading:true});

    useEffect(() => {
        async function getGifsData(){
            
            const gifsData = await getGifs({q:category});
            
            setState(
                {
                    loading:false,
                    gifs:[
                        ...gifsData,
                        ...state.gifs
                    ]
                }
            )
        }

        getGifsData();
    }, [category]);

    return state;
}