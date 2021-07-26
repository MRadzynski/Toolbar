import React from 'react';

import './ShowBarCTA.styles.css';

const ShowBarCTA = ({ isToolbar, setIsToolbar }) => {
  const handleClick = () => {
    if (isToolbar) {
      return;
    }
    setIsToolbar(true);
  };

  return (
    <button className='showBarCTA' onClick={handleClick}>
      <p className='showBarText'>Show Bar!</p>
    </button>
  );
};

export default ShowBarCTA;
