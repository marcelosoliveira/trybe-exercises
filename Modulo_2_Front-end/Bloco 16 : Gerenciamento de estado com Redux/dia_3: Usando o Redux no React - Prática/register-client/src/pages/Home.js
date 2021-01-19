import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import toast from '../helpers/functions';

import duckImage from '../images/ducks-client.png';

class Home extends Component {

  componentDidMount() {
    const { message } = this.props;
    if (message !== '') toast();
  }
  render() {
    const { message } = this.props;
    return (
      <div className="home-grid">
        <div id="snackbar">{ message }</div>
        <div className="links">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/signup">Sign Up</Link>
        </div>
        <div className="logo-system">
          <h1>Duck</h1>
          <img src={duckImage} alt="duck clients"/>
          <h1>Client System</h1>
        </div>
      </div>
    );
  }
}

export default Home;
