const fakeNPCities = {
  data: {
    getNovaPoshtaCities: [
      {
        description: 'Львів',
        ref: 'db5c88f5-391c-11dd-90d9-001a92567626'
      },
      {
        description: 'Львівське',
        ref: '90a1d47c-a7a5-11e9-b73a-005056b24375'
      }
    ]
  }
};

const fakeNPPrices = {
  data: {
    getNovaPoshtaPrices: [
      {
        cost: 68,
        assessedCost: 3600
      }
    ]
  }
};

const fakeNPWarehouses = {
  data: {
    getNovaPoshtaWarehouses: [
      {
        description: 'Відділення №1: вул. Аеродром, буд.10,прим.91',
        ref: 'd30a9688-7404-11e5-8d8d-005056887b8d',
        shortAddress: 'Авіаторське, Аеродром, буд.10,прим.91',
        schedule: {
          monday: '09:00-19:00',
          saturday: '09:00-17:00',
          sunday: '11:00-17:00'
        }
      }
    ]
  }
};

const fakeUkrPostRegions = {
  data: {
    getUkrPoshtaRegions: [
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
  }
};

const fakeUkrPostDistricts = {
  data: {
    getUkrPoshtaDistrictsByRegionId: [
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
  }
};

const fakeUkrPostCities = {
  data: {
    getUkrPoshtaCitiesByDistrictId: [
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
  }
};

const fakeUkrPostOffices = {
  data: {
    getUkrPoshtaPostofficesCityId: [
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
  }
};

export {
  fakeNPWarehouses,
  fakeNPPrices,
  fakeNPCities,
  fakeUkrPostRegions,
  fakeUkrPostDistricts,
  fakeUkrPostCities,
  fakeUkrPostOffices
};
