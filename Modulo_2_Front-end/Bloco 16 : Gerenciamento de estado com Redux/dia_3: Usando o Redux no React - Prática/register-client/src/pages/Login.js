import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { login } from '../redux/actions';

import toast from '../helpers/functions';

import FormRegisterBox from '../components/FormRegisterBox';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginCheck: 'unchecked',
      message: '',
    }
    this.validUser = this.validUser.bind(this);
  }

  didComponentMount() {
    this.setState({ login: 'unchecked'});
  }

  validUser ({ email, password }) {
    const { login, userList } = this.props;
    const validUser = userList.find(({ email: userEmail, password: userPassword }) => userEmail === email && userPassword === password);
    if (validUser !== undefined) {
      this.setState({loginCheck: 'accepted'});
      login('accepted', email);
      this.setState({ message: `Welcome ${email}`})
    } else {
      this.setState({loginCheck: 'rejected'});
      login('rejected', email);
      this.setState({ message: 'User/Password Incorrect!'})
      toast();
    }

  }

  render() {
    const inputData = ['email', 'password'];
    const buttons = ['login'];
    const boxMessage = (
      <div className="text">
          <h2>Welcome Back</h2>
          <h4>Don't you have an account? <Link className="link" to="/signup">Sign up</Link></h4>
      </div>
    );
    const { loginCheck, message } = this.state;

    return (
      <div className="grid">
        <div id="snackbar">{ message }</div>
        <div className="links">
          <Link className="link" to="/">Home</Link>
        </div>
        {loginCheck === 'accepted' ? <Redirect to='/clients' /> :
        <FormRegisterBox inputs={ inputData } buttons={ buttons } boxMessage={ boxMessage } callback={this.validUser}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.login.users,
});

const mapDispatchToProps = dispatch => ({
  login: (status, email) => dispatch(login(status, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
