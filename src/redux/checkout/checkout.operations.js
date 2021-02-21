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

  return result.data.getNovaPoshtaPrices;
};
export const getNovaPoshtaCities = async (city) => {
  const res = await client.query({
    variables: {
      city
    },
    query: gql`
      query($city: String) {
        getNovaPoshtaCities(city: $city) {
          description
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return res.data.getNovaPoshtaCities;
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
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });

  return result.data.getNovaPoshtaWarehouses;
};
