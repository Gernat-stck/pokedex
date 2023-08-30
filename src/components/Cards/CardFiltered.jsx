import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CardFiltered({ pokemon }) {
  const [onePokemon, setOnepokemon] = useState({
    name: "",
    sprites: {front_default:"" , other: { dream_world: { front_default: "" } } },
    stats: [
      { base_stat: "" },
      { base_stat: "" },
      { base_stat: "" },
      { base_stat: "" },
      { base_stat: "" },
      { base_stat: "" },
    ],
    type: [{ type: "" }, { url: "" }],
  });
  const datosPokemon = (url) => {
    axios.get(url).then((Respuesta) => {
      setOnepokemon(Respuesta.data);
      console.log(Respuesta);
    });
  };
  useEffect(() => {
    datosPokemon(pokemon.pokemon.url);
  }, [pokemon.pokemon.url]);

  return (
    <div className="card-container">
      <div>
        <div className="wrapper">
          <div className="clash-card ground">
            <div className="clash-card__image clash-card__image--ground">
              {onePokemon.sprites.other.dream_world.front_default !== null ? (
                <img
                  src={onePokemon.sprites.other.dream_world.front_default}
                  alt={onePokemon.name}
                />
              ) : (
                <img
                  src={onePokemon.sprites.front_default}
                  alt={onePokemon.name}
                />
              )}
              
              
            </div>

            <div className="clash-card__unit-name">{onePokemon.name}</div>
            <div className="clash-card__unit-stats clash-card__unit-stats--ground clearfix">
              <div className="one-third">
                <div className="stat">Ataque</div>
                <div className="stat-value">
                  {onePokemon.stats[1].base_stat}
                </div>
              </div>

              <div className="one-third">
                <div className="stat">Defensa</div>
                <div className="stat-value">
                  {onePokemon.stats[2].base_stat}
                </div>
              </div>
              <div className="one-third no-border">
                <div className="stat">Velocidad</div>
                <div className="stat-value">
                  {onePokemon.stats[5].base_stat}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
