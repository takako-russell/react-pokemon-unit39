import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{props.name}</div>
      <img className="Pokecard-image" src={imgSrc} />
      <div className="Pokecard-type">Type: {props.type}</div>
      <div className="Pokecard-exp">EXP:{props.base_experience}</div>
    </div>
  );
};

export default Pokecard;
