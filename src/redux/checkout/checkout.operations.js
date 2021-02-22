import { gql } from '@apollo/client';

import { client } from '../../utils/client';

export const getNovaPoshtaPrices = async (cityRecipient, weight, cost, serviceType) => {
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

export const getUkrPostRegions = async () => {
  const res = await client.query({
    query: gql`
      query {
        getUkrPoshtaRegions {
          REGION_UA
          REGION_ID
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return res.data.getUkrPoshtaRegions;
};

export const getUkrPoshtaDistrictsByRegionId = async (id) => {
  const res = await client.query({
    variables: {
      id
    },
    query: gql`
      query($id: ID!) {
        getUkrPoshtaDistrictsByRegionId(id: $id) {
          DISTRICT_UA
          DISTRICT_ID
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return res.data.getUkrPoshtaDistrictsByRegionId;
};

export const getUkrPoshtaCitiesByDistrictId = async (id) => {
  const res = await client.query({
    variables: {
      id
    },
    query: gql`
      query($id: ID!) {
        getUkrPoshtaCitiesByDistrictId(id: $id) {
          CITY_UA
          CITY_ID
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return res.data.getUkrPoshtaCitiesByDistrictId;
};
export const getUkrPoshtaPostOfficesByCityId = async (id) => {
  const res = await client.query({
    variables: {
      id
    },
    query: gql`
      query($id: ID!) {
        getUkrPoshtaPostofficesCityId(id: $id) {
          POSTCODE
          STREET_UA_VPZ
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  return res.data.getUkrPoshtaPostofficesCityId;
};
