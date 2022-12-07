export const handleClassName = (dataInput, nameInputs, name) =>
  `${dataInput} ${(name === 'firstName' || name === 'lastName') && nameInputs}`;

export const initialValues = (userData) => {
  const { firstName, lastName, email, phoneNumber, address } = userData || {};
  const { country, region, district, city, street, buildingNumber, appartment, zipcode } =
    address || {};
  return {
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    phoneNumber: phoneNumber || '',
    country: country || '',
    region: region || '',
    district: district || '',
    city: city || '',
    street: street || '',
    buildingNumber: buildingNumber || '',
    appartment: appartment || '',
    zipcode: zipcode || ''
  };
};
