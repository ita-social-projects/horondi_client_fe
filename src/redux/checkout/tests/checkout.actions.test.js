import {
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
  GET_UKRPOST_CITIES,
  GET_UKRPOST_DISTRICTS,
  GET_UKRPOST_POSTOFFICES,
  GET_UKRPOST_REGIONS,
  SET_UKRPOST_CITIES,
  SET_UKRPOST_DISTRICTS,
  SET_UKRPOST_POSTOFFICES,
  SET_UKRPOST_REGIONS
} from '../checkout.types';

import {
  fakeUkrPostRegions,
  fakeUkrPostDistricts,
  fakeUkrPostCities,
  fakeUkrPostOffices
} from './checkout.variables';

describe('set regions from UkrPoshta action test', () => {
  let type;
  let setUPRegionsAction;

  const payload = fakeUkrPostRegions.data.getUkrPoshtaRegions;

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

describe('set districts from UkrPoshta action test', () => {
  let type;
  let setUPDistrictsAction;

  const payload = fakeUkrPostDistricts.data.getUkrPoshtaDistrictsByRegionId;

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

describe('set cities from UkrPoshta action test', () => {
  let type;
  let setUPCitiesAction;

  const payload = fakeUkrPostCities.data.getUkrPoshtaCitiesByDistrictId;

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

describe('set post offices from UkrPoshta action test', () => {
  let type;
  let setUPPostOfficesAction;

  const payload = fakeUkrPostOffices.data.getUkrPoshtaPostofficesCityId;

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
