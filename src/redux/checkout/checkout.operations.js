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
export const getUkrPostRegions = async () => {
  const getUkrPostRegionsQuery = `
    query {
      getUkrPoshtaRegions {
        REGION_UA
        REGION_ID
      }
    }
  `;
  const result = await getItems(getUkrPostRegionsQuery);

  return result?.data?.getUkrPoshtaRegions;
};
export const getUkrPoshtaDistrictsByRegionId = async (id) => {
  const getUkrPoshtaDistrictsByRegionIdQuery = `
    query($id: ID!) {
      getUkrPoshtaDistrictsByRegionId(id: $id) {
        DISTRICT_UA
        DISTRICT_ID
      }
    }
  `;
  const result = await getItems(getUkrPoshtaDistrictsByRegionIdQuery, { id });

  return result?.data?.getUkrPoshtaDistrictsByRegionId;
};

export const getUkrPoshtaCitiesByDistrictId = async (id) => {
  const getUkrPoshtaCitiesByDistrictIdQuery = `
    query($id: ID!) {
      getUkrPoshtaCitiesByDistrictId(id: $id) {
        CITY_UA
        CITY_ID
      }
    }
  `;
  const result = await getItems(getUkrPoshtaCitiesByDistrictIdQuery, { id });

  return result?.data?.getUkrPoshtaCitiesByDistrictId;
};

export const getUkrPoshtaPostOfficesByCityId = async (id) => {
  const getUkrPoshtaPostOfficesByCityIdQuery = `
    query($id: ID!) {
      getUkrPoshtaPostofficesCityId(id: $id) {
        POSTCODE
        STREET_UA_VPZ
      }
    }
  `;
  const result = await getItems(getUkrPoshtaPostOfficesByCityIdQuery, { id });

  return result?.data?.getUkrPoshtaPostofficesCityId;
};
