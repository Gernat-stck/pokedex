import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterCard from "./FilterCard";
import { useParams } from "react-router";

export default function FilterType() {
  const { categoryName } = useParams();

  const [pokemons, setPokemons] = useState([
    {
      name: "",
      url: "",
    },
  ]);
  const traerPokemones = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${categoryName}/`)
      .then((Respuesta) => {
        setPokemons(Respuesta.data.pokemon);
      });
  };
  useEffect(() => {
    traerPokemones();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <div className="text-center inline-flex items-center">
      {Array.isArray(pokemons) && pokemons.length > 1 ? (
        <FilterCard pokemon={pokemons} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
