import {
  useState,
  useLayoutEffect,
  useEffect
} from 'react';
 
 
function App() {
  const [value, setValue] = useState(0);
 
  useLayoutEffect(() => {
      console.log('primero')
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  // descomentar si quieres ver la diferencia
//   useEffect(() => {
//     console.log('segundo')

//     if (value === 0) {
//       setValue(10 + Math.random() * 200);
//     }
//   }, [value]);
 
  console.log('render', value);
 
  return (
    <>
        <div >
        value: {value}
        </div>

        <button 
            className="btn btn-primary" 
            onClick={() => setValue(0)}
        >
            change
        </button>
    </>
  );
}
 
export default App;