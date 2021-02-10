import React from 'react';

import MyContext from './MyContext';

function MyOtherComponent() {
  return (
    <MyContext.Consumer>
      {(value) => (
        value
      )}
    </MyContext.Consumer>
  )
}

export default MyOtherComponent;