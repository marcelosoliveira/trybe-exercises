import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logOut } from '../redux/actions';

import ClientGrid from '../components/ClientGrid';

class Clients extends Component {
  render() {
    const { clients, logOut, user } = this.props;
    return (
      <div className="grid">
        <div className="links">
          <Link className="link" to="/" onClick={logOut}>Log Out</Link>
          <span className="user">{ user }</span>
        </div>
        {clients.length === 0
        ?
        <div className="grid">
          <h1>Without Clients Registered</h1>
        </div>
        :
        <div className="grid">
          <ClientGrid clients={ clients }/>
        </div>
        }
        <Link className="link link-register" to="/clientregister">Register Here Your Client</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.cliReg.client,
  user: state.login.user,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
