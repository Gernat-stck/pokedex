import { useParams } from "react-router";
import CardFiltered from "../Cards/CardFiltered";
export default function FilterCard({ pokemon }) {
const {categoryName} = useParams();
  
  if (!Array.isArray(pokemon) || pokemon.length === 0) {
    return <p>No hay datos de Pokémon disponibles.</p>;
  }

  return (
    <div>
      <h1 className="h1-category">{categoryName}</h1>
      {
      pokemon.map((pokemon, indice) => 
      <CardFiltered key={indice} pokemon={pokemon} />
      )}
    </div>
  );
}

