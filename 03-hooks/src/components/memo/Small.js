import {memo} from 'react';

const Small = ({counterValue}) => {
    console.log('me ejecute');
    return (
        <h1>
            {counterValue}
        </h1>
    )
}

export default memo(Small);
