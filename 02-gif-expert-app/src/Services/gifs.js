const getGifs = async ({q, limit=4}) => {
    if(!q) return [];
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(q)}&limit=${limit}&api_key=gQ6gT7G7XPbKifJa0f09SpOWkTt52c67`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(({id, images, title}) => (
        {
            id, 
            url: images.downsized_large.url,
            title
        }
    )); 
    return gifs;
}

export {
    getGifs
}