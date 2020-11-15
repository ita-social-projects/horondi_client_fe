import React, { useEffect } from 'react';
import { CheckoutContacts } from '../../../checkout-contacts/checkout-contacts';

const SelfPickupBottom = ({
  departmentSelfPickUpStorage,
  departmentSelfPickUp,
  handleDeliveryTypeValidator
}) => {
  useEffect(() => {
    handleDeliveryTypeValidator(true);
  });
  const moreOneWarehouse = 1;
  const singleWarehouseIndex = 0;

  return departmentSelfPickUpStorage.length > moreOneWarehouse ? (
    <CheckoutContacts departmentSelfPickUp={departmentSelfPickUp} />
  ) : (
    <CheckoutContacts
      departmentSelfPickUp={departmentSelfPickUpStorage[singleWarehouseIndex]}
    />
  );
};

export { SelfPickupBottom };
