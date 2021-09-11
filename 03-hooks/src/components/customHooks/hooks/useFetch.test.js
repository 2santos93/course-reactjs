import {renderHook} from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

describe('useFetch hook test', () => {
  test('should return default value', () => {
  
    const {result} = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));

    const {loading, error, data} = result.current;

    expect(loading).toBe(true);
    expect(data).toBe(null);
    expect(error).toBe(false);

  })

  test('should return value', async() => {
  
    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));

    await waitForNextUpdate();
    const {loading, error, data} = result.current;

    expect(loading).toBe(false);
    expect(data.data.length > 1).toBe(true);
    expect(error).toBe(false);

  })

  test('should return value', () => {
    jest.setTimeout(async() => {
      const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apiw/users?page=2'));

      await waitForNextUpdate({timeout: 5000});
      const {loading, error, data} = result.current;
  
      expect(loading).toBe(false);
      expect(data).toBe(null);
      expect(error).toBe(true);
    }, 10000);
  })
})
