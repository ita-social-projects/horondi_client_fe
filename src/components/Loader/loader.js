import React from 'react';
import './loader.css';

export const Loader = () => (
  <div className='wrapper'>
    <div className='lds-dual-ring'>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
