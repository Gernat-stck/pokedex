import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import FilterCard from '../Cards/FilterCard'



export default function FilterType() {

let location = useLocation();


const [pokemons,setPokemons] = useState({
    pokemon:
    [{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1"}]
}
);
const traerPokemones = () => 
{  
    axios.get(`${location.state.url}`)
    .then((Respuesta) => 
    {
       setPokemons(Respuesta.data.pokemon);
    })

}
useEffect(() =>
{
    traerPokemones();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[pokemons.length])
return (
<div>
    <FilterCard pokemon={pokemons} />
    
</div>
)
}