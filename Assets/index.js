

window.onload = function (){
    fetch(`https://api.unsplash.com/photos?per_page=25&client_id=${API_KEY}`).then(covert_to_json)
    .then(function (data){
        generatesCards(data)

    });
}

function generatesCards(data){
    console.log(data);
    const container = document.getElementById('image_container')

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