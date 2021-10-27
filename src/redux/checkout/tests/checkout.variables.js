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

export { fakeUkrPostRegions, fakeUkrPostDistricts, fakeUkrPostCities, fakeUkrPostOffices };
