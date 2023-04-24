import Card from "./Cards/Card";


export default function DisplayPokemon({pokemons}) 
{
 
  return (
    <div>
      {
       pokemons.map((pokemon, indice) => 
      <Card key={indice} pokemon={pokemon}/>
      )}
    </div>
  )
}
