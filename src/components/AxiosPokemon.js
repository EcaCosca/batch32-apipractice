import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers'

const AxiosPokemon = () => {
    const [pokemons, setPokemons] = useState()
    const [limit, setLimit] = useState(10)

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`)
            .then(response => {setPokemons(response.data.results)})
    },[limit])

    const handleClick = (e) => {
        setLimit(e.target.innerHTML)
    }

  return (
    <div>
        <h2>Axios Example</h2>
        <button onClick={handleClick}>10</button>
        <button onClick={handleClick}>20</button>
        <button onClick={handleClick}>30</button>

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