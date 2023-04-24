import { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayPokemon from './DisplayPokemon';

export default function ListPokemons() 
{

    const [pokemons,setPokemons] = useState([
        {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1"}
    ]);

    const traerPokemones = () => 
    {  
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        .then((Respuesta) => 
        {
           setPokemons(Respuesta.data.results);
           console.log(Respuesta);
        })

    }
    useEffect(() =>
    {
        traerPokemones();
    },[
        pokemons.length
    ])
   return (
    <div>
        <DisplayPokemon pokemons={pokemons} />
    </div>
  )
}
