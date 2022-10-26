import React, {useEffect, useState} from 'react'
import axios from 'axios'

const AxiosPokemon = () => {
    const [pokemons, setPokemons] = useState()

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
            .then(response => {setPokemons(response.data.results)})
    },[])

  return (
    <div>
        <h2>Axios Example</h2>

        {
            pokemons ?
                <ol>
                    {
                    pokemons.map(pokemon =>
                        <li>{pokemon.name.toUpperCase()}</li>
                        )
                     }
                </ol>
            :
            "Loading"
        }
    </div>
  )
}

export default AxiosPokemon