import CardFilter from "./CardFilter"


export default function FilterCard({pokemon}) {
 
  return (
    <div>
      {
       pokemon.map((pokemon, indice) => 
      <CardFilter key={indice} pokemon={pokemon}/>
      )}
    </div>
  )
}

