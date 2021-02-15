import { gql } from '@apollo/client';

import { client } from '../../utils/client';

export const getNovaPoshtaPrices = async (
  cityRecipient,
  weight,
  cost,
  serviceType
) => {
  const result = await client.query({
    variables: {
      cityRecipient,
      weight,
      cost,
      serviceType
    },
    query: gql`
    query {
        getNovaPoshtaPrices(data:{
              cityRecipient: ${cityRecipient}
              weight: ${weight}
              cost: ${cost}
              seatsAmount: 1
              serviceType: "${serviceType}"
                    })
              {
          cost
          assessedCost
        }
      }`
  });
  await client.resetStore();

  return result.data.getNovaPoshtaPrices;
};
export const getNovaPoshtaStreets = async (cityRef, street) => {
  const result = await client.query({
    variables: {
      cityRef,
      street
    },
    query: gql`
      query($cityRef: String, $street: String) {
        getNovaPoshtaStreets(cityRef: $cityRef, street: $street) {
          description
          ref
          streetsTypeRef
          streetsType
        }
      }
    `
  });
  await client.resetStore();

  return result.data.getNovaPoshtaStreets;
};
export const getNovaPoshtaCities = async (city) => {
  const result = await client.query({
    variables: {
      city
    },
    query: gql`
      query($city: String) {
        getNovaPoshtaCities(city: $city) {
          description
          ref
        }
      }
    `
  });
  await client.resetStore();

  return result.data.getNovaPoshtaCities;
};
export const getNovaPoshtaWarehouses = async (city) => {
  const result = await client.query({
    variables: {
      city
    },
    query: gql`
      query($city: String) {
        getNovaPoshtaWarehouses(city: $city) {
          description
          ref
          shortAddress
          schedule {
            monday
            saturday
            sunday
          }
        }
      }
    `
  });
  await client.resetStore();
  return result.data.getNovaPoshtaWarehouses;
};
