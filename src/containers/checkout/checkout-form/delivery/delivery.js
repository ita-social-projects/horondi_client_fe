import React from "react";
import SelfPickup from "./self-pickup";
import { deliveryTypes } from "../../../../configs";

const Delivery = ({ isLightTheme, language, deliveryType }) => (
  <>
    {
      deliveryType === deliveryTypes.SELFPICKUP &&
      <SelfPickup language={language} isLightTheme={isLightTheme}/>
    }
  </>
);
export default Delivery;
