import React from 'react';
import { Link } from 'react-router-dom';
import Star from './star.png'
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {id, name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>             
            <Link to={`/pokemons/${id}`}>More details</Link>
        </p> 
        </div>
        <img src={image} alt={`${name} sprite`} />
        {/* {this.props.idF.map((id) => */}
                <img className="star-pokemon" src={this.props.favorite === true && 
                  parseInt(this.props.id) === id  ? Star : ""} alt="Star" 
                  style={{display: this.props.favorite !== false && 
                  parseInt(this.props.id) !== id ? "none" : ""}} />){/* }   */}         
      </div>
    );
  }
}

export default Pokemon;