import { getItems } from '../../utils/client';

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
