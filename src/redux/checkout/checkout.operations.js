import { getItems } from '../../utils/client';

export const getNovaPoshtaPrices = async (cityRecipient, weight, cost, serviceType) => {
  const getNovaPoshtaPricesQuery = `
    query {
      getNovaPoshtaPrices(data:{
        cityRecipient: $cityRecipient
        weight: $weight
        cost: $cost
        seatsAmount: 1
        serviceType: $serviceType
              })
        {
        cost
        assessedCost
      }
  }`;
  const result = await getItems(getNovaPoshtaPricesQuery, {
    cityRecipient,
    weight,
    cost,
    serviceType
  });

  return result?.data?.getNovaPoshtaPrices;
};
export const getNovaPoshtaCities = async (city) => {
  const getNovaPoshtaCitiesQuery = `
    query($city: String) {
      getNovaPoshtaCities(city: $city) {
        description
      }
    }
  `;
  const result = await getItems(getNovaPoshtaCitiesQuery, { city });

  return result?.data?.getNovaPoshtaCities;
};
export const getNovaPoshtaWarehouses = async (city) => {
  const getNovaPoshtaWarehousesQuery = `
    query($city: String) {
      getNovaPoshtaWarehouses(city: $city) {
        description
      }
    }
  `;
  const result = await getItems(getNovaPoshtaWarehousesQuery, { city });

  return result?.data?.getNovaPoshtaWarehouses;
};
