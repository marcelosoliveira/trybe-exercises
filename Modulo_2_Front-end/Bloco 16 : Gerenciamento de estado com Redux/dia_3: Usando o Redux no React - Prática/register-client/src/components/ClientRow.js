import React, { Component } from 'react';

import { connect } from 'react-redux';
import { clientDelete } from '../redux/actions';

class ClientRow extends Component {
  render() {
    const { name, age, email } = this.props.client;
    const { deleteClient } = this.props;

    const deleteCli = () => {
      deleteClient(name, age, email);
    }

    return (
      <div className="client-row">
        <span>Name: {name}</span>
        <span>Age: {age}</span>
        <span>Email {email}</span>
        <input type="button" className="link-delete" onClick={ deleteCli } value="X" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteClient: (name, age, email) => dispatch(clientDelete(name, age, email)),
})

export default connect(null, mapDispatchToProps)(ClientRow);
