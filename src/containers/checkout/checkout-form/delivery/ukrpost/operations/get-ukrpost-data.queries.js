import { gql } from '@apollo/client';

export const getUkrPoshtaRegions = gql`
  query {
    getUkrPoshtaRegions {
      REGION_UA
      REGION_ID
    }
  }
`;

export const getUkrPoshtaDistricts = gql`
  query ($id: ID!) {
    getUkrPoshtaDistrictsByRegionId(id: $id) {
      DISTRICT_UA
      DISTRICT_ID
    }
  }
`;

export const getUkrPoshtaCities = gql`
  query ($id: ID!) {
    getUkrPoshtaCitiesByDistrictId(id: $id) {
      CITY_UA
      CITY_ID
    }
  }
`;

export const getUkrPoshtaPostOffices = gql`
  query ($id: ID!) {
    getUkrPoshtaPostofficesCityId(id: $id) {
      POSTCODE
      STREET_UA_VPZ
    }
  }
`;
