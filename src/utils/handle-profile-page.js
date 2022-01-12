export const handleClassName = (dataInput, nameInputs, name) =>
  `${dataInput} ${(name === 'firstName' || name === 'lastName') && nameInputs}`;

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  country: '',
  region: '',
  district: '',
  city: '',
  street: '',
  buildingNumber: '',
  appartment: '',
  zipcode: ''
};
