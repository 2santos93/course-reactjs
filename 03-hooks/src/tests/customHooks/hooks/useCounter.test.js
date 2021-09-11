import {act, renderHook} from '@testing-library/react-hooks'
import { useCounter } from '../../../components/customHooks/hooks/useCounter'

describe('Test for useCounter hook', () => {
  test('should render default value', () => {
    
    const {result} = renderHook(() => useCounter());
    const [counter, increment] = result.current;
    
    expect(counter).toBe(1);
    expect(typeof increment).toBe('function');

  });

  test('should render counter 10', () => {
    
    const {result} = renderHook(() => useCounter(10));
    const [counter, increment] = result.current;
    
    expect(counter).toBe(10);
    expect(typeof increment).toBe('function');
    
  });

  test('should increment the counter', () => {

    const {result} = renderHook(() => useCounter(100));

    const [,increment] = result.current;

    // cuando hacemos el act, lo que hace es ejecutar una accion como lo hace el browser. Pero en este caso el setCounter usaba counter+1 pero el valor de counter siempre fue 100 y esto no renderiza. Para este caso hay 2 soluciones, o hacer 2 veces el act() para ejecutar acciones que simulen el comportamiento del browser o simplemente en el setCounter trabajar con un callback para obtener el valor anterior y asi no depender de un re-renderizado
    act(() => {
      increment();
      increment();
    });

    const [counter] = result.current;

    expect(counter).toBe(102);
    expect(typeof increment).toBe('function');
    
  })
})
