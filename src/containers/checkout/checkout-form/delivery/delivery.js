import React from 'react';
import SelfPickup from './self-pickup';

const Delivery = ({ isLightTheme, language }) => (
  <div>
    <SelfPickup language={language} isLightTheme={isLightTheme} />
  </div>
);
export default Delivery;
