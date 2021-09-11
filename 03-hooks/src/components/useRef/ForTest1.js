import { useState } from 'react';
import { ForTest2 } from './ForTest2';

export const ForTest1 = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {setShow(!show)}}
      >
        {show ? 'Hide' : 'Show'}
      </button>

      {
        show && <ForTest2 />
      }
    </>
  )
}
