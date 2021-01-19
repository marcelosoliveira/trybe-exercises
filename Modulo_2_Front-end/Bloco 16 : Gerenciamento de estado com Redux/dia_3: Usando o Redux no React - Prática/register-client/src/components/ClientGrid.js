import React, { Component } from 'react';
import ClientRow from './ClientRow';

class ClientGrid extends Component {
  constructor() {
    super();
    this.state = {
      ordered: false,
    }

    this.order = this.order.bind(this);
  }

  order() {
    const { ordered } = this.state;
    console.log(ordered);
    ordered 
    ?
      this.setState({
        ordered: false,
      })
    :
      this.setState({
        ordered: true,
      })
  } 
  render() {
    const { ordered } = this.state;
    const { clients } = this.props;
    return (
      <div className="client-grid">
        <h1>Client List</h1>
        <div className="client-filter">
          <input type="button" className="link" value="Client Order" onClick={ this.order }/>
        </div>
        {ordered
        ? [...clients].sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((client, index) => <ClientRow key={index} client={client} />)
        : clients.map((client, index) => <ClientRow key={index}  client={client} />)
        }
      </div>
    );
  }
}

export default ClientGrid;
