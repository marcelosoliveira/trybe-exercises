import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Clients from './pages/Clients';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ClientRegister from './pages/ClientRegister';
import PageNotFound from './pages/PageNotFound';

import { connect } from 'react-redux';

import './App.css';

class App extends Component {

  render() {
    const { loginStatus } = this.props;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ () => <Home message="" />} />
            <Route path="/clients" render={ () =>
                loginStatus !== 'accepted'
                ?
                <Home message="Please make Login or SignUp!" />
                :
                <Clients/>
              }
            />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ SignUp } />
            <Route path="/clientregister" render={ () =>
                loginStatus !== 'accepted'
                ?
                <Home message="Please make Login or SignUp!" />
                :
                <ClientRegister/>
              }
            />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStatus: state.login.login,
});

export default connect(mapStateToProps)(App);
