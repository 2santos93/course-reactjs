import React from 'react';

import './ui.css';

export const FabButton = ({ classStyle, onClickHandler, icon }) => {
  return (
    <button className={`btn ${classStyle}`} onClick={onClickHandler}>
      <i className={`fas ${icon}`}></i>
    </button>
  );
};
