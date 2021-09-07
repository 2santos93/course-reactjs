import { useEffect } from "react";

export const Message = () => {

    useEffect(() => {
        console.log('inside message');
    }, []);

    return (
        <>
           <h1>Hi, im goku</h1> 
        </>
    )
}
