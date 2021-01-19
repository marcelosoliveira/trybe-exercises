import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import duckCrazy from '../images/duck-crazy.gif';

class PageNotFound extends Component {
  render() {
    return (
      <div className="grid">
        <div className="links">
          <Link className="link" to="/">Home</Link>
        </div>
        <div className="grid">
          <h1>I tried, tried, tried</h1>
          <img className="logo-404" src={duckCrazy} alt="duck clients"/>
          <h1>But didn't find this page!!! Sorry!!!</h1>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
