import { gql } from '@apollo/client';

export const getNovaPoshtaPrices = gql`
  query {
    getNovaPoshtaPrices(
      data: {
        cityRecipient: $cityRecipient
        weight: $weight
        cost: $cost
        seatsAmount: 1
        serviceType: $serviceType
      }
    ) {
      cost
      assessedCost
    }
  }
`;

export const getNovaPoshtaCities = gql`
  query ($city: String) {
    getNovaPoshtaCities(city: $city) {
      description
    }
  }
`;

export const getNovaPoshtaWarehouses = gql`
  query ($city: String) {
    getNovaPoshtaWarehouses(city: $city) {
      description
    }
  }
`;
