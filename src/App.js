import React from 'react';
import Routess from './frontend/routes/Routess'
import GlobalState from './frontend/global/GlobalState';

const App = () => {

  return (
    <GlobalState>
      <Routess />
    </GlobalState>
  );
}

export default App;