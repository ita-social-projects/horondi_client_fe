import {
  getNovaPoshtaCities,
  setNovaPoshtaCities,
  getNovaPoshtaWarehouse,
  setNovaPoshtaWarehouse,
  setNovaPoshtaStreets,
  getNovaPoshtaStreets,
  setNovaPoshtaPrices,
  getNovaPoshtaPrices
} from '../checkout.actions';
import {
  SET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_CITIES,
  GET_NOVAPOSHTA_WAREHOUSES,
  SET_NOVAPOSHTA_WAREHOUSES,
  GET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_STREETS,
  SET_NOVAPOSHTA_PRICES,
  GET_NOVAPOSHTA_PRICES
} from '../checkout.types';

// streets actions tests
describe('setStreets action test', () => {
  let type;
  let setNPStreetsAction;

  const payload = {
    cityRef: 'c4302938-f428-11e9-91ff-0025b501a04b',
    street: 'Івана Франка'
  };
  beforeEach(() => {
    type = SET_NOVAPOSHTA_STREETS;
    setNPStreetsAction = setNovaPoshtaStreets(payload);
  });

  it('should return object', () => {
    expect(typeof setNPStreetsAction).toStrictEqual('object');
  });

  it('should to be truthy', () => {
    expect(setNPStreetsAction).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_NOVAPOSHTA_STREETS"', () => {
    expect(setNPStreetsAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should to be "Івана Франка"', () => {
    expect(payload.street).toEqual('Івана Франка');
  });

  it('value by key "payload.street" of returned object should to be "Івана Франка"', () => {
    const expectation = {
      description: 'Івана Франка',
      ref: '5ae6c214-021f-11ea-91ff-0025b501a04b',
      streetsTypeRef: 'Street',
      streetsType: 'вул.'
    };
    setNPStreetsAction = setNovaPoshtaStreets(expectation);
    expect(payload.street).toEqual('Івана Франка');
  });
});

describe('get streets from NovaPoshta API', () => {
  let type;
  const payload = {
    cityRef: 'c4302938-f428-11e9-91ff-0025b501a04b',
    street: 'Івана Франка'
  };

  beforeEach(() => {
    type = GET_NOVAPOSHTA_STREETS;
  });

  it('should return object', () => {
    expect(typeof getNovaPoshtaStreets()).toStrictEqual('object');
  });

  it('should return object with two key/value "type: GET_NOVAPOSHTA_STREETS"', () => {
    expect(getNovaPoshtaStreets(payload)).toStrictEqual({
      type: GET_NOVAPOSHTA_STREETS,
      payload
    });
  });

  it('should to be truthy', () => {
    expect(getNovaPoshtaStreets()).toBeTruthy();
  });

  it('value by key "type" of returned object should to be equal to "GET_NOVAPOSHTA_STREETS"', () => {
    expect(getNovaPoshtaStreets().type).toEqual(type);
  });
});

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

  it('value by key "type" of returned object should to be equal to "SET_NOVAPOSHTA_CITIES"', () => {
    expect(setNPCitiesAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should to be "Абрикосівка"', () => {
    expect(payload.description).toEqual('Абрикосівка');
  });

  it('value by key "payload.ref" of returned object should to be "6dbe932e-1aad-11ea-8c15-0025b502a06e"', () => {
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

  it('value by key "type" of returned object should to be equal to "GET_NOVAPOSHTA_CITIES"', () => {
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

  it('value by key "type" of returned object should to be equal to "SET_NOVAPOSHTA_WAREHOUSES"', () => {
    expect(setNPWarehousesAction.type).toEqual(type);
  });

  it('value by key "payload.name" of returned object should to be "Абрикосівка"', () => {
    expect(Array.isArray(payload)).toBeTruthy;
  });

  it('value by key "payload[0].ref" of returned object should to be "4ecddea5-1986-11e5-add9-005056887b8d"', () => {
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

  it('value by key "type" of returned object should to be equal to "GET_NOVAPOSHTA_WAREHOUSES"', () => {
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

  it('value by key "type" of returned object should to be equal to "SET_NOVAPOSHTA_PRICES"', () => {
    expect(setNPPricesAction.type).toEqual(type);
  });

  it('value by key "payload.cost" of returned object should to be "68"', () => {
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

  it('value by key "type" of returned object should to be equal to "GET_NOVAPOSHTA_PRICES"', () => {
    expect(getNovaPoshtaPrices(payload).type).toEqual(type);
  });
});
