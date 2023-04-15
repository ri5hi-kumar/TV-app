const view = () => {
    function setSearch(data){
        if(!data) return;

        console.log(data);
        const image = document.createElement('img');
        image.src = data[0].show.image.medium;
        document.body.append(image);
    }

    return {setSearch}
}


export default view;