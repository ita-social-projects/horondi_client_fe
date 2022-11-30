export const handleClassName = (dataInput, nameInputs, name) =>
  `${dataInput} ${(name === 'firstName' || name === 'lastName') && nameInputs}`;

export const initialValues = (userData) => {
  const { firstName, lastName, email, phoneNumber, address } = userData || {};

  return {
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    phoneNumber: phoneNumber || '',
    country: address.country || '',
    region: address.region || '',
    district: address.district || '',
    city: address.city || '',
    street: address.street || '',
    buildingNumber: address.buildingNumber || '',
    appartment: address.appartment || '',
    zipcode: address.zipcode || ''
  };
};
