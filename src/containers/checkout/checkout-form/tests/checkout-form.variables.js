import {
  getUkrPoshtaRegions,
  getUkrPoshtaDistricts,
  getUkrPoshtaCities,
  getUkrPoshtaStreets
} from '../delivery/ukrpost-and-courier/operations/get-ukrPost-address-data.queries';

export const ukrPostMockRegions = [
  {
    request: {
      query: getUkrPoshtaRegions
    },
    result: {
      data: {
        getUkrPoshtaRegions: [
          {
            REGION_UA: 'Вінницька',
            REGION_ID: '1'
          }
        ]
      }
    }
  }
];
export const ukrPostMockDistricts = [
  {
    request: {
      query: getUkrPoshtaDistricts
    },
    result: {
      data: {
        getUkrPoshtaDistricts: [
          {
            DISTRICT_UA: 'Гайсинський',
            DISTRICT_ID: '916'
          }
        ]
      }
    }
  }
];

export const ukrPostMockCities = [
  {
    request: {
      query: getUkrPoshtaCities
    },
    result: {
      data: {
        getUkrPoshtaCities: [
          {
            CITY_UA: 'Адамівка',
            CITY_ID: '27942'
          }
        ]
      }
    }
  }
];

export const ukrPostMockStreets = [
  {
    request: {
      query: getUkrPoshtaStreets
    },
    result: {
      data: {
        getUkrPoshtaStreets: [
          {
            STREET_UA: 'Південна'
          }
        ]
      }
    }
  }
];
