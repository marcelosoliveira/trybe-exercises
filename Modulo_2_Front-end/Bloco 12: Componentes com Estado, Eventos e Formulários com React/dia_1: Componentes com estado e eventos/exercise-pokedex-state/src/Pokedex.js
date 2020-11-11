import React from "react";
import Pokemon from "./Pokemon";
import Button from './components/Button';
import './components/button.css';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      numberPokemos: 0,
      filter: '',
    }
    this.nextPoketmon = this.nextPoketmon.bind(this);
    this.filterTypePokemon = this.filterTypePokemon.bind(this);
    this.eventButton = this.eventButton.bind(this);
    this.repeatButton = this.repeatButton.bind(this);
    this.buttonDisable = this.buttonDisable.bind(this);
  }

  nextPoketmon() {
    this.setState((previusState, _props) => ({
      numberPokemos: previusState.numberPokemos + 1,
    }));
    if (this.state.numberPokemos >= this.filterTypePokemon(this.state.filter).length - 1) {
      this.setState({numberPokemos: 0});
    }
  }

   filterTypePokemon(type) {
      return this.props.pokemons.filter((pokemon) => {
      if (pokemon.type === type) {
        return pokemon;
      } else if (type === '' || type === "All") {
        return this.props.pokemons;
      }         
    });
  }

  eventButton(event) {
    this.setState({numberPokemos: 0});
    this.setState ({
      filter: event.target.value,
    });
  }

  repeatButton() {
    return this.props.pokemons.map((pokemon) => 
    Object.values(pokemon)[2]).filter((type, index, array) => index === array.indexOf(type));
  }

  buttonDisable() {
    if (this.filterTypePokemon(this.state.filter).length - 1 < 1) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <section>
        <div className="pokedex">    
          <Pokemon key={this.filterTypePokemon(this.state.filter)[this.state.numberPokemos].id} 
            pokemon={this.filterTypePokemon(this.state.filter)[this.state.numberPokemos]} />        
          </div>
          <div className="button-container">           
          <Button onClick={this.eventButton} className="button-class-type" value="All" />  
          {this.repeatButton().map((type) => {
            return <Button onClick={this.eventButton} 
            className="button-class-type" value={type} />
          })}
          <Button onClick={this.nextPoketmon} className="button-class-next" value="Next pokemon" 
          disable={this.buttonDisable()} />           
        </div>
      </section>  
    );
  }
}

export default Pokedex;
