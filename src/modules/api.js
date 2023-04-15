const tvFunction = () => {
    async function getdata(key){
        const endpoint = `https://api.tvmaze.com/search/shows?q=${key}`
        try{
            const response = await fetch(endpoint);
            const data = await response.json();
            return data;
        }
        catch(error){
            alert(error);
            return null;
        }
    }
    return {getdata};
}



export default tvFunction;