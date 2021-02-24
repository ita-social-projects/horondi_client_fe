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

export { fakeNPWarehouses, fakeNPPrices, fakeNPCities };
