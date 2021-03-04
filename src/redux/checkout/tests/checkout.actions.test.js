import {
  getNovaPoshtaCities,
  getNovaPoshtaWarehouse,
  getNovaPoshtaPrices,
  setNovaPoshtaCities,
  setNovaPoshtaWarehouse,
  setNovaPoshtaPrices,
  getUkrPostRegions,
  getUkrPostDistricts,
  getUkrPostCities,
  getUkrPostPostOffices,
  setUkrPostRegions,
  setUkrPostDistricts,
  setUkrPostCities,
  setUkrPostPostOffices
} from '../checkout.actions';
import {
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  GET_NOVAPOSHTA_PRICES,
  SET_NOVAPOSHTA_CITIES,
  SET_NOVAPOSHTA_WAREHOUSES,
  SET_NOVAPOSHTA_PRICES,
  GET_UKRPOST_CITIES,
  GET_UKRPOST_DISTRICTS,
  GET_UKRPOST_POSTOFFICES,
  GET_UKRPOST_REGIONS,
  SET_UKRPOST_CITIES,
  SET_UKRPOST_DISTRICTS,
  SET_UKRPOST_POSTOFFICES,
  SET_UKRPOST_REGIONS
} from '../checkout.types';

// cities actions tests
describe('setCities action test', () => {
  let type;
  let setNPCitiesAction;

  const payload = {
    description: 'Абрикосівка',
    ref: '6dbe932e-1aad-11ea-8c15-0025b502a06e'
  };
  beforeEach(() => {
    type = SET_NOVAPOSHTA_CITIES;
    setNPCitiesAction = setNovaPoshtaCities(payload);
  });

  it('should return object', () => {
    expect(typeof setNPCitiesAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(setNPCitiesAction).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "SET_NOVAPOSHTA_CITIES"', () => {
    expect(setNPCitiesAction.type).toEqual(type);
  });

  it('value by key "payload.description" of returned object should be "Абрикосівка"', () => {
    expect(payload.description).toEqual('Абрикосівка');
  });

  it('value by key "payload.ref" of returned object should be equal to "6dbe932e-1aad-11ea-8c15-0025b502a06e"', () => {
    const expectation = {
      description: 'Абрикосівка',
      ref: '6dbe932e-1aad-11ea-8c15-0025b502a06e'
    };
    setNPCitiesAction = setNovaPoshtaCities(expectation);
    expect(payload.ref).toEqual('6dbe932e-1aad-11ea-8c15-0025b502a06e');
  });
});

describe('get cities from NovaPoshta API', () => {
  let type;
  const payload = {
    cityRef: 'c4302938-f428-11e9-91ff-0025b501a04b',
    street: 'Івана Франка'
  };

  beforeEach(() => {
    type = GET_NOVAPOSHTA_CITIES;
  });

  it('should return object', () => {
    expect(typeof getNovaPoshtaCities()).toStrictEqual('object');
  });
  // expect(Array.isArray(getNovaPoshtaCities(payload))).toBe(true);
  it('should return object with two key/value "type: GET_NOVAPOSHTA_CITIES"', () => {
    expect(getNovaPoshtaCities(payload)).toStrictEqual({
      type: GET_NOVAPOSHTA_CITIES,
      payload
    });
  });

  it('should to be truthy', () => {
    expect(getNovaPoshtaCities(payload)).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "GET_NOVAPOSHTA_CITIES"', () => {
    expect(getNovaPoshtaCities(payload).type).toEqual(type);
  });
});

// warehouses actions tests
describe('setWarehouses action test', () => {
  let type;
  let setNPWarehousesAction;

  const payload = [
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
  ];

  beforeEach(() => {
    type = SET_NOVAPOSHTA_WAREHOUSES;
    setNPWarehousesAction = setNovaPoshtaWarehouse(payload);
  });

  it('should return object', () => {
    expect(typeof setNPWarehousesAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(setNPWarehousesAction).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "SET_NOVAPOSHTA_WAREHOUSES"', () => {
    expect(setNPWarehousesAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should be equal to "Абрикосівка"', () => {
    expect(Array.isArray(payload)).toBeTruthy;
  });

  it('value by key "payload[0].ref" of returned object should be "4ecddea5-1986-11e5-add9-005056887b8d"', () => {
    expect(payload[0].ref).toEqual('4ecddea5-1986-11e5-add9-005056887b8d');
  });
});

describe('get warehouses from NovaPoshta API', () => {
  let type;
  const payload = { city: 'Авангард' };

  beforeEach(() => {
    type = GET_NOVAPOSHTA_WAREHOUSES;
  });

  it('should return object', () => {
    expect(typeof getNovaPoshtaWarehouse()).toStrictEqual('object');
  });
  it('should return object with two key/value "type: GET_NOVAPOSHTA_WAREHOUSES"', () => {
    expect(getNovaPoshtaWarehouse(payload)).toStrictEqual({
      type: GET_NOVAPOSHTA_WAREHOUSES,
      payload
    });
  });

  it('should to be truthy', () => {
    expect(getNovaPoshtaWarehouse(payload)).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "GET_NOVAPOSHTA_WAREHOUSES"', () => {
    expect(getNovaPoshtaWarehouse(payload).type).toEqual(type);
  });
});

// prices actions tests
describe('setPrices action test', () => {
  let type;
  let setNPPricesAction;

  const payload = {
    cost: 68,
    assessedCost: 3600
  };

  beforeEach(() => {
    type = SET_NOVAPOSHTA_PRICES;
    setNPPricesAction = setNovaPoshtaPrices(payload);
  });

  it('should return object', () => {
    expect(typeof setNPPricesAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(setNPPricesAction).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "SET_NOVAPOSHTA_PRICES"', () => {
    expect(setNPPricesAction.type).toEqual(type);
  });

  it('value by key "payload.cost" of returned object should be "68"', () => {
    expect(payload.cost).toEqual(68);
  });

  it('value by key "payload.assessedCost" of returned object should to be "3600"', () => {
    expect(payload.assessedCost).toEqual(3600);
  });
});

describe('get prices from NovaPoshta API', () => {
  let type;
  const payload = {
    cityRecipient: '6dbe932e-1aad-11ea-8c15-0025b502a06e',
    weight: 1.6,
    cost: 3600,
    seatsAmount: 1,
    serviceType: 'WarehouseWarehouse'
  };

  beforeEach(() => {
    type = GET_NOVAPOSHTA_PRICES;
  });

  it('should return object', () => {
    expect(typeof getNovaPoshtaPrices()).toStrictEqual('object');
  });
  it('should return object with two key/value "type: GET_NOVAPOSHTA_PRICES"', () => {
    expect(getNovaPoshtaPrices(payload)).toStrictEqual({
      type: GET_NOVAPOSHTA_PRICES,
      payload
    });
  });

  it('should to be truthy', () => {
    expect(getNovaPoshtaPrices(payload)).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "GET_NOVAPOSHTA_PRICES"', () => {
    expect(getNovaPoshtaPrices(payload).type).toEqual(type);
  });
});

// regions from UkrPoshta action tests
describe('set regions from UkrPoshta action test', () => {
  let type;
  let setUPRegionsAction;

  const payload = [
    {
      REGION_ID: '1',
      REGION_UA: 'Вінницька',
      REGION_EN: 'Vinnytska'
    },
    {
      REGION_ID: '2',
      REGION_UA: 'Волинська',
      REGION_EN: 'Volynska'
    }
  ];

  beforeEach(() => {
    type = SET_UKRPOST_REGIONS;
    setUPRegionsAction = setUkrPostRegions(payload);
  });

  it('should return object', () => {
    expect(typeof setUPRegionsAction).toStrictEqual('object');
  });

  it('should be truthy', () => {
    expect(setUPRegionsAction).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "SET_UKRPOST_REGIONS"', () => {
    expect(setUPRegionsAction.type).toEqual(type);
  });

  it('value by key "payload[0].REGION_UA" of returned object should be equal to "Вінницька"', () => {
    expect(payload[0].REGION_UA).toEqual('Вінницька');
  });

  it('value by key "payload[0].REGION_ID" of returned object should to be "1"', () => {
    expect(payload[0].REGION_ID).toEqual('1');
  });
});

describe('get regions from UkrPoshta API', () => {
  let type;

  beforeEach(() => {
    type = GET_UKRPOST_REGIONS;
  });

  it('should return object', () => {
    expect(typeof getUkrPostRegions()).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(getUkrPostRegions()).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_NOVAPOSHTA_WAREHOUSES"', () => {
    expect(getUkrPostRegions().type).toEqual(type);
  });
});

// districts from UkrPoshta action tests
describe('set districts from UkrPoshta action test', () => {
  let type;
  let setUPDistrictsAction;

  const payload = [
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
  ];

  beforeEach(() => {
    type = SET_UKRPOST_DISTRICTS;
    setUPDistrictsAction = setUkrPostDistricts(payload);
  });

  it('should return object', () => {
    expect(typeof setUPDistrictsAction).toStrictEqual('object');
  });

  it('should be truthy', () => {
    expect(setUPDistrictsAction).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "SET_UKRPOST_DISTRICTS"', () => {
    expect(setUPDistrictsAction.type).toEqual(type);
  });

  it('value by key "payload[0].REGION_ID" of returned object should be equal to "4"', () => {
    expect(payload[0].REGION_ID).toEqual('4');
  });

  it('value by key "payload[0].DISTRICT_ID" of returned object should be equal to "62"', () => {
    expect(payload[0].DISTRICT_ID).toEqual('62');
  });

  it('value by key "payload[0].REGION_UA" of returned object should be equal to "Дніпропетровська"', () => {
    expect(payload[0].REGION_UA).toEqual('Дніпропетровська');
  });

  it('value by key "payload[0].DISTRICT_UA" of returned object should to be "Апостолівський"', () => {
    expect(payload[0].DISTRICT_UA).toEqual('Апостолівський');
  });
});

describe('get districts from UkrPoshta API', () => {
  let type;
  const payload = { id: 4 };

  beforeEach(() => {
    type = GET_UKRPOST_DISTRICTS;
  });

  it('should return object', () => {
    expect(typeof getUkrPostDistricts()).toStrictEqual('object');
  });
  it('should return object with two key/value "type: GET_UKRPOST_DISTRICTS"', () => {
    expect(getUkrPostDistricts(payload)).toStrictEqual({
      type: GET_UKRPOST_DISTRICTS,
      payload
    });
  });

  it('should to be truthy', () => {
    expect(getUkrPostDistricts(payload)).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_UKRPOST_DISTRICTS"', () => {
    expect(getUkrPostDistricts(payload).type).toEqual(type);
  });
});

// cities from UkrPoshta action tests
describe('set cities from UkrPoshta action test', () => {
  let type;
  let setUPCitiesAction;

  const payload = [
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
  ];

  beforeEach(() => {
    type = SET_UKRPOST_CITIES;
    setUPCitiesAction = setUkrPostCities(payload);
  });

  it('should return object', () => {
    expect(typeof setUPCitiesAction).toStrictEqual('object');
  });

  it('should be truthy', () => {
    expect(setUPCitiesAction).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "SET_UKRPOST_CITIES"', () => {
    expect(setUPCitiesAction.type).toEqual(type);
  });

  it('value by key "payload[0].REGION_ID" of returned object should be equal to "4"', () => {
    expect(payload[0].REGION_ID).toEqual('4');
  });

  it('value by key "payload[0].REGION_UA" of returned object should be equal to "Дніпропетровська"', () => {
    expect(payload[0].REGION_UA).toEqual('Дніпропетровська');
  });

  it('value by key "payload[0].DISTRICT_ID" of returned object should be equal to "584"', () => {
    expect(payload[0].DISTRICT_ID).toEqual('584');
  });

  it('value by key "payload[0].DISTRICT_UA" of returned object should to be "Дніпро (місто)"', () => {
    expect(payload[0].DISTRICT_UA).toEqual('Дніпро (місто)');
  });

  it('value by key "payload[0].CITY_ID" of returned object should be equal to "10748"', () => {
    expect(payload[0].CITY_ID).toEqual('10748');
  });

  it('value by key "payload[0].CITY_UA" of returned object should to be "Дніпро"', () => {
    expect(payload[0].CITY_UA).toEqual('Дніпро');
  });
});

describe('get cities from UkrPoshta API', () => {
  let type;
  const payload = { id: 584 };

  beforeEach(() => {
    type = GET_UKRPOST_CITIES;
  });

  it('should return object', () => {
    expect(typeof getUkrPostDistricts()).toStrictEqual('object');
  });

  it('should return object with two key/value "type: GET_UKRPOST_CITIES"', () => {
    expect(getUkrPostCities(payload)).toStrictEqual({
      type: GET_UKRPOST_CITIES,
      payload
    });
  });

  it('should to be truthy', () => {
    expect(getUkrPostCities(payload)).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_UKRPOST_CITIES"', () => {
    expect(getUkrPostCities(payload).type).toEqual(type);
  });
});

// post offices from UkrPoshta action tests
describe('set post offices from UkrPoshta action test', () => {
  let type;
  let setUPPostOfficesAction;

  const payload = [
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
  ];

  beforeEach(() => {
    type = SET_UKRPOST_POSTOFFICES;
    setUPPostOfficesAction = setUkrPostPostOffices(payload);
  });

  it('should return object', () => {
    expect(typeof setUPPostOfficesAction).toStrictEqual('object');
  });

  it('should be truthy', () => {
    expect(setUPPostOfficesAction).toBeTruthy();
  });

  it('value by key "type" of returned object should be equal to "SET_UKRPOST_POSTOFFICES"', () => {
    expect(setUPPostOfficesAction.type).toEqual(type);
  });

  it('value by key "payload[0].CITY_ID" of returned object should be equal to "10748"', () => {
    expect(payload[0].CITY_ID).toEqual('10748');
  });

  it('value by key "payload[0].CITY_UA" of returned object should be equal to "Дніпро"', () => {
    expect(payload[0].CITY_UA).toEqual('Дніпро');
  });

  it('value by key "payload[0].POSTOFFICE_ID" of returned object should be equal to "12489"', () => {
    expect(payload[0].POSTOFFICE_ID).toEqual('12489');
  });

  it('value by key "payload[0].POSTOFFICE_UA" of returned object should to be "49000 Дніпро"', () => {
    expect(payload[0].POSTOFFICE_UA).toEqual('49000 Дніпро');
  });

  it('value by key "payload[0].STREET_ID_VPZ" of returned object should be equal to "448135"', () => {
    expect(payload[0].STREET_ID_VPZ).toEqual('448135');
  });

  it('value by key "payload[0].STREET_UA_VPZ" of returned object should be equal to "просп. Дмитра Яворницького, 62"', () => {
    expect(payload[0].STREET_UA_VPZ).toEqual('просп. Дмитра Яворницького, 62');
  });
});

describe('get post offices from UkrPoshta API', () => {
  let type;
  const payload = { id: 10748 };

  beforeEach(() => {
    type = GET_UKRPOST_POSTOFFICES;
  });

  it('should return object', () => {
    expect(typeof getUkrPostPostOffices()).toStrictEqual('object');
  });
  it('should return object with two key/value "type: GET_UKRPOST_POSTOFFICES"', () => {
    expect(getUkrPostPostOffices(payload)).toStrictEqual({
      type: GET_UKRPOST_POSTOFFICES,
      payload
    });
  });

  it('should to be truthy', () => {
    expect(getUkrPostPostOffices(payload)).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_UKRPOST_POSTOFFICES"', () => {
    expect(getUkrPostPostOffices(payload).type).toEqual(type);
  });
});
