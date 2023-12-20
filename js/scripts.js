// IIFE (Immediately Invoked Function Expression) function
let pokemonRepository=(function(){
    let pokemonList= [];
    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll(){
        return pokemonList;
    }

    function add(pokemon){
        return pokemonList.push(pokemon);
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function ()  {
            showModal(pokemon);
        });
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn', 'btn-primary', 'button-class');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemonModal');
        listItem.appendChild(button);
        listItem.classList.add('list-group-item-light');
        pokemonList.appendChild(listItem);
        //added an event listener
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon= {
                    name: item.name,
                    height: item.height,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url= item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            //Details to the item
            item.imageUrl = details.sprites.front_default;
            item.height= details.height;
            item.types= details.types;
        }).catch(function (e){
            console.error(e);
        });
    }

    function showModal(pokemon) {
        let modalTitle= document.querySelector('.modal-title');
        let modalBody= document.querySelector('.modal-body');

        modalTitle.innerHTML= '';
        modalBody.innerHTML= '';

        let titleElement= document.createElement('h1');
        titleElement.innerText= pokemon.name;

        let contentElement= document.createElement('p');
        contentElement.innerText= 'Height:' + ' ' + pokemon.height;

        let imageElement= document.createElement('img');
        imageElement.src= pokemon.imageUrl;

        modalTitle.appendChild(titleElement);
        modalBody.appendChild(contentElement);
        modalBody.appendChild(imageElement);
        
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal
    }
})()

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
})







