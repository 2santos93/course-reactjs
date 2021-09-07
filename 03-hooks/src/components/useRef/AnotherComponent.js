
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

export const AnotherComponent = forwardRef((props, ref) => {
    const {inputRef, funcRef} = ref;
    const [showInput, setShowInput] = useState(true);
    console.log('Dentro del boton1');
    useEffect(() => {
        console.log('Dentro del boton2');
        
        inputRef.current.value = showInput ? 'encendio' : 'apagau';
        
    }, [showInput])
    
    const nelson = () => {
        console.log('me ejecute');
    }
    
    useImperativeHandle(funcRef, () => {
        return nelson;
    });

    return (
        <button 
            className='btn btn-primary'
            onClick={() => setShowInput(!showInput)}
        >
            Delete
        </button>  
    )
});
