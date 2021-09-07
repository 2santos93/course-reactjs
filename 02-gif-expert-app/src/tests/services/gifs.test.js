import { getGifs } from "../../Services/gifs";

describe('tests for helper gifs.js', () => {
    const q = 'goku';
    test('should return default gifs', async () => {
        const gifs = await getGifs({q});
        console.timeLog(gifs);
        expect(gifs.length).toBe(4);
    });

    test('should return 10 gifs', async () => {
        const limit = 10;
        const gifs = await getGifs({q, limit});
        console.timeLog(gifs);
        expect(gifs.length).toBe(10);
    });

    test('should return 0 gifs', async () => {
        const gifs = await getGifs({});
        expect(gifs.length).toBe(0);
    });
})
