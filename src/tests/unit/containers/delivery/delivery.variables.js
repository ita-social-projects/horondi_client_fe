import {
  getUkrPoshtaRegions,
  getUkrPoshtaDistricts,
  getUkrPoshtaCities,
  getUkrPoshtaPostOffices
} from '../../../../containers/checkout/checkout-form/delivery/ukrpost-and-courier/operations/get-ukrPost-address-data.queries';

export const props = {
  values: {
    region: '',
    district: '',
    city: '',
    courierOffice: ''
  },
  touched: {
    region: 'test',
    district: 'test',
    city: 'test',
    courierOffice: 'test'
  },
  errors: {
    region: 'Region cannot be empty',
    district: 'Cannot be empty',
    city: 'Cannot be empty',
    courierOffice: 'Cannot be empty'
  }
};
export const mockRequestData = [
  {
    request: {
      query: getUkrPoshtaRegions
    },
    result: {
      data: {
        getUkrPoshtaRegions: {
          REGION_UA: 'Житомирська',
          REGION_ID: '1'
        }
      }
    }
  },
  {
    request: {
      query: getUkrPoshtaDistricts,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        getUkrPoshtaDistrictsByRegionId: {
          DISTRICT_UA: 'Житомирський',
          DISTRICT_ID: '2'
        }
      }
    }
  },
  {
    request: {
      query: getUkrPoshtaCities,
      variables: {
        id: '2'
      }
    },
    result: {
      data: {
        getUkrPoshtaCitiesByDistrictId: {
          CITY_UA: 'Житомир',
          CITY_ID: '1'
        }
      }
    }
  },
  {
    request: {
      query: getUkrPoshtaPostOffices,
      variables: {
        id: '1'
      }
    },
    result: {
      data: {
        getUkrPoshtaPostofficesCityId: {
          POSTCODE: '1',
          STREET_UA_VPZ: '1'
        }
      }
    }
  }
];
