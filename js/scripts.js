// IIFE (Immediately Invoked Function Expression) function
let pokemonRepository=(function(){
    let pokemonList= [
        {
            name: "Pikachu",
            heigth: 0.4,
            types: ['electric', 'ground']
        },
        {
            name: "Squirtle",
            heigth: 0.5,
            types: ['water']
        },
        {
            name: "Charmander",
            heigth: 0.6,
            types: ['fire']
        },
        {
            name: "Jigglypuff",
            heigth: 0.5,
            types: ['normal', 'fairy']
        }
    ]

    function getAll(){
        return pokemonList;
    }

    function add(pokemon){
        return pokemonList.push(pokemon);
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        //added an event listener
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    }
})()

pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
});







