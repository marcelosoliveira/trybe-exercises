import React from "react";
import './pokemon.css';
import Star from './star.png'

class PokemonDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: false,
      id: [],
    }
  }

  favoritePokemon = async (event) => {
    const { id: idUrl } = this.props.match.params;
    const { checked } = event.target;
    const { id } = this.state
    const value = checked;
    this.setState({
      favorite: await value,
      id: await [...id, idUrl],
    });
    const localId = this.state.id.filter((ids, index) =>
      index === this.state.id.indexOf(ids));
    await localStorage.setItem('favorito', JSON.stringify(this.state.favorite));
    await localStorage.setItem('id', JSON.stringify(localId));
  }

  componentDidMount() {
    this.setState({
      favorite: JSON.parse(localStorage.getItem('favorito')),
      id: JSON.parse(localStorage.getItem('id')),
    });
  }

  render() {
    const { pokemons } = this.props;
    const { id: idUrl } = this.props.match.params;
    return pokemons.map(
      ({ id, name, type, averageWeight, image, foundAt, summary }) => { 
        if (id === parseInt(idUrl)) {
          return (
            <div key={id} >
              <h1>{name} Details</h1>
              <div className="details-pokemon">
                <div>
                  <p>{name}</p>
                  <p>{type}</p>
                  <p>
                    Average weight:{" "}
                    {`${averageWeight.value} ${averageWeight.measurementUnit}`}
                  </p>
                </div>
                <img src={image} alt={`${name} sprite`} />
                {/* {this.state.id.map((id) => */}
                <img className="star-pokemon" src={this.state.favorite === true && 
                  parseInt(this.state.id) === id  ? Star : ""} alt="Star" 
                  style={{display: this.state.favorite !== false && 
                  parseInt(this.state.id) !== id ? "none" : ""}} />{/* } */}
              </div>
              <h1>Summary</h1>
              <p>{summary}</p>
              <div className="location-pokedex">
                {foundAt.map(({ location, map }) =>
                  <span key={location} >
                    <p>{location}</p>
                    <img src={map} alt="Pokemon map" />
                  </span>
                )}
              <div>
                <br/>
                <span>Pokémon favoritado?</span>
                <input type="checkbox" name="favorite" onChange={this.favoritePokemon}
                  checked={this.state.favorite === true && 
                  parseInt(this.state.id) === id ? "true" : "false"} />
              </div>
              </div>
            </div>
          );
        }
      }
    );
  }
}

export default PokemonDetails;
