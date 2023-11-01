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

    return {
        getAll: getAll,
        add: add
    }
})()

pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.heigth > 0.5) {
        document.write('<p>' + pokemon.name + ' (heigth:' + pokemon.heigth + ') - Wow, that\’s big!' + '</p>');
    } else {  
        document.write('<p>' + pokemon.name + ' ' + pokemon.heigth + '</p>');
    }
});






