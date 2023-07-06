const pokemonCount = 150

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
let pokemons = [];

// call pokemon api
const callApi = async (url) => {
  return fetch(url)
    .then(data => data.json())
}

//waiting for api data

async function loadPokemons(totalPokemons = 20) {
    return callApi(`https://pokeapi.co/api/v2/pokemon?limit=100${totalPokemons}`)
    .then(data => {
      pokemons = data.results
      pokemons.forEach(async element => {
        const pokemonUrl = element.url
        const pokemonData = await callApi(pokemonUrl)
        createPokemonCard(pokemonData)
      });
      console.log(pokemons)
    })
}
loadPokemons(pokemonCount)



//card and elements

function createPokemonCard(pokemon) {

  //background color to cards
  const pokeTypes = pokemon.types.map(type => type.type.name);
	const type = pokeTypes[0];
  const color = colors[type];


  const poke_container = document.getElementById("poke-container");
  poke_container.setAttribute("class", "poke-container");

  const pokemonCard = document.createElement("div");
  pokemonCard.setAttribute("class", "pokemon");
  pokemonCard.style.backgroundColor = color;

  const pokeImag = document.createElement("div");
  
 
  const img = document.createElement('img');
  img.setAttribute("class", "img-container");
	img.src = pokemon.sprites.front_default;


  const infoPokemon = document.createElement("p");
  infoPokemon.setAttribute("class", "info");

  const numberPoke = document.createElement("span");
  numberPoke.setAttribute("class", "number");
  numberPoke.innerText = pokemon.id;

  const pokeName = document.createElement("h3");
  pokeName.setAttribute("class", "name");
  pokeName.innerText = pokemon.name;

  const pokeType = document.createElement("small");
  pokeType.setAttribute("class", "type");
  pokeType.innerText = "Type :";

  const typeRes = document.createElement("span");
  typeRes.innerText = pokemon.types[0].type.name;

  //append elements

  pokemonCard.appendChild(pokeImag);
  pokeImag.appendChild(img);
  pokemonCard.appendChild(infoPokemon);
  infoPokemon.appendChild(numberPoke);
  infoPokemon.appendChild(pokeName);
  infoPokemon.appendChild(pokeType);
  infoPokemon.appendChild(typeRes);
  poke_container.appendChild(pokemonCard);
}
