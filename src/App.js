import React, { useState } from 'react';

import ShowBarCTA from './components/ShowBarCTA/ShowBarCTA';
import Toolbar from './components/Toolbar/Toolbar';

import './App.css';

function App() {
  const [isToolbar, setIsToolbar] = useState(false);

  return (
    <div className='App'>
      <ShowBarCTA isToolbar={isToolbar} setIsToolbar={setIsToolbar} />
      {isToolbar ? (
        <Toolbar
          message='Add beautiful widgets to your website'
          position='bottom'
          setIsToolbar={setIsToolbar}
        />
      ) : null}
    </div>
  );
}

export default App;
