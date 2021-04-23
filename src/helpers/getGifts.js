
export const getGifts = async ( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)}&api_key=B7PZT49OcIQBDZmjzNqxhyBIb62B1sOT&limit=10`;

    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifts =  data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifts;
}