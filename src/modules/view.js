const view = () => {
    const searchResult = document.getElementById('searchResult');

    function setData(shows) {
        for (let result of shows) {
            if (result.show.image) {
                const image = document.createElement('img');
                image.src = result.show.image.medium;
                searchResult.appendChild(image);
            }
        }
    }

    function clearData(){
        while (searchResult.firstChild) {
            searchResult.removeChild(searchResult.firstChild);
        }
    }

    function setSearch(data) {
        if (!data) return;
        setData(data);
    }

    return { setSearch, clearData }
}


export default view;