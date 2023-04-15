import tvFunction from './modules/tvApi';
import view from './modules/view';
import './style.css';

const searchInput = document.getElementById('word');
const searchButton = document.getElementById('btn');
const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

const search = tvFunction();
const screen = view();

searchButton.addEventListener('click', async () => {
    if(searchInput.value === "") return;
    const searchData = await search.getdata(searchInput.value);
    screen.setSearch(searchData);
})

