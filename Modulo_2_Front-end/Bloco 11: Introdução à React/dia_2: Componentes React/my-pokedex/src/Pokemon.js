import React from "react";
import pokemons from "./data";
import Pokedex from './Pokedex';
import './style.css';

class Pokemon extends React.Component {
  render() {
    return(
    <div className="pokemon-class"> 
        {pokemons.map(({ id, name, type, averageWeight, image }) => 
      <Pokedex
        key={id}
        names={name}
        types={type}
        pesos={averageWeight.value}
        units={averageWeight.measurementUnit}
        images={image}
      />)}
    </div>
    )    
  }
}

export default Pokemon;
