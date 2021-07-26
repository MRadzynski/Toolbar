import React from 'react';

import './Toolbar.styles.css';

const Toolbar = ({
  message,
  position = 'bottom',
  callback = () => alert('hello world!'),
  setIsToolbar,
}) => {
  const handleClick = () => {
    callback();
  };

  const handleExit = () => {
    setIsToolbar(false);
  };

  return (
    <div className={`toolbar ${position}`}>
      <p className='toolbar_message'>{message}</p>
      <button className='toolbar_button' onClick={handleClick}>
        Get Widgets
      </button>
      <span className='toolbar_exit' onClick={handleExit}>
        &#10005;
      </span>
    </div>
  );
};

export default Toolbar;
