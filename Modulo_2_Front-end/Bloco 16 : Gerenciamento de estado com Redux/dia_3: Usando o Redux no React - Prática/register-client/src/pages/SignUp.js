import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signUp } from '../redux/actions';

import toast from '../helpers/functions';

import FormRegisterBox from '../components/FormRegisterBox';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.registerUser = this.registerUser.bind(this);
  }

  validData(email, password) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
    return (regexEmail.test(email) && password !== '')
  }

  registerUser ({ email, password }) {
    const { userList } = this.props;
    const validUser = userList.find(({ email: userEmail }) => userEmail === email);
    if(this.validData(email, password)) {
      if (validUser === undefined ){
        const { signUp } = this.props;
        signUp(email, password);
        this.setState({ message: 'User registered'})
        toast();
      } else {
        this.setState({ message: 'User already exist!' })
        toast();
      }
    } else {
      this.setState({ message: 'Please put email and password and press register user!' })
      toast();
    }
  }

  render() {
    const inputData = ['email', 'password'];
    const buttons = ['register user'];
    const boxMessage = (
      <div className="text">
        <h2>Welcome</h2>
        <h3>Please Insert data Below</h3>
      </div>
    );
    const { message } = this.state;

    return (
      <div className="grid">
        <div id="snackbar">{ message }</div>
        <div className="links">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/login">Login</Link>
        </div>
        <FormRegisterBox inputs={inputData} buttons={buttons} callback={this.registerUser} boxMessage={boxMessage} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.login.users,
});

const mapDispatchToProps = dispatch => ({
  signUp: (email, password) => dispatch(signUp(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
