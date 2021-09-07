import { act, renderHook } from '@testing-library/react-hooks';
import {useFetchGifs} from '../../../hooks/useFetchGifs';

describe('test for useFetchGifs hook', () => {
    const category = 'Dragon Ball';
    test('should return the default value', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        const {gifs, loading} = result.current;
        await waitForNextUpdate();

        expect(gifs).toEqual([]);
        expect(loading).toBe(true);

    });

    test('should execute the useEffect and return data', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs(category));
        
        await waitForNextUpdate();
        const {gifs, loading} = result.current;

        expect(gifs.length).toBe(4);
        expect(loading).toBe(false);
    });

});
