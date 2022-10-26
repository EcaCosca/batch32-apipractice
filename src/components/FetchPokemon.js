import React, {useState, useEffect} from 'react'

const FetchPokemon = () => {
    const [pokemons, setPokemons] = useState()

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200')
            .then((response) => response.json())
            .then((data) => setPokemons(data.results));
    }, [])

  return (
    <div>
        <h2>List of Pokemon</h2>

        {
            pokemons ? 
            <ol>
                {
                    pokemons.map(pokemon=>
                        <li>{pokemon.name.toUpperCase()}</li>
                        )
                }
            </ol>
            : "Loading"
        }


    </div>
  )
}

export default FetchPokemon