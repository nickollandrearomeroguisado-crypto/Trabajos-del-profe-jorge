export async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
}

// export async function getPokemonImage(imagen) {
//     const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png/${imagen}`);
//     const data = await response.json();
//     return data;
// }