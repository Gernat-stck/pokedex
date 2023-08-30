import React from "react";

export default function MainCard({ pokemonData }) {
  console.log(pokemonData); 

  return (
    <div className="App-header">
      <div className="slide-container">
        <div className="wrapper">
          <div className="clash-card ground">
            <div className="clash-card__image clash-card__image--ground">
              {pokemonData.img !== null ? (
              <img src={pokemonData.img} alt={pokemonData.name} />) :
              (<img src={pokemonData.img2} alt={pokemonData.name} />)
              }
            </div>
            <div className="clash-card__unit-name">{pokemonData.name}</div>

            <div className="clash-card__unit-stats clash-card__unit-stats--ground clearfix">
              <div className="one-third">
                <div className="stat">Ataque</div>
                <div className="stat-value">{pokemonData.ataque}</div>
              </div>

              <div className="one-third">
                <div className="stat">Velocidad</div>
                <div className="stat-value">{pokemonData.velocidad}</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">Defensa</div>
                <div className="stat-value">{pokemonData.defensa}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
