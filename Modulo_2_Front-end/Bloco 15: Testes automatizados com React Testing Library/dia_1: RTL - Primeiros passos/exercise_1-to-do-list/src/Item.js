import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

  componentDidUpdate() {
    this.updateClassName();
  }

  updateClassName() {
    const classSelect = document.getElementsByClassName('selected');
    if (classSelect.length > 0) {
      for (let index = 0; index < classSelect.length; index += 1) {
        classSelect[index].className = 'unselected';
      }
    }
  }

  changeClassName({ target }) {
    if(target.className === 'unselected') {
      target.className = 'selected';
    } else {
      target.className = 'unselected';
    }
  }

  render() {
    const { content } = this.props;

    return (
      <div className="unselected" id={ content } onClick={ this.changeClassName }>
        {content}
      </div>
    );
  }
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
