import React from "react";
import "./style.css";
import PropTypes from "prop-types";

class Pokedex extends React.Component {
  render() {
    return (
      <section className="pokedex-class">
        <div>
          <p>
            <strong>{this.props.names}</strong>
          </p>
          <p>{this.props.types}</p>
          <p>
            {this.props.pesos} {this.props.units}
          </p>
        </div>
        <img src={this.props.images} alt="Pokemon" />
      </section>
    );
  }
}

Pokedex.propTypes = {
  names: PropTypes.string,
  types: PropTypes.string,
  pesos: PropTypes.number,
  units: PropTypes.string,
  images: PropTypes.string,
};

Pokedex.defaultProps = {
  names: "Pikachu",
  types: 'Electric',
  pesos: 6.0,
  units: "kg",
  images: "https:cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
};
 
export default Pokedex;
