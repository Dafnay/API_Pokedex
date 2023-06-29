const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const callApi= async ()=>{

	try{
		const response = await fetch('https://pokeapi.co/api/v2/pokemon');
		console.log(response)
		const data= await response.json();
		console.log(data.results)
	}
	catch(err){
		console.log(err)
	}
}
callApi()



//card and elements
poke_container.setAttribute('class','poke-container')

const pokemon = document.createElement('div')
pokemon.setAttribute('class', 'pokemon')

const pokeImag = document.createElement('img')
pokeImag.setAttribute('class', 'img-container')

const infoPokemon = document.createElement('div')
infoPokemon.setAttribute('class','info')

const numberPoke = document.createElement('span')
numberPoke.setAttribute('class', 'number')

const pokeName = document.createElement('h3')
pokeName.setAttribute('class','name')

const pokeType = document.createElement('small')
pokeType.setAttribute('class', 'type')

const typeRes = document.createElement('span')


//append elements
poke_container.appendChild(pokemon)
pokemon.appendChild(pokeImag);
pokemon.appendChild(infoPokemon)
infoPokemon.appendChild(numberPoke)
infoPokemon.appendChild(pokeName)
infoPokemon.appendChild(PokeType)
infoPokemon.appendChild(typeRes)



