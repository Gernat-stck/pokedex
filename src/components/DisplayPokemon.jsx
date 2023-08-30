import Card from "./Cards/Card";


export default function DisplayPokemon({pokemons}) 
{
  console.log(pokemons);
  if (!Array.isArray(pokemons) || pokemons.length === 0) {
    return <p>No hay datos de Pokémon disponibles.</p>;
  }
 
  return (
    <div>
      {
       pokemons.map((pokemon, indice) => 
      <Card key={indice} pokemon={pokemon}/>
      )}
    </div>
  )
}
