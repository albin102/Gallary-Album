window.onload = function(){
    const location = window.location.href;
    const url = new URL(location);
    const search_params = new URLSearchParams(url.search);

    if (!search_params.has('q') || search_params.get('q') =="" ){
        window.location.href= './';
    }

    fetch(`https://api.unsplash.com/search/photos?per_page=25&query=${search_params.get('q')}&client_id=${API_KEY}`).then(covert_to_json)
    .then(function (data){
        generatesCards(data.results);

        document.getElementsByName('q')[0].value = search_params.get('q');
        document.getElementById('search_query').innerText = search_params.get('q');
    })
}

function generatesCards(data){
    console.log(data);
    const container = document.getElementById('search_image_container')

    for(i=0; i<data.length; i++){
        const singleItem = data[i];
        const card       = document.createElement('div');
        const anchor     = document.createElement('a');
        const image      = document.createElement('img');

        card.classList.add('item');
        anchor.href = `./details.html?id=${singleItem.id}`;
        card.style.backgroundColor = singleItem.color;
        image.src= singleItem.urls.thumb;

        anchor.appendChild(image);
        card.appendChild(anchor);
        container.appendChild(card);
    }

}