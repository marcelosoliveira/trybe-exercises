import React from 'react';

class About extends React.Component {
  render() {
    return (
        <div>
        <p className ="about-pokedex-p" >The Pokédex is a handheld electronic encyclopedia 
          device; one which is capable ofrecording and retaining information of the various 
          Pokémon of the world. 
          In order to accomplish Professor Oak's goal of a complete Pokémon database, 
          the Pokédex is designed to find and record data on each Pokémon the Trainer meets. 
          Pokémon are added to the Pokédex simply by encountering them in battle or, sometimes, 
          by seeing a picture of the Pokémon. However, detailed entries are not recorded until 
          the player catches the Pokémon, receives it as a 
          prize/gift or acquires it in a trade.
        </p>
        <img src="https://cdn.bulbagarden.net/upload/3/37/RG_Pok%C3%A9dex.png" 
          className="pokedex-img" alt="Pokedex"/>
      </div>
    );
  }
}

export default About;
