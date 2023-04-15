const tvFunction = () => {
    async function getdata(key){
        const endpoint = `https://api.tvmaze.com/search/shows?q=${key}`
        try{
            const response = await fetch(endpoint);
            const ans = await response.json();
            const image = document.createElement('img');
            image.src = ans[0].show.image.medium;
            document.body.append(image);
        }
        catch(error){
            alert(error);
        }
    }

    return {getdata};
}



export default tvFunction;