import {memo} from 'react';

export const Header = memo(() => {
    console.log('HEADER!');
    return (
        <>
            <h1>
                Header UseCallback 
            </h1>
            <hr />
        </>
    )
})
