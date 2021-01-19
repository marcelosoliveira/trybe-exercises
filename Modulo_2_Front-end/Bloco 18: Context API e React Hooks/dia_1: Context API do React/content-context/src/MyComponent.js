import React from 'react';

import MyOtherComponent from './MyOtherComponent';
import MyContext from './MyContext';

function MyComponent() {
  return (
    <MyContext.Provider value="Inciando ContextAPI">
      <MyOtherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;