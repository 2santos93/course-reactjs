import React, { useRef, useEffect } from 'react'
import { AnotherComponent } from './AnotherComponent';

export const RefExample = () => {

    const inputRef = useRef();
    const funcRef = useRef();
    console.log('input1')
    useEffect(() => {
        console.log('input2')
        funcRef.current();
    })

    return (
        <>
            <input 
                type="text"
                ref={inputRef}
            />
            <AnotherComponent ref={{inputRef, funcRef}}/>
        </>
    )
}
