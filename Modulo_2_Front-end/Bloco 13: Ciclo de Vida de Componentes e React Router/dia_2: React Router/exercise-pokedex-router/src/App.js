import React from 'react';
import './App.css';
import './pokemon.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './About';

import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">About</Link>
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props}
          pokemons={pokemons} />}></Route>
        <Route path={`/pokemons/:id`} render={(props) => <PokemonDetails {...props} 
          pokemons={pokemons} />}></Route>
        <Route path="/about" component={About} ></Route>     
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;