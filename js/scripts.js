let pokemonList= [
    {
    name: "Pikachu",
    heigth: 0.4,
    types: ['electric' , 'ground']
    },
    {
    name:"Squirtle",
    heigth: 0.5,
    types: ['water']
    },
    {
    name: "Charmander",
    heigth:0.6,
    types: ['fire']
    },
    {
    name: "Jigglypuff",
    heigth: 0.5,
    types: ['normal' , 'fairy']
    }
]; 

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].heigth > 0.5) {
        document.write('<br>' + pokemonList[i].name + ' (heigth:' + pokemonList[i].heigth + ') - Wow, that\’s big!' + '</br>');
    } else {
        document.write('<br>' + pokemonList[i].name + ' (heigth:' + pokemonList[i].heigth + ')' + '</br>');
    }
}

