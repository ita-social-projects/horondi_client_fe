import {
  setNovaPoshtaCities,
  setNovaPoshtaWarehouse,
  setNovaPoshtaPrices,
  setDeliveryLoading,
  setUkrPostRegions,
  setUkrPostDistricts,
  setUkrPostCities,
  setUkrPostPostOffices
} from '../checkout.actions';
import { checkoutReducer } from '../checkout.reducer';

describe('Checkout reducer tests', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      deliveryLoading: false,
      cities: [],
      warehouses: [],
      price: {},
      ukrPoshtaCities: [],
      ukrPoshtaRegions: [],
      ukrPoshtaDistricts: [],
      ukrPoshtaPostOffices: []
    };
  });

  it('should return default state', () => {
    expect(checkoutReducer(initialState, {})).toEqual(initialState);
  });

  it('should set loading to true', () => {
    const state = {
      ...initialState,
      deliveryLoading: true
    };

    expect(checkoutReducer(initialState, setDeliveryLoading(true))).toEqual(state);
  });

  it('should set array of cities', () => {
    const state = {
      ...initialState,
      cities: [
        {
          description: 'Львів',
          ref: 'db5c88f5-391c-11dd-90d9-001a92567626'
        },
        {
          description: 'Львівське',
          ref: '90a1d47c-a7a5-11e9-b73a-005056b24375'
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setNovaPoshtaCities([
          {
            description: 'Львів',
            ref: 'db5c88f5-391c-11dd-90d9-001a92567626'
          },
          {
            description: 'Львівське',
            ref: '90a1d47c-a7a5-11e9-b73a-005056b24375'
          }
        ])
      )
    ).toEqual(state);
  });

  it('should set warehouses', () => {
    const state = {
      ...initialState,
      warehouses: [
        {
          description: 'Відділення № 1: вул. Ангарська, 13/1',
          ref: '4ecddea5-1986-11e5-add9-005056887b8d',
          shortAddress: 'Авангард, Ангарська, 13/1',
          schedule: {
            monday: '09:00-19:00',
            saturday: '09:00-17:00',
            sunday: '11:00-17:00'
          }
        },
        {
          description: 'Відділення №2: пров. Степний, 1а',
          ref: '08b8e8c2-11f4-11ea-9295-005056b24375',
          shortAddress: 'Авангард, Степний, 1а',
          schedule: {
            monday: '09:00-19:00',
            saturday: '09:00-17:00',
            sunday: '11:00-17:00'
          }
        },
        {
          description: 'Поштомат "Нова Пошта" №5083: вул. Ангарська, 12 (маг. АТБ)',
          ref: 'ddb1aa3e-cd91-11ea-b39d-b8830365bd14',
          shortAddress: 'Авангард, Ангарська, 12 (маг. АТБ)',
          schedule: {
            monday: '00:01-23:59',
            saturday: '00:01-23:59',
            sunday: '00:01-23:59'
          }
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setNovaPoshtaWarehouse([
          {
            description: 'Відділення № 1: вул. Ангарська, 13/1',
            ref: '4ecddea5-1986-11e5-add9-005056887b8d',
            shortAddress: 'Авангард, Ангарська, 13/1',
            schedule: {
              monday: '09:00-19:00',
              saturday: '09:00-17:00',
              sunday: '11:00-17:00'
            }
          },
          {
            description: 'Відділення №2: пров. Степний, 1а',
            ref: '08b8e8c2-11f4-11ea-9295-005056b24375',
            shortAddress: 'Авангард, Степний, 1а',
            schedule: {
              monday: '09:00-19:00',
              saturday: '09:00-17:00',
              sunday: '11:00-17:00'
            }
          },
          {
            description: 'Поштомат "Нова Пошта" №5083: вул. Ангарська, 12 (маг. АТБ)',
            ref: 'ddb1aa3e-cd91-11ea-b39d-b8830365bd14',
            shortAddress: 'Авангард, Ангарська, 12 (маг. АТБ)',
            schedule: {
              monday: '00:01-23:59',
              saturday: '00:01-23:59',
              sunday: '00:01-23:59'
            }
          }
        ])
      )
    ).toEqual(state);
  });

  it('should set prices', () => {
    const state = {
      ...initialState,
      price: { cost: 68, assessedCost: 3600 }
    };

    expect(
      checkoutReducer(initialState, setNovaPoshtaPrices({ cost: 68, assessedCost: 3600 }))
    ).toEqual(state);
  });

  it('should set array of regions from UkrPoshta', () => {
    const state = {
      ...initialState,
      ukrPoshtaRegions: [
        {
          REGION_ID: '1',
          REGION_UA: 'Вінницька',
          REGION_EN: 'Vinnytska'
        },
        {
          REGION_ID: '2',
          REGION_UA: 'Волинська',
          REGION_EN: 'Volynska'
        },
        {
          REGION_ID: '4',
          REGION_UA: 'Дніпропетровська',
          REGION_EN: 'Dnipropetrovska'
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setUkrPostRegions([
          {
            REGION_ID: '1',
            REGION_UA: 'Вінницька',
            REGION_EN: 'Vinnytska'
          },
          {
            REGION_ID: '2',
            REGION_UA: 'Волинська',
            REGION_EN: 'Volynska'
          },
          {
            REGION_ID: '4',
            REGION_UA: 'Дніпропетровська',
            REGION_EN: 'Dnipropetrovska'
          }
        ])
      )
    ).toEqual(state);
  });

  it('should set array of districts from UkrPoshta', () => {
    const state = {
      ...initialState,
      ukrPoshtaDistricts: [
        {
          REGION_ID: '4',
          REGION_UA: 'Дніпропетровська',
          REGION_EN: 'Dnipropetrovska',
          DISTRICT_ID: '62',
          DISTRICT_UA: 'Апостолівський',
          DISTRICT_EN: 'Apostolivskyi'
        },
        {
          REGION_ID: '4',
          REGION_UA: 'Дніпропетровська',
          REGION_EN: 'Dnipropetrovska',
          DISTRICT_ID: '63',
          DISTRICT_UA: 'Вільногірськ',
          DISTRICT_EN: 'Vilnohirsk'
        },
        {
          REGION_ID: '4',
          REGION_UA: 'Дніпропетровська',
          REGION_EN: 'Dnipropetrovska',
          DISTRICT_ID: '584',
          DISTRICT_UA: 'Дніпро (місто)',
          DISTRICT_EN: 'Dnipro (city)'
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setUkrPostDistricts([
          {
            REGION_ID: '4',
            REGION_UA: 'Дніпропетровська',
            REGION_EN: 'Dnipropetrovska',
            DISTRICT_ID: '62',
            DISTRICT_UA: 'Апостолівський',
            DISTRICT_EN: 'Apostolivskyi'
          },
          {
            REGION_ID: '4',
            REGION_UA: 'Дніпропетровська',
            REGION_EN: 'Dnipropetrovska',
            DISTRICT_ID: '63',
            DISTRICT_UA: 'Вільногірськ',
            DISTRICT_EN: 'Vilnohirsk'
          },
          {
            REGION_ID: '4',
            REGION_UA: 'Дніпропетровська',
            REGION_EN: 'Dnipropetrovska',
            DISTRICT_ID: '584',
            DISTRICT_UA: 'Дніпро (місто)',
            DISTRICT_EN: 'Dnipro (city)'
          }
        ])
      )
    ).toEqual(state);
  });

  it('should set array of cities from UkrPoshta', () => {
    const state = {
      ...initialState,
      ukrPoshtaCities: [
        {
          REGION_ID: '4',
          REGION_UA: 'Дніпропетровська',
          REGION_EN: 'Dnipropetrovska',
          DISTRICT_ID: '584',
          DISTRICT_UA: 'Дніпро (місто)',
          DISTRICT_EN: 'Dnipro (city)',
          CITY_ID: '10748',
          CITY_UA: 'Дніпро',
          CITY_EN: 'Dnipro'
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setUkrPostCities([
          {
            REGION_ID: '4',
            REGION_UA: 'Дніпропетровська',
            REGION_EN: 'Dnipropetrovska',
            DISTRICT_ID: '584',
            DISTRICT_UA: 'Дніпро (місто)',
            DISTRICT_EN: 'Dnipro (city)',
            CITY_ID: '10748',
            CITY_UA: 'Дніпро',
            CITY_EN: 'Dnipro'
          }
        ])
      )
    ).toEqual(state);
  });

  it('should set array of post offices from UkrPoshta', () => {
    const state = {
      ...initialState,
      ukrPoshtaPostOffices: [
        {
          CITY_ID: '10748',
          CITY_UA: 'Дніпро',
          CITY_UA_TYPE: 'м.',
          POSTTERMINAL: '1',
          POSTOFFICE_ID: '12489',
          POSTOFFICE_UA: '49000 Дніпро',
          POSTCODE: '49000',
          ISAUTOMATED: '1',
          PHONE: '056-744-81-90, 050-160-97-27',
          STREET_ID_VPZ: '448135',
          STREET_UA_VPZ: 'просп. Дмитра Яворницького, 62'
        },
        {
          CITY_ID: '10748',
          CITY_UA: 'Дніпро',
          CITY_UA_TYPE: 'м.',
          POSTTERMINAL: '1',
          POSTOFFICE_ID: '19192',
          POSTOFFICE_UA: '49001 Дніпро',
          POSTCODE: '49001',
          ISAUTOMATED: '1',
          PHONE: null,
          STREET_ID_VPZ: '64624',
          STREET_UA_VPZ: 'вул. Михайла Грушевського, 10'
        }
      ]
    };
    expect(
      checkoutReducer(
        initialState,
        setUkrPostPostOffices([
          {
            CITY_ID: '10748',
            CITY_UA: 'Дніпро',
            CITY_UA_TYPE: 'м.',
            POSTTERMINAL: '1',
            POSTOFFICE_ID: '12489',
            POSTOFFICE_UA: '49000 Дніпро',
            POSTCODE: '49000',
            ISAUTOMATED: '1',
            PHONE: '056-744-81-90, 050-160-97-27',
            STREET_ID_VPZ: '448135',
            STREET_UA_VPZ: 'просп. Дмитра Яворницького, 62'
          },
          {
            CITY_ID: '10748',
            CITY_UA: 'Дніпро',
            CITY_UA_TYPE: 'м.',
            POSTTERMINAL: '1',
            POSTOFFICE_ID: '19192',
            POSTOFFICE_UA: '49001 Дніпро',
            POSTCODE: '49001',
            ISAUTOMATED: '1',
            PHONE: null,
            STREET_ID_VPZ: '64624',
            STREET_UA_VPZ: 'вул. Михайла Грушевського, 10'
          }
        ])
      )
    ).toEqual(state);
  });
});
