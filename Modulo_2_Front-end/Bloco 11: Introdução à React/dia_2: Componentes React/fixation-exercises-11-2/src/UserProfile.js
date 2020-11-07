import React from 'react';
import Image2 from './Image2';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.user.name} </p>
        <p> {this.props.user.email} </p>
        <Image2 source={this.props.user.avatar} alt="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  })  
}

UserProfile.defaultProps = {
  user: {
      name: "Erro ao carregar o nome",
      email: "Erro ao carregar o email",
      avatar: "Erro ao carregar a imagem"
  } 
}

export default UserProfile;
