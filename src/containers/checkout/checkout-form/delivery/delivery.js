import React from 'react';
import SelfPickup from './self-pickup';

const Delivery = ({ isLightTheme, language }) => (
  <>
    <SelfPickup language={language} isLightTheme={isLightTheme} />
  </>
);
export default Delivery;
