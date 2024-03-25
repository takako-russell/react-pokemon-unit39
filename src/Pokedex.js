import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = ({ monsters }) => {
  return (
    <div className="Pokedex">
      <h3 className="Pokedex-title">Pokedex</h3>
      <div className="Pokedex-cards">
        {monsters.map((monster) => (
          <Pokecard
            id={monster.id}
            name={monster.name}
            type={monster.type}
            exp={monster.base_experience}
          />
        ))}
      </div>
    </div>
  );
};
export default Pokedex;
